"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, MARKET_COOKIE, marketHref, type Market, type SiteLocale } from "@/lib/market-routing";

export function MarketSwitcher({ market, locale }: { market: Market; locale: SiteLocale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  function remember(nextMarket: Market) {
    document.cookie = `${MARKET_COOKIE}=${nextMarket}; Path=/; Max-Age=31536000; SameSite=Lax`;
    document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setOpen(false);
  }

  const selected = market === "ec" ? "🇪🇨 Ecuador" : "🇺🇸 United States";
  return <div className="market-switcher" ref={root}>
    <button type="button" className="market-trigger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-haspopup="menu" aria-label={locale === "es" ? "Seleccionar mercado" : "Select market"}>
      <span>{selected}</span><ChevronDown size={15} aria-hidden="true" />
    </button>
    {open && <div className="market-menu" role="menu">
      <Link href={marketHref(pathname, "us", locale)} role="menuitem" onClick={() => remember("us")} className={market === "us" ? "selected" : ""}><span>🇺🇸 United States</span>{market === "us" && <Check size={17} aria-hidden="true" />}</Link>
      <Link href={marketHref(pathname, "ec", locale)} role="menuitem" onClick={() => remember("ec")} className={market === "ec" ? "selected" : ""}><span>🇪🇨 Ecuador</span>{market === "ec" && <Check size={17} aria-hidden="true" />}</Link>
    </div>}
  </div>;
}
