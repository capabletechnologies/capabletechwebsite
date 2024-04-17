/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000','test.capabletech.net', 'testsecure.peachpayments.com'],
      allowedForwardedHosts: ['localhost:3000','test.capabletech.net', 'testsecure.peachpayments.com'],
    },
  },
};

module.exports = nextConfig;
