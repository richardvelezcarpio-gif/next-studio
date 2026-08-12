import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { freePrograms, freeProgramsCopy } from "@/content/free-programs";
import type { Locale } from "@/types/locale";
import styles from "./FreeProgramsPage.module.css";

export function FreeProgramsPage({ locale }: { locale: Locale }) {
  const copy = freeProgramsCopy[locale];
  return <><BrandHeader locale={locale} /><main><section className={styles.hero}><div className={styles.wrap}><p>{copy.eyebrow}</p><h1>{copy.title.split("|").map((line) => <span key={line}>{line}</span>)}</h1><span>{copy.description}</span></div></section><section className={styles.gallery}><div className={styles.wrap}><div className={styles.grid}>{freePrograms.filter((program) => program.visible != false).map((program) => { const href = program.href === "/digital-card" ? `/${locale}/${locale === "en" ? "digital-card" : "tarjeta-digital"}` : program.href; const external = href.startsWith("http"); return <a className={styles.card} href={href} key={program.slug} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}><div className={styles.image}><Image src={program.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw"/><span>FREE</span></div><div className={styles.copy}><h2>{program.title[locale]}</h2><p>{program.description[locale]}</p><b>{locale === "en" ? "Open program" : "Abrir programa"}<ArrowUpRight size={17}/></b></div></a>; })}</div><section className={styles.idea}><p>{copy.ideaTitle}</p><span>{copy.ideaDescription}</span><a href={locale === "en" ? "/en/contact" : "/es/contacto"}>{copy.ideaCta}<ArrowUpRight size={17}/></a></section></div></section></main><BrandFooter locale={locale} /></>;
}
