import type { Metadata } from "next";
import { DigitalCardLanding } from "@/components/digital-card/DigitalCardLanding";

export const metadata: Metadata = {
  title: "Tarjeta Digital Inteligente | Next Studio",
  description: "Comparte tu contacto al instante y presenta tu negocio de forma moderna, profesional e interactiva.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/es/tarjeta-digital",
    languages: { es: "/es/tarjeta-digital", en: "/en/digital-card" },
  },
  openGraph: {
    title: "Tarjeta Digital Inteligente | Next Studio",
    description: "Comparte tu contacto al instante y presenta tu negocio de forma moderna, profesional e interactiva.",
    type: "website",
    url: "/es/tarjeta-digital",
    siteName: "Next Studio",
    locale: "es_EC",
    images: [{ url: "/social/digital-card-social-preview.png", width: 1200, height: 630, alt: "Tarjeta Digital Inteligente de Next Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarjeta Digital Inteligente | Next Studio",
    description: "Comparte tu contacto al instante y presenta tu negocio de forma moderna, profesional e interactiva.",
    images: ["/social/digital-card-social-preview.png"],
  },
};

export default function DigitalCardSpanishPage() {
  return <DigitalCardLanding initialLocale="es" />;
}
