import { NextResponse } from "next/server";
import { captureAIContentSystemOrder, createAIContentSystemPaymentProof } from "@/lib/ai-content-system-payment";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (typeof body.orderId !== "string") return NextResponse.json({ error: "A valid order ID is required." }, { status: 400 });
    const payment = await captureAIContentSystemOrder(body.orderId);
    return NextResponse.json({ ok: true, payment, paymentToken: createAIContentSystemPaymentProof(payment) });
  } catch {
    return NextResponse.json({ error: "The PayPal payment could not be captured or verified." }, { status: 502 });
  }
}
