import type { Metadata } from "next";
import { DigitalCardCheckout } from "@/components/digital-card-checkout/DigitalCardCheckout";

export const metadata: Metadata = {
  title: "Digital Business Card Checkout | Next Studio",
  robots: { index: false, follow: false },
};

export default async function DigitalCardCheckoutPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  return <DigitalCardCheckout locale={lang === "en" ? "en" : "es"}/>;
}
