"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { getWhatsAppUrl, socialLinks } from "@/config/social";
import styles from "./ProjectsPage.module.css";

const projects = [
  { name: "NS Creator Live Studio", type: "Live Streaming Production Platform", category: "Platforms", status: "Published", image: "/images/projects/np-creator-live-studio.png", url: "https://creator-ai-studio-web-v1-you-tube-l-ten.vercel.app/" },
  { name: "NPNY Business", type: "Business Operations Platform", category: "Platforms", status: "In Development", image: "/images/projects/npny-business-mockup.png", url: "https://npny-business-solutions.vercel.app/#contact" },
  { name: "Next Print NY", type: "Printing Website / Business Platform", category: "Websites", status: "In Development", image: "/images/projects/next-print-ny-mockup.png", url: "https://www.nextprintnyc.com" },
  { name: "Go Green", type: "NYC Printing, Signs & Branding Website", category: "Websites", status: "Published", image: "/images/projects/go-green-website.png", url: "https://www.nygogreen.com/" },
  { name: "Alexandra Coach", type: "Wellness Website", category: "Websites", status: "In Development", image: "/images/projects/alexandra-web-mockup.png", url: "https://www.alexandrasuarez.coach" },
  { name: "NS Book Studio Pro", type: "Publishing Platform", category: "Platforms", status: "In Development", image: "/images/projects/workflow-platform.png", url: "" },
  { name: "NS Invoice, Estimate & Proposal Tools", type: "Business Tools", category: "Business Tools", status: "Coming Soon", image: "/images/projects/business-tools-service.png", url: "" },
];

const seafoodProject = {
  name: "LA CASA DEL MARISCO",
  category: "Websites",
  status: "Published",
  url: "https://www.lacasadelmarisco.online",
  images: [
    "/images/projects/la-casa-del-marisco/home-mobile.png",
    "/images/projects/la-casa-del-marisco/order-mobile.png",
  ],
};

const labels = {
  en: { title: "Real Projects. Real Business Solutions.", desc: "Explore websites, platforms and digital tools designed to solve real business needs.", cta: "Start Your Project", chat: "Chat on WhatsApp", view: "View Project", learn: "Learn More", prompt: "Have a Project in Mind?", promptText: "Let’s turn your idea into a professional digital solution.", seafoodType: "Digital Card + Online Ordering", seafoodDesc: "We created a complete digital experience that allows customers to discover the restaurant, browse products, order directly from their phone, save the digital card, and connect instantly with the business.", seafoodFeatures: ["Digital Business Card", "Online Menu", "Shopping Cart", "WhatsApp Ordering", "Pickup / Delivery", "Google Reviews", "Social Media", "Save Contact", "Share Card", "Responsive Design", "English / Spanish"] },
  es: { title: "Proyectos Reales. Soluciones Reales.", desc: "Explora websites, plataformas y herramientas digitales creadas para resolver necesidades reales.", cta: "Iniciar Tu Proyecto", chat: "Hablar por WhatsApp", view: "Ver Proyecto", learn: "Conoce más", prompt: "¿Tienes un Proyecto en Mente?", promptText: "Convirtamos tu idea en una solución digital profesional.", seafoodType: "Tarjeta Digital + Órdenes Online", seafoodDesc: "Creamos una experiencia digital completa para que sus clientes puedan conocer el restaurante, explorar sus productos, ordenar desde el celular, guardar la tarjeta digital y conectarse directamente con el negocio.", seafoodFeatures: ["Tarjeta Digital", "Menú Online", "Carrito de Compras", "Orden por WhatsApp", "Pickup / Delivery", "Google Reviews", "Redes Sociales", "Guardar Contacto", "Compartir Tarjeta", "Diseño Responsive", "Español / Inglés"] },
};

