import type { MetadataRoute } from 'next'
import { siteUrl } from '../components/siteConfig'

const routes = [
  '',
  '/services',
  '/about',
  '/blog',
  '/contact',
  '/start-project',
  '/web-design-auckland',
  '/seo-agency-auckland',
  '/ecommerce-website-auckland',
  '/blog/media-plan-digital-ooh-offline',
  '/blog/ai-workflows-service-teams',
  '/blog/business-intelligence-campaign-decisions',
  '/blog/offline-ooh-brand-recall',
  '/blog/performance-advertising-budget',
  '/blog/website-trust-auckland-2026',
  '/privacy',
  '/terms',
  '/resources/campaign-checklist',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }))
}
