import { readFile } from "node:fs/promises";
import { join } from "node:path";

type Locale = "es" | "en";

const siteUrl = "https://www.nextstudio.agency";
const imageUrl = `${siteUrl}/images/ai-content-system/ai-content-system-social.jpg`;

const copy = {
  es: {
    title: "AI Content System | Contenido Estratégico para tu Negocio | Next Studio",
    description: "Deja de improvisar qué publicar. Recibe estrategia y contenido listo para atraer, conectar y convertir. 3 posts cada día para hacer crecer tu negocio.",
    alt: "AI Content System de Next Studio: contenido estratégico para hacer crecer tu negocio.",
    locale: "es_US",
  },
  en: {
    title: "AI Content System | Strategic Content for Your Business | Next Studio",
    description: "Stop guessing what to post. Get strategic content designed to attract, connect and convert, with 3 ready-to-publish posts every day.",
    alt: "Next Studio AI Content System: strategic content to grow your business.",
    locale: "en_US",
  },
} as const;

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function aiContentSystemPage(locale: Locale, canonical: string) {
  const source = await readFile(join(process.cwd(), "public", "ai-content-system", "index.html"), "utf8");
  const content = copy[locale];
  const title = escapeHtml(content.title);
  const description = escapeHtml(content.description);
  const url = escapeHtml(canonical);
  const image = escapeHtml(imageUrl);
  const alt = escapeHtml(content.alt);
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${alt}" />`,
    `<meta property="og:url" content="${url}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Next Studio" />',
    `<meta property="og:locale" content="${content.locale}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${alt}" />`,
  ].join("\n  ");

  return source
    .replace('<html lang="es">', `<html lang="${locale}">`)
    .replace('<title>Next Studio AI Content System</title>', `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace("</head>", `  ${tags}\n</head>`);
}

export async function aiContentSystemResponse(locale: Locale, canonical: string) {
  return new Response(await aiContentSystemPage(locale, canonical), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
