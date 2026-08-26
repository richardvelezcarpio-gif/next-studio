import type { Metadata } from "next";
import type { Market, SiteLocale } from "@/lib/market-routing";

const siteUrl = "https://www.nextstudio.agency";

export function homeMetadata(locale: SiteLocale, market: Market): Metadata {
  const isSpanish = locale === "es";
  const path = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const title = isSpanish
    ? "Soluciones digitales e IA para tu negocio"
    : "Digital Solutions & AI for Your Business";
  const description = isSpanish
    ? "Websites, aplicaciones y automatizaciones con IA para vender más, ahorrar tiempo y hacer crecer tu negocio."
    : "AI-powered websites, applications and automation that help your business sell more, save time and grow.";
  const languages = market === "ec"
    ? { es: `${siteUrl}/ec/es`, en: `${siteUrl}/ec/en`, "x-default": `${siteUrl}/ec/es` }
    : { es: `${siteUrl}/es`, en: `${siteUrl}/en`, "x-default": `${siteUrl}/en` };
  const image = { url: `${siteUrl}/images/home/next-studio-future-social.png`, width: 1200, height: 630, alt: title };
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}`, languages },
    openGraph: { title, description, url: `${siteUrl}${path}`, siteName: "Next Studio", locale: isSpanish ? "es_US" : "en_US", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
