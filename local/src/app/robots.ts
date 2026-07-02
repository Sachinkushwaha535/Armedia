import type { MetadataRoute } from 'next'
import { siteUrl } from '../components/siteConfig'

const siteHost = new URL(siteUrl).host

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/wp-content/',
        '/wp-admin/',
        '/wp-includes/',
        '/wp-json/',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteHost,
  }
}