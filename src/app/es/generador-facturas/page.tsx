import type { Metadata } from "next";
import { InvoiceGeneratorSalesPage } from "@/components/invoice-generator/InvoiceGeneratorSalesPage";

export const metadata: Metadata = {
  title: { absolute: "Generador de Facturas, Estimados y Policies | Next Studio" },
  description: "Crea facturas, estimados y documentos profesionales con tu propia marca. Descarga en PDF o JPG, envía por email y mantén tu historial organizado.",
  alternates: {
    canonical: "https://www.nextstudio.agency/es/generador-facturas",
  },
  openGraph: {
    title: "Generador de Facturas, Estimados y Policies | Next Studio",
    description: "Crea facturas, estimados y documentos profesionales con tu propia marca. Descarga en PDF o JPG, envía por email y mantén tu historial organizado.",
    url: "https://www.nextstudio.agency/es/generador-facturas",
    type: "website",
    siteName: "Next Studio",
    images: [{
      url: "https://www.nextstudio.agency/images/invoice-generator/invoice-generator-social.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Facturas, Estimados y Policies | Next Studio",
    description: "Crea facturas, estimados y documentos profesionales con tu propia marca. Descarga en PDF o JPG, envía por email y mantén tu historial organizado.",
    images: ["https://www.nextstudio.agency/images/invoice-generator/invoice-generator-social.jpg"],
  },
  robots: { index: false, follow: false },
};

export default function Page() { return <InvoiceGeneratorSalesPage locale="es"/>; }
