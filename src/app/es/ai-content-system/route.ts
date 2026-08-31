import { aiContentSystemResponse } from "@/lib/ai-content-system-social";

export const runtime = "nodejs";

export async function GET() {
  return aiContentSystemResponse("es", "https://www.nextstudio.agency/es/ai-content-system");
}
