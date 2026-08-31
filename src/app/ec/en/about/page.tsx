import { AboutPage } from "@/components/about/AboutPage";
import { ecuadorMetadata } from "@/config/ecuador-seo";
export const metadata=ecuadorMetadata("en","about");
export default function Page(){return <AboutPage locale="en" market="ec"/>;}
