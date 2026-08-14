import type { Metadata } from "next";
import { DigitalCardBenefits } from "@/components/digital-card/DigitalCardBenefits";
export const metadata: Metadata = { title: "Beneficios de una Tarjeta Digital | Next Studio", description: "Descubre cómo una Tarjeta Digital de Next Studio te ayuda a compartir tu negocio, guardar contactos, conectar por WhatsApp, utilizar QR y reunir toda tu información en un solo enlace.", alternates: { canonical: "/es/tarjeta-digital/beneficios", languages: { es: "/es/tarjeta-digital/beneficios", en: "/en/digital-card/benefits" } } };
export default function Page() { return <DigitalCardBenefits initialLocale="es" />; }
