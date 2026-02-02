import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],
  },
  experimental: {
    isrFlushToDisk: false, // Ngăn ISR cache xuống disk
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
        { key: "Pragma", value: "no-cache" },
        { key: "Expires", value: "0" },
      ],
    },
  ],
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false; // Tắt cache trên Webpack Dev Server
    }
    return config;
  },
};

export default nextConfig;
