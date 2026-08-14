import type { Metadata } from "next";
import { DigitalCardBenefits } from "@/components/digital-card/DigitalCardBenefits";
export const metadata: Metadata = { title: "Digital Business Card Benefits | Next Studio", description: "Discover how a Next Studio Digital Card helps customers save your contact, connect through WhatsApp, scan your QR and access your entire business from one link.", alternates: { canonical: "/en/digital-card/benefits", languages: { es: "/es/tarjeta-digital/beneficios", en: "/en/digital-card/benefits" } } };
export default function Page() { return <DigitalCardBenefits initialLocale="en" />; }
