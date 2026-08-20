import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

export const DIGITAL_CARD_AMOUNT = "130.00";
export const DIGITAL_CARD_CURRENCY = "USD";
const proofLifetimeSeconds = 60 * 60 * 24;

type PayPalAmount = { currency_code?: string; value?: string };
type PayPalCapture = { id?: string; status?: string; amount?: PayPalAmount };
type PayPalOrder = {
  id?: string;
  status?: string;
  purchase_units?: Array<{
    amount?: PayPalAmount;
    payments?: { captures?: PayPalCapture[] };
  }>;
};

export type DigitalCardPayment = {
  orderId: string;
  captureId: string;
  status: "COMPLETED";
  amount: typeof DIGITAL_CARD_AMOUNT;
  currency: typeof DIGITAL_CARD_CURRENCY;
};

function config() {
  const clientId = process.env.PAYPAL_CLIENT_ID?.trim();
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET?.trim();
  const mode = process.env.PAYPAL_ENV?.toLowerCase() === "live" ? "live" : "sandbox";
  if (!clientId || !clientSecret) throw new Error("PayPal is not configured");
  return {
    clientId,
    clientSecret,
    mode,
    baseUrl: mode === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com",
  } as const;
}

export function getPayPalPublicConfig() {
  const { clientId, mode } = config();
  return { clientId, mode };
}

async function accessToken() {
  const { clientId, clientSecret, baseUrl } = config();
  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  const body = (await response.json()) as { access_token?: string; error_description?: string };
  if (!response.ok || !body.access_token) throw new Error(body.error_description || "PayPal authentication failed");
  return body.access_token;
}

async function paypal<T>(path: string, init: RequestInit = {}) {
  const { baseUrl } = config();
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
  const body = (await response.json().catch(() => ({}))) as T & { message?: string };
  if (!response.ok) throw new Error(body.message || `PayPal request failed (${response.status})`);
  return body;
}

export async function createDigitalCardOrder() {
  const order = await paypal<PayPalOrder>("/v2/checkout/orders", {
    method: "POST",
    headers: { "PayPal-Request-Id": `digital-card-${crypto.randomUUID()}` },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [{
        description: "Next Studio Digital Business Card",
        custom_id: "next-studio-digital-card",
        amount: { currency_code: DIGITAL_CARD_CURRENCY, value: DIGITAL_CARD_AMOUNT },
      }],
    }),
  });
  if (!order.id) throw new Error("PayPal did not return an order ID");
  return order.id;
}

function verifiedPayment(order: PayPalOrder): DigitalCardPayment {
  const capture = order.purchase_units?.flatMap((unit) => unit.payments?.captures ?? [])
    .find((item) => item.status === "COMPLETED");
  if (
    order.status !== "COMPLETED" ||
    !order.id ||
    !capture?.id ||
    capture.amount?.currency_code !== DIGITAL_CARD_CURRENCY ||
    capture.amount?.value !== DIGITAL_CARD_AMOUNT
  ) throw new Error("PayPal payment is not a completed $130.00 USD capture");
  return { orderId: order.id, captureId: capture.id, status: "COMPLETED", amount: DIGITAL_CARD_AMOUNT, currency: DIGITAL_CARD_CURRENCY };
}

export async function captureDigitalCardOrder(orderId: string) {
  if (!/^[A-Z0-9]+$/i.test(orderId)) throw new Error("Invalid PayPal order ID");
  const order = await paypal<PayPalOrder>(`/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, {
    method: "POST",
    headers: { "PayPal-Request-Id": `digital-card-capture-${orderId}` },
  });
  return verifiedPayment(order);
}

function proofSecret() {
  const secret = process.env.PAYPAL_CLIENT_SECRET?.trim();
  if (!secret) throw new Error("PayPal is not configured");
  return secret;
}

function signature(payload: string) {
  return createHmac("sha256", proofSecret()).update(payload).digest("base64url");
}

export function createPaymentProof(payment: DigitalCardPayment) {
  const payload = Buffer.from(JSON.stringify({ ...payment, exp: Math.floor(Date.now() / 1000) + proofLifetimeSeconds })).toString("base64url");
  return `${payload}.${signature(payload)}`;
}

function readPaymentProof(token: string) {
  const [payload, supplied] = token.split(".");
  if (!payload || !supplied) throw new Error("Invalid payment proof");
  const expected = signature(payload);
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new Error("Invalid payment proof");
  const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as DigitalCardPayment & { exp?: number };
  if (!decoded.exp || decoded.exp < Math.floor(Date.now() / 1000)) throw new Error("Payment proof expired");
  return decoded;
}

export async function validateDigitalCardPayment(token: string) {
  const proof = readPaymentProof(token);
  if (!/^[A-Z0-9]+$/i.test(proof.orderId)) throw new Error("Invalid PayPal order ID");
  const order = await paypal<PayPalOrder>(`/v2/checkout/orders/${encodeURIComponent(proof.orderId)}`);
  const payment = verifiedPayment(order);
  if (payment.captureId !== proof.captureId) throw new Error("Payment reference mismatch");
  return payment;
}
