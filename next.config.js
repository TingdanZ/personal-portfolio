/** @type {import('next').NextConfig} */const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  assetPrefix: '/personal-portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

module.exports = nextConfig;
