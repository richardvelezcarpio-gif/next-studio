import Link from "next/link";
import { ArrowRight, FileText, Mail, MessageCircle, Printer, Link2, Download } from "lucide-react";
import { toolsContent } from "@/content/tools";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BusinessToolsGallery } from "@/components/services/BusinessToolsGallery";
import s from "./ToolsPage.module.css";

export function ToolsPage({ locale }: { locale: "en" | "es" }) {
  const c = toolsContent[locale];
  const channels = [Mail, MessageCircle, MessageCircle, Link2, Printer, Download];
  return <><BrandHeader locale={locale}/><main>
    <section className={s.hero}><div><p>{c.eyebrow}</p><h1>{c.title}</h1><span>{c.desc}</span><div className={s.mock}><FileText/><Link2/><MessageCircle/></div></div></section>
    <section className={s.section}><div className={s.visualTools}><BusinessToolsGallery locale={locale}/></div></section>
    <section className={s.soft}><h2>{c.how}</h2><div className={s.steps}>{c.steps.map((x, i) => <article key={x}><b>0{i + 1}</b><h3>{x}</h3><p>{c.noLogin}</p></article>)}</div></section>
    <section className={s.section}><h2>{c.share}</h2><div className={s.share}>{channels.map((Icon, i) => <span key={c.channels[i]}><Icon size={21}/>{c.channels[i]}</span>)}</div><p>{c.payment}</p></section>
    <section className={s.final}><h2>{c.final}</h2><Link href={`/${locale}/${locale === "en" ? "contact" : "contacto"}`}>{c.cta}<ArrowRight size={16}/></Link></section>
  </main><BrandFooter locale={locale}/></>;
}
