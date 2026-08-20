import { NextResponse } from "next/server";
import { DIGITAL_CARD_AMOUNT, DIGITAL_CARD_CURRENCY, getPayPalPublicConfig } from "@/lib/digital-card-payment";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ ...getPayPalPublicConfig(), amount: DIGITAL_CARD_AMOUNT, currency: DIGITAL_CARD_CURRENCY });
  } catch {
    return NextResponse.json({ error: "PayPal checkout is not configured." }, { status: 503 });
  }
}
