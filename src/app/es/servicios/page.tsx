import { ServicesPage } from "@/components/services/ServicesPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Servicios digitales creados para tu negocio", description: "Páginas web, CRM, automatización e inteligencia artificial creados alrededor de tus objetivos.", path: "/es/servicios", image: "/images/services/ai-service.png", locale: "es_US" });

export default function Page(){return <ServicesPage locale="es"/>;}
