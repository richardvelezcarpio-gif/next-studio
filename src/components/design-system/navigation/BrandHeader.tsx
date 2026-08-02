"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = {
  en: [["Websites", "/en/websites"], ["Platforms", "/en/platforms"], ["Services", "/en/services"], ["Projects", "/en/projects"], ["Pricing", "/en/pricing"], ["Tools", "/en/tools"]],
  es: [["Páginas web", "/es/paginas-web"], ["Plataformas", "/es/plataformas"], ["Servicios", "/es/servicios"], ["Proyectos", "/es/proyectos"], ["Precios", "/es/precios"], ["Herramientas", "/es/herramientas"]],
} as const;

export function BrandHeader({ locale }: { locale: "en" | "es" }) {
  const [open, setOpen] = useState(false); const contact = `/${locale}/${locale === "en" ? "contact" : "contacto"}`;
  return <header className="site-header"><div className="header-inner"><Link href={`/${locale}`} className="brand-mark" aria-label={site.name}><Image src="/images/brand/next-studio-logo.png" alt="NEXT STUDIO — Building Digital Businesses" width={120} height={80} priority/></Link><nav className="desktop-nav" aria-label="Primary navigation">{links[locale].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><div className="header-actions"><LanguageSwitcher locale={locale}/><Link href={contact} className="header-cta">{locale === "en" ? "Get Started" : "Comenzar"}</Link></div><button className="mobile-menu-toggle" type="button" aria-label={open ? (locale === "en" ? "Close menu" : "Cerrar menú") : (locale === "en" ? "Open menu" : "Abrir menú")} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={23}/>}</button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links[locale].map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="mobile-nav-cta" href={contact} onClick={() => setOpen(false)}>{locale === "en" ? "Start Your Project" : "Inicia tu proyecto"}</Link></nav>}</header>;
}
