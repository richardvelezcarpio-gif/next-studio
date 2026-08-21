"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { appsTools, appsToolsCopy, type AppsToolsFilter } from "@/content/apps-tools";
import type { Locale } from "@/types/locale";
import type { Market } from "@/lib/market-routing";
import styles from "./AppsToolsPage.module.css";

export function AppsToolsPage({ locale, market = "us" }: { locale: Locale; market?: Market }) {
  const [filter, setFilter] = useState<AppsToolsFilter>("all");
  const copy = appsToolsCopy[locale];
  const marketProducts = appsTools.filter(product => market === "us" || product.kind === "free" || product.slug === "invoice-generator" || product.slug === "digital-card");
  const visibleProducts = marketProducts.filter(product => filter === "all" || product.kind === filter);
  const contactHref = market === "ec" ? `/ec/${locale}/${locale === "es" ? "contacto" : "contact"}` : locale === "es" ? "/es/contacto" : "/en/contact";

  return <>
    <BrandHeader locale={locale} market={market} />
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><Sparkles size={16} />{copy.eyebrow as string}</p>
            <h1>{copy.title as string}</h1>
            <span>{copy.description as string}</span>
          </div>
          <div className={styles.heroSummary}>
            <div><strong>{marketProducts.filter(product => product.kind === "free").length}</strong><span>{copy.freeSummary as string}</span></div>
            <div><strong>{marketProducts.filter(product => product.kind === "premium").length}</strong><span>{copy.premiumSummary as string}</span></div>
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className={styles.wrap}>
          <div className={styles.toolbar}>
            <div className={styles.filters} aria-label={copy.filtersLabel as string}>
              {(["all", "free", "premium"] as AppsToolsFilter[]).map(option => <button type="button" className={filter === option ? styles.active : ""} aria-pressed={filter === option} onClick={() => setFilter(option)} key={option}>{filter === option && <Check size={15} />}{(copy.filters as Record<AppsToolsFilter, string>)[option]}</button>)}
            </div>
            <p><strong>{visibleProducts.length}</strong> {copy.productCount as string}</p>
          </div>

          <div className={styles.grid}>
            {visibleProducts.map(product => {
              const isEcuadorInvoice = market === "ec" && product.slug === "invoice-generator";
              const defaultHref = typeof product.href === "string" ? product.href : product.href[locale];
              const href = defaultHref;
              const detailsHref = market === "ec" && product.slug === "digital-card"
                ? `/ec/${locale}/${locale === "es" ? "tarjeta-digital" : "digital-card"}`
                : product.details?.[locale];
              const image = typeof product.image === "string" ? product.image : product.image[locale];
              const description = isEcuadorInvoice
                ? locale === "es"
                  ? "Crea facturas, estimados y policies profesionales con tu logo, colores e información comercial."
                  : "Create professional invoices, estimates, and policies with your logo, brand colors, and business information."
                : product.description[locale];
              const billingText = isEcuadorInvoice
                ? locale === "es"
                  ? "Primer mes incluido · luego $10/mes desde el segundo mes"
                  : "First month included · then $10/month starting in month two"
                : product.billing?.[locale];
              const external = href.startsWith("http");
              const badges = copy.badges as Record<string, string>;
              const actions = copy.actions as Record<string, string>;
              const billing = copy.billing as Record<string, string>;
              const primaryAction = product.slug === "digital-card"
                ? locale === "es" ? "Comprar ahora" : "Buy Now"
                : isEcuadorInvoice && locale === "en" ? "Buy Now" : product.kind === "free" ? actions.free : actions.buy;
              const detailsAction = isEcuadorInvoice && locale === "en" ? "View Details" : actions.details;
              return <article className={styles.card} key={product.slug}>
                <div className={styles.image}>
                  <Image src={image} alt={product.title[locale]} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized={product.slug === "invoice-generator"} />
                  <div className={styles.badges}><span className={product.kind === "premium" ? styles.premium : styles.free}>{badges[product.kind]}</span>{product.kind === "premium" && <span className={styles.new}>{badges.new}</span>}</div>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.category}>{product.category[locale]}</p>
                  <h2>{product.title[locale]}</h2>
                  <p className={styles.description}>{description}</p>
                  <div className={styles.price}><div><strong>{product.price[locale]}</strong>{billingText && <span>{billingText}</span>}</div><small>{product.billingLabel?.[locale] ?? billing[product.kind]}</small></div>
                  <div className={styles.actions}>
                    <a className={styles.primary} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{primaryAction}<ArrowUpRight size={17} /></a>
                    {detailsHref && <Link className={styles.secondary} href={detailsHref}>{detailsAction}<ArrowRight size={16} /></Link>}
                  </div>
                </div>
              </article>;
            })}
          </div>

          <section className={styles.cta}>
            <div><p>{copy.ctaTitle as string}</p><span>{copy.ctaDescription as string}</span></div>
            <Link href={contactHref}>{copy.cta as string}<ArrowRight size={18} /></Link>
          </section>
        </div>
      </section>
    </main>
    <BrandFooter locale={locale} market={market} />
  </>;
}
