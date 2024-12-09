/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
  eslint: {
    // Warning: Disables ALL ESLint checks on builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 