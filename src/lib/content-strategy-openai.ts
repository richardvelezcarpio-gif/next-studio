const RESPONSES_URL = "https://api.openai.com/v1/responses";

export function cleanText(value: unknown, max: number) {
  return typeof value === "string" && value.trim() && value.trim().length <= max ? value.trim() : null;
}

function outputText(response: unknown) {
  if (!response || typeof response !== "object") return "";
  const data = response as { output_text?: unknown; output?: Array<{ content?: Array<{ type?: string; text?: unknown }> }> };
  if (typeof data.output_text === "string") return data.output_text;
  for (const item of data.output ?? []) for (const content of item.content ?? []) if (content.type === "output_text" && typeof content.text === "string") return content.text;
  return "";
}

export async function structuredResponse({ scope, instructions, input, schema, name }: { scope: string; instructions: string; input: string; schema: object; name: string }) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-5-mini";
  if (!apiKey) return { status: 503, error: "service_unavailable" } as const;
  try {
    const response = await fetch(RESPONSES_URL, { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ model, store: false, instructions, input, text: { format: { type: "json_schema", name, strict: true, schema } } }), cache: "no-store" });
    const payload: unknown = await response.json().catch(() => null);
    if (!response.ok) { console.error(`[${scope}] OpenAI request failed`, { status: response.status, model }); return { status: [400, 401, 403, 404, 429].includes(response.status) ? response.status : 502, error: "generation_failed" } as const; }
    const raw = outputText(payload);
    if (!raw) return { status: 502, error: "generation_failed" } as const;
    try { return { status: 200, data: JSON.parse(raw) as unknown } as const; } catch { return { status: 502, error: "generation_failed" } as const; }
  } catch (error) { console.error(`[${scope}] OpenAI connection failed`, { model, type: error instanceof Error ? error.name : "Error" }); return { status: 502, error: "generation_failed" } as const; }
}

export const noStoreJson = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
