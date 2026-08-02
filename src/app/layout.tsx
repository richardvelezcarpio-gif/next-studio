import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppLiveContact } from "@/components/design-system/contact/WhatsAppLiveContact";

export const metadata: Metadata = {
  title: { default: "NEXT STUDIO", template: "%s | NEXT STUDIO" },
  description: "Premium websites, custom platforms, CRM systems and business tools.",
  keywords: ["web design", "custom business platforms", "CRM", "NYC websites", "business automation"],
  openGraph: { title: "NEXT STUDIO", description: "Building digital businesses with websites, platforms, CRM systems and AI solutions.", type: "website" },
  twitter: { card: "summary_large_image", title: "NEXT STUDIO", description: "Websites, platforms and AI solutions." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<WhatsAppLiveContact /></body></html>;
}
