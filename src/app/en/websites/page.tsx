import type { Metadata } from "next";
import { WebsitesPage } from "@/components/websites/WebsitesPage";

export const metadata: Metadata = {
  title: "Websites that move your business forward",
  description: "Premium websites designed to help your business earn trust, generate leads and grow online.",
  alternates: { canonical: "/en/websites" },
  openGraph: {
    title: "Websites that move your business forward | NEXT STUDIO",
    description: "Premium websites designed to help your business earn trust, generate leads and grow online.",
    url: "/en/websites",
    siteName: "NEXT STUDIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites that move your business forward | NEXT STUDIO",
    description: "Premium websites designed to help your business earn trust, generate leads and grow online.",
  },
};

export default function Page(){return <WebsitesPage locale="en"/>;}
