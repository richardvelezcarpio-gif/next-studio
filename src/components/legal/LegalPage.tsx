import Link from "next/link";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import s from "./LegalPage.module.css";

export function LegalPage({ locale, type }: { locale: "en" | "es"; type: "privacy" | "terms" }) {
  const es = locale === "es";
  const privacy = type === "privacy";
  const title = privacy ? (es ? "Política de privacidad" : "Privacy Policy") : (es ? "Términos y condiciones" : "Terms & Conditions");
  const intro = privacy ? (es ? "Explicamos qué información recopilamos y cómo la usamos para responder a tus solicitudes." : "This explains what information we collect and how we use it to respond to your requests.") : (es ? "Estos términos explican el uso del sitio y el proceso de solicitar servicios." : "These terms explain use of this site and the process for requesting services.");
  const sections = privacy
    ? es ? [["Información que recopilamos", "Podemos recopilar los datos que envías mediante formularios, incluyendo nombre, empresa, email, teléfono, presupuesto y descripción del proyecto."], ["Cómo usamos la información", "Usamos estos datos para responder a tu solicitud, preparar una cotización y comunicarnos sobre servicios solicitados."], ["Contacto", "Para preguntas sobre privacidad, escribe a info@nextprintnyc.com."]]
      : [["Information we collect", "We may collect the information you send through forms, including name, business, email, phone, budget and project description."], ["How we use it", "We use this information to respond to your request, prepare a quote and communicate about requested services."], ["Contact", "For privacy questions, email info@nextprintnyc.com."]]
    : es ? [["Uso del sitio", "El contenido del sitio presenta los servicios y herramientas de NEXT STUDIO."], ["Cotizaciones y servicios", "Las cotizaciones, alcance, fechas y pagos se confirman por escrito antes de iniciar un proyecto."], ["Herramientas de demostración", "Las herramientas de documentos son demostraciones interactivas y no sustituyen un sistema de facturación, pagos o almacenamiento de producción."], ["Contacto", "Para preguntas, escribe a info@nextprintnyc.com."]]
      : [["Using this site", "This site presents NEXT STUDIO services and tools."], ["Quotes and services", "Quotes, scope, timing and payments are confirmed in writing before a project begins."], ["Demonstration tools", "Document tools are interactive demonstrations and do not replace a production invoicing, payment or storage system."], ["Contact", "For questions, email info@nextprintnyc.com."]];

  return <><BrandHeader locale={locale}/><main className={s.main}><p>NEXT STUDIO</p><h1>{title}</h1><span>{intro}</span>{sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}<Link href={`/${locale}/${locale === "en" ? "contact" : "contacto"}`}>{es ? "Contactar" : "Contact us"}</Link></main><BrandFooter locale={locale}/></>;
}
