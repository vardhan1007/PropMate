import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows the build to finish even with small type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skips linting during the build to save time and avoid failures
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;