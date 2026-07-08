import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All photography is sourced from Unsplash via src/data/images.ts.
    // Swap the remote patterns (or point at a local /public path) when you
    // replace the placeholder imagery before production.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

export default nextConfig;
