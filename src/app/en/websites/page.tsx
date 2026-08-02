import { WebsitesPage } from "@/components/websites/WebsitesPage";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({
  title: "Websites that move your business forward",
  description: "Premium websites designed to help your business earn trust, generate leads and grow online.",
  path: "/en/websites",
  image: "/images/websites/websites-hero.png",
  locale: "en_US",
});

export default function Page(){return <WebsitesPage locale="en"/>;}
