/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // allow production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

module.exports = nextConfig;
