import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.BASE_PATH ?? (isGithubPages ? '/MCM' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
