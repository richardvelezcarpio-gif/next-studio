import { WebsitesPage } from "@/components/websites/WebsitesPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({
  title: "Páginas web que impulsan tu negocio",
  description: "Páginas web premium diseñadas para generar confianza, atraer clientes y hacer crecer tu negocio en internet.",
  path: "/es/paginas-web",
  image: "/images/websites/websites-ecosystem-premium.png",
  locale: "es_US",
});

export default function Page(){return <WebsitesPage locale="es"/>;}
