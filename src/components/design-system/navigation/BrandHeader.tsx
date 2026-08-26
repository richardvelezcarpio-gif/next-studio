"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MarketSwitcher } from "./MarketSwitcher";
import { SocialLinks } from "@/components/design-system/social/SocialLinks";
import type { Market } from "@/lib/market-routing";

const links = {
  us: {
    en: [["Home", "/en"], ["Websites", "/en/websites"], ["Platforms", "/en/platforms"], ["Services", "/en/services"], ["Pricing", "/en/pricing"], ["Tools", "/en/tools"], ["Apps & Tools", "/en/apps-tools"]],
    es: [["Inicio", "/es"], ["Páginas web", "/es/paginas-web"], ["Plataformas", "/es/plataformas"], ["Servicios", "/es/servicios"], ["Precios", "/es/precios"], ["Herramientas", "/es/herramientas"], ["Apps & Herramientas", "/es/apps-herramientas"]],
  },
  ec: {
    en: [["Home", "/ec/en"], ["Solutions", "/ec/en/solutions"], ["Websites", "/ec/en/websites"], ["Apps & Tools", "/ec/en/apps"], ["AI & Automation", "/ec/en/ai-automation"], ["Pricing", "/ec/en/pricing"], ["About", "/ec/en/about"]],
    es: [["Inicio", "/ec/es"], ["Soluciones", "/ec/es/soluciones"], ["Páginas web", "/ec/es/paginas-web"], ["Apps & Herramientas", "/ec/es/apps"], ["IA & Automatización", "/ec/es/ia-automatizacion"], ["Precios", "/ec/es/precios"], ["Nosotros", "/ec/es/nosotros"]],
  },
} as const;

export function BrandHeader({ locale, market = "us" }: { locale: "en" | "es"; market?: Market }) {
  const [open, setOpen] = useState(false);
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const contact = `${base}/${locale === "en" ? "contact" : "contacto"}`;
  const marketLinks = links[market][locale];
  return <header className="site-header"><div className="header-inner"><Link href={base} className="brand-mark" aria-label={site.name}><Image src="/images/brand/next-studio-logo.png" alt={locale === "en" ? "NEXT STUDIO — Building Digital Businesses" : "NEXT STUDIO — Creando Negocios Digitales"} width={120} height={80} priority/></Link><nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>{marketLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><div className="header-actions"><SocialLinks networks={["whatsapp"]} className="header-social"/><div className="desktop-market-controls"><MarketSwitcher market={market} locale={locale}/><LanguageSwitcher market={market} locale={locale}/></div><Link href={contact} className="header-cta">{locale === "en" ? "Get Started" : "Comenzar"}</Link></div><button className="mobile-menu-toggle" type="button" aria-label={open ? (locale === "en" ? "Close menu" : "Cerrar menú") : (locale === "en" ? "Open menu" : "Abrir menú")} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={23}/>}</button></div>{open && <nav className="mobile-nav" aria-label={locale === "en" ? "Mobile navigation" : "Navegación móvil"}><div className="mobile-market-controls"><MarketSwitcher market={market} locale={locale}/><LanguageSwitcher market={market} locale={locale}/></div>{marketLinks.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}<SocialLinks networks={["whatsapp"]} className="mobile-social"/><Link className="mobile-nav-cta" href={contact} onClick={() => setOpen(false)}>{locale === "en" ? "Start Your Project" : "Inicia tu proyecto"}</Link></nav>}</header>;
}
