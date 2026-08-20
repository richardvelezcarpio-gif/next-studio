import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, FileImage, FileText, History, Languages, Mail, ReceiptText, ShieldCheck } from "lucide-react";
import styles from "./InvoiceGeneratorSalesPage.module.css";

const demoUrl = "https://next-studio-invoice-premium-v9.vercel.app/app.html";
const checkoutUrl = "https://next-studio-invoice-premium-v9.vercel.app/#checkout";

const copy = {
  en: {
    language: "Español",
    languageHref: "/es/generador-facturas",
    eyebrow: "BRANDED BUSINESS DOCUMENTS",
    title: "Stop sending generic invoices.",
    lead: "Your documents. Your brand. Your own system.",
    intro: "A personalized Invoice, Estimate & Policy Generator built with your logo, colors and business information.",
    demo: "Try Live Demo",
    buy: "Get My Generator",
    preview: "LIVE GENERATOR",
    document: "INVOICE",
    client: "CLIENT",
    total: "TOTAL",
    includes: "Everything you need to create and send professional documents.",
    features: ["Custom logo and brand colors", "Invoice", "Estimate", "Policy", "Professional PDF", "High-quality JPG", "Email delivery", "Saved history", "English / Spanish", "US Letter 8.5 × 11"],
    pricing: "Simple pricing",
    setup: "$140 Setup",
    monthOne: "Month 1 Included",
    recurring: "Then $10/month starting month 2",
    explanation: "The setup personalizes your logo, colors and business information. Your first month of service is included. The $10 monthly membership begins in month two and continues until canceled.",
    secure: "Checkout and recurring billing are securely handled by the existing PayPal system.",
  },
  es: {
    language: "English",
    languageHref: "/en/invoice-generator",
    eyebrow: "DOCUMENTOS PROFESIONALES CON TU MARCA",
    title: "Deja de enviar facturas genéricas.",
    lead: "Tus documentos. Tu marca. Tu propio sistema.",
    intro: "Un generador personalizado de Facturas, Cotizaciones y Policies con el logo, los colores y la información de tu negocio.",
    demo: "Probar Demo Interactiva",
    buy: "Quiero Mi Generador",
    preview: "GENERADOR EN VIVO",
    document: "FACTURA",
    client: "CLIENTE",
    total: "TOTAL",
    includes: "Todo lo necesario para crear y enviar documentos profesionales.",
    features: ["Logo y colores personalizados", "Factura", "Cotización", "Policy", "PDF profesional", "JPG de alta calidad", "Envío por email", "Historial guardado", "English / Español", "US Letter 8.5 × 11"],
    pricing: "Precio sencillo",
    setup: "$140 Configuración",
    monthOne: "Primer mes incluido",
    recurring: "Luego $10/mes desde el segundo mes",
    explanation: "La configuración personaliza el logo, los colores y la información de tu negocio. El primer mes del servicio está incluido. La membresía de $10 al mes comienza en el segundo mes y continúa hasta que la canceles.",
    secure: "El checkout y la membresía recurrente se procesan de forma segura mediante el sistema PayPal existente.",
  },
} as const;

const icons = [ShieldCheck, ReceiptText, FileText, FileText, FileText, FileImage, Mail, History, Languages, Check];

export function InvoiceGeneratorSalesPage({ locale }: { locale: "en" | "es" }) {
  const c = copy[locale];
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href={`/${locale}`} aria-label="Next Studio"><Image src="/images/brand/next-studio-logo.png" alt="Next Studio" width={120} height={76} priority /></Link>
      <Link className={styles.language} href={c.languageHref}>{c.language}</Link>
    </header>

    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <h2>{c.lead}</h2>
        <p className={styles.intro}>{c.intro}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={demoUrl} target="_blank" rel="noopener noreferrer">{c.demo}<ArrowRight size={18}/></a>
          <a className={styles.secondary} href={checkoutUrl} target="_blank" rel="noopener noreferrer">{c.buy}</a>
        </div>
      </div>

      <div className={styles.mockup} aria-label={c.preview}>
        <div className={styles.windowBar}><span/><span/><span/><b>{c.preview}</b></div>
        <div className={styles.document}>
          <div><Image src="/images/brand/next-studio-logo.png" alt="" width={92} height={58}/><strong>{c.document}</strong></div>
          <p>{c.client}</p><i/><i/><i/><i/><div className={styles.total}><span>{c.total}</span><b>$1,250.00</b></div>
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div><p className={styles.eyebrow}>INVOICE · ESTIMATE · POLICY</p><h2>{c.includes}</h2></div>
      <div className={styles.featureGrid}>{c.features.map((feature, index) => { const Icon = icons[index]; return <span key={feature}><Icon size={19}/>{feature}</span>; })}</div>
    </section>

    <section className={styles.pricing}>
      <div><p className={styles.eyebrow}>{c.pricing}</p><h2>{c.setup}</h2><strong>{c.monthOne}</strong><h3>{c.recurring}</h3><p>{c.explanation}</p><small>{c.secure}</small></div>
      <div className={styles.priceActions}><a className={styles.primary} href={demoUrl} target="_blank" rel="noopener noreferrer">{c.demo}</a><a className={styles.whiteButton} href={checkoutUrl} target="_blank" rel="noopener noreferrer">{c.buy}<ArrowRight size={18}/></a></div>
    </section>
  </main>;
}
