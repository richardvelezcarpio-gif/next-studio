import { ArrowRight, CalendarDays, FileText, ImageIcon, Sparkles, Video } from "lucide-react";
import { AI_CONTENT_STRATEGY_URL } from "@/config/navigation";
import type { Locale } from "@/types/locale";
import styles from "./AIContentStrategySpotlight.module.css";

export function AIContentStrategySpotlight({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const href = es ? "/es/ai-content-strategy" : AI_CONTENT_STRATEGY_URL;
  return <section className={styles.section}><div className={styles.card}>
    <div className={styles.copy}><span className={styles.badge}><Sparkles/>{es ? "NUEVO · ESTRATEGIA CON IA" : "NEW · AI STRATEGY"}</span><h2>{es ? "Convierte contenido en estrategia." : "Turn content into strategy."}</h2><p>{es ? "Crea un plan de contenido claro para tu negocio, con ideas, formatos y próximos pasos listos para ejecutar." : "Build a clear content plan for your business, with ideas, formats, and next steps ready to execute."}</p><a href={href}>{es ? "Crear mi estrategia" : "Build my strategy"}<ArrowRight/></a></div>
    <div className={styles.visual}><div><CalendarDays/><span>{es ? "Plan" : "Plan"}</span></div><div><FileText/><span>{es ? "Ideas" : "Ideas"}</span></div><div><Video/><span>Video</span></div><div><ImageIcon/><span>{es ? "Formatos" : "Formats"}</span></div></div>
  </div></section>;
}
