import { NextResponse } from "next/server";
import { validateDigitalCardPayment } from "@/lib/digital-card-payment";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (typeof body.paymentToken !== "string") return NextResponse.json({ error: "Payment proof is required." }, { status: 400 });
    return NextResponse.json({ payment: await validateDigitalCardPayment(body.paymentToken) });
  } catch (error) {
    console.error("digital-card-verify", error);
    return NextResponse.json({ error: "A completed Digital Card payment could not be verified." }, { status: 403 });
  }
}
