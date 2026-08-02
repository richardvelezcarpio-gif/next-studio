import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Digital projects built to perform", description: "Explore real NEXT STUDIO projects across websites, platforms and business tools.", path: "/en/projects", image: "/images/projects/np-creator-live-studio.png", locale: "en_US" });

export default function Page(){return <ProjectsPage locale="en"/>;}
