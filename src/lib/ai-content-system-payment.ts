import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

export const AI_CONTENT_SYSTEM_CURRENCY = "USD";

export const AI_CONTENT_SYSTEM_PLANS = {
  "starter-7": { name: "Starter 7", posts: 21, amount: "20.00" },
  "growth-15": { name: "Growth 15", posts: 45, amount: "35.00" },
  "pro-30": { name: "Pro 30", posts: 90, amount: "55.00" },
} as const;

export type AIContentSystemPlanId = keyof typeof AI_CONTENT_SYSTEM_PLANS;

type PayPalAmount = { currency_code?: string; value?: string };
type PayPalCapture = { id?: string; status?: string; amount?: PayPalAmount };
type PayPalOrder = {
  id?: string;
  status?: string;
  purchase_units?: Array<{
    custom_id?: string;
    amount?: PayPalAmount;
    payments?: { captures?: PayPalCapture[] };
  }>;
};

export type AIContentSystemPayment = {
  orderId: string;
  captureId: string;
  status: "COMPLETED";
  planId: AIContentSystemPlanId;
  planName: string;
  posts: number;
  amount: string;
  currency: typeof AI_CONTENT_SYSTEM_CURRENCY;
};

function config() {
  const clientId = process.env.AI_CONTENT_PAYPAL_CLIENT_ID?.trim();
  const clientSecret = process.env.AI_CONTENT_PAYPAL_CLIENT_SECRET?.trim();
  const mode = process.env.AI_CONTENT_PAYPAL_ENV?.toLowerCase() === "live" ? "live" : "sandbox";
  if (!clientId || !clientSecret) throw new Error("PayPal is not configured");
  return {
    clientId,
    clientSecret,
    mode,
    baseUrl: mode === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com",
  } as const;
}

export function getAIContentSystemPayPalConfig() {
  const { clientId, mode } = config();
  return { clientId, mode, currency: AI_CONTENT_SYSTEM_CURRENCY };
}

function getPlan(planId: string) {
  if (!(planId in AI_CONTENT_SYSTEM_PLANS)) throw new Error("Invalid plan ID");
  return AI_CONTENT_SYSTEM_PLANS[planId as AIContentSystemPlanId];
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
  const body = (await response.json()) as { access_token?: string };
  if (!response.ok || !body.access_token) throw new Error("PayPal authentication failed");
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
  const body = (await response.json().catch(() => ({}))) as T;
  if (!response.ok) throw new Error(`PayPal request failed (${response.status})`);
  return body;
}

export async function createAIContentSystemOrder(planId: string) {
  const plan = getPlan(planId);
  const order = await paypal<PayPalOrder>("/v2/checkout/orders", {
    method: "POST",
    headers: { "PayPal-Request-Id": `ai-content-${planId}-${crypto.randomUUID()}` },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [{
        description: `Next Studio AI Content System — ${plan.name}`,
        custom_id: planId,
        amount: { currency_code: AI_CONTENT_SYSTEM_CURRENCY, value: plan.amount },
      }],
    }),
  });
  if (!order.id) throw new Error("PayPal did not return an order ID");
  return order.id;
}

function verifiedPayment(order: PayPalOrder): AIContentSystemPayment {
  const unit = order.purchase_units?.[0];
  const planId = unit?.custom_id;
  if (!planId || !(planId in AI_CONTENT_SYSTEM_PLANS)) throw new Error("Unknown PayPal plan");
  const typedPlanId = planId as AIContentSystemPlanId;
  const plan = AI_CONTENT_SYSTEM_PLANS[typedPlanId];
  const capture = unit?.payments?.captures?.find((item) => item.status === "COMPLETED");
  if (
    order.status !== "COMPLETED" ||
    !order.id ||
    !capture?.id ||
    unit?.amount?.currency_code !== AI_CONTENT_SYSTEM_CURRENCY ||
    unit.amount.value !== plan.amount ||
    capture.amount?.currency_code !== AI_CONTENT_SYSTEM_CURRENCY ||
    capture.amount.value !== plan.amount
  ) throw new Error("PayPal payment details do not match the selected plan");
  return {
    orderId: order.id,
    captureId: capture.id,
    status: "COMPLETED",
    planId: typedPlanId,
    planName: plan.name,
    posts: plan.posts,
    amount: plan.amount,
    currency: AI_CONTENT_SYSTEM_CURRENCY,
  };
}

export async function captureAIContentSystemOrder(orderId: string) {
  if (!/^[A-Z0-9]+$/i.test(orderId)) throw new Error("Invalid PayPal order ID");
  const path = `/v2/checkout/orders/${encodeURIComponent(orderId)}`;
  const existing = await paypal<PayPalOrder>(path);
  if (existing.status === "COMPLETED") return verifiedPayment(existing);
  try {
    const captured = await paypal<PayPalOrder>(`${path}/capture`, {
      method: "POST",
      headers: { "PayPal-Request-Id": `ai-content-capture-${orderId}` },
    });
    return verifiedPayment(captured);
  } catch {
    return verifiedPayment(await paypal<PayPalOrder>(path));
  }
}

export function createAIContentSystemPaymentProof(payment: AIContentSystemPayment) {
  const secret = process.env.AI_CONTENT_PAYPAL_CLIENT_SECRET?.trim();
  if (!secret) throw new Error("PayPal is not configured");
  const payload = Buffer.from(JSON.stringify({ ...payment, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 })).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function readAIContentSystemPaymentProof(token: string) {
  const secret = process.env.AI_CONTENT_PAYPAL_CLIENT_SECRET?.trim();
  if (!secret) throw new Error("PayPal is not configured");
  const [payload, supplied] = token.split(".");
  if (!payload || !supplied) throw new Error("Invalid payment proof");
  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new Error("Invalid payment proof");
  const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AIContentSystemPayment & { exp?: number };
  if (!decoded.exp || decoded.exp < Math.floor(Date.now() / 1000)) throw new Error("Payment proof expired");
  return decoded;
}

export async function validateAIContentSystemPayment(token: string) {
  const proof = readAIContentSystemPaymentProof(token);
  if (!/^[A-Z0-9]+$/i.test(proof.orderId)) throw new Error("Invalid PayPal order ID");
  const order = await paypal<PayPalOrder>(`/v2/checkout/orders/${encodeURIComponent(proof.orderId)}`);
  const payment = verifiedPayment(order);
  if (
    payment.captureId !== proof.captureId ||
    payment.planId !== proof.planId ||
    payment.amount !== proof.amount ||
    payment.currency !== proof.currency
  ) throw new Error("Payment reference mismatch");
  return payment;
}
