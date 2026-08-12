import type { Metadata } from "next";
import { DigitalCardLanding } from "@/components/digital-card/DigitalCardLanding";

export const metadata: Metadata = {
  title: "Tarjeta Digital Next Studio",
  description: "Comparte tu negocio con una tarjeta digital profesional.",
  robots: { index: false, follow: false },
};

export default function DigitalCardSpanishPage() {
  return <DigitalCardLanding initialLocale="es" />;
}
