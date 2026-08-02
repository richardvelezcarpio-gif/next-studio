import { ToolsPage } from "@/components/tools/ToolsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Herramientas de negocio que simplifican el trabajo", description: "Crea facturas, estimados, propuestas, pedidos y solicitudes de pago profesionales con NEXT STUDIO.", path: "/es/herramientas", image: "/images/tools/estimate-real.png", locale: "es_US" });

export default function Page(){return <ToolsPage locale="es"/>;}
