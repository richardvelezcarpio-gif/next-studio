import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Check, Clock3, Cpu, Globe2, Heart, LineChart, Rocket, Scissors, ShieldCheck, ShoppingBag, Sparkles, Store, Utensils, WandSparkles, Zap } from "lucide-react";
import type { Locale } from "@/types/locale";
import type { Market } from "@/lib/market-routing";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import styles from "./FutureHome.module.css";
import { AIDiagnosisSpotlight } from "./AIDiagnosisSpotlight";
import { AIContentStrategySpotlight } from "./AIContentStrategySpotlight";

const content = {
  es: {
    eyebrow: "EL FUTURO ES DIGITAL. EL PODER ES TUYO.", title: ["TU NEGOCIO", "MERECE EL FUTURO."], subtitle: "LA IA TRABAJA POR TI. TÚ CRECES SIN LÍMITES.",
    intro: "Creamos websites, aplicaciones y automatizaciones inteligentes que te ayudan a vender más, ahorrar tiempo y brindar la mejor experiencia a tus clientes 24/7.", start: "Iniciar Tu Proyecto", cases: "Ver Casos de Éxito",
    benefits: ["Diseño Premium", "IA Integrada", "Escalable", "Seguro", "Soporte 24/7"],
    localKicker: "HECHO PARA NEGOCIOS LOCALES COMO EL TUYO", localTitle: "Impulsamos negocios reales\nen el mundo real.", localText: "Soluciones digitales con IA diseñadas para dueños de negocios que quieren atraer más clientes, vender más y ahorrar tiempo.",
    industries: [["Tiendas", "Vende más online y en tu comunidad."], ["Barbershops", "Más citas, menos cancelaciones."], ["Beauty Salons", "Agenda digital, recordatorios y más clientes felices."], ["Restaurantes y Cafeterías", "Órdenes online, reservas y reseñas que venden."], ["Emprendedores", "Lleva tu idea al siguiente nivel con tecnología."]],
    reality: "LA REALIDAD ES CLARA", realityTitle: "Si tu negocio no usa IA,\ntu competencia ya te está superando.", without: "SIN IA", with: "CON IA", bad: ["Procesos lentos", "Clientes perdidos", "Oportunidades que se escapan", "Crecimiento limitado"], good: ["Automatización inteligente", "Clientes felices y leales", "Crecimiento sin límites", "Decisiones basadas en datos"],
    solutionKicker: "CONSTRUIMOS EL FUTURO DE TU NEGOCIO", solutionTitle: "Más que websites.\nCreamos soluciones digitales inteligentes que venden.", solutions: [["Websites Inteligentes", "Diseños que convierten visitantes en clientes con IA integrada."], ["E-Commerce Avanzado", "Vende 24/7 con pagos inteligentes, inventario y automatizaciones."], ["Automatización con IA", "Chatbots, seguimiento, flujos de trabajo y más trabajando por ti."], ["Aplicaciones a Medida", "Sistemas y plataformas hechos para escalar tu negocio."]],
    experience: "EXPERIENCIAS QUE IMPACTAN. TECNOLOGÍA QUE CONVIERTE.", projects: ["Website Empresarial", "Website de Servicios", "E-Commerce Inteligente", "Landing Pages que Venden"],
    why: "POR QUÉ ELEGIR NEXT STUDIO", whyTitle: "Tecnología de vanguardia.\nEstrategia que da resultados.", reasons: ["IA & Automatización Avanzada", "Diseño Premium & Experiencia de Usuario", "SEO, Velocidad & Rendimiento", "Integración con WhatsApp, CRM y más", "Soporte continuo y escalabilidad", "Seguridad y respaldo garantizado"], invest: "INVIERTE HOY EN TU TRANSFORMACIÓN DIGITAL", investText: "y asegura el liderazgo de tu negocio mañana.",
    ctaTitle: "El futuro no espera.\n¿Listo para liderar tu industria con IA?", ctaText: "Hablemos de tu proyecto y llevemos tu negocio al siguiente nivel.", cta: "Quiero transformar mi negocio",
  },
  en: {
    eyebrow: "THE FUTURE IS DIGITAL. THE POWER IS YOURS.", title: ["YOUR BUSINESS", "DESERVES THE FUTURE."], subtitle: "AI WORKS FOR YOU. YOU GROW WITHOUT LIMITS.",
    intro: "We create intelligent websites, applications and automations that help you sell more, save time and deliver the best customer experience 24/7.", start: "Start Your Project", cases: "View Success Stories",
    benefits: ["Premium Design", "Integrated AI", "Scalable", "Secure", "24/7 Support"],
    localKicker: "BUILT FOR LOCAL BUSINESSES LIKE YOURS", localTitle: "We empower real businesses\nin the real world.", localText: "AI-powered digital solutions for business owners who want to attract more customers, sell more and save time.",
    industries: [["Stores", "Sell more online and in your community."], ["Barbershops", "More appointments, fewer cancellations."], ["Beauty Salons", "Digital scheduling, reminders and happier clients."], ["Restaurants & Cafés", "Online orders, reservations and reviews that sell."], ["Entrepreneurs", "Take your idea to the next level with technology."]],
    reality: "THE REALITY IS CLEAR", realityTitle: "If your business is not using AI,\nyour competition is already ahead.", without: "WITHOUT AI", with: "WITH AI", bad: ["Slow processes", "Lost customers", "Missed opportunities", "Limited growth"], good: ["Intelligent automation", "Happy, loyal customers", "Unlimited growth", "Data-driven decisions"],
    solutionKicker: "WE BUILD THE FUTURE OF YOUR BUSINESS", solutionTitle: "More than websites.\nWe create intelligent digital solutions that sell.", solutions: [["Intelligent Websites", "Designs that turn visitors into customers with integrated AI."], ["Advanced E-Commerce", "Sell 24/7 with smart payments, inventory and automation."], ["AI Automation", "Chatbots, follow-up and workflows working for you."], ["Custom Applications", "Systems and platforms built to scale your business."]],
    experience: "EXPERIENCES THAT IMPACT. TECHNOLOGY THAT CONVERTS.", projects: ["Business Website", "Service Website", "Intelligent E-Commerce", "Landing Pages That Sell"],
    why: "WHY CHOOSE NEXT STUDIO", whyTitle: "Leading-edge technology.\nStrategy that delivers results.", reasons: ["Advanced AI & Automation", "Premium Design & User Experience", "SEO, Speed & Performance", "WhatsApp, CRM and more integrations", "Continuous support and scalability", "Security and reliable backups"], invest: "INVEST IN YOUR DIGITAL TRANSFORMATION TODAY", investText: "and secure your business leadership tomorrow.",
    ctaTitle: "The future will not wait.\nReady to lead your industry with AI?", ctaText: "Let’s talk about your project and take your business to the next level.", cta: "Transform my business",
  },
} as const;

