import { AboutPage } from "@/components/about/AboutPage";
import { ecuadorMetadata } from "@/config/ecuador-seo";
export const metadata=ecuadorMetadata("es","about");
export default function Page(){return <AboutPage locale="es" market="ec"/>;}
