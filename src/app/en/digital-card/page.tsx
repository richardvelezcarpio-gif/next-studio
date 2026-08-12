import type { Metadata } from "next";
import { DigitalCardLanding } from "@/components/digital-card/DigitalCardLanding";

export const metadata: Metadata = {
  title: "Next Studio Digital Card",
  description: "Share your business with a professional digital card.",
  robots: { index: false, follow: false },
};

export default function DigitalCardEnglishPage() {
  return <DigitalCardLanding initialLocale="en" />;
}
