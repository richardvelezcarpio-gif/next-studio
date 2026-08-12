import type { Locale } from "@/types/locale";

export type FreeProgram = {
  slug: string;
  href: string;
  image: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  visible?: boolean;
};

export const freePrograms: FreeProgram[] = [
  { slug: "digital-card", href: "/digital-card", image: "/free-programs/digital-card.webp", title: { en: "Next Studio Digital Card", es: "Tarjeta Digital Next Studio" }, description: { en: "Share a polished digital introduction for your business.", es: "Comparte una presentación digital profesional de tu negocio." } },
  { slug: "teleprompter", href: "https://www.nextstudiotelepronter.online", image: "/free-programs/teleprompter.webp", title: { en: "Teleprompter Video Recorder", es: "Teleprompter y Grabador de Video" }, description: { en: "Record clear, confident videos while following your script.", es: "Graba videos claros y seguros mientras sigues tu guion." } },
  { slug: "construction-business-manager", href: "https://construction-business-manager.vercel.app/", image: "/free-programs/construction-business-manager.webp", title: { en: "Construction Business Manager", es: "Administrador para Construcción" }, description: { en: "Organize construction work, clients and daily operations.", es: "Organiza obras, clientes y operaciones diarias de construcción." } },
  { visible: false, slug: "digital-menu", href: "https://nextprint-digital-menu-pro.vercel.app/", image: "/free-programs/digital-menu.webp", title: { en: "Digital Menu", es: "Menú Digital" }, description: { en: "Present your menu in a simple, modern digital format.", es: "Presenta tu menú en un formato digital simple y moderno." } },
];

export const freeProgramsCopy = {
  en: { eyebrow: "FREE TOOLS BY NEXT STUDIO", title: "Powerful tools.|Free to use.", description: "Explore practical tools created by Next Studio to help you work smarter and grow your business.", ideaTitle: "Do you have an idea for an app or program?", ideaDescription: "Share your idea and we’ll turn it into a digital tool you can use, sell or grow your business with. We can create a custom solution for your clients, your team or a new source of revenue.", ideaCta: "Tell Us Your Idea" },
  es: { eyebrow: "HERRAMIENTAS GRATIS DE NEXT STUDIO", title: "Herramientas poderosas.|Gratis para usar.", description: "Descubre herramientas creadas por Next Studio para trabajar mejor y hacer crecer tu negocio.", ideaTitle: "¿Tienes una idea para una aplicación o programa?", ideaDescription: "Cuéntanos tu idea y la convertimos en una herramienta digital lista para usar, vender o hacer crecer tu negocio. Podemos crear una solución personalizada para tus clientes, tu equipo o una nueva fuente de ingresos.", ideaCta: "Cuéntanos tu idea" },
} satisfies Record<Locale, { eyebrow: string; title: string; description: string; ideaTitle: string; ideaDescription: string; ideaCta: string }>;
