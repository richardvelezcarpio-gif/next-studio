import type { Market, SiteLocale } from "@/lib/market-routing";

export const AI_CONTENT_STRATEGY_URL = "/en/ai-content-strategy";

export type NavigationItem = { label: string; href: string; description?: string; external?: boolean; featured?: boolean; badge?: string };
export type NavigationEntry = NavigationItem & { items?: NavigationItem[] };

export function getNavigation(market: Market, locale: SiteLocale): NavigationEntry[] {
  const es = locale === "es";
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const web = `${base}/${es ? "paginas-web" : "websites"}`;
  const solutions = market === "ec" ? `${base}/${es ? "soluciones" : "solutions"}` : `${base}/${es ? "servicios" : "services"}`;
  const apps = market === "ec" ? `${base}/apps` : `${base}/${es ? "apps-herramientas" : "apps-tools"}`;
  const automation = market === "ec" ? `${base}/${es ? "ia-automatizacion" : "ai-automation"}` : solutions;
  const diagnosis = es ? "/es/diagnostico-ia" : "/en/ai-business-diagnosis";
  const contentStrategy = es ? "/es/ai-content-strategy" : "/en/ai-content-strategy";
  const invoice = market === "ec" ? apps : `${base}/${es ? "generador-facturas" : "invoice-generator"}`;
  const card = `${base}/${es ? "tarjeta-digital" : "digital-card"}`;
  const platforms = market === "ec" ? solutions : `${base}/${es ? "plataformas" : "platforms"}`;
  const projects = market === "ec" ? solutions : `${base}/${es ? "proyectos" : "projects"}`;
  const tools = market === "ec" ? apps : `${base}/${es ? "herramientas" : "tools"}`;
  const freePrograms = market === "ec" ? apps : `${base}/${es ? "programas-gratis" : "free-programs"}`;
  return [
    { label: es ? "Inicio" : "Home", href: base },
    { label: es ? "Soluciones" : "Solutions", href: solutions, items: [
      { label: es ? "Todas las soluciones" : "All solutions", href: solutions, description: es ? "Tecnología para hacer crecer tu negocio." : "Technology built to grow your business." },
      { label: es ? "Plataformas" : "Platforms", href: platforms, description: es ? "Sistemas digitales para operar y escalar." : "Digital systems built to operate and scale." },
      { label: es ? "IA y automatización" : "AI & automation", href: automation, description: es ? "Procesos más rápidos y eficientes." : "Faster, more efficient workflows." },
    ] },
    { label: "Web", href: web, items: [
      { label: es ? "Páginas Web" : "Websites", href: web, description: es ? "Experiencias premium que convierten." : "Premium experiences that convert." },
      { label: "E-commerce", href: solutions, description: es ? "Soluciones para vender en línea." : "Solutions for selling online." },
      { label: es ? "Tarjetas Digitales" : "Digital Cards", href: card, description: es ? "Tu presencia profesional en un enlace." : "Your professional presence in one link." },
      { label: es ? "Casos de éxito" : "Success Stories", href: projects, description: es ? "Proyectos web reales de Next Studio." : "Real web projects by Next Studio." },
    ] },
    { label: es ? "IA" : "AI", href: diagnosis, items: [
      { label: "AI Content Strategy", href: contentStrategy, description: es ? "Convierte contenido en una estrategia accionable." : "Turn content into an actionable strategy.", featured: true, badge: es ? "NUEVO" : "NEW" },
      { label: es ? "Diagnóstico de Negocio" : "Business Diagnosis", href: diagnosis, description: es ? "Descubre oportunidades con IA." : "Discover opportunities with AI." },
      { label: es ? "Automatizaciones" : "Automations", href: automation, description: es ? "Ahorra tiempo en tareas repetitivas." : "Save time on repetitive work." },
      { label: es ? "Herramientas IA para Negocios" : "AI Business Tools", href: apps, description: es ? "Apps prácticas para operar mejor." : "Practical apps for better operations." },
    ] },
    { label: es ? "Recursos" : "Resources", href: apps, items: [
      { label: es ? "Herramientas" : "Tools", href: tools },
      { label: es ? "Apps y Herramientas" : "Apps & Tools", href: apps },
      { label: es ? "Generador de Facturas" : "Invoice Generator", href: invoice },
      { label: es ? "Programas Gratis" : "Free Programs", href: freePrograms },
      { label: "Teleprompter", href: "https://www.nextstudiotelepronter.online", external: true },
    ] },
    { label: es ? "Precios" : "Pricing", href: `${base}/${es ? "precios" : "pricing"}` },
    { label: es ? "Nosotros" : "About", href: `${base}/${es ? "nosotros" : "about"}` },
  ];
}
