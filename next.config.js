/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: false },
      { source: '/features', destination: '/', permanent: false },
      { source: '/contact', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
