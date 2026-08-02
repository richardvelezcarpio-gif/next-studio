import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Proyectos digitales que generan resultados", description: "Conoce proyectos reales de NEXT STUDIO: páginas web, plataformas y herramientas de negocio.", path: "/es/proyectos", image: "/images/projects/go-green-website.png", locale: "es_US" });

export default function Page(){return <ProjectsPage locale="es"/>;}
