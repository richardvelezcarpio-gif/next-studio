import type { Metadata } from "next";
import { DigitalCardBenefits } from "@/components/digital-card/DigitalCardBenefits";
export const metadata: Metadata = {
  title: "Tarjeta Digital | Next Studio",
  description: "Tu negocio, siempre contigo. Conecta, comparte y lleva tu presencia profesional al siguiente nivel.",
  alternates: {
    canonical: "/es/tarjeta-digital/beneficios",
    languages: { es: "/es/tarjeta-digital/beneficios", en: "/en/digital-card/benefits" },
  },
  openGraph: {
    title: "Tarjeta Digital | Next Studio",
    description: "Tu negocio, siempre contigo. Conecta, comparte y lleva tu presencia profesional al siguiente nivel.",
    url: "https://www.nextstudio.agency/es/tarjeta-digital/beneficios",
    type: "website",
    images: [{
      url: "https://www.nextstudio.agency/images/digital-card/tarjeta-digital-social-preview.png",
      width: 1200,
      height: 630,
      alt: "Tarjeta Digital de Next Studio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarjeta Digital | Next Studio",
    description: "Tu negocio, siempre contigo. Conecta, comparte y lleva tu presencia profesional al siguiente nivel.",
    images: ["https://www.nextstudio.agency/images/digital-card/tarjeta-digital-social-preview.png"],
  },
};
export default function Page() { return <DigitalCardBenefits initialLocale="es" />; }
