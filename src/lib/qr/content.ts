export type QRType = "website" | "whatsapp" | "phone" | "email" | "wifi" | "text" | "location" | "vcard";
export type QRFields = Record<string, string | boolean>;

const cleanPhone = (value: string) => value.replace(/[^\d+]/g, "");
const escapeWifi = (value: string) => value.replace(/([\\;,:\"])/g, "\\$1");
const escapeVcard = (value: string) => value.replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

export function qrContent(type: QRType, fields: QRFields): string | null {
  const value = (key: string) => String(fields[key] ?? "").trim();
  if (type === "website") { const raw = value("url"); if (!raw) return null; return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`; }
  if (type === "whatsapp") { const phone = cleanPhone(`${value("country")}${value("phone")}`).replace(/^\+/, ""); if (!phone) return null; const message = value("message"); return `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`; }
  if (type === "phone") { const phone = cleanPhone(value("phone")); return phone ? `tel:${phone}` : null; }
  if (type === "email") { const email = value("email"); if (!email || !/^\S+@\S+\.\S+$/.test(email)) return null; const params = new URLSearchParams(); if (value("subject")) params.set("subject", value("subject")); if (value("message")) params.set("body", value("message")); return `mailto:${email}${params.toString() ? `?${params}` : ""}`; }
  if (type === "wifi") { const ssid = value("ssid"); if (!ssid) return null; const security = value("security") || "WPA"; const password = value("password"); return `WIFI:T:${security};S:${escapeWifi(ssid)};P:${escapeWifi(password)};H:${fields.hidden ? "true" : "false"};;`; }
  if (type === "text") return value("text") || null;
  if (type === "location") { const lat = Number(value("latitude")); const lng = Number(value("longitude")); return Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? `geo:${lat},${lng}` : null; }
  const first = value("firstName"); if (!first) return null; const last = value("lastName"); return ["BEGIN:VCARD", "VERSION:3.0", `N:${escapeVcard(last)};${escapeVcard(first)};;;`, `FN:${escapeVcard(`${first} ${last}`.trim())}`, value("company") && `ORG:${escapeVcard(value("company"))}`, value("job") && `TITLE:${escapeVcard(value("job"))}`, value("phone") && `TEL;TYPE=CELL:${cleanPhone(value("phone"))}`, value("email") && `EMAIL:${value("email")}`, value("website") && `URL:${value("website")}`, value("address") && `ADR:;;${escapeVcard(value("address"))};${escapeVcard(value("city"))};${escapeVcard(value("state"))};${escapeVcard(value("zip"))};${escapeVcard(value("country"))}`, "END:VCARD"].filter(Boolean).join("\n");
}
