import type { NextConfig } from "next";

const apiBase = (
  process.env.API_BASE_URL ?? "https://api-dev.fitnest.az/api/v1"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    // Avoid 3840px `/_next/image` variants — they 502 on the large payment/hero assets.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
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
