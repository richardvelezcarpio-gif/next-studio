import type { Locale } from "@/types/locale";

type HomeContent = {
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  primary: string;
  secondary: string;
  stats: string[];
  businessPlatformSpotlight:{eyebrow:string;title:string;description:string;benefits:string[];primaryCta:string;secondaryCta:string;note:string;imageAlt:string;floatingCards:string[]};
  services: { title: string; text: string }[];
  workEyebrow: string;
  workTitle: string;
  workText: string;
  industries: string[];
  toolsTitle: string;
  toolsText: string;
  plans: { title: string; text: string }[];
  trustTitle: string;
  trust: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    eyebrow: "WE BUILD THE TECHNOLOGY",
    heroTitle: "You Grow Your Business.",
    heroText:
      "We create websites, custom platforms, CRM systems, online stores and business apps that help your company sell more and work smarter.",
    primary: "Start Your Project",
    secondary: "View Our Work",
    stats: [
      "250+ Projects delivered",
      "98% Client satisfaction",
      "5+ Years of experience",
      "24/7 Support available",
    ],
    businessPlatformSpotlight:{eyebrow:"NEW AI BUSINESS PLATFORM",title:"Manage your entire business from one powerful platform.",description:"Create invoices, estimates and proposals, manage customers, appointments, documents and daily operations from one modern bilingual workspace.",benefits:["Professional invoices, estimates and proposals","CRM and customer management","Business dashboard and analytics","Calendar and appointment tools","AI-powered business features","Available in English and Spanish"],primaryCta:"Explore the Live Demo",secondaryCta:"Request Your Platform",note:"No signup required. Explore the interactive demo before requesting your own platform.",imageAlt:"Next Studio AI Business Platform dashboard showing invoices, CRM, analytics and business tools.",floatingCards:["Invoices","CRM","AI Assistant","Analytics"]},
    services: [
      {
        title: "Business Websites",
        text: "High-converting websites built for clarity, speed and trust.",
      },
      {
        title: "Web Platforms",
        text: "Powerful connected experiences for teams and customers.",
      },
      {
        title: "Custom Solutions",
        text: "Systems, automation and AI shaped around your workflow.",
      },
    ],
    workEyebrow: "MADE BY NEXT STUDIO",
    workTitle: "Real digital products for real businesses.",
    workText:
      "Selected work shown honestly as published, in development or coming soon.",
    industries: [
      "E-commerce",
      "Construction",
      "Professional Services",
      "Hospitality",
      "Real Estate",
      "Health & Wellness",
    ],
    toolsTitle: "Business tools that keep work moving.",
    toolsText:
      "Create, generate and share invoices, estimates, proposals and more — without a portal.",
    plans: [
      {
        title: "Launch",
        text: "A fast, clear foundation for your business online.",
      },
      {
        title: "Growth",
        text: "Connected platforms and automation for the next stage.",
      },
      {
        title: "Enterprise",
        text: "Custom systems for complex operations and scale.",
      },
    ],
    trustTitle: "Built to earn trust at every touchpoint.",
    trust: [
      "Designed for clarity",
      "Fast on every screen",
      "Built around your business",
      "Support that stays close",
    ],
    ctaTitle: "Ready to Build the Next Big Thing?",
    ctaText: "Your ideas. Our expertise. Powerful digital solutions.",
    ctaButton: "Start Your Project",
  },
  es: {
    eyebrow: "CREAMOS LA TECNOLOGÍA",
    heroTitle: "Tú haces crecer tu negocio.",
    heroText:
      "Creamos páginas web, plataformas personalizadas, sistemas CRM, tiendas online y aplicaciones empresariales para ayudarte a vender más y trabajar de forma más inteligente.",
    primary: "Comienza tu proyecto",
    secondary: "Ver nuestros proyectos",
    stats: [
      "250+ Proyectos entregados",
      "98% Satisfacción de clientes",
      "5+ Años de experiencia",
      "Soporte 24/7 disponible",
    ],
    businessPlatformSpotlight:{eyebrow:"NUEVA PLATAFORMA DE NEGOCIOS CON IA",title:"Administra todo tu negocio desde una sola plataforma.",description:"Crea facturas, estimados y propuestas, administra clientes, citas, documentos y operaciones diarias desde un espacio de trabajo moderno y bilingüe.",benefits:["Facturas, estimados y propuestas profesionales","CRM y administración de clientes","Panel de control y analítica","Calendario y gestión de citas","Herramientas empresariales con inteligencia artificial","Disponible en inglés y español"],primaryCta:"Explorar Demo Interactivo",secondaryCta:"Solicitar Mi Plataforma",note:"No requiere registro. Explora el demo antes de solicitar tu propia plataforma.",imageAlt:"Panel de Next Studio AI Business Platform mostrando facturas, CRM, analítica y herramientas empresariales.",floatingCards:["Facturas","CRM","Asistente IA","Analítica"]},
    services: [
      {
        title: "Websites Empresariales",
        text: "Websites de alta conversión creados para claridad, velocidad y confianza.",
      },
      {
        title: "Plataformas Web",
        text: "Experiencias conectadas y potentes para equipos y clientes.",
      },
      {
        title: "Soluciones Personalizadas",
        text: "Sistemas, automatización e IA adaptados a tu operación.",
      },
    ],
    workEyebrow: "HECHO POR NEXT STUDIO",
    workTitle: "Productos digitales reales para negocios reales.",
    workText:
      "Trabajo seleccionado mostrado con honestidad: publicado, en desarrollo o próximamente.",
    industries: [
      "E-commerce",
      "Construcción",
      "Servicios Profesionales",
      "Hospitalidad",
      "Bienes Raíces",
      "Salud y Bienestar",
    ],
    toolsTitle:
      "Herramientas de negocio que mantienen el trabajo en movimiento.",
    toolsText:
      "Crea, genera y comparte facturas, estimados, propuestas y más, sin portal.",
    plans: [
      {
        title: "Lanzamiento",
        text: "Una base rápida y clara para tu negocio en línea.",
      },
      {
        title: "Crecimiento",
        text: "Plataformas conectadas y automatización para la próxima etapa.",
      },
      {
        title: "Enterprise",
        text: "Sistemas personalizados para operaciones complejas y escala.",
      },
    ],
    trustTitle: "Diseñado para generar confianza en cada punto de contacto.",
    trust: [
      "Diseñado para claridad",
      "Rápido en cada pantalla",
      "Creado alrededor de tu negocio",
      "Soporte siempre cercano",
    ],
    ctaTitle: "¿Listo para Construir la Próxima Gran Idea?",
    ctaText: "Tus ideas. Nuestra experiencia. Soluciones digitales poderosas.",
    ctaButton: "Iniciar Tu Proyecto",
  },
};
