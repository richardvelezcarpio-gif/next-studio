import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { validateAIContentSystemPayment } from "@/lib/ai-content-system-payment";

export const runtime = "nodejs";

const recipient = "nextprintny@gmail.com";
const inFlight = new Map<string, Promise<string>>();
const sent = new Map<string, string>();

const text = (value: unknown, limit = 4_000) =>
  typeof value === "string" ? value.replace(/[<>]/g, "").trim().slice(0, limit) : "";

const html = (value: unknown) =>
  text(value).replace(/&/g, "&amp;").replace(/\n/g, "<br>");

function row(label: string, value: unknown) {
  return `<tr><td style="padding:7px 12px 7px 0"><strong>${label}</strong></td><td style="padding:7px 0">${html(value) || "—"}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (typeof body.paymentToken !== "string") {
      return NextResponse.json({ error: "A completed payment is required." }, { status: 403 });
    }
    const payment = await validateAIContentSystemPayment(body.paymentToken);
    const data = {
      name: text(body.name, 160),
      business: text(body.business, 200),
      email: text(body.email, 254).toLowerCase(),
      phone: text(body.phone, 80),
      industry: text(body.industry, 160),
      location: text(body.location, 200),
      socials: text(body.socials, 1_500),
      goal: text(body.goal, 2_000),
      offer: text(body.offer, 2_000),
      notes: text(body.notes, 4_000),
    };
    if (!data.name || !data.business || !data.industry || !data.goal || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPassword = process.env.GMAIL_APP_PASSWORD?.trim();
    if (!gmailUser || !gmailPassword) throw new Error("Gmail SMTP is not configured");

    const key = `${payment.orderId}:${payment.captureId}`;
    const previous = sent.get(key);
    if (previous) return NextResponse.json({ ok: true, submissionId: previous, duplicate: true });

    let delivery = inFlight.get(key);
    if (!delivery) {
      delivery = (async () => {
        const submissionId = `ACS-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${payment.orderId.slice(-6).toUpperCase()}`;
        const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/New_York", timeZoneName: "short" });
        const message = `<div style="font-family:Arial,sans-serif;color:#082851;max-width:760px"><p style="color:#0768e8;font-weight:800;letter-spacing:.08em">PAID AI CONTENT SYSTEM ORDER</p><h1>${html(data.name)}</h1><table>${row("Client name", data.name)}${row("Client email", data.email)}${row("Phone / WhatsApp", data.phone)}${row("Business name", data.business)}${row("Business type", data.industry)}${row("Website / location", data.location)}${row("Social media", data.socials)}${row("Content goal", data.goal)}${row("Main offer", data.offer)}${row("Additional notes", data.notes)}${row("Plan", payment.planName)}${row("Plan ID", payment.planId)}${row("Number of posts", String(payment.posts))}${row("Price paid", `$${payment.amount}`)}${row("Currency", payment.currency)}${row("Payment status", payment.status)}${row("PayPal Order ID", payment.orderId)}${row("PayPal Capture ID", payment.captureId)}${row("Date / time", submittedAt)}${row("Submission ID", submissionId)}</table></div>`;
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: gmailUser, pass: gmailPassword },
        });
        await transporter.sendMail({
          from: gmailUser,
          to: recipient,
          replyTo: data.email,
          subject: `NEW AI CONTENT SYSTEM ORDER — ${payment.planName.toUpperCase()} — ${data.name}`,
          html: message,
          messageId: `<ai-content-system-${payment.captureId.toLowerCase()}@nextstudio.agency>`,
        });
        sent.set(key, submissionId);
        if (sent.size > 1_000) sent.delete(sent.keys().next().value as string);
        return submissionId;
      })();
      inFlight.set(key, delivery);
    }

    try {
      return NextResponse.json({ ok: true, submissionId: await delivery });
    } finally {
      inFlight.delete(key);
    }
  } catch {
    return NextResponse.json({ error: "We could not send your information. Please try again without paying again." }, { status: 500 });
  }
}
