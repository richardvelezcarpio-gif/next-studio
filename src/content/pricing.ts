import type { Locale } from "@/types/locale";

export const pricing = {
  en: {
    title: "Simple Pricing. Powerful Digital Solutions.", intro: "Choose the right starting point for your business. Every solution can be customized as your needs grow.", popular: "Most Popular", cta: "Get a Free Consultation", chat: "Chat on WhatsApp",
    freeMonths: "First 3 months free", paymentPlans: "Payment plans available — ask us about flexible options.", customTitle: "Custom Platforms", customText: "Need a platform built around your exact workflow? Tell us what you need and we will prepare a custom quote.", customCta: "Request a Quote",
    plans: [
      ["Basic Website", "$399 setup", "$35/month", "$40 domain", ["Professional responsive website", "Up to 10 pages", "Contact form", "Basic SEO setup", "WhatsApp integration", "SSL", "Ongoing support"]],
      ["Professional Website + CRM + Online Store", "$999 setup", "$45/month", "$40 domain", ["Everything in Basic", "Online store", "CRM", "Product management", "Payment-ready architecture", "Client management tools", "Priority support"]],
      ["Pro Website + CRM + AI", "$1,999 setup", "$69/month", "$40 domain", ["Everything in Professional", "AI-ready tools", "Automations", "Advanced reporting", "Multi-user access", "Custom integrations", "Premium support"]],
      ["Ultimate CRM Pro + Website", "$2,500 setup", "$69/month", "$40 domain", ["Customer management", "Quotes and invoices", "Order tracking", "Production workflow", "Files and approvals", "Reports", "Optional online product designers"]],
    ],
    faq: [["What is the monthly fee for?", "It covers ongoing service, support and the agreed platform maintenance."], ["Are the first three months free?", "Yes. Monthly service is free for the first three months on every listed plan."], ["Can I use a payment plan?", "Yes. Ask us about flexible payment-plan options before your project starts."], ["Is the domain included?", "The $40 domain fee is listed separately."], ["Can I upgrade later?", "Yes. Solutions can be expanded as business needs grow."], ["Do you offer bilingual websites?", "Yes, bilingual structure is included in the solution approach."], ["Can you build custom features?", "Custom features are scoped and priced based on the required workflow."]], final: "Not Sure Which Solution Is Right for You?",
  },
  es: {
    title: "Precios Simples. Soluciones Digitales Poderosas.", intro: "Elige el punto de partida correcto para tu negocio. Cada solución puede personalizarse a medida que crecen tus necesidades.", popular: "Más Popular", cta: "Obtén una Consulta Gratuita", chat: "Hablar por WhatsApp",
    freeMonths: "Los primeros 3 meses son gratis", paymentPlans: "Planes de pago disponibles — pregúntanos por opciones flexibles.", customTitle: "Plataformas personalizadas", customText: "¿Necesitas una plataforma creada según tu flujo de trabajo? Cuéntanos lo que necesitas y prepararemos una cotización personalizada.", customCta: "Solicitar una cotización",
    plans: [
      ["Website Básico", "$399 setup", "$35/mes", "$40 dominio", ["Website profesional responsive", "Hasta 10 páginas", "Formulario de contacto", "SEO básico", "Integración WhatsApp", "SSL", "Soporte continuo"]],
      ["Website Profesional + CRM + Tienda Online", "$999 setup", "$45/mes", "$40 dominio", ["Todo lo de Básico", "Tienda online", "CRM", "Gestión de productos", "Arquitectura lista para pagos", "Herramientas de clientes", "Soporte prioritario"]],
      ["Pro Website + CRM + IA", "$1,999 setup", "$69/mes", "$40 dominio", ["Todo lo de Profesional", "Herramientas listas para IA", "Automatizaciones", "Reportes avanzados", "Acceso multiusuario", "Integraciones personalizadas", "Soporte premium"]],
      ["Ultimate CRM Pro + Website", "$2,500 setup", "$69/mes", "$40 dominio", ["Gestión de clientes", "Cotizaciones y facturas", "Seguimiento de órdenes", "Flujo de producción", "Archivos y aprobaciones", "Reportes", "Diseñadores opcionales"]],
    ],
    faq: [["¿Para qué es el pago mensual?", "Cubre servicio continuo, soporte y mantenimiento acordado."], ["¿Los primeros tres meses son gratis?", "Sí. El servicio mensual es gratis durante los primeros tres meses en todos los planes mostrados."], ["¿Puedo usar un plan de pagos?", "Sí. Pregúntanos por opciones de pago flexibles antes de iniciar tu proyecto."], ["¿El dominio está incluido?", "El cargo de dominio de $40 se muestra por separado."], ["¿Puedo mejorar después?", "Sí. Las soluciones pueden ampliarse al crecer el negocio."], ["¿Ofrecen websites bilingües?", "Sí, la estructura bilingüe es parte del enfoque."], ["¿Pueden crear funciones personalizadas?", "Se definen y cotizan según el flujo requerido."]], final: "¿No Estás Seguro de Qué Solución es Correcta?",
  },
} satisfies Record<Locale, unknown>;
