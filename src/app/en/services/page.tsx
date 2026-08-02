import { ServicesPage } from "@/components/services/ServicesPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Digital services built around your business", description: "Explore websites, CRM systems, automation and AI services tailored to your business goals.", path: "/en/services", image: "/images/services/services-hero.png", locale: "en_US" });

export default function Page(){return <ServicesPage locale="en"/>;}
