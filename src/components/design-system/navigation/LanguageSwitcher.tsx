import Link from "next/link";
export function LanguageSwitcher({ locale }: { locale: "en" | "es" }) { return <Link href={locale === "en" ? "/es" : "/en"} aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}>{locale === "en" ? "ES" : "EN"}</Link>; }
