import { aiContentSystemResponse } from "@/lib/ai-content-system-social";

export const runtime = "nodejs";

export async function GET() {
  return aiContentSystemResponse("en", "https://www.nextstudio.agency/ec/en/ai-content-system");
}
