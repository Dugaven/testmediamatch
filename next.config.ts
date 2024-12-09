import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: Disables ALL ESLint checks on builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
