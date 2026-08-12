import { FreeProgramsPage } from "@/components/free-programs/FreeProgramsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Free Programs", description: "Explore practical tools created by NEXT STUDIO to help you work smarter and grow your business.", path: "/en/free-programs", image: "/free-programs/free-programs-social.png", locale: "en_US" });
export default function Page() { return <FreeProgramsPage locale="en" />; }
