import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // This allows the build to finish even if there are type errors.
    ignoreBuildErrors: true,
  },
  // If you also want to skip ESLint checks to speed up the build:
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;