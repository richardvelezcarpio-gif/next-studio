import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Globe2,
  Layers3,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { homeContent } from "@/content/home";
import type { Locale } from "@/types/locale";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { IndustryGallery } from "./IndustryGallery";
import styles from "./HomePage.module.css";

const portfolio = [
  {
    image: "/images/projects/fashion-commerce.png",
    status: "Published",
    label: "Commerce Website",
  },
  {
    image: "/images/projects/analytics-platform.png",
    status: "In Development",
    label: "Operations Platform",
  },
];

const businessTools = [
  { icon: FileText, title: "Invoice" },
  { icon: BarChart3, title: "Estimate" },
  { icon: Layers3, title: "Proposal" },
  { icon: MessageCircle, title: "Share Link" },
  { icon: Zap, title: "Automation" },
];

export function HomePage({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const contact = `/${locale}/${locale === "en" ? "contact" : "contacto"}`;
  return (
    <>
      <BrandHeader locale={locale} />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <Sparkles size={14} /> {content.eyebrow}
              </p>
              <h1>{content.heroTitle}</h1>
              <p className={styles.heroText}>{content.heroText}</p>
              <div className={styles.heroActions}>
                <Link href={contact} className={styles.primaryButton}>
                  {content.primary}
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href={`/${locale}/${locale === "en" ? "projects" : "proyectos"}`}
                  className={styles.secondaryButton}
                >
                  {content.secondary}
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.monitor}>
                <Image
                  src="/images/projects/analytics-platform.png"
                  alt="Business analytics dashboard"
                  fill
                  priority
                />
              </div>
              <div className={styles.laptop}>
                <Image
                  src="/images/projects/fashion-commerce.png"
                  alt="Premium business website"
                  fill
                />
              </div>
              <div className={styles.tablet}>
                <Image
                  src="/images/projects/workflow-platform.png"
                  alt="Operations dashboard"
                  fill
                />
              </div>
              <div className={styles.featureTop}>
                {locale === "en" ? "AI Automation" : "Automatización con IA"}
              </div>
              <div className={styles.featureBottom}>
                {locale === "en" ? "Online Booking" : "Reservas online"}
              </div>
            </div>
          </div>
      </section>
      <section className={styles.stats}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {content.stats.map((stat, index) => (
                <div className={styles.stat} key={stat}>
                  <span>{["✦", "◌", "⌘", "◷"][index]}</span>
                  <p>{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>WHAT WE DO</p>
              <h2>Digital systems with a clear purpose.</h2>
            </div>
            <div className={styles.serviceGrid}>
              {content.services.map((service, index) => (
                <article className={styles.serviceCard} key={service.title}>
                  <span className={styles.serviceIcon}>
                    {
                      [
                        <Globe2 key="g" />,
                        <Layers3 key="l" />,
                        <Sparkles key="s" />,
                      ][index]
                    }
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ArrowRight size={19} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="work"
          className={`${styles.section} ${styles.workSection}`}
        >
          <div className={styles.container}>
            <div className={styles.workIntro}>
              <p className={styles.kicker}>{content.workEyebrow}</p>
              <h2>{content.workTitle}</h2>
              <p>{content.workText}</p>
              <Link
                href={`/${locale}/${locale === "en" ? "projects" : "proyectos"}`}
              >
                {locale === "en" ? "View portfolio" : "Ver portfolio"}{" "}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.portfolioGrid}>
              {portfolio.map((project) => (
                <article className={styles.projectCard} key={project.label}>
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    sizes="(max-width: 700px) 100vw, 45vw"
                  />
                  <div>
                    <span>{project.status}</span>
                    <p>{project.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>
                {locale === "en" ? "INDUSTRIES" : "INDUSTRIAS"}
              </p>
              <h2>
                {locale === "en"
                  ? "Digital solutions shaped for your industry."
                  : "Soluciones digitales creadas para tu industria."}
              </h2>
            </div>
            <IndustryGallery locale={locale} />
          </div>
        </section>
        <section
          id="tools"
          className={`${styles.section} ${styles.toolsSection}`}
        >
          <div className={styles.container}>
            <div className={styles.toolsIntro}>
              <div>
                <p className={styles.kicker}>BUSINESS TOOLS</p>
                <h2>{content.toolsTitle}</h2>
              </div>
              <p>{content.toolsText}</p>
            </div>
            <div className={styles.toolGrid}>
              {businessTools.map(({ icon: ToolIcon, title }) => (
                <div className={styles.toolCard} key={title}>
                  <ToolIcon size={28} />
                  <h3>{title}</h3>
                  <p>
                    {locale === "en"
                      ? "Create, generate and share."
                      : "Crea, genera y comparte."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>A PATH FOR EVERY STAGE</p>
              <h2>Start focused. Grow connected.</h2>
            </div>
            <div className={styles.planGrid}>
              {content.plans.map((plan, index) => (
                <article className={styles.planCard} key={plan.title}>
                  <span>0{index + 1}</span>
                  <h3>{plan.title}</h3>
                  <p>{plan.text}</p>
                  <Link href={contact}>
                    {locale === "en" ? "Learn more" : "Conocer más"}{" "}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.trust}>
          <div className={styles.container}>
            <div className={styles.trustCopy}>
              <p className={styles.kicker}>WHY NEXT STUDIO</p>
              <h2>{content.trustTitle}</h2>
            </div>
            <div className={styles.trustList}>
              {content.trust.map((item) => (
                <p key={item}>
                  <Check size={18} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaPanel}>
              <div>
                <p className={styles.kicker}>LET&apos;S BUILD</p>
                <h2>{content.ctaTitle}</h2>
                <p>{content.ctaText}</p>
                <Link href={contact} className={styles.primaryButton}>
                  {content.ctaButton}
                  <ArrowRight size={17} />
                </Link>
              </div>
              <div className={styles.ctaDevice}>
                <div className={styles.ctaLaptop}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.ctaGlow} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <BrandFooter locale={locale} />
    </>
  );
}
