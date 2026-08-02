import { ToolsPage } from "@/components/tools/ToolsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Business tools that make work easier", description: "Create professional invoices, estimates, proposals, orders and payment requests with NEXT STUDIO tools.", path: "/en/tools", image: "/images/tools/invoice-real.png", locale: "en_US" });

export default function Page(){return <ToolsPage locale="en"/>;}
