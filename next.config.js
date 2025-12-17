/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Ensure proper output for Vercel
  output: undefined, // Let Vercel handle this automatically
}

module.exports = nextConfig

