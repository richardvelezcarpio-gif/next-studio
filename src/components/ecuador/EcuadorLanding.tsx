"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, CircleDollarSign, FileText, MessageCircle, PackageCheck, Send, ShoppingBag, Smartphone, UsersRound } from "lucide-react";
import styles from "./EcuadorLanding.module.css";

const whatsappMessage = "Hola, vi la página de Next Studio Ecuador y quiero información para digitalizar mi negocio.";
const whatsAppUrl = `https://wa.me/12393337935?text=${encodeURIComponent(whatsappMessage)}`;

const solutions = [
  { icon: ShoppingBag, title: "Recibe pedidos 24/7.", text: "Vende incluso fuera de tu horario." },
  { icon: FileText, title: "Genera cotizaciones e invoices.", text: "Documentos profesionales en minutos." },
  { icon: UsersRound, title: "Administra clientes y ventas.", text: "Toda tu información organizada." },
  { icon: CircleDollarSign, title: "Controla ingresos y gastos.", text: "Decisiones claras para crecer." },
  { icon: PackageCheck, title: "Recibe pagos online.", text: "Opciones listas para tu negocio." },
  { icon: Smartphone, title: "Gestiona desde cualquier lugar.", text: "Tu negocio disponible en cualquier pantalla." },
];

const products = [
  { title: "Página Web Profesional", text: "Presenta tus servicios, recibe consultas y genera confianza.", image: "/images/websites/business-corporate-premium.png", details: ["Diseño personalizado", "Formulario y WhatsApp", "SEO base y Google Maps"] },
  { title: "Tienda Online", text: "Vende productos, recibe pedidos y administra tu catálogo.", image: "/images/projects/fashion-commerce.png", details: ["Catálogo y carrito", "Pedidos organizados", "Arquitectura para pagos online"] },
  { title: "Plataforma Personalizada", text: "Controla clientes, ventas, documentos, gastos y operaciones.", image: "/images/platforms/crm-system.png", details: ["CRM y flujos de trabajo", "Documentos y reportes", "Acceso móvil para tu equipo"] },
];

const audiences = [
  ["Emprendedores", "/images/industries/services.jpg"], ["Tiendas y comercios", "/images/industries/printing.jpg"], ["Restaurantes", "/images/industries/restaurant.jpg"], ["Profesionales", "/images/industries/medical.jpg"], ["Marcas de ropa", "/images/industries/clothing.jpg"], ["Construcción", "/images/industries/construction.jpg"], ["Belleza", "/images/industries/beauty.jpg"], ["Servicios", "/images/industries/realestate.jpg"],
];

