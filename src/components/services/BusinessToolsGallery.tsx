"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Locale } from "@/types/locale";
import s from "./BusinessToolsGallery.module.css";

const images = ["invoice-real.png", "estimate-real.png", "proposal-real.png", "payment-real.png", "order-real.png", "sample-real.png"];

const content = {
  en: [
    ["Invoice Generator", "Create clear, professional invoices your clients can understand and approve quickly.", "Present services, totals and due dates in one polished document.", "invoice-generator"],
    ["Estimate Generator", "Send accurate estimates that help clients make a decision with confidence.", "Show scope, pricing and next steps before the work begins.", "estimate-generator"],
    ["Proposal Generator", "Turn your offer into a persuasive proposal that keeps every detail organized.", "Explain the solution, investment and value in a shareable format.", "proposal-generator"],
    ["Payment Request", "Make payment requests simple, clear and ready to share in seconds.", "Give clients a professional payment summary with the right instructions.", "payment-request"],
    ["Order Form", "Collect the exact details you need before an order enters production.", "Reduce back-and-forth with a structured order form for your client.", "order-form"],
    ["Sample Generator", "Present sample details professionally and keep approvals moving.", "Give clients a clear visual record before the final production step.", "sample-generator"],
  ],
  es: [
    ["Generador de facturas", "Crea facturas claras y profesionales que tus clientes puedan entender y aprobar rápido.", "Presenta servicios, totales y fechas de pago en un solo documento.", "generador-facturas"],
    ["Generador de estimados", "Envía estimados precisos que ayuden a tus clientes a decidir con confianza.", "Muestra alcance, precios y próximos pasos antes de iniciar el trabajo.", "generador-estimados"],
    ["Generador de propuestas", "Convierte tu oferta en una propuesta persuasiva con todos los detalles organizados.", "Explica la solución, inversión y valor en un formato para compartir.", "generador-propuestas"],
    ["Solicitud de pago", "Haz las solicitudes de pago simples, claras y listas para compartir en segundos.", "Entrega a tu cliente un resumen profesional con las instrucciones correctas.", "solicitud-pago"],
    ["Formulario de pedido", "Recopila los detalles exactos antes de que un pedido entre a producción.", "Reduce mensajes innecesarios con un formulario estructurado para tu cliente.", "formulario-pedido"],
    ["Generador de muestras", "Presenta los detalles de muestras de forma profesional y avanza las aprobaciones.", "Entrega al cliente un registro visual claro antes de la producción final.", "generador-muestras"],
  ],
} as const;

export function BusinessToolsGallery({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = locale === "en" ? "tools" : "herramientas";
  const copy = locale === "en" ? { preview: "Live document preview", benefit: "Client benefit", open: "Open generator" } : { preview: "Vista previa del documento", benefit: "Beneficio para tu cliente", open: "Abrir generador" };

  return <div className={s.grid}>{content[locale].map(([title, benefit, detail, path], index) => {
    const expanded = open === index;
    return <article className={s.card} key={path}>
      <button className={s.trigger} type="button" onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded}>
        <div className={s.preview}><Image src={`/images/tools/${images[index]}`} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw" /></div>
        <div className={s.cardBody}><span>0{index + 1}</span><h3>{title}</h3><p>{benefit}</p><ChevronDown className={expanded ? s.up : ""} size={21} /></div>
      </button>
      {expanded && <div className={s.details}><p>{copy.benefit}</p><strong>{detail}</strong><Link href={`/${locale}/${base}/${path}`}>{copy.open}<ArrowRight size={16} /></Link></div>}
    </article>;
  })}</div>;
}
