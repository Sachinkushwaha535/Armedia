import { siteUrl } from '../components/siteConfig'
import type { BlogPost } from '../data/blogPosts'

export function buildArticleSchema(post: BlogPost, description: string | null | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.headline,
    description: description ?? post.description,
    datePublished: post.published,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: {
      '@type': 'Organization',
      name: 'Armedia',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
    },
    mainEntityOfPage: `${siteUrl}${post.href}`,
    image: `${siteUrl}/opengraph-image`,
  }
}
