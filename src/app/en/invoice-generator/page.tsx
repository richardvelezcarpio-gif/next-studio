import type { Metadata } from "next";
import { InvoiceGeneratorSalesPage } from "@/components/invoice-generator/InvoiceGeneratorSalesPage";

export const metadata: Metadata = {
  title: { absolute: "Invoice, Estimate & Policy Generator | Next Studio" },
  description: "Create professional invoices, estimates and policies with your own brand. Download PDF or JPG, send by email and keep your document history organized.",
  alternates: {
    canonical: "https://www.nextstudio.agency/en/invoice-generator",
  },
  openGraph: {
    title: "Invoice, Estimate & Policy Generator | Next Studio",
    description: "Create professional invoices, estimates and policies with your own brand. Download PDF or JPG, send by email and keep your document history organized.",
    url: "https://www.nextstudio.agency/en/invoice-generator",
    type: "website",
    siteName: "Next Studio",
    images: [{
      url: "https://www.nextstudio.agency/images/invoice-generator/invoice-generator-social-en.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice, Estimate & Policy Generator | Next Studio",
    description: "Create professional invoices, estimates and policies with your own brand. Download PDF or JPG, send by email and keep your document history organized.",
    images: ["https://www.nextstudio.agency/images/invoice-generator/invoice-generator-social-en.jpg"],
  },
  robots: { index: false, follow: false },
};

export default function Page() { return <InvoiceGeneratorSalesPage locale="en"/>; }
