import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { EcuadorLocale } from "@/config/markets";
import styles from "./EcuadorFooter.module.css";

export function EcuadorFooter({ locale }: { locale: EcuadorLocale }) {
  const es = locale === "es";
  const base = `/ec/${locale}`;
  const links = es
    ? [["Soluciones", "soluciones"], ["Páginas Web", "paginas-web"], ["Apps & Software", "apps"], ["IA & Automatización", "ia-automatizacion"], ["Tarjeta Digital", "tarjeta-digital"], ["Precios", "precios"]]
    : [["Solutions", "solutions"], ["Websites", "websites"], ["Apps & Software", "apps"], ["AI & Automation", "ai-automation"], ["Digital Card", "digital-card"], ["Pricing", "pricing"]];

  return <footer className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.brand}><div className={styles.logoPanel}><Image src="/images/brand/next-studio-logo.png" alt="Next Studio" width={170} height={96}/></div><p>{es ? "Tecnología, diseño y acompañamiento para negocios que quieren avanzar." : "Technology, design, and guidance for businesses ready to move forward."}</p><span><MapPin size={16}/> Ecuador</span></div>
      <div><strong>{es ? "Explorar" : "Explore"}</strong><nav>{links.slice(0,3).map(([label,path])=><Link key={path} href={`${base}/${path}`}>{label}</Link>)}</nav></div>
      <div><strong>{es ? "Soluciones" : "Solutions"}</strong><nav>{links.slice(3).map(([label,path])=><Link key={path} href={`${base}/${path}`}>{label}</Link>)}</nav></div>
      <div><strong>{es ? "Hablemos de tu negocio" : "Let's talk about your business"}</strong><p>{es ? "Cuéntanos qué quieres crear, mejorar o automatizar." : "Tell us what you want to build, improve, or automate."}</p><Link className={styles.contact} href={`${base}/${es ? "contacto" : "contact"}`}><Mail size={17}/>{es ? "Contactar" : "Contact us"}<ArrowUpRight size={16}/></Link></div>
    </div>
    <div className={styles.bottom}><span>© {new Date().getFullYear()} Next Studio. {es ? "Todos los derechos reservados." : "All rights reserved."}</span><span>{es ? "Soluciones digitales para Ecuador" : "Digital solutions for Ecuador"}</span></div>
  </footer>;
}
