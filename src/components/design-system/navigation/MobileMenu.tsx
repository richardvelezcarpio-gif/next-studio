"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import { getNavigation } from "@/config/navigation";
import type { Market, SiteLocale } from "@/lib/market-routing";

export function MobileMenu({ locale, market, onNavigate }: { locale: SiteLocale; market: Market; onNavigate: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  return <div className="mobile-nav-links">{getNavigation(market, locale).map(entry => entry.items || entry.groups ? <div className="mobile-nav-group" key={entry.label}>
    <button type="button" aria-expanded={open === entry.label} onClick={() => setOpen(open === entry.label ? null : entry.label)}>{entry.label}<ChevronDown size={16}/></button>
    {open === entry.label && <div className="mobile-nav-submenu">{(entry.groups ?? [{ label: "", items: entry.items ?? [] }]).map(group => <div key={group.label || "items"}>{group.label && <span className="nav-item-title">{group.label}</span>}{group.items.map(item => item.external ? <a href={item.href} target="_blank" rel="noreferrer" key={item.label} onClick={onNavigate}>{item.label}{item.badge && <b>{item.badge}</b>}<ExternalLink size={12}/></a> : <Link href={item.href} key={item.label} onClick={onNavigate}>{item.label}{item.badge && <b>{item.badge}</b>}</Link>)}</div>)}</div>}
  </div> : <Link href={entry.href} key={entry.label} onClick={onNavigate}>{entry.label}</Link>)}</div>;
}
