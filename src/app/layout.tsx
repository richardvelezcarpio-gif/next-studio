import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { WhatsAppLiveContact } from "@/components/design-system/contact/WhatsAppLiveContact";
import { configuredSocialLinks, getXHandle } from "@/config/social";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextstudio.agency";
const googleMeasurementId = "G-H0X6BQDPKP";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "NEXT STUDIO", template: "%s | NEXT STUDIO" },
  description: "NEXT STUDIO builds premium websites, custom platforms, CRM systems and AI solutions for growing businesses.",
  keywords: ["web design", "custom business platforms", "CRM", "NYC websites", "business automation"],
  robots: { index: true, follow: true },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  openGraph: { title: "NEXT STUDIO", description: "Building digital businesses with websites, platforms, CRM systems and AI solutions.", type: "website" },
  twitter: { card: "summary_large_image", title: "NEXT STUDIO", description: "Websites, platforms and AI solutions.", creator: getXHandle() },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "Organization", name: "NEXT STUDIO", url: siteUrl, email: "info@nextprintnyc.com", description: "Building digital businesses with websites, platforms, CRM systems and AI solutions.", sameAs: configuredSocialLinks.map(([, url]) => url) };
  const isProduction = process.env.NODE_ENV === "production";
  return <html lang="en"><body>{children}<WhatsAppLiveContact /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body>{isProduction && <GoogleAnalytics gaId={googleMeasurementId} />}</html>;
}
