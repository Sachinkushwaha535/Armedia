import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'armedia.co.nz' }],
        destination: 'https://www.armedia.co.nz/:path*',
        permanent: true,
      },
      { source: '/how-we-boosted-client-conversions-200-with-smarter-ui-ux', destination: '/blog', permanent: true },
      { source: '/the-500-rebrand-that-made-our-client-look-like-a-fortune-500', destination: '/blog', permanent: true },
      { source: '/why-your-logo-colors-are-driving-away-your-ideal-customers', destination: '/blog', permanent: true },
      { source: '/mobile-first-design-mistakes-that-are-costing-you-customers', destination: '/blog', permanent: true },
      { source: '/how-we-automated-80-of-client-onboarding-with-no-code', destination: '/blog', permanent: true },
      { source: '/wordpress-vs-webflow-our-developers-settle-the-debate', destination: '/blog', permanent: true },
      { source: '/portfolio', destination: '/services', permanent: true },
      { source: '/shop', destination: '/services', permanent: true },
      { source: '/category/:path*', destination: '/services', permanent: true },
      { source: '/brand-design', destination: '/services', permanent: true },
      { source: '/webflow-development', destination: '/web-design-auckland', permanent: true },
      { source: '/careers', destination: '/', permanent: true },
      { source: '/customer-dashboard', destination: '/', permanent: true },
      { source: '/customer-cabinet', destination: '/', permanent: true },
      { source: '/checkout', destination: '/', permanent: true },
      { source: '/get-a-quote', destination: '/start-project', permanent: true },
      { source: '/hello-world', destination: '/', permanent: true },
      { source: '/sample-page', destination: '/', permanent: true },
      { source: '/form/:path*', destination: '/start-project', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
    ]
  },
}

export default nextConfig