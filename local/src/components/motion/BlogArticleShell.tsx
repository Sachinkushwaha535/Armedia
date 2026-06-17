'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import PageHeader from './PageHeader'
import PageGridItem from './PageGridItem'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'
import { fadeUpVariants, softTransition } from '../../lib/motion'

type BlogArticleShellProps = {
  kicker?: string
  title: string
  intro?: string
  children: ReactNode
  schemaScript?: ReactNode
  showBackLink?: boolean
}

function BlogArticleShell({
  kicker = 'Article',
  title,
  intro,
  children,
  schemaScript,
  showBackLink = false,
}: BlogArticleShellProps) {
  return (
    <article className="page-shell section legal-content page-article-animated" aria-labelledby="article-title">
      {schemaScript}
      <PageHeader kicker={kicker} title={title} titleId="article-title" />
      {intro ? (
        <ScrollReveal variants={fadeUpVariants} transition={softTransition}>
          <p className="article-intro">{intro}</p>
        </ScrollReveal>
      ) : null}
      <StaggerReveal className="article-body-stagger">
        {children}
      </StaggerReveal>
      {showBackLink ? (
        <ScrollReveal delay={0.1}>
          <Link className="text-link article-back-link" href="/blog">Back to insights</Link>
        </ScrollReveal>
      ) : null}
    </article>
  )
}

export function ArticleSection({
  children,
  index,
}: {
  children: ReactNode
  index: number
}) {
  return (
    <PageGridItem as="section" index={index} variant="blur" hoverLift={false}>
      {children}
    </PageGridItem>
  )
}

export default BlogArticleShell
