import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEXT STUDIO",
    short_name: "NEXT STUDIO",
    description: "Building digital businesses with websites, platforms, and AI solutions.",
    start_url: "/en/websites",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#146ef5",
    icons: [
      { src: "/images/brand/ns-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/brand/ns-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
