/** @type {import('next').NextConfig} */const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};'',
        pathname: '/**', // Allow all paths from this hostname
      },
    ],
  },
};

module.exports = nextConfig;
