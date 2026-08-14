import type { Metadata } from "next";
import { DigitalCardClientForm } from "@/components/digital-card-form/DigitalCardClientForm";

export const metadata: Metadata = {
  title: "Digital Card Client Onboarding | Next Studio",
  robots: { index: false, follow: false },
};

export default function DigitalCardFormPage() {
  return <DigitalCardClientForm />;
}
