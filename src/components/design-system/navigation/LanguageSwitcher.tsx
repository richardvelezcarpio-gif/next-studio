"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const equivalents: Record<string, string> = {
  "/en/websites": "/es/paginas-web",
  "/es/paginas-web": "/en/websites",
  "/en/platforms": "/es/plataformas",
  "/es/plataformas": "/en/platforms",
  "/en/services": "/es/servicios",
  "/es/servicios": "/en/services",
  "/en/projects": "/es/proyectos",
  "/es/proyectos": "/en/projects",
  "/en/pricing": "/es/precios",
  "/es/precios": "/en/pricing",
  "/en/tools": "/es/herramientas",
  "/es/herramientas": "/en/tools",
  "/en/contact": "/es/contacto",
  "/es/contacto": "/en/contact",
  "/en/about": "/es/nosotros",
  "/es/nosotros": "/en/about",
};

export function LanguageSwitcher({ locale }: { locale: "en" | "es" }) {
  const pathname = usePathname();
  const href = equivalents[pathname] ?? (locale === "en" ? "/es" : "/en");
  return <Link href={href} aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}>{locale === "en" ? "ES" : "EN"}</Link>;
}
