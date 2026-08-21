import type { Metadata } from "next";
import styles from "./page.module.css";

const title = "Curso Web con IA | Next Studio";
const description = "Aprende a crear tu propia página web profesional con inteligencia artificial. Curso online en vivo del 28 de agosto al 4 de septiembre de 2026, de 7:00 PM a 9:00 PM.";
const canonical = "https://www.nextstudio.agency/es/curso-web-ia";
const socialImage = "https://www.nextstudio.agency/images/curso-web-ia/curso-web-ia-social-2026.png";
const courseUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3200/curso-web-ia"
  : "https://next-studio-academy.vercel.app/curso-web-ia";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical, languages: { es: canonical } },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    siteName: "Next Studio",
    locale: "es_US",
    images: [{
      url: socialImage,
      width: 1536,
      height: 1024,
      type: "image/png",
      alt: "Curso Web con IA de Next Studio — crea tu propia página web profesional",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Crea tu propia página web profesional con IA. Curso online en vivo. Inversión $197.",
    images: [{
      url: socialImage,
      alt: "Curso Web con IA de Next Studio — crea tu propia página web profesional",
    }],
  },
};

export default function CursoWebIAPage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.course}
        src={courseUrl}
        title="Curso Web con IA de Next Studio Academy"
        allow="payment"
      />
    </main>
  );
}
