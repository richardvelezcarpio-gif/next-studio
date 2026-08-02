import type { Locale } from "@/types/locale";

export const websites = {
  en: {
    eyebrow: "WEBSITES THAT WORK",
    title: "A website built to move your business forward.",
    intro: "Premium digital experiences that make a strong first impression and turn attention into action.",
    cta: "Start Your Website",
    includes: ["Strategy & structure", "Custom visual direction", "Mobile-first experience", "Performance foundation"],
    types: ["Business Website", "Service Website", "E-commerce", "Landing Page"],
    benefits: ["Responsive", "Fast", "SEO Ready", "Bilingual", "WhatsApp Integration", "Forms"],
    process: [
      { title: "Discover", description: "We learn about your business, goals and customers to create the perfect digital solution for your company." },
      { title: "Design", description: "We design a modern, user-focused experience that reflects your brand and builds trust with your customers." },
      { title: "Build", description: "We develop your website, CRM or custom platform using secure, scalable and high-performance technology." },
      { title: "Launch", description: "We launch your project, provide continuous support and help your business keep growing online." },
    ],
    pricing: [["Basic Website", "A focused professional presence."], ["Professional Website", "A complete website built for growth."], ["Custom Website", "A tailored digital experience."]],
    samples: "Selected visual directions",
    final: "Let’s turn your business into a better digital experience.",
  },
  es: {
    eyebrow: "WEBSITES QUE FUNCIONAN",
    title: "Un website creado para impulsar tu negocio.",
    intro: "Experiencias digitales premium que generan una gran primera impresión y convierten atención en acción.",
    cta: "Iniciar Tu Website",
    includes: ["Estrategia y estructura", "Dirección visual personalizada", "Experiencia mobile-first", "Base de rendimiento"],
    types: ["Website Empresarial", "Website de Servicios", "E-commerce", "Landing Page"],
    benefits: ["Responsive", "Rápido", "Listo para SEO", "Bilingüe", "Integración WhatsApp", "Formularios"],
    process: [
      { title: "Descubrimos", description: "Conocemos tu negocio, tus objetivos y tus clientes para crear la solución digital perfecta para tu empresa." },
      { title: "Diseñamos", description: "Diseñamos una experiencia moderna y enfocada en el usuario que fortalece tu marca y genera confianza en tus clientes." },
      { title: "Desarrollamos", description: "Desarrollamos tu página web, CRM o plataforma personalizada utilizando tecnología segura, rápida y escalable." },
      { title: "Lanzamos", description: "Publicamos tu proyecto, brindamos soporte continuo y te ayudamos a seguir haciendo crecer tu negocio en línea." },
    ],
    pricing: [["Website Básico", "Una presencia profesional enfocada."], ["Website Profesional", "Un website completo para crecer."], ["Website Personalizado", "Una experiencia digital a tu medida."]],
    samples: "Direcciones visuales seleccionadas",
    final: "Convirtamos tu negocio en una mejor experiencia digital.",
  },
} satisfies Record<Locale, unknown>;

export const websiteOptions = {
  en: [
    { title: "Business Website", subtitle: "Professional websites built to grow your business.", description: "Perfect for companies that need a modern online presence, generate leads and build credibility.", features: ["Responsive Design", "Mobile Optimized", "Contact Forms", "Google Maps", "SEO Ready", "SSL Security", "Fast Performance", "Analytics Integration"], ideal: ["Local Businesses", "Construction", "Restaurants", "Medical Offices", "Law Firms", "Accounting", "Retail Stores"], cta: "Get a Free Quote", image: "/images/websites/business-corporate-premium.png" },
    { title: "Service Website", subtitle: "Designed for businesses that sell professional services.", description: "A complete website focused on attracting new clients and increasing appointments.", features: ["Appointment Booking", "Contact Forms", "Testimonials", "Portfolio", "Google Reviews", "SEO Optimization", "Live Chat", "Mobile Friendly"], ideal: ["Beauty Salons", "Dentists", "Lawyers", "Coaches", "Consultants", "Therapists"], cta: "Request Your Website", image: "/images/websites/service-clinic-premium.png" },
    { title: "E-Commerce Website", subtitle: "Sell your products online 24/7.", description: "Complete online stores with secure payments and inventory management.", features: ["Online Store", "Shopping Cart", "Secure Payments", "Product Management", "Coupons", "Inventory", "Shipping Options", "Order Tracking"], ideal: ["Clothing Brands", "Print Shops", "Gift Shops", "Electronics", "Beauty Products", "Food"], cta: "Start Selling Online", image: "/images/projects/fashion-commerce.png" },
    { title: "Landing Page", subtitle: "Built to convert visitors into customers.", description: "High-converting landing pages designed for advertising campaigns and lead generation.", features: ["Fast Loading", "Lead Forms", "Call-To-Action", "Google Ads Ready", "Facebook Pixel", "Analytics", "A/B Testing Ready", "Mobile Optimized"], ideal: ["Marketing Campaigns", "Product Launches", "Promotions", "Events", "Real Estate", "Online Courses"], cta: "Create My Landing Page", image: "/images/websites/landing-startup-premium.png" },
  ],
  es: [
    { title: "Website Empresarial", subtitle: "Websites profesionales creados para hacer crecer tu negocio.", description: "Perfecto para empresas que necesitan una presencia moderna, generar prospectos y crear credibilidad.", features: ["Diseño responsive", "Optimizado para móvil", "Formularios de contacto", "Google Maps", "Listo para SEO", "Seguridad SSL", "Alto rendimiento", "Integración de analytics"], ideal: ["Negocios locales", "Construcción", "Restaurantes", "Oficinas médicas", "Bufetes legales", "Contabilidad", "Tiendas"], cta: "Obtén una cotización gratis", image: "/images/websites/business-corporate-premium.png" },
    { title: "Website de Servicios", subtitle: "Diseñado para negocios que venden servicios profesionales.", description: "Un website completo enfocado en atraer clientes nuevos y aumentar las citas.", features: ["Reservación de citas", "Formularios de contacto", "Testimonios", "Portafolio", "Reseñas de Google", "Optimización SEO", "Chat en vivo", "Compatible con móvil"], ideal: ["Salones de belleza", "Dentistas", "Abogados", "Coaches", "Consultores", "Terapeutas"], cta: "Solicita tu website", image: "/images/websites/service-clinic-premium.png" },
    { title: "Website E-Commerce", subtitle: "Vende tus productos en línea 24/7.", description: "Tiendas en línea completas con pagos seguros y gestión de inventario.", features: ["Tienda en línea", "Carrito de compras", "Pagos seguros", "Gestión de productos", "Cupones", "Inventario", "Opciones de envío", "Seguimiento de órdenes"], ideal: ["Marcas de ropa", "Imprentas", "Tiendas de regalos", "Electrónica", "Productos de belleza", "Comida"], cta: "Comienza a vender en línea", image: "/images/projects/fashion-commerce.png" },
    { title: "Landing Page", subtitle: "Creada para convertir visitantes en clientes.", description: "Landing pages de alta conversión para campañas publicitarias y generación de prospectos.", features: ["Carga rápida", "Formularios", "Llamados a la acción", "Lista para Google Ads", "Facebook Pixel", "Analytics", "Lista para pruebas A/B", "Optimizada para móvil"], ideal: ["Campañas de marketing", "Lanzamientos", "Promociones", "Eventos", "Bienes raíces", "Cursos en línea"], cta: "Crear mi landing page", image: "/images/websites/landing-startup-premium.png" },
  ],
} satisfies Record<Locale, unknown>;
