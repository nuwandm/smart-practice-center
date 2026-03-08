import type { NextConfig } from "next";

// In dev: empty string → site at localhost:3000/
// In production build: reads from .env.production → '/smart-practice-center'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