export function ProjectsPage({ locale }: { locale: "en" | "es" }) {
  const c = labels[locale];
  const [filter, setFilter] = useState("All");
  const contact = `/${locale}/${locale === "en" ? "contact" : "contacto"}`;
  const filters = ["All", "Websites", "Platforms", "Business Tools", "Published", "In Development"];
  const visible = projects.filter(project => filter === "All" || project.category === filter || project.status === filter);
  const seafoodVisible = filter === "All" || filter === seafoodProject.category || filter === seafoodProject.status;
  const featured = projects[0];
  const chatUrl = getWhatsAppUrl(locale === "en" ? "Hello, I would like to discuss a project with NEXT STUDIO." : "Hola, deseo conversar sobre un proyecto con NEXT STUDIO.");

  return <><BrandHeader locale={locale}/><main style={{ background: "#f5f9ff", paddingBottom: 80 }}><section style={{ padding: "76px 24px 40px", background: "white" }}><div style={{ maxWidth: 1180, margin: "auto" }}><p style={{ color: "#146ef5", fontWeight: 800, fontSize: 12 }}>PORTFOLIO</p><h1 style={{ maxWidth: 720, fontSize: "clamp(3rem,6vw,5.5rem)", letterSpacing: "-.07em", lineHeight: .95, margin: "14px 0" }}>{c.title}</h1><p style={{ maxWidth: 540, color: "#55708d", lineHeight: 1.6 }}>{c.desc}</p></div></section><section style={{ maxWidth: 1180, margin: "auto", padding: "42px 24px" }}><article style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: 28, padding: 20, borderRadius: 20, background: "#062044", color: "white" }}><Image src={featured.image} alt={featured.name} width={760} height={510} style={{ width: "100%", height: "auto", borderRadius: 14 }} /><div><p style={{ color: "#70baff" }}>{featured.status.toUpperCase()} · {featured.type.toUpperCase()}</p><h2 style={{ fontSize: "2.5rem" }}>{featured.name}</h2><p style={{ lineHeight: 1.6, color: "#c8ddf5" }}>{locale === "en" ? "A live production workspace for creators, scenes, broadcasts and multistreaming workflows." : "Un espacio de producción en vivo para creadores, escenas, transmisiones y flujos multistream."}</p><a href={featured.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 18, padding: "12px 16px", borderRadius: 9, background: "#146ef5", color: "white", fontWeight: 800 }}>{c.view}</a></div></article><div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "32px 0" }}>{filters.map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} style={{ padding: "9px 13px", borderRadius: 20, border: `1px solid ${filter === item ? "#146ef5" : "#dbe8f8"}`, background: filter === item ? "#146ef5" : "white", color: filter === item ? "white" : "#173554", fontWeight: 750, cursor: "pointer" }}>{item}</button>)}</div>{seafoodVisible && <article className={styles.seafoodProject}><div className={styles.seafoodVisuals}>{seafoodProject.images.map((image, index) => <div className={styles.phoneShot} key={image}><Image src={image} alt={index === 0 ? `${seafoodProject.name} digital card home` : `${seafoodProject.name} online menu and ordering`} fill sizes="(max-width: 700px) 44vw, 220px"/></div>)}</div><div className={styles.seafoodCopy}><small>{seafoodProject.status.toUpperCase()} · {locale === "en" ? "REAL CLIENT PROJECT" : "PROYECTO REAL TERMINADO"}</small><h2>{seafoodProject.name}</h2><h3>{c.seafoodType}</h3><p>{c.seafoodDesc}</p><ul>{c.seafoodFeatures.map(feature => <li key={feature}><CheckMark/>{feature}</li>)}</ul><a href={seafoodProject.url} target="_blank" rel="noopener noreferrer">{c.view}<span aria-hidden="true"> →</span></a></div></article>}<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>{visible.map(project => <article key={project.name} style={{ overflow: "hidden", borderRadius: 16, background: "white", boxShadow: "0 10px 30px #12345a12" }}><Image src={project.image} alt={project.name} width={600} height={420} style={{ width: "100%", height: 180, objectFit: "cover" }} /><div style={{ padding: 18 }}><small style={{ color: "#146ef5", fontWeight: 800 }}>{project.status}</small><h3>{project.name}</h3><p style={{ color: "#597590" }}>{project.type}</p>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{c.view}</a> : <Link href={contact}>{c.learn}</Link>}</div></article>)}</div><section style={{ padding: "65px 0" }}><div style={{ padding: 44, borderRadius: 20, background: "#062044", color: "white" }}><h2>{c.prompt}</h2><p>{c.promptText}</p><Link href={contact} style={{ color: "#78bdff", fontWeight: 800 }}>{c.cta}</Link>{socialLinks.whatsapp && <a href={chatUrl} target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: 18 }}>{c.chat}</a>}</div></section></section></main><BrandFooter locale={locale}/></>;
}

function CheckMark() { return <span aria-hidden="true">✓</span>; }
