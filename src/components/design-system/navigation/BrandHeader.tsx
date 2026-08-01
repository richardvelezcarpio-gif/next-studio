import Link from "next/link";
import { site } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
const links = {
  en: [["Websites", "/en/websites"], ["Platforms", "/en/platforms"], ["Services", "/en/services"], ["Projects", "/en/projects"], ["Pricing", "/en/pricing"], ["Tools", "/en/tools"]],
  es: [["Páginas web", "/es/paginas-web"], ["Plataformas", "/es/plataformas"], ["Servicios", "/es/servicios"], ["Proyectos", "/es/proyectos"], ["Precios", "/es/precios"], ["Herramientas", "/es/herramientas"]],
} as const;

export function BrandHeader({ locale }: { locale: "en" | "es" }) {
  return <header className="site-header"><div className="header-inner"><Link href={`/${locale}`} className="brand-mark"><span>N</span>{site.name}</Link><nav className="desktop-nav" aria-label="Primary navigation">{links[locale].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><div className="header-actions"><LanguageSwitcher locale={locale} /><Link href={`/${locale}/contact`} className="header-cta">{locale === "en" ? "Get Started" : "Comenzar"}</Link></div></div></header>;
}
