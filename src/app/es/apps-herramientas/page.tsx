import type { Metadata } from "next";
import { AppsToolsPage } from "@/components/apps-tools/AppsToolsPage";

const title = "Apps & Herramientas para Negocios | Next Studio";
const description = "Descubre herramientas y aplicaciones digitales de Next Studio para crear invoices, administrar negocios, mejorar ventas, marketing y productividad.";
const canonical = "https://www.nextstudio.agency/es/apps-herramientas";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical,
    languages: {
      es: canonical,
      en: "https://www.nextstudio.agency/en/apps-tools",
    },
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Next Studio",
    locale: "es_US",
    type: "website",
    images: [{ url: "/free-programs/free-programs-social.png", width: 1200, height: 630, alt: "Apps y herramientas de Next Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/free-programs/free-programs-social.png"],
  },
};

export default function Page() { return <AppsToolsPage locale="es" />; }
