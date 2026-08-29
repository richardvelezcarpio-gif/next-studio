import type { Metadata } from "next";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { AIContentStrategy } from "@/components/content-strategy/AIContentStrategy";
import { cookies } from "next/headers";
import { MARKET_COOKIE, type Market } from "@/lib/market-routing";
const canonical = "https://www.nextstudio.agency/en/ai-content-strategy";
export const metadata: Metadata = { title: { absolute: "AI Content Strategy | Next Studio" }, description: "Build an intelligent content strategy designed to attract, connect, and convert customers.", alternates: { canonical, languages: { en: canonical, es: "https://www.nextstudio.agency/es/ai-content-strategy", "x-default": canonical } } };
export default async function Page() { const saved=(await cookies()).get(MARKET_COOKIE)?.value; const market:Market=saved==="ec"?"ec":"us"; return <><BrandHeader locale="en" market={market}/><AIContentStrategy locale="en"/><BrandFooter locale="en" market={market}/></>; }
