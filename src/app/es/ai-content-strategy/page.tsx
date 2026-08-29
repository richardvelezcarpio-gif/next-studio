import type { Metadata } from "next";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { AIContentStrategy } from "@/components/content-strategy/AIContentStrategy";
import { cookies } from "next/headers";
import { MARKET_COOKIE, type Market } from "@/lib/market-routing";
const canonical = "https://www.nextstudio.agency/es/ai-content-strategy";
export const metadata: Metadata = { title: { absolute: "Estrategia de Contenido con IA | Next Studio" }, description: "Crea una estrategia de contenido inteligente para atraer, conectar y convertir clientes.", alternates: { canonical, languages: { es: canonical, en: "https://www.nextstudio.agency/en/ai-content-strategy", "x-default": "https://www.nextstudio.agency/en/ai-content-strategy" } } };
export default async function Page() { const saved=(await cookies()).get(MARKET_COOKIE)?.value; const market:Market=saved==="ec"?"ec":"us"; return <><BrandHeader locale="es" market={market}/><AIContentStrategy locale="es"/><BrandFooter locale="es" market={market}/></>; }
