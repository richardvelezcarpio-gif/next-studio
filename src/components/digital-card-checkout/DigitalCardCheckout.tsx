"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, LockKeyhole, ShieldCheck } from "lucide-react";
import styles from "./DigitalCardCheckout.module.css";

type Locale = "es" | "en";
type PayPalConfig = { clientId: string; mode: "sandbox" | "live"; amount: "130.00"; currency: "USD" };
type PayPalButtons = { render: (element: HTMLElement) => Promise<void>; close?: () => Promise<void> };

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style: Record<string, string | number>;
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onCancel: () => void;
        onError: (error: unknown) => void;
      }) => PayPalButtons;
    };
  }
}

const copy = {
  es: {
    back: "Volver a Tarjeta Digital", label: "CHECKOUT SEGURO", title: "Completa tu compra",
    subtitle: "Un solo pago. Sin suscripción ni cargos futuros.", order: "TU PEDIDO",
    product: "Tarjeta Digital Personalizada", billing: "Pago único", today: "TOTAL HOY",
    secure: "PAGO SEGURO", protected: "Tu pago está protegido por PayPal.",
    includes: ["Diseño personalizado", "Código QR y enlace para compartir", "Acciones de contacto y redes sociales", "Formulario de información después del pago"],
    loading: "Preparando opciones de pago seguras…", config: "El checkout PayPal todavía no está configurado en este entorno.",
    retry: "Reintentar", canceled: "El checkout fue cancelado. No se realizó ningún cargo.",
    failed: "No pudimos completar el pago. Inténtalo nuevamente.", processing: "Verificando el pago con PayPal…",
  },
  en: {
    back: "Back to Digital Card", label: "SECURE CHECKOUT", title: "Complete your purchase",
    subtitle: "One payment only. No subscription or future charges.", order: "YOUR ORDER",
    product: "Custom Digital Business Card", billing: "One-time payment", today: "TOTAL TODAY",
    secure: "SECURE PAYMENT", protected: "Your payment is protected by PayPal.",
    includes: ["Custom design", "QR code and shareable link", "Contact and social media actions", "Information form after payment"],
    loading: "Preparing secure payment options…", config: "PayPal checkout is not configured in this environment yet.",
    retry: "Try again", canceled: "Checkout was canceled. You were not charged.",
    failed: "We could not complete the payment. Please try again.", processing: "Verifying the payment with PayPal…",
  },
} as const;

const paymentTokenKey = "next-studio-digital-card-payment-v1";
const paymentReferenceKey = "next-studio-digital-card-payment-reference-v1";

export function DigitalCardCheckout({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "processing" | "canceled" | "error" | "config">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    let buttons: PayPalButtons | undefined;
    async function setup() {
      setStatus("loading");
      try {
        const response = await fetch("/api/paypal/digital-card/config", { cache: "no-store" });
        if (!response.ok) { if (active) setStatus("config"); return; }
        const config = await response.json() as PayPalConfig;
        if (config.amount !== "130.00" || config.currency !== "USD") throw new Error("Invalid checkout configuration");
        const scriptId = "next-studio-paypal-digital-card";
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement("script");
          script.id = scriptId;
          script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(config.clientId)}&currency=USD&intent=capture&components=buttons&enable-funding=card`;
          script.async = true;
          document.head.appendChild(script);
          await new Promise<void>((resolve, reject) => { script!.addEventListener("load", () => resolve(), { once: true }); script!.addEventListener("error", () => reject(new Error("PayPal SDK failed")), { once: true }); });
        } else if (!window.paypal) {
          await new Promise<void>((resolve, reject) => { script!.addEventListener("load", () => resolve(), { once: true }); script!.addEventListener("error", () => reject(new Error("PayPal SDK failed")), { once: true }); });
        }
        if (!active || !buttonsRef.current || !window.paypal) return;
        buttonsRef.current.replaceChildren();
        buttons = window.paypal.Buttons({
          style: { layout: "vertical", shape: "rect", height: 48, label: "pay" },
          createOrder: async () => {
            setStatus("ready");
            const orderResponse = await fetch("/api/paypal/digital-card/orders", { method: "POST" });
            const order = await orderResponse.json() as { orderId?: string; error?: string };
            if (!orderResponse.ok || !order.orderId) throw new Error(order.error || "Order creation failed");
            return order.orderId;
          },
          onApprove: async ({ orderID }) => {
            setStatus("processing");
            const captureResponse = await fetch(`/api/paypal/digital-card/orders/${encodeURIComponent(orderID)}/capture`, { method: "POST" });
            const result = await captureResponse.json() as { paymentToken?: string; payment?: { orderId?: string; captureId?: string }; error?: string };
            if (!captureResponse.ok || !result.paymentToken || !result.payment?.orderId) throw new Error(result.error || "Capture verification failed");
            sessionStorage.setItem(paymentTokenKey, result.paymentToken);
            sessionStorage.setItem(paymentReferenceKey, result.payment.captureId || result.payment.orderId);
            window.location.assign(`/digital-card-form?lang=${locale}`);
          },
          onCancel: () => setStatus("canceled"),
          onError: (error) => { console.error("digital-card-paypal", error); setStatus("error"); },
        });
        await buttons.render(buttonsRef.current);
        if (active) setStatus("ready");
      } catch (error) {
        console.error("digital-card-checkout", error);
        if (active) setStatus("error");
      }
    }
    void setup();
    return () => { active = false; void buttons?.close?.(); };
  }, [attempt, locale]);

  return <main className={styles.page}>
    <header className={styles.header}><Image src="/images/brand/next-studio-logo.png" alt="Next Studio" width={122} height={80} priority/><Link href={locale === "es" ? "/es/tarjeta-digital" : "/en/digital-card"}>← {t.back}</Link></header>
    <section className={styles.shell}>
      <div className={styles.intro}><p>{t.label}</p><h1>{t.title}</h1><span>{t.subtitle}</span><ul>{t.includes.map(item => <li key={item}><Check size={17}/>{item}</li>)}</ul><div className={styles.trust}><ShieldCheck/><div><b>{t.secure}</b><small>{t.protected}</small></div></div></div>
      <aside className={styles.checkout}><p>{t.order}</p><article><div><h2>{t.product}</h2><span>{t.billing}</span></div><strong>$130.00</strong></article><div className={styles.total}><span>{t.today}</span><b>$130.00</b></div><div className={styles.payments}><div ref={buttonsRef}/>{status === "loading" && <p>{t.loading}</p>}{status === "processing" && <p>{t.processing}</p>}{status === "canceled" && <p className={styles.notice}>{t.canceled}</p>}{status === "error" && <p className={styles.error}>{t.failed}</p>}{status === "config" && <p className={styles.error}>{t.config}</p>}{(status === "error" || status === "canceled") && <button onClick={() => setAttempt(value => value + 1)}>{t.retry}</button>}</div><footer><LockKeyhole size={15}/>{t.secure} · SSL</footer></aside>
    </section>
  </main>;
}
