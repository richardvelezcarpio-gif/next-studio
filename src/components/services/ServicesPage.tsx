import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "@/content/services";
import type { Locale } from "@/types/locale";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BusinessToolsGallery } from "./BusinessToolsGallery";
import s from "./ServicesPage.module.css";

const pics = ["websites-service.png", "ecommerce-service.png", "platform-service.png", "crm-service.png", "business-tools-service.png", "ai-service.png"];

export function ServicesPage({ locale }: { locale: Locale }) {
  const c = services[locale];
  const contact = `/${locale}/${locale === "en" ? "contact" : "contacto"}`;
  const chatHref = `https://wa.me/12393337935?text=${encodeURIComponent(locale === "en" ? "Hello, I would like information about creating a website or custom business platform." : "Hola, deseo información para crear una página web o plataforma personalizada para mi negocio.")}`;
  return <><BrandHeader locale={locale}/><main>
    <section className={s.hero}><div className={s.wrap}><div><p>DIGITAL SERVICES</p><h1>{c.title}</h1><span>{c.intro}</span><Link href={contact}>{c.cta}<ArrowRight size={17}/></Link></div><Image src="/images/services/services-hero.png" alt="Digital services ecosystem" fill priority/></div></section>
    <section className={s.section}><div className={s.wrap}><p>CORE SERVICES</p><h2>{locale === "en" ? "The connected pieces of a stronger digital business." : "Las piezas conectadas de un negocio digital más fuerte."}</h2><div className={s.core}>{c.core.map(([title, description], i) => <article key={title}><Image src={`/images/services/${pics[i]}`} alt={title} fill/><div><Sparkles size={17}/><h3>{title}</h3><span>{description}</span><Link href={contact}>{locale === "en" ? "Learn More" : "Conoce más"} <ArrowRight size={15}/></Link></div></article>)}</div></div></section>
    <section className={s.support}><div className={s.wrap}><p>SUPPORTING SERVICES</p><div>{c.support.map(x => <span key={x}><Check size={16}/>{x}</span>)}</div></div></section>
    <section className={s.section}><div className={s.wrap}><p>SERVICES BY BUSINESS NEED</p><div className={s.needs}>{c.needs.map(([title, description], i) => <article key={title}><b>0{i + 1}</b><h3>{title}</h3><span>{description}</span></article>)}</div></div></section>
    <section className={s.tools}><div className={s.wrap}><p>{locale === "en" ? "BUSINESS TOOLS" : "HERRAMIENTAS DE NEGOCIO"}</p><h2>{locale === "en" ? "Documents your clients can understand and act on." : "Documentos que tus clientes pueden entender y usar."}</h2><BusinessToolsGallery locale={locale}/></div></section>
    <section className={s.section}><div className={s.wrap}><p>INDUSTRIES</p><div className={s.industries}>{c.industries.map(x => <span key={x}>{x}</span>)}</div></div></section>
    <section className={s.dark}><div className={s.wrap}><p>WHY CHOOSE US</p><div>{c.why.map(x => <span key={x}><Check size={17}/>{x}</span>)}</div></div></section>
    <section className={s.section}><div className={s.wrap}><p>PROCESS</p><div className={s.process}>{c.process.map((x, i) => <article key={x}><b>0{i + 1}</b><h3>{x}</h3></article>)}</div></div></section>
    <section className={s.final}><div className={s.wrap}><h2>{c.final}</h2><div><Link href={contact}>{c.cta}<ArrowRight size={17}/></Link><a href={chatHref} target="_blank" rel="noreferrer">{c.chat}</a></div></div></section>
  </main><BrandFooter locale={locale}/></>;
}
