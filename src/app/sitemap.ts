import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextstudio.agency";
  const homepages = new Set(["/en/websites", "/es/paginas-web", "/ecuador"]);
  const paths = ["/ecuador", "/en/websites", "/en/platforms", "/en/services", "/en/projects", "/en/pricing", "/en/tools", "/en/free-programs", "/en/contact", "/es/paginas-web", "/es/plataformas", "/es/servicios", "/es/proyectos", "/es/precios", "/es/herramientas", "/es/programas-gratis", "/es/contacto", "/en/privacy", "/en/terms", "/es/privacidad", "/es/terminos"];
  return paths.map(url => ({ url: `${base}${url}`, lastModified: new Date(), changeFrequency: "weekly", priority: homepages.has(url) ? 1 : .7 }));
}
