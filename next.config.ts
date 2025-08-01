import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for AWS Amplify
  images: {
    domains: [
      'tailwindcss.com',
      'apollo.olx.in',
      // Add other domains as needed
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'apollo.olx.in',
        pathname: '/**',
      },
    ],
  },
  // AWS Amplify specific optimizations
  compress: true,
  productionBrowserSourceMaps: false, // Disable for production
  swcMinify: true,
  // Enable React Strict Mode
  reactStrictMode: true,
  // Configure build output
  distDir: '.next',
  // Enable static export if needed
  trailingSlash: true,
};

module.exports = nextConfig;

export default nextConfig;
