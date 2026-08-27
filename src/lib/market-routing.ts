export type Market = "us" | "ec";
export type SiteLocale = "en" | "es";

export const MARKET_COOKIE = "nextstudio_market";
export const LOCALE_COOKIE = "nextstudio_locale";

type PageKey = "home" | "websites" | "pricing" | "digital-card" | "contact" | "about" | "apps-tools";

const routes: Record<Market, Record<SiteLocale, Record<PageKey, string>>> = {
  us: {
    en: { home: "/en", websites: "/en/websites", pricing: "/en/pricing", "digital-card": "/en/digital-card", contact: "/en/contact", about: "/en/about", "apps-tools": "/en/apps-tools" },
    es: { home: "/es", websites: "/es/paginas-web", pricing: "/es/precios", "digital-card": "/es/tarjeta-digital", contact: "/es/contacto", about: "/es/nosotros", "apps-tools": "/es/apps-herramientas" },
  },
  ec: {
    en: { home: "/ec/en", websites: "/ec/en/websites", pricing: "/ec/en/pricing", "digital-card": "/ec/en/digital-card", contact: "/ec/en/contact", about: "/ec/en/about", "apps-tools": "/ec/en/apps" },
    es: { home: "/ec/es", websites: "/ec/es/paginas-web", pricing: "/ec/es/precios", "digital-card": "/ec/es/tarjeta-digital", contact: "/ec/es/contacto", about: "/ec/es/nosotros", "apps-tools": "/ec/es/apps" },
  },
};

const pageByPath = new Map<string, PageKey>(
  Object.values(routes).flatMap(locales =>
    Object.values(locales).flatMap(pages =>
      Object.entries(pages).map(([page, pathname]) => [pathname, page as PageKey]),
    ),
  ),
);

const usaLanguageEquivalents: Record<string, string> = {
  "/en": "/es", "/es": "/en",
  "/en/websites": "/es/paginas-web", "/es/paginas-web": "/en/websites",
  "/en/platforms": "/es/plataformas", "/es/plataformas": "/en/platforms",
  "/en/services": "/es/servicios", "/es/servicios": "/en/services",
  "/en/projects": "/es/proyectos", "/es/proyectos": "/en/projects",
  "/en/pricing": "/es/precios", "/es/precios": "/en/pricing",
  "/en/tools": "/es/herramientas", "/es/herramientas": "/en/tools",
  "/en/apps-tools": "/es/apps-herramientas", "/es/apps-herramientas": "/en/apps-tools",
  "/en/free-programs": "/es/apps-herramientas", "/es/programas-gratis": "/en/apps-tools",
  "/en/qr-generator": "/es/generador-qr", "/es/generador-qr": "/en/qr-generator",
  "/en/contact": "/es/contacto", "/es/contacto": "/en/contact",
  "/en/about": "/es/nosotros", "/es/nosotros": "/en/about",
  "/en/ai-business-diagnosis": "/es/diagnostico-ia", "/es/diagnostico-ia": "/en/ai-business-diagnosis",
  "/en/ai-business-diagnosis/results": "/es/diagnostico-negocio-ia/resultados", "/es/diagnostico-negocio-ia/resultados": "/en/ai-business-diagnosis/results",
};

const ecuadorLanguageEquivalents: Record<string, string> = {
  "/ec/en": "/ec/es", "/ec/es": "/ec/en",
  "/ec/en/solutions": "/ec/es/soluciones", "/ec/es/soluciones": "/ec/en/solutions",
  "/ec/en/websites": "/ec/es/paginas-web", "/ec/es/paginas-web": "/ec/en/websites",
  "/ec/en/apps": "/ec/es/apps", "/ec/es/apps": "/ec/en/apps",
  "/ec/en/ai-automation": "/ec/es/ia-automatizacion", "/ec/es/ia-automatizacion": "/ec/en/ai-automation",
  "/ec/en/digital-card": "/ec/es/tarjeta-digital", "/ec/es/tarjeta-digital": "/ec/en/digital-card",
  "/ec/en/pricing": "/ec/es/precios", "/ec/es/precios": "/ec/en/pricing",
  "/ec/en/about": "/ec/es/nosotros", "/ec/es/nosotros": "/ec/en/about",
  "/ec/en/contact": "/ec/es/contacto", "/ec/es/contacto": "/ec/en/contact",
};

export function marketFromPath(pathname: string): Market {
  return pathname === "/ec" || pathname.startsWith("/ec/") ? "ec" : "us";
}

export function marketFromCountry(country: string | null): Market {
  return country?.toUpperCase() === "EC" ? "ec" : "us";
}

export function marketHome(market: Market, locale?: SiteLocale): string {
  const preferredLocale = locale ?? (market === "ec" ? "es" : "en");
  return routes[market][preferredLocale].home;
}

export function marketHref(pathname: string, market: Market, locale: SiteLocale): string {
  const page = pageByPath.get(pathname);
  return page ? routes[market][locale][page] : marketHome(market, locale);
}

export function languageHref(pathname: string, market: Market, locale: SiteLocale): string {
  const page = pageByPath.get(pathname);
  if (page) return routes[market][locale][page];
  if (market === "us") return usaLanguageEquivalents[pathname] ?? marketHome(market, locale);
  return ecuadorLanguageEquivalents[pathname] ?? marketHome(market, locale);
}
