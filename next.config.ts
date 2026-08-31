import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/es/programas-gratis", destination: "/es/apps-herramientas", statusCode: 301 },
      { source: "/en/free-programs", destination: "/en/apps-tools", statusCode: 301 },
      { source: "/ai-content-system", destination: "/en/ai-content-system", statusCode: 301 },
    ];
  },
  async rewrites() {
    return {
      afterFiles: [
        { source: "/es/ai-content-system", destination: "/ai-content-system/index.html?lang=es" },
        { source: "/en/ai-content-system", destination: "/ai-content-system/index.html?lang=en" },
        { source: "/ec/es/ai-content-system", destination: "/ai-content-system/index.html?lang=es" },
        { source: "/ec/en/ai-content-system", destination: "/ai-content-system/index.html?lang=en" },
        {
          source: '/card/richard',
          destination: '/card/richard/index.html',
        },
        {
          source: '/card/richard/',
          destination: '/card/richard/index.html',
        },
      ],
    }
  },
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, follow" }];
    return [
      { source: "/api/:path*", headers: noindex },
      { source: "/card/richard-v1-backup/:path*", headers: noindex },
      { source: "/es/ver/:path*", headers: noindex }, { source: "/en/view/:path*", headers: noindex },
      { source: "/es/herramientas/formulario-pedido", headers: noindex }, { source: "/es/herramientas/generador-estimados", headers: noindex }, { source: "/es/herramientas/generador-facturas", headers: noindex }, { source: "/es/herramientas/generador-muestras", headers: noindex }, { source: "/es/herramientas/generador-propuestas", headers: noindex }, { source: "/es/herramientas/solicitud-pago", headers: noindex },
      { source: "/en/tools/order-form", headers: noindex }, { source: "/en/tools/estimate-generator", headers: noindex }, { source: "/en/tools/invoice-generator", headers: noindex }, { source: "/en/tools/sample-generator", headers: noindex }, { source: "/en/tools/proposal-generator", headers: noindex }, { source: "/en/tools/payment-request", headers: noindex },
    ];
  },
};

export default nextConfig;
