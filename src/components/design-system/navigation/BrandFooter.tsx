import { site } from "@/config/site";
import Image from "next/image";
import { SocialLinks } from "@/components/design-system/social/SocialLinks";
import type { Market } from "@/lib/market-routing";

export function BrandFooter({ locale, market = "us" }: { locale: "en" | "es"; market?: Market }) {
  const copy = locale === "en"
    ? { description: "Websites, platforms and tools that move business forward.", services: "Services", portfolio: "Portfolio", tools: "Tools", contact: "Contact", privacy: "Privacy", terms: "Terms", rights: "All rights reserved.", owned: "PROUDLY ECUADORIAN-OWNED", logo: "NEXT STUDIO — Building Digital Businesses" }
    : { description: "Páginas web, plataformas y herramientas que impulsan tu negocio.", services: "Servicios", portfolio: "Portafolio", tools: "Herramientas", contact: "Contacto", privacy: "Privacidad", terms: "Términos", rights: "Todos los derechos reservados.", owned: "ORGULLOSAMENTE DE PROPIEDAD ECUATORIANA", logo: "NEXT STUDIO — Creando Negocios Digitales" };
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const paths = market === "ec"
    ? locale === "en" ? [[copy.services, "solutions"], [copy.tools, "apps"], ["Pricing", "pricing"], ["About", "about"], [copy.contact, "contact"]] : [[copy.services, "soluciones"], [copy.tools, "apps"], ["Precios", "precios"], ["Nosotros", "nosotros"], [copy.contact, "contacto"]]
    : locale === "en" ? [[copy.services, "services"], [copy.tools, "tools"], [copy.contact, "contact"], [copy.privacy, "privacy"], [copy.terms, "terms"]] : [[copy.services, "servicios"], [copy.tools, "herramientas"], [copy.contact, "contacto"], [copy.privacy, "privacidad"], [copy.terms, "terminos"]];
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-about"><p className="footer-brand"><Image src="/images/brand/next-studio-logo.png" alt={copy.logo} width={180} height={120}/></p><div className="footer-copy"><p className="footer-owned"><span aria-hidden="true">🇪🇨</span> {copy.owned}</p><p>{copy.description}</p><SocialLinks/></div></div><div className="footer-links">{paths.map(([label, path]) => <a href={`${base}/${path}`} key={path}>{label}</a>)}</div></div><p className="footer-bottom">© {new Date().getFullYear()} {site.name}. {copy.rights}</p></footer>;
}
