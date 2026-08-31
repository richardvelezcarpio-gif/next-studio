import { AboutPage } from "@/components/about/AboutPage";
import { createShareMetadata } from "@/lib/shareMetadata";
export const metadata = createShareMetadata({ title: "Nosotros | Tecnología para negocios que avanzan", description: "Conoce Next Studio: diseño, desarrollo, automatización e inteligencia artificial para negocios reales.", path: "/es/nosotros", image: "/images/home/next-studio-future-social.png", locale: "es_US" });
export default function Page(){return <AboutPage locale="es"/>;}
