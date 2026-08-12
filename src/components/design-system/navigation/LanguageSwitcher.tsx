"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const equivalents: Record<string, string> = {
  "/en/websites": "/es/paginas-web", "/es/paginas-web": "/en/websites",
  "/en/platforms": "/es/plataformas", "/es/plataformas": "/en/platforms",
  "/en/services": "/es/servicios", "/es/servicios": "/en/services",
  "/en/projects": "/es/proyectos", "/es/proyectos": "/en/projects",
  "/en/pricing": "/es/precios", "/es/precios": "/en/pricing",
  "/en/tools": "/es/herramientas", "/es/herramientas": "/en/tools",
  "/en/free-programs": "/es/programas-gratis", "/es/programas-gratis": "/en/free-programs",
  "/en/qr-generator": "/es/generador-qr", "/es/generador-qr": "/en/qr-generator",
  "/en/contact": "/es/contacto", "/es/contacto": "/en/contact",
  "/en/about": "/es/nosotros", "/es/nosotros": "/en/about",
};

export function LanguageSwitcher({ locale }: { locale: "en" | "es" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const spanishHref = equivalents[pathname] ?? "/es";
  const englishHref = equivalents[pathname] ?? "/en";

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selected = locale === "en" ? "🇺🇸 English" : "🇪🇨 Español";
  return <div className="language-switcher" ref={root}>
    <button type="button" className="language-trigger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-haspopup="menu" aria-label="Select language">
      <span>{selected}</span><ChevronDown size={15} aria-hidden="true" />
    </button>
    {open && <div className="language-menu" role="menu">
      <Link href={englishHref} role="menuitem" onClick={() => setOpen(false)} className={locale === "en" ? "selected" : ""}><span>🇺🇸 English</span>{locale === "en" && <Check size={17} aria-hidden="true" />}</Link>
      <Link href={spanishHref} role="menuitem" onClick={() => setOpen(false)} className={locale === "es" ? "selected" : ""}><span>🇪🇨 Español</span>{locale === "es" && <Check size={17} aria-hidden="true" />}</Link>
    </div>}
  </div>;
}
