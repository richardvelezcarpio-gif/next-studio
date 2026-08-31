"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MarketSwitcher } from "./MarketSwitcher";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { SocialLinks } from "@/components/design-system/social/SocialLinks";
import type { Market } from "@/lib/market-routing";

export function BrandHeader({ locale, market = "us" }: { locale: "en" | "es"; market?: Market }) {
  const [open, setOpen] = useState(false);
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const contact = `${base}/${locale === "en" ? "contact" : "contacto"}`;
  return <header className="site-header"><div className="header-inner"><Link href={base} className="brand-mark" aria-label={site.name}><Image src="/images/brand/next-studio-logo.png" alt={locale === "en" ? "NEXT STUDIO — Building Digital Businesses" : "NEXT STUDIO — Creando Negocios Digitales"} width={120} height={80} priority/></Link><MegaMenu locale={locale} market={market}/><div className="header-actions"><SocialLinks networks={["whatsapp"]} className="header-social"/><div className="desktop-market-controls"><MarketSwitcher market={market} locale={locale}/><LanguageSwitcher market={market} locale={locale}/></div><Link href={contact} className="header-cta">{locale === "en" ? "Get Started" : "Empezar"}</Link></div><button className="mobile-menu-toggle" type="button" aria-label={open ? (locale === "en" ? "Close menu" : "Cerrar menú") : (locale === "en" ? "Open menu" : "Abrir menú")} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={23}/>}</button></div>{open && <nav className="mobile-nav" aria-label={locale === "en" ? "Mobile navigation" : "Navegación móvil"}><div className="mobile-market-controls"><MarketSwitcher market={market} locale={locale}/><LanguageSwitcher market={market} locale={locale}/></div><MobileMenu locale={locale} market={market} onNavigate={() => setOpen(false)}/><SocialLinks networks={["whatsapp"]} className="mobile-social"/><Link className="mobile-nav-cta" href={contact} onClick={() => setOpen(false)}>{locale === "en" ? "Get Started" : "Empezar"}</Link></nav>}</header>;
}
