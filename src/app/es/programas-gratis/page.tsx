import { FreeProgramsPage } from "@/components/free-programs/FreeProgramsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Programas Gratis", description: "Descubre herramientas creadas por NEXT STUDIO para trabajar mejor y hacer crecer tu negocio.", path: "/es/programas-gratis", image: "/free-programs/free-programs-social.png", locale: "es_US" });
export default function Page() { return <FreeProgramsPage locale="es" />; }
