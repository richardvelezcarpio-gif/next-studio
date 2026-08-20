import { NextResponse } from "next/server";
import { createDigitalCardOrder } from "@/lib/digital-card-payment";

export const runtime = "nodejs";

export async function POST() {
  try {
    return NextResponse.json({ orderId: await createDigitalCardOrder() });
  } catch (error) {
    console.error("digital-card-order", error);
    return NextResponse.json({ error: "The PayPal order could not be created." }, { status: 502 });
  }
}
