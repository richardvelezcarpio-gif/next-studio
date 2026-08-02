import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricing } from "@/content/pricing";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import s from "./PricingPage.module.css";

export function PricingPage({ locale }: { locale: "en" | "es" }) {
  const c = pricing[locale];
  const contact = `/${locale}/${locale === "en" ? "contact" : "contacto"}`;
  const chatHref = `https://wa.me/12393337935?text=${encodeURIComponent(locale === "en" ? "Hello, I would like help choosing the right NEXT STUDIO plan." : "Hola, deseo ayuda para elegir el plan correcto de NEXT STUDIO.")}`;
  return <><BrandHeader locale={locale}/><main>
    <section className={s.hero}><div className={s.wrap}><p>PRICING & SOLUTIONS</p><h1>{c.title}</h1><span>{c.intro}</span></div></section>
    <section className={s.section}><div className={s.wrap}>
      <div className={s.promotion}><strong>{c.freeMonths}</strong><span>{c.paymentPlans}</span></div>
      <div className={s.plans}>{c.plans.map((plan, i) => { const [name, setup, monthly, domain, items] = plan as [string, string, string, string, string[]]; return <article key={name} className={i === 1 ? s.popular : ""}>{i === 1 && <b>{c.popular}</b>}<h2>{name}</h2><strong>{setup}</strong><p>{monthly} · {domain}</p><small>{c.freeMonths}</small><ul>{items.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul><Link href={contact}>{c.cta}<ArrowRight size={15}/></Link></article>; })}</div>
      <article className={s.custom}><p>{c.customTitle}</p><h2>{c.customTitle}</h2><span>{c.customText}</span><Link href={contact}>{c.customCta}<ArrowRight size={16}/></Link></article>
    </div></section>
    <section className={s.soft}><div className={s.wrap}><p>ONLINE DESIGNERS · +$300 EACH</p><div className={s.addons}>{["Banner Designer", "Business Card Designer", "Flyer Designer", "Poster Designer", "T-Shirt Designer", "Sticker Designer", "Yard Sign Designer"].map(x => <span key={x}>{x}</span>)}</div></div></section>
    <section className={s.soft}><div className={s.wrap}><p>WHAT IS INCLUDED</p><div className={s.addons}>{["Custom design", "Bilingual structure", "Responsive", "SSL", "Deployment", "Support", "Git / version control", "Vercel-ready deployment"].map(x => <span key={x}><Check size={15}/>{x}</span>)}</div></div></section>
    <section className={s.section}><div className={s.wrap}><p>PAYMENT POLICY</p><div className={s.policy}>{c.paymentPlans} {locale === "en" ? "Setup fee, monthly service and domain fee are discussed before the project starts." : "Los cargos de instalación, servicio mensual y dominio se conversan antes de iniciar el proyecto."}</div><p>FAQ</p>{c.faq.map(item => { const [q, a] = item as [string, string]; return <details key={q}><summary>{q}</summary><p>{a}</p></details>; })}</div></section>
    <section className={s.final}><div className={s.wrap}><h1>{c.final}</h1><Link href={contact}>{c.cta}<ArrowRight size={16}/></Link><a href={chatHref} target="_blank" rel="noreferrer">{c.chat}</a></div></section>
  </main><BrandFooter locale={locale}/></>;
}
