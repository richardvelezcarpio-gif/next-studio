import { AppsToolsPage } from "@/components/apps-tools/AppsToolsPage";
import { ecuadorMetadata } from "@/config/ecuador-seo";

export const metadata = ecuadorMetadata("es", "apps");

export default function Page() { return <AppsToolsPage locale="es" market="ec" />; }
