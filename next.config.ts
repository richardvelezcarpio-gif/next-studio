import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return {
      afterFiles: [
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
