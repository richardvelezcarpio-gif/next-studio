import { PlatformsPage } from "@/components/platforms/PlatformsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Custom platforms for growing businesses", description: "Custom business platforms that streamline work, serve clients and scale with your operation.", path: "/en/platforms", image: "/images/platforms/platforms-hero.png", locale: "en_US" });

export default function Page(){return <PlatformsPage locale="en"/>;}
