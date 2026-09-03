import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Search, Smartphone, Zap } from "lucide-react";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import styles from "./WebDesignNycPage.module.css";

type Locale = "en" | "es";

type Copy = {
  eyebrow: string;
  titleA: string;
  titleB: string;
  intro: string;
  diagnosis: string;
  pricing: string;
  proof: string[];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionText: string;
  benefits: { title: string; text: string }[];
  localEyebrow: string;
  localTitle: string;
  localText: string;
  localPoints: string[];
  processEyebrow: string;
  processTitle: string;
  process: { title: string; text: string }[];
  industriesEyebrow: string;
  industriesTitle: string;
  industries: string[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
  websites: string;
  projects: string;
};

const copy: Record<Locale, Copy> = {
  en: {
    eyebrow: "WEB DESIGN NYC · SMALL BUSINESS GROWTH",
    titleA: "Web design in NYC built to",
    titleB: "turn visitors into customers.",
    intro: "Next Studio creates fast, professional and bilingual-ready websites for New York small businesses—built around trust, local visibility and measurable growth.",
    diagnosis: "Start with a business diagnosis",
    pricing: "See website plans",
    proof: ["NYC small-business focus", "English + Spanish", "Mobile-first", "Search-ready foundation"],
    sectionEyebrow: "MORE THAN A PRETTY WEBSITE",
    sectionTitle: "A website should help your business get found, trusted and contacted.",
    sectionText: "We connect strategy, design, mobile performance and clear calls to action so your website supports the way a real local business grows.",
    benefits: [
      { title: "Strategic website design", text: "Clear messaging and page structure designed around what your customers need to know before they contact you." },
      { title: "Mobile-first experience", text: "A responsive experience for customers searching, comparing and contacting businesses from their phones." },
      { title: "Local SEO foundation", text: "Search-friendly structure, metadata and local relevance so Google can better understand your service and market." },
      { title: "Conversion-focused actions", text: "WhatsApp, forms, scheduling and next-step buttons placed where they support real customer action." },
    ],
    localEyebrow: "LOCAL VISIBILITY",
    localTitle: "Built for New York businesses that need more than online presence.",
    localText: "Your website and your Google presence should reinforce each other. We build a clear digital foundation that explains what you do, who you serve and where you work.",
    localPoints: ["Search-ready website structure", "Google Business alignment", "NYC service-area relevance", "Clear service and contact signals"],
    processEyebrow: "THE NEXT METHOD",
    processTitle: "Diagnosis → Website → Google → Traffic → Customers → Sales",
    process: [
      { title: "Diagnose", text: "We identify visibility, website and follow-up gaps before deciding what to build." },
      { title: "Build", text: "We create the pages, messaging and conversion paths your business actually needs." },
      { title: "Get found", text: "We strengthen the technical and local signals that help search engines understand your business." },
      { title: "Improve", text: "We use real performance data to decide what should be improved next." },
    ],
    industriesEyebrow: "FOR REAL LOCAL BUSINESSES",
    industriesTitle: "Web design for the businesses New Yorkers use every day.",
    industries: ["Restaurants", "Barbershops", "Beauty & Spa", "Daycare", "Contractors", "Mechanics", "Printing", "Professional Services"],
    faqEyebrow: "NYC WEB DESIGN FAQ",
    faqTitle: "Questions small-business owners ask before building a website.",
    faqs: [
      { q: "How much does a small-business website cost in NYC?", a: "The right cost depends on the number of pages, features and level of support. Next Studio offers simple monthly website plans as well as custom solutions when a business needs a more advanced build." },
      { q: "Will my website be optimized for Google?", a: "We build a search-ready technical and content foundation, including clear page structure, metadata and local relevance. SEO growth is an ongoing process and rankings are never guaranteed." },
      { q: "Can you build my website in English and Spanish?", a: "Yes. Next Studio supports bilingual website experiences for businesses that serve English- and Spanish-speaking customers." },
      { q: "Do you work with businesses across New York City?", a: "Yes. This service is designed for small businesses serving customers across NYC, including Queens, Brooklyn, Manhattan, the Bronx and Staten Island." },
      { q: "How long does a business website take?", a: "Timing depends on the scope and how quickly content and approvals are available. We define the practical timeline after the initial diagnosis and project review." },
    ],
    finalTitle: "Before spending more on marketing, make sure your digital foundation can convert.",
    finalText: "Start with a clear diagnosis, then build only what your business needs to improve visibility, follow-up and sales.",
    websites: "Explore all website solutions",
    projects: "View real projects",
  },
  es: {
    eyebrow: "DISEÑO WEB NYC · CRECIMIENTO PARA PEQUEÑOS NEGOCIOS",
    titleA: "Diseño web en NYC creado para",
    titleB: "convertir visitas en clientes.",
    intro: "Next Studio crea páginas web rápidas, profesionales y preparadas para experiencias bilingües para pequeños negocios de Nueva York, con enfoque en confianza, visibilidad local y crecimiento medible.",
    diagnosis: "Empezar con un diagnóstico de negocio",
    pricing: "Ver planes de páginas web",
    proof: ["Enfoque en pequeños negocios de NYC", "Español + English", "Mobile-first", "Base preparada para búsquedas"],
    sectionEyebrow: "MÁS QUE UNA PÁGINA BONITA",
    sectionTitle: "Tu página debe ayudarte a ser encontrado, generar confianza y recibir contactos.",
    sectionText: "Conectamos estrategia, diseño, rendimiento móvil y llamados a la acción claros para que tu web apoye el crecimiento real de un negocio local.",
    benefits: [
      { title: "Diseño web estratégico", text: "Mensaje y estructura claros según lo que tus clientes necesitan entender antes de contactarte." },
      { title: "Experiencia mobile-first", text: "Una experiencia responsive para clientes que buscan, comparan y contactan negocios desde su teléfono." },
      { title: "Base de SEO local", text: "Estructura, metadata y relevancia local para ayudar a Google a entender mejor tu servicio y mercado." },
      { title: "Acciones para convertir", text: "WhatsApp, formularios, agenda y botones de siguiente paso ubicados para facilitar acciones reales." },
    ],
    localEyebrow: "VISIBILIDAD LOCAL",
    localTitle: "Creado para negocios de Nueva York que necesitan más que presencia digital.",
    localText: "Tu página web y tu presencia en Google deben trabajar juntas. Construimos una base digital clara que explica qué haces, a quién ayudas y dónde trabajas.",
    localPoints: ["Estructura preparada para búsquedas", "Alineación con Google Business", "Relevancia para el área de NYC", "Señales claras de servicios y contacto"],
    processEyebrow: "EL MÉTODO NEXT",
    processTitle: "Diagnóstico → Website → Google → Visitas → Clientes → Ventas",
    process: [
      { title: "Diagnosticamos", text: "Identificamos problemas de visibilidad, website y seguimiento antes de decidir qué construir." },
      { title: "Construimos", text: "Creamos las páginas, el mensaje y los caminos de conversión que tu negocio realmente necesita." },
      { title: "Te ayudamos a aparecer", text: "Fortalecemos señales técnicas y locales para que los buscadores entiendan mejor tu negocio." },
      { title: "Mejoramos", text: "Usamos datos reales de rendimiento para decidir qué optimizar después." },
    ],
    industriesEyebrow: "PARA NEGOCIOS LOCALES REALES",
    industriesTitle: "Diseño web para los negocios que los neoyorquinos usan todos los días.",
    industries: ["Restaurantes", "Barberías", "Beauty & Spa", "Daycare", "Contratistas", "Mecánicas", "Imprentas", "Servicios Profesionales"],
    faqEyebrow: "PREGUNTAS SOBRE DISEÑO WEB EN NYC",
    faqTitle: "Lo que un pequeño negocio quiere saber antes de crear su página.",
    faqs: [
      { q: "¿Cuánto cuesta una página web para un pequeño negocio en NYC?", a: "El costo correcto depende de la cantidad de páginas, funciones y soporte. Next Studio ofrece planes mensuales simples y también soluciones personalizadas cuando el negocio necesita algo más avanzado." },
      { q: "¿Mi página estará optimizada para Google?", a: "Construimos una base técnica y de contenido preparada para búsquedas, con estructura clara, metadata y relevancia local. El SEO es un proceso continuo y ninguna posición puede garantizarse." },
      { q: "¿Pueden crear mi página en español e inglés?", a: "Sí. Next Studio crea experiencias bilingües para negocios que atienden clientes en español y en inglés." },
      { q: "¿Trabajan con negocios en toda la ciudad de Nueva York?", a: "Sí. Este servicio está pensado para pequeños negocios que atienden clientes en NYC, incluyendo Queens, Brooklyn, Manhattan, Bronx y Staten Island." },
      { q: "¿Cuánto tarda una página web para negocio?", a: "El tiempo depende del alcance y de qué tan rápido estén disponibles el contenido y las aprobaciones. Definimos un calendario práctico después del diagnóstico y revisión inicial." },
    ],
    finalTitle: "Antes de invertir más en publicidad, asegúrate de que tu base digital pueda convertir.",
    finalText: "Empieza con un diagnóstico claro y construye solamente lo que tu negocio necesita para mejorar visibilidad, seguimiento y ventas.",
    websites: "Ver todas las soluciones web",
    projects: "Ver proyectos reales",
  },
};

const icons = [Zap, Smartphone, Search, MapPin];

export function WebDesignNycPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isEn = locale === "en";
  const diagnosis = isEn ? "/en/ai-business-diagnosis" : "/es/diagnostico-ia";
  const pricing = isEn ? "/en/pricing" : "/es/precios";
  const websites = isEn ? "/en/websites" : "/es/paginas-web";
  const projects = isEn ? "/en/projects" : "/es/proyectos";

  return (
    <>
      <BrandHeader locale={locale} market="us" />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{c.eyebrow}</p>
              <h1>{c.titleA} <em>{c.titleB}</em></h1>
              <p className={styles.lead}>{c.intro}</p>
              <div className={styles.actions}>
                <Link className={styles.primary} href={diagnosis}>{c.diagnosis}<ArrowRight size={17} /></Link>
                <Link className={styles.secondary} href={pricing}>{c.pricing}<ArrowRight size={17} /></Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image src="/images/conversion-landing/service-websites.png" alt={isEn ? "Small business website design in New York City" : "Diseño de página web para pequeño negocio en Nueva York"} fill priority sizes="(max-width: 900px) 92vw, 46vw" />
            </div>
          </div>
          <div className={styles.proof}>{c.proof.map(item => <span key={item}><Check size={15} />{item}</span>)}</div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>{c.sectionEyebrow}</p>
            <h2>{c.sectionTitle}</h2>
            <p>{c.sectionText}</p>
          </div>
          <div className={styles.cards}>
            {c.benefits.map((item, i) => {
              const Icon = icons[i];
              return <article key={item.title}><span><Icon size={22} /></span><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </div>
        </section>

        <section className={styles.local}>
          <div className={styles.localVisual}>
            <Image src="/images/conversion-landing/service-google.png" alt={isEn ? "Local business visibility on Google in NYC" : "Visibilidad de negocio local en Google en NYC"} fill sizes="(max-width: 900px) 92vw, 48vw" />
          </div>
          <div className={styles.localCopy}>
            <p className={styles.eyebrow}>{c.localEyebrow}</p>
            <h2>{c.localTitle}</h2>
            <p>{c.localText}</p>
            <ul>{c.localPoints.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul>
            <Link href={websites}>{c.websites}<ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className={`${styles.section} ${styles.process}`}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>{c.processEyebrow}</p>
            <h2>{c.processTitle}</h2>
          </div>
          <div className={styles.steps}>{c.process.map((item, i) => <article key={item.title}><b>0{i + 1}</b><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </section>

        <section className={styles.industries}>
          <p className={styles.eyebrow}>{c.industriesEyebrow}</p>
          <h2>{c.industriesTitle}</h2>
          <div>{c.industries.map(item => <span key={item}>{item}</span>)}</div>
          <Link href={projects}>{c.projects}<ArrowRight size={16} /></Link>
        </section>

        <section className={`${styles.section} ${styles.faq}`}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>{c.faqEyebrow}</p>
            <h2>{c.faqTitle}</h2>
          </div>
          <div className={styles.faqList}>{c.faqs.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </section>

        <section className={styles.final}>
          <div><h2>{c.finalTitle}</h2><p>{c.finalText}</p></div>
          <Link className={styles.primary} href={diagnosis}>{c.diagnosis}<ArrowRight size={17} /></Link>
        </section>
      </main>
      <BrandFooter locale={locale} market="us" />
    </>
  );
}
