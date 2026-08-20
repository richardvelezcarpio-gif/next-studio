import type { Metadata } from "next";
import { InvoiceGeneratorSalesPage } from "@/components/invoice-generator/InvoiceGeneratorSalesPage";

export const metadata: Metadata = {
  title: "Branded Invoice, Estimate & Policy Generator",
  description: "A personalized document generator with your logo, colors and business information.",
  robots: { index: false, follow: false },
};

export default function Page() { return <InvoiceGeneratorSalesPage locale="en"/>; }
