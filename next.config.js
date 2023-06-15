/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
     domains: ['mms-delivery.sitecorecloud.io'],
  },  
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
