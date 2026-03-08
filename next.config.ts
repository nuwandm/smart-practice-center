import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/smart-practice-center',
  assetPrefix: '/smart-practice-center/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
