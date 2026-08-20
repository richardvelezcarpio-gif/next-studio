"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { languageHref, LOCALE_COOKIE, type Market } from "@/lib/market-routing";

export function LanguageSwitcher({ locale, market = "us" }: { locale: "en" | "es"; market?: Market }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const spanishHref = languageHref(pathname, market, "es");
  const englishHref = languageHref(pathname, market, "en");

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const remember = (nextLocale: "en" | "es") => {
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setOpen(false);
  };
  const selected = locale === "en" ? "English" : "Español";
  return <div className="language-switcher" ref={root}>
    <button type="button" className="language-trigger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-haspopup="menu" aria-label={locale === "es" ? "Seleccionar idioma" : "Select language"}>
      <span>{selected}</span><ChevronDown size={15} aria-hidden="true" />
    </button>
    {open && <div className="language-menu" role="menu">
      <Link href={englishHref} role="menuitem" onClick={() => remember("en")} className={locale === "en" ? "selected" : ""}><span>English</span>{locale === "en" && <Check size={17} aria-hidden="true" />}</Link>
      <Link href={spanishHref} role="menuitem" onClick={() => remember("es")} className={locale === "es" ? "selected" : ""}><span>Español</span>{locale === "es" && <Check size={17} aria-hidden="true" />}</Link>
    </div>}
  </div>;
}
