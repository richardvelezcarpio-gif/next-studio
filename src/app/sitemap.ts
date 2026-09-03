import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextstudio.agency";
  const homes = ["/es", "/en", "/ec/es", "/ec/en"];
  const paths = [...homes, "/ecuador", "/es/paginas-web", "/en/websites", "/en/web-design-nyc", "/es/diseno-web-nyc", "/es/plataformas", "/en/platforms", "/es/servicios", "/en/services", "/es/proyectos", "/en/projects", "/en/projects/next-print-ny", "/es/precios", "/en/pricing", "/es/nosotros", "/en/about", "/es/contacto", "/en/contact", "/es/diagnostico-ia", "/en/ai-business-diagnosis", "/es/ai-content-strategy", "/en/ai-content-strategy", "/es/ai-content-system", "/en/ai-content-system", "/es/herramientas", "/en/tools", "/es/apps-herramientas", "/en/apps-tools", "/es/generador-qr", "/en/qr-generator", "/es/curso-web-ia", "/ec/es/soluciones", "/ec/en/solutions", "/ec/es/paginas-web", "/ec/en/websites", "/ec/es/apps", "/ec/en/apps", "/ec/es/ia-automatizacion", "/ec/en/ai-automation", "/ec/es/precios", "/ec/en/pricing", "/ec/es/nosotros", "/ec/en/about", "/ec/es/contacto", "/ec/en/contact", "/ec/es/ai-content-system", "/ec/en/ai-content-system"];
  const priorityPages = new Set(["/en/web-design-nyc", "/es/diseno-web-nyc", "/en/projects/next-print-ny"]);
  return paths.map(url => ({ url: `${base}${url}`, changeFrequency: homes.includes(url) || priorityPages.has(url) ? "weekly" : "monthly", priority: homes.includes(url) ? 1 : priorityPages.has(url) ? .9 : .7 }));
}
