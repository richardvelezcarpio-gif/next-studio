import type { Metadata } from "next";
import { WebDesignNycPage } from "@/components/seo/WebDesignNycPage";

const title = "Web Design NYC for Small Businesses | Next Studio";
const description = "Professional web design in NYC for small businesses. Fast, mobile-first, bilingual-ready websites built for local visibility, trust and customer conversion.";
const url = "https://www.nextstudio.agency/en/web-design-nyc";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/web-design-nyc",
    languages: {
      "en-US": "/en/web-design-nyc",
      "es-US": "/es/diseno-web-nyc",
      "x-default": "/en/web-design-nyc",
    },
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "NEXT STUDIO",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/conversion-landing/service-websites.png", width: 1200, height: 630, alt: "Web Design NYC for Small Businesses" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/conversion-landing/service-websites.png"] },
};

const faq = [
  ["How much does a small-business website cost in NYC?", "The right cost depends on the number of pages, features and level of support. Next Studio offers simple monthly website plans as well as custom solutions when a business needs a more advanced build."],
  ["Will my website be optimized for Google?", "We build a search-ready technical and content foundation, including clear page structure, metadata and local relevance. SEO growth is an ongoing process and rankings are never guaranteed."],
  ["Can you build my website in English and Spanish?", "Yes. Next Studio supports bilingual website experiences for businesses that serve English- and Spanish-speaking customers."],
  ["Do you work with businesses across New York City?", "Yes. This service is designed for small businesses serving customers across NYC, including Queens, Brooklyn, Manhattan, the Bronx and Staten Island."],
  ["How long does a business website take?", "Timing depends on the scope and how quickly content and approvals are available. We define the practical timeline after the initial diagnosis and project review."],
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Web Design NYC for Small Businesses",
        serviceType: "Small Business Web Design",
        provider: { "@type": "Organization", name: "Next Studio", url: "https://www.nextstudio.agency" },
        areaServed: { "@type": "City", name: "New York City" },
        url,
        description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nextstudio.agency/en" },
          { "@type": "ListItem", position: 2, name: "Websites", item: "https://www.nextstudio.agency/en/websites" },
          { "@type": "ListItem", position: 3, name: "Web Design NYC", item: url },
        ],
      },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><WebDesignNycPage locale="en" /></>;
}
