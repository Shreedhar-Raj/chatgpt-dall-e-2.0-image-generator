/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['external-preview.redd.it'],
  },
}

module.exports = nextConfig
