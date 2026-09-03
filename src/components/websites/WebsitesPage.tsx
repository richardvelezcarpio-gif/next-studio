import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe2, MonitorSmartphone, SearchCheck, Zap } from "lucide-react";
import { websites } from "@/content/websites";
import { WebsiteOptionsAccordion } from "./WebsiteOptionsAccordion";
import type { Locale } from "@/types/locale";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import styles from "./WebsitesPage.module.css";

const options = [
  { name: "Business Website", tag: "A strong first impression", image: "/images/websites/business-discover-premium.png", benefits: ["Custom visual direction", "Responsive experience", "Contact-ready structure"] },
  { name: "Growth Website", tag: "Most flexible", image: "/images/services/ecommerce-service.png", benefits: ["Content built for conversion", "Bilingual-ready structure", "SEO foundations"] },
  { name: "Custom Website", tag: "Designed around you", image: "/images/services/platform-service.png", benefits: ["Tailored pages and flows", "Premium interactions", "Scalable foundation"] },
];

export function WebsitesPage({ locale }: { locale: Locale }) {
  const c = websites[locale];
  const contact = `/${locale}/${locale === "en" ? "contact" : "contacto"}`;
  const projects = `/${locale}/${locale === "en" ? "projects" : "proyectos"}`;
  const nyc = locale === "en" ? "/en/web-design-nyc" : "/es/diseno-web-nyc";

  return (
    <>
      <BrandHeader locale={locale} />
      <main>
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>{c.eyebrow}</p>
              <h1>{c.title}</h1>
              <p>{c.intro}</p>
              <div className={styles.heroActions}>
                <Link className={styles.button} href={contact}>{c.cta}<ArrowRight size={17} /></Link>
                <Link className={styles.secondaryButton} href={projects}>{locale === "en" ? "View our work" : "Ver nuestro trabajo"}<ArrowRight size={17} /></Link>
              </div>
              <p><Link href={nyc}>{locale === "en" ? "Looking for web design in NYC? Explore our New York small-business web design service." : "¿Buscas diseño web en NYC? Conoce nuestro servicio para pequeños negocios de Nueva York."}</Link></p>
            </div>
            <div className={styles.heroVisual}>
              <Image src="/images/websites/websites-ecosystem-premium.png" alt={locale === "en" ? "Website, business platform, mobile app and estimate tools" : "Website, plataforma de negocio, app móvil y herramientas de estimados"} fill priority sizes="(max-width: 850px) 100vw, 56vw" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.heading}><p className={styles.kicker}>THE FOUNDATION</p><h2>{locale === "en" ? "Everything a professional website needs." : "Todo lo que necesita un website profesional."}</h2></div>
            <div className={styles.include}>{c.includes.map((item, index) => <article key={item}><span>{[<Globe2 key="g" />, <MonitorSmartphone key="m" />, <Zap key="z" />, <SearchCheck key="s" />][index]}</span><h3>{item}</h3><p>{locale === "en" ? "Designed as one connected experience." : "Diseñado como una experiencia conectada."}</p></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.types}`}>
          <div className={styles.wrap}>
            <div className={styles.heading}><p className={styles.kicker}>WEBSITES FOR EVERY GOAL</p><h2>{locale === "en" ? "Choose the experience your business needs." : "Elige la experiencia que tu negocio necesita."}</h2></div>
            <WebsiteOptionsAccordion locale={locale} contact={contact} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}><div className={styles.benefitPanel}><div><p className={styles.kicker}>BUILT FOR PERFORMANCE</p><h2>{locale === "en" ? "Beautiful on the surface. Built for results underneath." : "Hermoso por fuera. Creado para resultados por dentro."}</h2></div><div>{c.benefits.map(item => <p key={item}><Check size={18} />{item}</p>)}</div></div></div>
        </section>

        <section className={`${styles.section} ${styles.process}`}>
          <div className={styles.wrap}>
            <div className={styles.heading}><p className={styles.kicker}>OUR PROCESS</p><h2>{locale === "en" ? "A clear path from idea to launch." : "Un camino claro de la idea al lanzamiento."}</h2></div>
            <div className={styles.processGrid}>{c.process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}><div className={styles.heading}><p className={styles.kicker}>VISUAL EXAMPLES</p><h2>{c.samples}</h2></div><div className={styles.examples}><Image src="/images/projects/fashion-commerce.png" alt="E-commerce website example" fill sizes="(max-width:700px) 100vw, 50vw" /><Image src="/images/projects/analytics-platform.png" alt="Business website example" fill sizes="(max-width:700px) 100vw, 50vw" /></div></div>
        </section>

        <section className={`${styles.section} ${styles.pricing}`}>
          <div className={styles.wrap}>
            <div className={styles.heading}><p className={styles.kicker}>WEBSITE OPTIONS</p><h2>{locale === "en" ? "A strong starting point at every stage." : "Un punto de partida sólido en cada etapa."}</h2></div>
            <div className={styles.priceGrid}>{options.map((option, index) => <article key={option.name}><Image src={option.image} alt={option.name} width={760} height={410} /><div className={styles.optionBody}><span>{option.tag}</span><h3>{option.name}</h3><ul>{option.benefits.map(benefit => <li key={benefit}><Check size={15} />{benefit}</li>)}</ul><div className={styles.optionActions}><Link href={projects}>{locale === "en" ? "View Portfolio" : "Ver Portfolio"}<ArrowRight size={15} /></Link><Link href={index === 0 ? "#services" : contact}>{locale === "en" ? "See Features" : "Ver Características"}</Link></div></div></article>)}</div>
          </div>
        </section>

        <section className={styles.final}><div className={styles.wrap}><h2>{c.final}</h2><Link className={styles.button} href={contact}>{c.cta}<ArrowRight size={17} /></Link></div></section>
      </main>
      <BrandFooter locale={locale} />
    </>
  );
}
