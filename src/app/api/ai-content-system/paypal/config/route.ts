import { NextResponse } from "next/server";
import { getAIContentSystemPayPalConfig } from "@/lib/ai-content-system-payment";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(getAIContentSystemPayPalConfig());
  } catch {
    return NextResponse.json({ error: "PayPal checkout is not configured." }, { status: 503 });
  }
}
