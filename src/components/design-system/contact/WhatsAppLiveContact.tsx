"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, socialLinks } from "@/config/social";
import s from "./WhatsAppLiveContact.module.css";

function WhatsAppIcon() { return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.1 19.8L3 29l6.4-1.7A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.4-1.5l-.4-.2-3.8 1 1-3.7-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.8 8.8 0 0 1-2.6-1.6 9.7 9.7 0 0 1-1.8-2.3c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6s0-.5 0-.6l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6a12.3 12.3 0 0 0 4.7 4.1c.7.3 1.3.6 1.8.7.8.3 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z" /></svg>; }

export function WhatsAppLiveContact() {
  const pathname = usePathname() || "/en"; const locale = pathname.startsWith("/es") || pathname.startsWith("/ec/es") ? "es" : "en";
  const [showCard, setShowCard] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setShowCard(true), 4500); return () => window.clearTimeout(timer); }, [pathname]);
  const message = useMemo(() => { const es = locale === "es"; if (pathname.includes("websites") || pathname.includes("paginas-web")) return es ? "Hola Richard, deseo información para crear una página web para mi negocio." : "Hello Richard, I would like information about creating a website for my business."; if (pathname.includes("platforms") || pathname.includes("plataformas")) return es ? "Hola Richard, deseo información para crear una plataforma personalizada para mi negocio." : "Hello Richard, I would like information about creating a custom business platform."; if (pathname.includes("tools") || pathname.includes("herramientas")) return es ? "Hola Richard, deseo información sobre herramientas digitales para mi negocio." : "Hello Richard, I would like information about digital business tools."; return es ? "Hola Richard, deseo información sobre una página web o plataforma personalizada para mi negocio." : "Hello Richard, I would like information about a website or custom business platform."; }, [locale, pathname]);
  const c = locale === "es" ? { title: "Hola, soy Richard.", text: "¿Necesitas una página web, automatización o una plataforma para tu negocio?", help: "Estoy aquí para ayudarte.", button: "Hablar por WhatsApp", close: "Cerrar tarjeta de contacto", aria: "Abrir conversación de WhatsApp con Richard" } : { title: "Hi, I'm Richard.", text: "Need a website, automation, or custom business platform?", help: "I'm happy to help.", button: "Chat on WhatsApp", close: "Close contact card", aria: "Open WhatsApp conversation with Richard" };
  const open = () => window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  if (!socialLinks.whatsapp) return null;
  return <aside className={s.root} aria-label={c.aria}>{showCard && <section className={s.card}><button className={s.close} type="button" aria-label={c.close} onClick={() => setShowCard(false)}><X size={16}/></button><div className={s.profile}><Image src="/images/contact/richard-velez.png" alt="Richard Velez" fill sizes="68px"/><i aria-label="Online"/></div><div><strong>Richard Velez</strong><h2>{c.title}</h2><p>{c.text}<br/>{c.help}</p><button className={s.cardButton} onClick={open}><WhatsAppIcon/>{c.button}</button></div></section>}<button className={s.floating} type="button" onClick={open} aria-label={c.aria}><WhatsAppIcon/><span>{locale === "es" ? "Chatea con nosotros" : "Chat with us"}</span></button></aside>;
}