const industryImages = ["clothing.jpg", "services.jpg", "beauty.jpg", "restaurant.jpg", "printing.jpg"];
const industryIcons = [Store, Scissors, WandSparkles, Utensils, Rocket];
const solutionIcons = [Globe2, ShoppingBag, Bot, Cpu];
const projectImages = ["npny-business-mockup.png", "alexandra-web-mockup.png", "fashion-commerce.png", "analytics-platform.png"];
const benefitIcons = [WandSparkles, Sparkles, LineChart, ShieldCheck, Clock3];

export function FutureHome({ locale, market = "us" }: { locale: Locale; market?: Market }) {
  const c = content[locale];
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;
  const contact = `${base}/${locale === "en" ? "contact" : "contacto"}`;
  const projects = market === "us" ? `/${locale}/${locale === "en" ? "projects" : "proyectos"}` : contact;
  return <><BrandHeader locale={locale} market={market}/><main className={styles.home}>
    <section className={styles.hero}><div className={styles.container}><div className={styles.heroCopy}><p className={styles.kicker}>{c.eyebrow}</p><h1><span>{c.title[0]}</span><span>{c.title[1]}</span></h1><h2>{c.subtitle}</h2><p className={styles.lead}>{c.intro}</p><div className={styles.actions}><Link className={styles.primary} href={contact}>{c.start}<ArrowRight/></Link><Link className={styles.secondary} href={projects}>{c.cases}</Link><Link className={styles.diagnosisLink} href={locale === "es" ? "/es/diagnostico-ia" : "/en/ai-business-diagnosis"}>{locale === "es" ? "Diagnostica tu Negocio con IA" : "AI Business Diagnosis"}<Sparkles/></Link></div><div className={styles.benefits}>{c.benefits.map((item,i) => {const Icon=benefitIcons[i];return <div key={item}><Icon/><span>{item}</span></div>})}</div></div><div className={styles.heroScene}><Image src="/images/home/future-city-hero.png" alt="" fill priority loading="eager" sizes="(max-width: 900px) 100vw, 58vw"/><div className={`${styles.floatCard} ${styles.sales}`}><LineChart/><span>{locale === "es" ? "Ventas con IA" : "AI-powered sales"}</span><strong>+156%</strong></div><div className={`${styles.floatCard} ${styles.clients}`}><Bot/><span>{locale === "es" ? "Clientes 24/7" : "Customers 24/7"}</span></div><div className={`${styles.floatCard} ${styles.efficiency}`}><Zap/><span>{locale === "es" ? "Eficiencia" : "Efficiency"}</span><strong>+70%</strong></div></div></div></section>
    <section className={styles.local}><div className={styles.container}><div className={styles.intro}><p className={styles.kicker}>{c.localKicker}</p><h2>{c.localTitle}</h2><p>{c.localText}</p></div><div className={styles.industryGrid}>{c.industries.map(([title,text],i)=>{const Icon=industryIcons[i];return <article key={title}><div className={styles.image}><Image src={`/images/industries/${industryImages[i]}`} alt="" fill sizes="220px"/></div><span><Icon/></span><h3>{title}</h3><p>{text}</p></article>})}</div></div></section>
    <section className={styles.compare}><div className={styles.container}><div className={styles.compareIntro}><p className={styles.kicker}>{c.reality}</p><h2>{c.realityTitle}</h2><div className={styles.miniStats}>{[["92%",locale === "es"?"experiencias comienzan en línea":"experiences begin online"],["+67%",locale === "es"?"ventas con automatización":"sales with automation"],["24/7",locale === "es"?"tu negocio nunca duerme":"your business never sleeps"],["-40%",locale === "es"?"costos operativos":"operating costs"]].map(([n,t])=><div key={n}><strong>{n}</strong><small>{t}</small></div>)}</div></div><div className={styles.board}><div><h3>{c.without}</h3>{c.bad.map(x=><p key={x}><Clock3/>{x}</p>)}</div><span className={styles.vs}>VS</span><div className={styles.good}><h3>{c.with}</h3>{c.good.map(x=><p key={x}><Sparkles/>{x}</p>)}</div></div></div></section>
    <section className={styles.solutions}><div className={styles.container}><div className={styles.intro}><p className={styles.kicker}>{c.solutionKicker}</p><h2>{c.solutionTitle}</h2></div><div className={styles.solutionGrid}>{c.solutions.map(([title,text],i)=>{const Icon=solutionIcons[i];return <article key={title}><Icon/><h3>{title}</h3><p>{text}</p><ArrowRight/></article>})}</div></div></section>
    <AIDiagnosisSpotlight locale={locale}/>
    <AIContentStrategySpotlight locale={locale}/>
    <section className={styles.experiences}><div className={styles.container}><p>{c.experience}</p><div className={styles.projectGrid}>{c.projects.map((title,i)=><article key={title}><Image src={`/images/projects/${projectImages[i]}`} alt="" fill sizes="(max-width: 600px) 86vw, 25vw"/><h3>{title}</h3></article>)}</div></div></section>
    <section className={styles.why}><div className={styles.container}><article><p className={styles.kicker}>{c.why}</p><h2>{c.whyTitle}</h2><div className={styles.reasonGrid}>{c.reasons.map(x=><p key={x}><Check/>{x}</p>)}</div></article><article><p className={styles.kicker}>{c.invest}</p><h3>{c.investText}</h3><div className={styles.bigStats}>{[["+500",locale === "es"?"Proyectos exitosos":"Successful projects"],["+98%",locale === "es"?"Clientes satisfechos":"Satisfied clients"],["+10",locale === "es"?"Países confían":"Countries reached"],["24/7",locale === "es"?"Soporte especializado":"Specialized support"]].map(([n,t],i)=><div key={n}>{i===1?<Heart/>:i===2?<Rocket/>:<Clock3/>}<strong>{n}</strong><span>{t}</span></div>)}</div></article></div></section>
    <section className={styles.cta}><div className={styles.container}><div><h2>{c.ctaTitle}</h2><p>{c.ctaText}</p><Link className={styles.primary} href={contact}>{c.cta}<ArrowRight/></Link></div><div className={styles.ctaScene}><Image src="/images/home/future-city-hero.png" alt="" fill sizes="50vw"/></div></div></section>
  </main><BrandFooter locale={locale} market={market}/></>;
}
