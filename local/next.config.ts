import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'armedia.co.nz',
          },
        ],
        destination: 'https://www.armedia.co.nz/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    // Point turbopack at this project's own directory so it doesn't
    // pick up the root-level package-lock.json at C:\Users\bk798\
    root: path.resolve(__dirname),
  },
  async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'index, follow',
        },
      ],
    },
  ]
},
}

export default nextConfig
