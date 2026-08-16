import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, MARKET_COOKIE, marketFromCountry, marketHome, type Market, type SiteLocale } from "@/lib/market-routing";

export function proxy(request: NextRequest) {
  const savedMarket = request.cookies.get(MARKET_COOKIE)?.value;
  const market: Market = savedMarket === "us" || savedMarket === "ec"
    ? savedMarket
    : marketFromCountry(request.headers.get("x-vercel-ip-country"));
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale: SiteLocale | undefined = savedLocale === "en" || savedLocale === "es" ? savedLocale : undefined;

  return NextResponse.redirect(new URL(marketHome(market, locale), request.url));
}

export const config = { matcher: "/" };
