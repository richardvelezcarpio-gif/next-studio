import type { Metadata } from "next";
import { DigitalCardLanding } from "@/components/digital-card/DigitalCardLanding";

export const metadata: Metadata = {
  title: "Smart Digital Business Card | Next Studio",
  description: "Share your contact instantly and present your business with a modern, professional and interactive digital card.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/digital-card",
    languages: { es: "/es/tarjeta-digital", en: "/en/digital-card" },
  },
  openGraph: {
    title: "Smart Digital Business Card | Next Studio",
    description: "Share your contact instantly and present your business with a modern, professional and interactive digital card.",
    type: "website",
    url: "/en/digital-card",
    siteName: "Next Studio",
    locale: "en_US",
    images: [{ url: "/social/digital-card-social-preview.png", width: 1200, height: 630, alt: "Next Studio Smart Digital Business Card" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Digital Business Card | Next Studio",
    description: "Share your contact instantly and present your business with a modern, professional and interactive digital card.",
    images: ["/social/digital-card-social-preview.png"],
  },
};

export default function DigitalCardEnglishPage() {
  return <DigitalCardLanding initialLocale="en" />;
}
