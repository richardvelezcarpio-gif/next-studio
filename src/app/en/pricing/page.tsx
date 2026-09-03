import { ConversionLanding } from "@/components/pricing/ConversionLanding";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({ title: "Simple plans for a stronger digital business", description: "Explore flexible website and platform plans designed for ambitious businesses.", path: "/en/pricing", image: "/images/websites/business-corporate-premium.png", locale: "en_US" });

export default function Page(){return <ConversionLanding locale="en"/>;}
