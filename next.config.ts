import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This allows Next.js to optimize images from specific domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Start with wildcards for development, tighten later
      },
    ],
  },
};

export default nextConfig;