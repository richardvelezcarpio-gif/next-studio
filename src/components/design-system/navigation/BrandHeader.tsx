import Link from "next/link";
import { site } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
export function BrandHeader({ locale }: { locale: "en" | "es" }) { return <header style={{ borderBottom: "1px solid var(--color-border)", background: "white" }}><div style={{ width: "min(var(--container), calc(100% - 48px))", margin: "0 auto", minHeight: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}><Link href={`/${locale}`} style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>{site.name}</Link><LanguageSwitcher locale={locale} /></div></header>; }
