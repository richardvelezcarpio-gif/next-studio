import type { Metadata } from "next";

type ShareMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: string;
  locale: "en_US" | "es_US";
};

/**
 * Produces a complete, canonical social preview for a public page.
 * Keep each page image distinct so links shared on social media are easy to recognize.
 */
export function createShareMetadata({ title, description, path, image, locale }: ShareMetadataOptions): Metadata {
  // Facebook caches Open Graph images by URL. Versioning the asset makes a new
  // share fetch the current visual instead of an earlier logo-only preview.
  const socialImage = { url: `${image}?v=20260802-2`, width: 1200, height: 630, alt: title };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | NEXT STUDIO`,
      description,
      url: path,
      siteName: "NEXT STUDIO",
      locale,
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | NEXT STUDIO`,
      description,
      images: [socialImage],
    },
  };
}
