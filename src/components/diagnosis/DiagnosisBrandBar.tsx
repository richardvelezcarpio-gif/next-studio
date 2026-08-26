import Image from "next/image";
import type {DiagnosisLocale} from "@/lib/business-diagnosis";
import styles from "./DiagnosisBrandBar.module.css";

export function DiagnosisBrandBar({locale}:{locale:DiagnosisLocale}){return <div className={styles.bar}><div className={styles.inner}><Image src="/images/brand/next-studio-logo-official.png" alt="Next Studio" width={168} height={112} priority/><div><strong>AI Business Diagnosis</strong><span>by Next Studio</span></div><p><i/>{locale==="es"?"INTELIGENCIA DE NEGOCIOS":"BUSINESS INTELLIGENCE"}</p></div></div>}
