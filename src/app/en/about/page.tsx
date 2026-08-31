import { AboutPage } from "@/components/about/AboutPage";
import { createShareMetadata } from "@/lib/shareMetadata";
export const metadata = createShareMetadata({ title: "About Next Studio | Technology for growing businesses", description: "Learn how Next Studio combines design, development, automation and AI for real business needs.", path: "/en/about", image: "/images/home/next-studio-future-social.png", locale: "en_US" });
export default function Page(){return <AboutPage locale="en"/>;}
