import type { Metadata } from "next";

type ShareMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageVersion?: string;
  locale: "en_US" | "es_US";
};

/**
 * Produces a complete, canonical social preview for a public page.
 * Keep each page image distinct so links shared on social media are easy to recognize.
 */
export function createShareMetadata({ title, description, path, image, imageWidth = 1200, imageHeight = 630, imageVersion = "20260802-2", locale }: ShareMetadataOptions): Metadata {
  // Facebook caches Open Graph images by URL. Versioning the asset makes a new
  // share fetch the current visual instead of an earlier logo-only preview.
  const socialImage = { url: `${image}?v=${imageVersion}`, width: imageWidth, height: imageHeight, alt: title };

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
