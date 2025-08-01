import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for AWS Amplify
  images: {
    domains: [
      'tailwindcss.com',
      'apollo.olx.in',
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
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  distDir: '.next',
  trailingSlash: true,
};

module.exports = nextConfig;
export default nextConfig;

