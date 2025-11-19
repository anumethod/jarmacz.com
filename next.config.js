/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Preserve static files
  trailingSlash: false,
  // Enable static HTML export if needed (for static hosting)
  // output: 'export',
}

module.exports = nextConfig

