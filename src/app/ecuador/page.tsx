import type { Metadata } from "next";
import { EcuadorLanding } from "@/components/ecuador/EcuadorLanding";

export const metadata: Metadata = {
  title: "Páginas Web, Tiendas Online y Plataformas para Ecuador | Next Studio",
  description: "Creamos páginas web, tiendas online y plataformas personalizadas para emprendedores y negocios en Ecuador. Recibe pedidos, administra clientes y controla tu negocio desde cualquier lugar.",
  keywords: ["páginas web Ecuador", "tiendas online Ecuador", "plataformas para negocios Ecuador", "diseño web Ecuador", "ecommerce Ecuador", "sistemas para negocios Ecuador", "páginas web para emprendedores", "digitalizar negocio Ecuador"],
  alternates: { canonical: "/ecuador" },
  openGraph: { title: "Páginas Web, Tiendas Online y Plataformas para Ecuador | Next Studio", description: "Soluciones digitales para emprendedores y negocios en Ecuador.", url: "/ecuador", locale: "es_EC", images: [{ url: "/images/ecuador/ecuador-hero.png", width: 1536, height: 864, alt: "Soluciones digitales de Next Studio para Ecuador" }] },
};

export default function EcuadorPage() { return <EcuadorLanding />; }
