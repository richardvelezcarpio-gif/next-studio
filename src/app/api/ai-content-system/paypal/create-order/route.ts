import { NextResponse } from "next/server";
import { createAIContentSystemOrder } from "@/lib/ai-content-system-payment";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (typeof body.planId !== "string") return NextResponse.json({ error: "A valid plan is required." }, { status: 400 });
    return NextResponse.json({ id: await createAIContentSystemOrder(body.planId) });
  } catch {
    return NextResponse.json({ error: "The PayPal order could not be created." }, { status: 502 });
  }
}
