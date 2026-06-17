'use client'

import Link from 'next/link'
import PageHeader from './motion/PageHeader'
import PageGridItem from './motion/PageGridItem'
import StaggerReveal from './motion/StaggerReveal'

const posts = [
  {
    title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    href: '/blog/media-plan-digital-ooh-offline',
    category: 'Media Planning',
    description:
      'A practical framework for choosing the right channel mix, message, budget, and measurement plan before campaign launch.',
  },
  {
    title: 'Where AI Helps Marketing Teams First',
    href: '/blog/ai-workflows-service-teams',
    category: 'AI Workflows',
    description:
      'Use AI for content planning, campaign summaries, lead qualification, reporting, and faster marketing operations.',
  },
  {
    title: 'Business Intelligence for Campaign Decisions',
    href: '/blog/business-intelligence-campaign-decisions',
    category: 'Business Intelligence',
    description:
      'How dashboards, customer data, competitor signals, and campaign analytics help teams decide what to scale next.',
  },
  {
    title: 'Why Brand Recall Needs Offline and OOH Media',
    href: '/blog/offline-ooh-brand-recall',
    category: 'OOH + Offline',
    description:
      'Outdoor media, print, retail visibility, and local activations can strengthen digital campaigns when planned together.',
  },
  {
    title: 'Performance Advertising Without Wasting Budget',
    href: '/blog/performance-advertising-budget',
    category: 'Advertising',
    description:
      'A simple way to think about creative testing, targeting, retargeting, conversion tracking, and weekly campaign reviews.',
  },
  {
    title: 'Campaign Landing Pages That Convert Better',
    href: '/blog/website-trust-auckland-2026',
    category: 'Conversion',
    description:
      'Clear offer structure, trust proof, fast loading, and focused calls to action make paid traffic easier to convert.',
  },
]

const categories = [
  'Media Planning',
  'AI Workflows',
  'Business Intelligence',
  'Advertising',
  'OOH + Offline',
  'Conversion',
]

function BlogPage() {
  return (
    <section className="page-shell section page-blog-animated">
      <PageHeader
        kicker="Insights"
        title="Practical thinking for smarter campaigns."
        description="Clear insights on media planning, AI workflows, business intelligence, advertising, OOH, offline campaigns, and conversion strategy."
      />

      <StaggerReveal className="about-tech-grid" aria-label="Blog categories" stagger={0.05}>
        {categories.map((category, index) => (
          <PageGridItem key={category} as="span" index={index} variant="scale" hoverLift={false}>
            {category}
          </PageGridItem>
        ))}
      </StaggerReveal>

      <StaggerReveal className="studio-grid" stagger={0.07} delayChildren={0.04}>
        {posts.map((post, index) => (
          <PageGridItem key={post.title} className="studio-card" index={index} variant="blur">
            <p className="eyebrow">{post.category}</p>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link className="text-link" href={post.href}>Read insight</Link>
          </PageGridItem>
        ))}
      </StaggerReveal>
    </section>
  )
}

export default BlogPage