export function EcuadorLanding() {
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    localStorage.setItem("next-studio-ecuador-lead", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
    const details = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join("\n");
    window.location.href = `mailto:info@nextprintnyc.com?subject=${encodeURIComponent("Nueva solicitud — Next Studio Ecuador")}&body=${encodeURIComponent(details)}`;
    setSubmitted(true);
  }

  return <main className={styles.page}>
    <header className={styles.header}><a href="#inicio" className={styles.brand}><Image src="/images/brand/next-studio-logo.png" alt="NEXT STUDIO" width={112} height={74}/></a><nav aria-label="Navegación Ecuador"><a href="#inicio">Inicio</a><a href="#soluciones">Soluciones</a><a href="#proceso">Cómo funciona</a><a href="#planes">Planes</a><a href="#contacto">Contacto</a></nav><a className={styles.whatsappButton} href={whatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Hablar por WhatsApp</a></header>

    <section id="inicio" className={styles.hero}><div className={styles.heroCopy}><p className={styles.eyebrow}><span>🇪🇨</span> Soluciones digitales para Ecuador</p><h1>Actualiza tu negocio.<br/><em>Vende en todo Ecuador.</em></h1><p className={styles.lead}>Creamos tu página web, tienda online o plataforma personalizada para que recibas pedidos, administres clientes y controles tu negocio desde cualquier lugar.</p><p className={styles.english}>Build and manage your business online.</p><div className={styles.actions}><a href="#contacto" className={styles.primary}>Quiero digitalizar mi negocio <ArrowRight size={18}/></a><a href="#proceso" className={styles.secondary}>Ver cómo funciona</a></div></div><div className={styles.heroVisual}><Image src="/images/ecuador/ecuador-hero.png" alt="Tienda online y pedido móvil para un negocio ecuatoriano" fill priority sizes="(max-width: 850px) 100vw, 58vw"/></div></section>

    <section className={styles.problem}><p className={styles.eyebrow}>EL RETO</p><h2>Tu negocio no debería depender de un local físico.</h2><p>Vende incluso cuando tu negocio está cerrado y administra todo desde una plataforma creada para ti.</p><div className={styles.problemGrid}>{[["Pedidos desorganizados", "Mensajes y solicitudes dispersas."], ["Poco control", "Ingresos y gastos sin una vista clara."], ["Horarios limitados", "Tu local define cuándo puedes vender."]].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section id="soluciones" className={styles.solutions}><div className={styles.sectionHeading}><p className={styles.eyebrow}>LA SOLUCIÓN</p><h2>Todo tu negocio en un solo lugar.</h2></div><div className={styles.solutionGrid}>{solutions.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={27}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={styles.productSection}><div className={styles.sectionHeading}><p className={styles.eyebrow}>SOLUCIONES</p><h2>Creamos la solución que tu negocio necesita.</h2></div><div className={styles.productGrid}>{products.map((product, index) => <article className={styles.product} key={product.title}><div className={styles.productImage}><Image src={product.image} alt={product.title} fill sizes="(max-width: 850px) 100vw, 33vw"/></div><div className={styles.productBody}><h3>{product.title}</h3><p>{product.text}</p><button type="button" onClick={() => setOpenProduct(openProduct === index ? null : index)} aria-expanded={openProduct === index}>Conocer más <ChevronDown size={17}/></button>{openProduct === index && <div className={styles.productDetails}>{product.details.map(detail => <p key={detail}><Check size={16}/>{detail}</p>)}<a href="#contacto">Solicitar información <ArrowRight size={16}/></a></div>}</div></article>)}</div></section>

    <section className={styles.audience}><div className={styles.sectionHeading}><p className={styles.eyebrow}>PARA QUIÉN ES</p><h2>Creado para negocios ecuatorianos.</h2></div><div className={styles.audienceGrid}>{audiences.map(([name, image]) => <article key={name as string}><Image src={image as string} alt={name as string} fill sizes="(max-width: 700px) 50vw, 25vw"/><span>{name}</span></article>)}</div></section>

    <section id="proceso" className={styles.process}><div className={styles.sectionHeading}><p className={styles.eyebrow}>CÓMO FUNCIONA</p><h2>De tu idea a una plataforma real.</h2></div><div className={styles.processGrid}>{["Cuéntanos tu idea.", "Diseñamos tu solución.", "Construimos y configuramos.", "Publicamos y te enseñamos a usarla."].map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3><ArrowRight size={20}/></article>)}</div></section>

    <section className={styles.blueCta}><div><p className={styles.eyebrow}>EMPIEZA ONLINE</p><h2>Emprende sin gastar miles de dólares en un local físico.</h2><p>Empieza online, valida tu idea y haz crecer tu negocio paso a paso.</p></div><a href="#contacto">Solicitar una consulta <ArrowRight size={18}/></a></section>

    <section id="planes" className={styles.plans}><div className={styles.sectionHeading}><p className={styles.eyebrow}>PLANES</p><h2>Empieza con una solución pensada para ti.</h2></div><div className={styles.planGrid}>{["Página Web", "Tienda Online", "Plataforma Personalizada"].map((plan, index) => <article key={plan}><span>0{index + 1}</span><h3>{plan}</h3><p>Cotización según las necesidades de tu negocio.</p><a href="#contacto">Solicitar información <ArrowRight size={16}/></a></article>)}</div></section>

    <section id="contacto" className={styles.contact}><div><p className={styles.eyebrow}>CONTACTO</p><h2>Cuéntanos qué negocio quieres crear.</h2><p>Déjanos tus datos y continúa la conversación por WhatsApp.</p><a href={whatsAppUrl} target="_blank" rel="noreferrer" className={styles.contactWhatsApp}><MessageCircle size={19}/> Hablar por WhatsApp</a></div><form onSubmit={submit}><label>Nombre<input required name="Nombre" /></label><label>Ciudad de Ecuador<input required name="Ciudad" placeholder="Quito, Guayaquil, Cuenca..." /></label><label>WhatsApp<input required name="WhatsApp" inputMode="tel" /></label><label>Email<input required name="Email" type="email" /></label><label>Tipo de negocio<select required name="Tipo de negocio"><option value="">Selecciona una opción</option><option>Emprendimiento</option><option>Tienda o comercio</option><option>Restaurante</option><option>Servicio profesional</option><option>Otro</option></select></label><label>Qué necesita<select required name="Necesidad"><option value="">Selecciona una opción</option><option>Página web</option><option>Tienda online</option><option>Plataforma personalizada</option><option>No estoy seguro</option></select></label><label>Presupuesto aproximado<select name="Presupuesto"><option value="">Prefiero conversarlo</option><option>Menos de $500</option><option>$500 – $1,500</option><option>$1,500 – $3,000</option><option>Más de $3,000</option></select></label><label className={styles.full}>Mensaje<textarea name="Mensaje" rows={4} placeholder="Cuéntanos brevemente tu idea" /></label><button className={styles.primary} type="submit"><Send size={17}/> Solicitar información</button>{submitted && <p className={styles.formNote}>Guardamos tu solicitud en este navegador. Se abrió tu correo para enviarla a nuestro equipo; también puedes continuar por WhatsApp.</p>}</form></section>

    <footer className={styles.footer}><div><Image src="/images/brand/next-studio-logo.png" alt="NEXT STUDIO" width={128} height={84}/><p>Building Digital Businesses</p><p>Soluciones digitales para negocios en Ecuador.</p></div><div><strong>Servicios</strong><a href="#soluciones">Websites</a><a href="#soluciones">Online Stores</a><a href="#soluciones">Business Platforms</a><a href="#soluciones">AI Solutions</a></div><div><strong>Contacto</strong><a href="mailto:info@nextprintnyc.com">info@nextprintnyc.com</a><a href="https://www.nextstudio.agency">www.nextstudio.agency</a></div></footer>
    <a className={styles.float} href={whatsAppUrl} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp"><MessageCircle size={25}/></a>
  </main>;
}
