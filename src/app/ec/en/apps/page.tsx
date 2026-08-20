import { AppsToolsPage } from "@/components/apps-tools/AppsToolsPage";
import { ecuadorMetadata } from "@/config/ecuador-seo";

export const metadata = ecuadorMetadata("en", "apps");

export default function Page() { return <AppsToolsPage locale="en" market="ec" />; }
