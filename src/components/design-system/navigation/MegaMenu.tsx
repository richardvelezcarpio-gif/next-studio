"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import { getNavigation } from "@/config/navigation";
import type { Market, SiteLocale } from "@/lib/market-routing";

export function MegaMenu({ locale, market }: { locale: SiteLocale; market: Market }) {
  const [open, setOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const entries = getNavigation(market, locale);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!navRef.current?.contains(event.target as Node)) setOpen(null); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return <nav ref={navRef} className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"} onKeyDown={event => { if (event.key === "Escape") setOpen(null); }}>
    {entries.map(entry => entry.items || entry.groups ? <div className="nav-dropdown" key={entry.label}>
      <button className="nav-trigger" type="button" aria-expanded={open === entry.label} aria-haspopup="true" onClick={() => setOpen(open === entry.label ? null : entry.label)}>{entry.label}<ChevronDown size={14}/></button>
      {open === entry.label && <div className={entry.groups || entry.label === "AI" || entry.label === "IA" ? "nav-panel nav-panel-wide" : "nav-panel"}>
        {(entry.groups ?? [{ label: "", items: entry.items ?? [] }]).map(group => <section key={group.label || "items"}>{group.label && <p className="nav-item-title">{group.label}</p>}{group.items.map(item => {
          const body = <><span className="nav-item-title">{item.featured && <Sparkles size={15}/>} {item.label}{item.badge && <b>{item.badge}</b>}{item.external && <ExternalLink size={12}/>}</span>{item.description && <small>{item.description}</small>}</>;
          return item.external ? <a className={item.featured ? "nav-item featured" : "nav-item"} href={item.href} target="_blank" rel="noreferrer" key={item.label} onClick={() => setOpen(null)}>{body}</a> : <Link className={item.featured ? "nav-item featured" : "nav-item"} href={item.href} key={item.label} onClick={() => setOpen(null)}>{body}</Link>;
        })}</section>)}
      </div>}
    </div> : <Link href={entry.href} key={entry.label}>{entry.label}</Link>)}
  </nav>;
}
