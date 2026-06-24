import type { MetadataRoute } from 'next'
import { siteUrl } from '../components/siteConfig'

const routes = [
  '',
  '/services',
  '/blog',
  '/contact',
  '/start-project',
  '/web-design-auckland',
  '/react-development-nz',
  '/seo-agency-auckland',
  '/ecommerce-website-auckland',
  '/nextjs-agency-new-zealand',
  '/blog/media-plan-digital-ooh-offline',
  '/blog/ai-workflows-service-teams',
  '/blog/business-intelligence-campaign-decisions',
  '/blog/offline-ooh-brand-recall',
  '/blog/performance-advertising-budget',
  '/blog/website-trust-auckland-2026',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }))
}
