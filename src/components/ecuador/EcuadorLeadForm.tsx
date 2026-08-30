"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/social";
import type { EcuadorLocale } from "@/config/markets";
import styles from "./EcuadorLeadForm.module.css";

export type EcuadorService = "website" | "ecommerce" | "card" | "apps" | "crm" | "ai" | "platform" | "other";

type Props = { locale: EcuadorLocale; defaultService?: EcuadorService; compact?: boolean };

const copy = {
  es: {
    title: "Cuéntanos qué necesita tu negocio",
    intro: "Selecciona lo que te interesa y envíanos los detalles. Te responderemos personalmente por WhatsApp.",
    name: "Nombre *", company: "Empresa / Negocio", email: "Email", phone: "Teléfono / WhatsApp",
    service: "¿Qué te interesa? *", stage: "¿En qué etapa estás?", budget: "Presupuesto aproximado",
    project: "Cuéntanos sobre tu proyecto", placeholder: "¿Qué quieres crear, mejorar o automatizar?",
    choose: "Selecciona una opción", send: "Enviar por WhatsApp", now: "Hablar ahora por WhatsApp",
    services: ["Página Web", "Tienda Online / E-commerce", "Tarjeta Digital", "Apps & Software", "CRM / Gestión de Clientes", "IA & Automatización", "Plataforma Personalizada", "Otro"],
    stages: ["Quiero empezar un proyecto nuevo", "Ya tengo algo y quiero mejorarlo", "Necesito automatizar mi negocio", "Necesito una solución personalizada", "Solo quiero información por ahora"],
    budgets: ["Menos de $500", "$500 – $1,000", "$1,000 – $2,000", "$2,000 – $5,000", "Más de $5,000", "Aún no lo sé"],
    greeting: "Hola Richard, estoy interesado/a en una solución de Next Studio Ecuador.",
    labels: { name: "Nombre", company: "Empresa", email: "Email", phone: "WhatsApp", service: "Servicio", stage: "Etapa", budget: "Presupuesto aproximado", project: "Proyecto", page: "Página desde donde consultó" },
    closing: "Quisiera recibir más información.",
  },
  en: {
    title: "Tell us what your business needs",
    intro: "Select what you're interested in and send us the details. We'll personally follow up with you on WhatsApp.",
    name: "Name *", company: "Company / Business", email: "Email", phone: "Phone / WhatsApp",
    service: "What are you interested in? *", stage: "What stage are you at?", budget: "Approximate budget",
    project: "Tell us about your project", placeholder: "What would you like to create, improve, or automate?",
    choose: "Select an option", send: "Send via WhatsApp", now: "Chat on WhatsApp",
    services: ["Website", "Online Store / E-commerce", "Digital Business Card", "Apps & Software", "CRM / Client Management", "AI & Automation", "Custom Platform", "Other"],
    stages: ["I want to start a new project", "I already have something and want to improve it", "I need to automate my business", "I need a custom solution", "I only want information for now"],
    budgets: ["Under $500", "$500 – $1,000", "$1,000 – $2,000", "$2,000 – $5,000", "Over $5,000", "I don't know yet"],
    greeting: "Hello Richard, I'm interested in a Next Studio Ecuador solution.",
    labels: { name: "Name", company: "Company", email: "Email", phone: "WhatsApp", service: "Service", stage: "Stage", budget: "Approximate budget", project: "Project", page: "Page visited" },
    closing: "I would like to receive more information.",
  },
} as const;

const serviceIndex: Record<EcuadorService, number> = { website: 0, ecommerce: 1, card: 2, apps: 3, crm: 4, ai: 5, platform: 6, other: 7 };
const planOptions = ["Website Basic", "Business", "Business Pro", "AI Business"] as const;

export function EcuadorLeadForm({ locale, defaultService = "other", compact = false }: Props) {
  const t = copy[locale];
  const [service, setService] = useState<string>(t.services[serviceIndex[defaultService]]);

  useEffect(() => {
    const selectedPlan = new URLSearchParams(window.location.search).get("plan");
    queueMicrotask(() => {
      if (selectedPlan && planOptions.includes(selectedPlan as (typeof planOptions)[number])) setService(selectedPlan);
      if (selectedPlan === "digital-card") setService(t.services[serviceIndex.card]);
    });
  }, [t.services]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "—");
    const message = [
      t.greeting, "",
      `${t.labels.name}: ${value("name")}`,
      `${t.labels.company}: ${value("company")}`,
      `${t.labels.email}: ${value("email")}`,
      `${t.labels.phone}: ${value("phone")}`, "",
      `${t.labels.service}: ${value("service")}`,
      `${t.labels.stage}: ${value("stage")}`,
      `${t.labels.budget}: ${value("budget")}`, "",
      `${t.labels.project}:`, value("project"), "",
      `${t.labels.page}: ${window.location.href}`, "",
      t.closing,
    ].join("\n");
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return <section id="ecuador-lead" className={`${styles.section} ${compact ? styles.compact : ""}`}>
    <div className={styles.intro}><span>{locale === "es" ? "CONTACTO COMERCIAL" : "BUSINESS CONTACT"}</span><h2>{t.title}</h2><p>{t.intro}</p><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.now}</a></div>
    <form className={styles.form} onSubmit={submit}>
      <label>{t.name}<input required name="name" autoComplete="name" /></label>
      <label>{t.company}<input name="company" autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" /></label>
      <label>{t.phone}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" /></label>
      <label>{t.service}<select required name="service" value={service} onChange={(event) => setService(event.target.value)}>{planOptions.map(option => <option key={option}>{option}</option>)}{t.services.map(option => <option key={option}>{option}</option>)}</select></label>
      <label>{t.stage}<select name="stage" defaultValue=""><option value="">{t.choose}</option>{t.stages.map(option => <option key={option}>{option}</option>)}</select></label>
      <label className={styles.full}>{t.budget}<select name="budget" defaultValue=""><option value="">{t.choose}</option>{t.budgets.map(option => <option key={option}>{option}</option>)}</select></label>
      <label className={styles.full}>{t.project}<textarea name="project" rows={4} placeholder={t.placeholder} /></label>
      <button type="submit"><MessageCircle size={18}/>{t.send}<ArrowUpRight size={17}/></button>
    </form>
  </section>;
}
