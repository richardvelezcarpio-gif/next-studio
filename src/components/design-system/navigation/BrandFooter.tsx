import { site } from "@/config/site";
import Image from "next/image";
import { SocialLinks } from "@/components/design-system/social/SocialLinks";

export function BrandFooter({ locale }: { locale: "en" | "es" }) {
  const copy = locale === "en"
    ? { description: "Websites, platforms and tools that move business forward.", services: "Services", portfolio: "Portfolio", tools: "Tools", contact: "Contact", privacy: "Privacy", terms: "Terms", rights: "All rights reserved." }
    : { description: "Websites, plataformas y herramientas que impulsan tu negocio.", services: "Servicios", portfolio: "Portafolio", tools: "Herramientas", contact: "Contacto", privacy: "Privacidad", terms: "Términos", rights: "Todos los derechos reservados." };
  const base = `/${locale}`; const paths = locale === "en" ? { services: "services", projects: "projects", tools: "tools", contact: "contact", privacy: "privacy", terms: "terms" } : { services: "servicios", projects: "proyectos", tools: "herramientas", contact: "contacto", privacy: "privacidad", terms: "terminos" };
  return <footer className="site-footer"><div className="footer-inner"><div><p className="footer-brand"><Image src="/images/brand/next-studio-logo.png" alt="NEXT STUDIO — Building Digital Businesses" width={180} height={120}/></p><p className="footer-owned"><span aria-hidden="true">🇪🇨</span> PROUDLY ECUADORIAN-OWNED</p><p>{copy.description}</p><SocialLinks/></div><div className="footer-links"><a href={`${base}/${paths.services}`}>{copy.services}</a><a href={`${base}/${paths.projects}`}>{copy.portfolio}</a><a href={`${base}/${paths.tools}`}>{copy.tools}</a><a href={`${base}/${paths.contact}`}>{copy.contact}</a><a href={`${base}/${paths.privacy}`}>{copy.privacy}</a><a href={`${base}/${paths.terms}`}>{copy.terms}</a></div></div><p className="footer-bottom">© {new Date().getFullYear()} {site.name}. {copy.rights}</p></footer>;
}
