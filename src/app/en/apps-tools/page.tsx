import type { Metadata } from "next";
import { AppsToolsPage } from "@/components/apps-tools/AppsToolsPage";

const title = "Business Apps & Tools | Next Studio";
const description = "Discover Next Studio digital apps and business tools for invoicing, business management, sales, marketing and productivity.";
const canonical = "https://www.nextstudio.agency/en/apps-tools";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical,
    languages: {
      es: "https://www.nextstudio.agency/es/apps-herramientas",
      en: canonical,
    },
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Next Studio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/free-programs/free-programs-social.png", width: 1200, height: 630, alt: "Next Studio apps and tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/free-programs/free-programs-social.png"],
  },
};

export default function Page() { return <AppsToolsPage locale="en" />; }
