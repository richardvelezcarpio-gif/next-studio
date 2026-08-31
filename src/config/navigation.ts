import type { Market, SiteLocale } from "@/lib/market-routing";

export const AI_CONTENT_STRATEGY_URL = "/en/ai-content-strategy";

export type NavigationItem = { label: string; href: string; description?: string; external?: boolean; featured?: boolean; badge?: string };
export type NavigationGroup = { label: string; items: NavigationItem[] };
export type NavigationEntry = NavigationItem & { items?: NavigationItem[]; groups?: NavigationGroup[] };

export function getNavigation(market: Market, locale: SiteLocale): NavigationEntry[] {
  const es = locale === "es";
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const web = `${base}/${es ? "paginas-web" : "websites"}`;
  const solutions = market === "ec" ? `${base}/${es ? "soluciones" : "solutions"}` : `${base}/${es ? "servicios" : "services"}`;
  const apps = market === "ec" ? `${base}/apps` : `${base}/${es ? "apps-herramientas" : "apps-tools"}`;
  const automation = market === "ec" ? `${base}/${es ? "ia-automatizacion" : "ai-automation"}` : solutions;
  const diagnosis = es ? "/es/diagnostico-ia" : "/en/ai-business-diagnosis";
  const contentStrategy = es ? "/es/ai-content-strategy" : "/en/ai-content-strategy";
  const contentSystem = `${base}/ai-content-system?lang=${locale}`;
  const invoice = market === "ec" ? apps : `${base}/${es ? "generador-facturas" : "invoice-generator"}`;
  const card = `${base}/${es ? "tarjeta-digital" : "digital-card"}`;
  const platforms = market === "ec" ? solutions : `${base}/${es ? "plataformas" : "platforms"}`;
  const projects = es ? "/es/proyectos" : "/en/projects";
  const tools = market === "ec" ? apps : `${base}/${es ? "herramientas" : "tools"}`;
  return [
    { label: es ? "Inicio" : "Home", href: base },
    { label: es ? "Soluciones" : "Solutions", href: solutions, groups: [
      { label: es ? "Quiero conseguir más clientes" : "I want more customers", items: [
        { label: "Websites", href: web }, { label: "Landing Pages", href: web }, { label: "E-Commerce", href: solutions }, { label: es ? "Presencia Digital" : "Digital Presence", href: solutions },
      ] },
      { label: es ? "Quiero organizar mi negocio" : "I want to organize my business", items: [
        { label: es ? "CRM y Automatización" : "CRM & Automation", href: apps }, { label: es ? "Tarjetas Digitales" : "Digital Cards", href: card }, { label: es ? "Sistemas para Negocios" : "Business Systems", href: platforms },
      ] },
      { label: es ? "Quiero digitalizar / automatizar" : "I want to digitize / automate", items: [
        { label: es ? "Plataformas y Apps" : "Platforms & Apps", href: platforms }, { label: es ? "Automatizaciones" : "Automations", href: automation }, { label: es ? "Soluciones personalizadas" : "Custom Solutions", href: solutions },
      ] },
      { label: es ? "Todas las soluciones" : "All solutions", items: [
        { label: "Websites", href: web }, { label: "Landing Pages", href: web }, { label: "E-Commerce", href: solutions }, { label: es ? "Tarjetas Digitales" : "Digital Cards", href: card }, { label: es ? "CRM y Automatización" : "CRM & Automation", href: apps }, { label: es ? "Plataformas y Apps" : "Platforms & Apps", href: platforms }, { label: es ? "Presencia Digital" : "Digital Presence", href: solutions },
      ] },
    ] },
    { label: es ? "IA" : "AI", href: diagnosis, groups: [
      { label: es ? "Herramientas principales" : "Main tools", items: [
        { label: es ? "Diagnóstico de Negocio" : "Business Diagnosis", href: diagnosis },
        { label: es ? "Estrategia de Contenido con IA" : "AI Content Strategy", href: contentStrategy, description: es ? "Convierte contenido en una estrategia accionable." : "Turn content into an actionable strategy.", featured: true, badge: es ? "NUEVO" : "NEW" },
        { label: es ? "Sistema de Contenido con IA" : "AI Content System", href: contentSystem, description: es ? "Estrategia y publicaciones listas para crecer." : "Strategy and ready-to-publish content built for growth.", featured: true, badge: es ? "NUEVO" : "NEW" },
      ] },
      { label: es ? "Herramientas para negocios" : "Business tools", items: [
        { label: es ? "Generador de Facturas, Estimados y Propuestas" : "Invoice / Estimate / Proposal Generator", href: invoice },
        { label: es ? "Otras herramientas empresariales" : "Existing business tools", href: tools },
      ] },
    ] },
    { label: es ? "Proyectos" : "Projects", href: projects },
    { label: es ? "Precios" : "Pricing", href: `${base}/${es ? "precios" : "pricing"}` },
    { label: es ? "Nosotros" : "About", href: `${base}/${es ? "nosotros" : "about"}` },
  ];
}
