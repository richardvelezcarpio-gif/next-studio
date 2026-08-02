"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { Locale } from "@/types/locale";
import { websiteOptions } from "@/content/websites";
import styles from "./WebsiteOptionsAccordion.module.css";

export function WebsiteOptionsAccordion({ locale, contact }: { locale: Locale; contact: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = websiteOptions[locale];
  return <div className={styles.root}><div className={styles.cards}>{items.map((item, index) => <button className={`${styles.card} ${open === index ? styles.active : ""}`} key={item.title} onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 25vw" /><span>0{index + 1}</span><strong>{item.title}</strong><ChevronDown /></button>)}</div>{open !== null && <section className={styles.panel} key={items[open].title}><div className={styles.copy}><p>{items[open].subtitle}</p><h3>{items[open].title}</h3><span>{items[open].description}</span><a href={contact}>{items[open].cta}</a></div><Image className={styles.image} src={items[open].image} alt="" width={760} height={460} /><div><h4>{locale === "en" ? "Included features" : "Características incluidas"}</h4><ul>{items[open].features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul></div><div><h4>{locale === "en" ? "Ideal for" : "Ideal para"}</h4><div className={styles.ideal}>{items[open].ideal.map(item => <span key={item}>{item}</span>)}</div></div></section>}</div>;
}
