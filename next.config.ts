import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/es/programas-gratis", destination: "/es/apps-herramientas", statusCode: 301 },
      { source: "/en/free-programs", destination: "/en/apps-tools", statusCode: 301 },
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
};

export default nextConfig;
