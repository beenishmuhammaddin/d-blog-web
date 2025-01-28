/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1, // Limit CPU usage to 1 to prevent overloading.
  },
};

export default nextConfig;  // This is the correct syntax for ES modules
