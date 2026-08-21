import type { Locale } from "@/types/locale";

export type AppsToolsFilter = "all" | "free" | "premium";

type LocalizedText = Record<Locale, string>;

export type AppTool = {
  slug: string;
  image: string | Record<Locale, string>;
  kind: Exclude<AppsToolsFilter, "all">;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  price: LocalizedText;
  billing?: LocalizedText;
  billingLabel?: LocalizedText;
  href: string | Record<Locale, string>;
  details?: Record<Locale, string>;
};

export const appsTools: AppTool[] = [
  {
    slug: "digital-card",
    image: "/free-programs/digital-card.png",
    kind: "premium",
    category: { es: "Marketing", en: "Marketing" },
    title: { es: "Tarjeta Digital Next Studio", en: "Next Studio Digital Card" },
    description: {
      es: "Comparte una presentación digital profesional con tus datos, servicios y enlaces importantes.",
      en: "Share a polished digital introduction with your contact details, services and important links.",
    },
    price: { es: "$130", en: "$130" },
    billingLabel: { es: "Pago único", en: "One-time payment" },
    href: { es: "/digital-card-checkout?lang=es", en: "/digital-card-checkout?lang=en" },
    details: { es: "/es/tarjeta-digital", en: "/en/digital-card" },
  },
  {
    slug: "teleprompter",
    image: "/free-programs/teleprompter.png",
    kind: "free",
    category: { es: "Contenido", en: "Content" },
    title: { es: "Teleprompter y Grabador de Video", en: "Teleprompter Video Recorder" },
    description: {
      es: "Graba videos claros y seguros mientras sigues tu guion desde una herramienta sencilla.",
      en: "Record clear, confident videos while following your script with a simple online tool.",
    },
    price: { es: "Gratis", en: "Free" },
    href: "https://www.nextstudiotelepronter.online",
  },
  {
    slug: "construction-business-manager",
    image: "/free-programs/construction-business-manager.png",
    kind: "free",
    category: { es: "Administración", en: "Management" },
    title: { es: "Administrador para Construcción", en: "Construction Business Manager" },
    description: {
      es: "Organiza obras, clientes y operaciones diarias de tu negocio de construcción.",
      en: "Organize construction projects, clients and the daily operations of your business.",
    },
    price: { es: "Gratis", en: "Free" },
    href: "https://construction-business-manager.vercel.app/",
  },
  {
    slug: "qr-code-generator",
    image: "/free-programs/qr-code-generator.png",
    kind: "free",
    category: { es: "Marketing", en: "Marketing" },
    title: { es: "Generador de Códigos QR", en: "QR Code Generator" },
    description: {
      es: "Crea, personaliza y descarga códigos QR profesionales para tu negocio.",
      en: "Create, customize and download professional QR codes for your business.",
    },
    price: { es: "Gratis", en: "Free" },
    href: { es: "/es/generador-qr", en: "/en/qr-generator" },
  },
  {
    slug: "invoice-generator",
    image: {
      es: "/images/invoice-generator/invoice-generator-social.jpg",
      en: "/images/invoice-generator/invoice-generator-social-en.jpg",
    },
    kind: "premium",
    category: { es: "Facturación", en: "Invoicing" },
    title: { es: "Invoice, Estimate & Policy Generator", en: "Invoice, Estimate & Policy Generator" },
    description: {
      es: "Crea facturas, estimados y policies profesionales con tu logo, colores e información comercial.",
      en: "Create professional invoices, estimates and policies with your logo, colors and business information.",
    },
    price: { es: "$140 de configuración", en: "$140 setup" },
    billing: {
      es: "Primer mes incluido · luego $10/mes desde el segundo mes",
      en: "First month included · then $10/month starting month 2",
    },
    href: "https://next-studio-invoice-premium-v9.vercel.app/#checkout",
    details: { es: "/es/generador-facturas", en: "/en/invoice-generator" },
  },
];

export const appsToolsCopy = {
  es: {
    eyebrow: "APPS & HERRAMIENTAS PARA NEGOCIOS",
    title: "Soluciones digitales para trabajar mejor y hacer crecer tu negocio.",
    description: "Descubre herramientas gratuitas y aplicaciones premium de Next Studio para facturación, administración, ventas, marketing y productividad.",
    freeSummary: "Herramientas Gratis",
    premiumSummary: "Soluciones Premium",
    filtersLabel: "Filtrar productos",
    filters: { all: "Todos", free: "Gratis", premium: "Premium" },
    productCount: "productos disponibles",
    badges: { free: "Gratis", premium: "Premium", new: "Nuevo" },
    actions: { free: "Usar gratis", buy: "Comprar ahora", details: "Ver detalles" },
    billing: { free: "Sin costo", premium: "Mensual" },
    ctaTitle: "¿Necesitas una herramienta creada para tu negocio?",
    ctaDescription: "Cuéntanos qué deseas simplificar y diseñaremos una aplicación adaptada a tu forma de trabajar.",
    cta: "Comenzar",
  },
  en: {
    eyebrow: "BUSINESS APPS & TOOLS",
    title: "Digital solutions to work smarter and grow your business.",
    description: "Discover free tools and premium Next Studio apps for invoicing, business management, sales, marketing and productivity.",
    freeSummary: "Free Tools",
    premiumSummary: "Premium Solutions",
    filtersLabel: "Filter products",
    filters: { all: "All", free: "Free", premium: "Premium" },
    productCount: "products available",
    badges: { free: "Free", premium: "Premium", new: "New" },
    actions: { free: "Use for free", buy: "Buy now", details: "View details" },
    billing: { free: "No cost", premium: "Monthly" },
    ctaTitle: "Need a tool built for your business?",
    ctaDescription: "Tell us what you want to simplify and we’ll design an app around the way you work.",
    cta: "Get started",
  },
} satisfies Record<Locale, Record<string, unknown>>;
