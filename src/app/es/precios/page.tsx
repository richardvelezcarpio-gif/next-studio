import { ConversionLanding } from "@/components/pricing/ConversionLanding";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Planes simples para un negocio digital más fuerte", description: "Conoce planes flexibles de páginas web y plataformas para negocios con grandes metas.", path: "/es/precios", image: "/images/websites/business-discover-premium.png", locale: "es_US" });

export default function Page(){return <ConversionLanding locale="es"/>;}
