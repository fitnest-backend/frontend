import type { NextConfig } from "next";

const apiBase = (
  process.env.API_BASE_URL ?? "https://api-dev.fitnest.az/api/v1"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${apiBase}/:path*`,
      },
    ];
  },
};


export default nextConfig;
