import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    // Point turbopack at this project's own directory so it doesn't
    // pick up the root-level package-lock.json at C:\Users\bk798\
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: '/web-design-auckland', destination: '/services', permanent: true },
      { source: '/react-development-nz', destination: '/services', permanent: true },
      { source: '/seo-agency-auckland', destination: '/services', permanent: true },
      { source: '/ecommerce-website-auckland', destination: '/services', permanent: true },
      { source: '/nextjs-agency-new-zealand', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
