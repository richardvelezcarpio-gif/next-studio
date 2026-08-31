import { ContactPage } from "@/components/contact/ContactPage";
import { createShareMetadata } from "@/lib/shareMetadata";
export const metadata = createShareMetadata({ title: "Contact Next Studio", description: "Tell us what you want to improve and discover the right digital solution for your business.", path: "/en/contact", image: "/images/services/services-hero.png", locale: "en_US" });
export default function Page(){return <ContactPage locale="en"/>;}
