import type { Metadata } from "next";
import { WebDesignNycPage } from "@/components/seo/WebDesignNycPage";

const title = "Diseño Web NYC para Pequeños Negocios | Next Studio";
const description = "Diseño web profesional en NYC para pequeños negocios. Páginas rápidas, mobile-first y bilingües, creadas para visibilidad local, confianza y conversión.";
const url = "https://www.nextstudio.agency/es/diseno-web-nyc";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/es/diseno-web-nyc",
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
    locale: "es_US",
    type: "website",
    images: [{ url: "/images/conversion-landing/service-websites.png", width: 1200, height: 630, alt: "Diseño Web NYC para Pequeños Negocios" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/conversion-landing/service-websites.png"] },
};

const faq = [
  ["¿Cuánto cuesta una página web para un pequeño negocio en NYC?", "El costo depende de la cantidad de páginas, funciones y soporte. Next Studio ofrece planes mensuales simples y soluciones personalizadas para proyectos más avanzados."],
  ["¿Mi página estará optimizada para Google?", "Construimos una base técnica y de contenido preparada para búsquedas, con estructura clara, metadata y relevancia local. El SEO es un proceso continuo y no se pueden garantizar posiciones."],
  ["¿Pueden crear mi página en español e inglés?", "Sí. Next Studio crea experiencias bilingües para negocios que atienden clientes en español y en inglés."],
  ["¿Trabajan con negocios en toda la ciudad de Nueva York?", "Sí. Este servicio está diseñado para pequeños negocios que atienden clientes en NYC, incluyendo Queens, Brooklyn, Manhattan, Bronx y Staten Island."],
  ["¿Cuánto tarda una página web para negocio?", "El tiempo depende del alcance y de qué tan rápido estén disponibles el contenido y las aprobaciones. Definimos un calendario práctico después del diagnóstico inicial."],
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Diseño Web NYC para Pequeños Negocios",
        serviceType: "Diseño Web para Pequeños Negocios",
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
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.nextstudio.agency/es" },
          { "@type": "ListItem", position: 2, name: "Páginas Web", item: "https://www.nextstudio.agency/es/paginas-web" },
          { "@type": "ListItem", position: 3, name: "Diseño Web NYC", item: url },
        ],
      },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><WebDesignNycPage locale="es" /></>;
}
