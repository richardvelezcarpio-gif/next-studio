import { ArrowRight, CalendarDays, Sparkles, Target, WandSparkles } from "lucide-react";
import type { Market } from "@/lib/market-routing";
import type { Locale } from "@/types/locale";
import styles from "./AIContentSystemSpotlight.module.css";

export function AIContentSystemSpotlight({ locale, market }: { locale: Locale; market: Market }) {
  const es = locale === "es";
  const base = market === "ec" ? `/ec/${locale}` : `/${locale}`;

  return <section className={styles.section}>
    <div className={styles.card}>
      <div className={styles.copy}>
        <span className={styles.badge}><Sparkles />AI CONTENT SYSTEM</span>
        <h2>{es ? "Tu contenido, organizado por IA." : "Your content, organized by AI."}</h2>
        <p>{es
          ? "Estrategia, contenido diario y publicaciones diseñadas para atraer, conectar y convertir."
          : "Strategy, daily content and posts designed to attract, connect and convert."}</p>
        <a href={`${base}/ai-content-system?lang=${locale}`}>
          {es ? "Conocer AI Content System" : "Explore AI Content System"}<ArrowRight />
        </a>
      </div>
      <div className={styles.visual} aria-hidden="true">
        <div><Target /><span>{es ? "Atraer" : "Attract"}</span></div>
        <div><WandSparkles /><span>{es ? "Conectar" : "Connect"}</span></div>
        <div><CalendarDays /><span>{es ? "Convertir" : "Convert"}</span></div>
      </div>
    </div>
  </section>;
}
