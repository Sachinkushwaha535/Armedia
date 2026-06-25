import type { MetadataRoute } from 'next'
import { siteUrl } from '../components/siteConfig'

const routes = [
  '',
  '/about',
  '/services',
  '/contact',
  '/start-project',
  '/web-design-auckland',
  '/react-development-nz',
  '/seo-agency-auckland',
  '/ecommerce-website-auckland',
  '/nextjs-agency-new-zealand',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
