import type { Metadata } from "next";
import { InvoiceGeneratorSalesPage } from "@/components/invoice-generator/InvoiceGeneratorSalesPage";

export const metadata: Metadata = {
  title: "Generador de Facturas, Cotizaciones y Policies",
  description: "Un generador de documentos personalizado con el logo, colores e información de tu negocio.",
  robots: { index: false, follow: false },
};

export default function Page() { return <InvoiceGeneratorSalesPage locale="es"/>; }
