import { PlatformsPage } from "@/components/platforms/PlatformsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Plataformas personalizadas para tu negocio", description: "Plataformas empresariales a medida para organizar operaciones, atender clientes y crecer con claridad.", path: "/es/plataformas", image: "/images/platforms/custom-business-systems-card.png", locale: "es_US" });

export default function Page(){return <PlatformsPage locale="es"/>;}
