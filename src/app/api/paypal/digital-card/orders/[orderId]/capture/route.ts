import { NextResponse } from "next/server";
import { captureDigitalCardOrder, createPaymentProof } from "@/lib/digital-card-payment";

export const runtime = "nodejs";

export async function POST(_request: Request, context: RouteContext<"/api/paypal/digital-card/orders/[orderId]/capture">) {
  try {
    const { orderId } = await context.params;
    const payment = await captureDigitalCardOrder(orderId);
    return NextResponse.json({ payment, paymentToken: createPaymentProof(payment) });
  } catch (error) {
    console.error("digital-card-capture", error);
    return NextResponse.json({ error: "The PayPal payment could not be verified." }, { status: 502 });
  }
}
