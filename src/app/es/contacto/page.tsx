import { ContactPage } from "@/components/contact/ContactPage";
import { createShareMetadata } from "@/lib/shareMetadata";
export const metadata = createShareMetadata({ title: "Contacto | Next Studio", description: "Cuéntanos qué quieres mejorar y descubre la solución digital adecuada para tu negocio.", path: "/es/contacto", image: "/images/services/services-hero.png", locale: "es_US" });
export default function Page(){return <ContactPage locale="es"/>;}
