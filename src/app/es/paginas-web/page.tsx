import type { Metadata } from "next";
import { WebsitesPage } from "@/components/websites/WebsitesPage";

export const metadata: Metadata = {
  title: "Páginas web que impulsan tu negocio",
  description: "Páginas web premium diseñadas para generar confianza, atraer clientes y hacer crecer tu negocio en internet.",
  alternates: { canonical: "/es/paginas-web" },
  openGraph: {
    title: "Páginas web que impulsan tu negocio | NEXT STUDIO",
    description: "Páginas web premium diseñadas para generar confianza, atraer clientes y hacer crecer tu negocio en internet.",
    url: "/es/paginas-web",
    siteName: "NEXT STUDIO",
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Páginas web que impulsan tu negocio | NEXT STUDIO",
    description: "Páginas web premium diseñadas para generar confianza, atraer clientes y hacer crecer tu negocio en internet.",
  },
};

export default function Page(){return <WebsitesPage locale="es"/>;}
