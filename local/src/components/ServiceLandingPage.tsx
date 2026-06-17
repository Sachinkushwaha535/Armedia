'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHeader from './motion/PageHeader'
import PageGridItem from './motion/PageGridItem'
import StaggerReveal from './motion/StaggerReveal'
import { viewportOnce } from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

type ServiceLandingPageProps = {
  kicker: string
  title: string
  path: string
  description: string
  points: string[]
  outcomes: string[]
  benefits: string[]
  pricing?: string
  timeline: string[]
  technologies: string[]
  portfolio: string[]
  faq?: {
    question: string
    answer: string
  }[]
}

function ServiceLandingPage({
  kicker,
  title,
  path,
  description,
  points,
  outcomes,
  benefits,
  pricing,
  timeline,
  technologies,
  portfolio,
  faq,
}: ServiceLandingPageProps) {
  const { shouldAnimate } = useMotionPreset()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url: `${siteUrl}${path}`,
    provider: {
      '@type': 'Organization',
      name: 'Armedia',
      url: siteUrl,
    },
    areaServed: ['Auckland', 'New Zealand', 'Australia'],
    serviceType: kicker,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${title} deliverables`,
      itemListElement: points.map((point) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: point,
        },
      })),
    },
    ...(faq && {
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
  }

  let cardIndex = 0

  return (
    <section className="page-shell section page-landing-animated" aria-labelledby="service-landing-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        kicker={kicker}
        title={title}
        description={description}
        titleId="service-landing-title"
        actions={
          <>
            <Link className="button button-primary" href="/start-project">Start a project</Link>
            <Link className="button button-secondary" href="/services">View all services</Link>
          </>
        }
      />

      {shouldAnimate ? (
        <motion.div
          className="page-landing-accent"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ) : null}

      <StaggerReveal className="studio-grid" stagger={0.07}>
        <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
          <h2>What is included</h2>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </PageGridItem>

        <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
          <h2>Business outcomes</h2>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </PageGridItem>

        <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
          <h2>Benefits</h2>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </PageGridItem>

        {pricing ? (
          <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
            <h2>Pricing</h2>
            <p>{pricing}</p>
          </PageGridItem>
        ) : null}

        <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
          <h2>Timeline</h2>
          <ul>
            {timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageGridItem>

        <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
          <h2>Technologies</h2>
          <ul>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </PageGridItem>

        <PageGridItem className="studio-card" index={cardIndex++} variant="blur">
          <h2>Portfolio fit</h2>
          <ul>
            {portfolio.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageGridItem>

        {faq && faq.length > 0 ? (
          <PageGridItem className="studio-card" index={cardIndex} variant="blur">
            <h2>FAQ</h2>
            {faq.map((item) => (
              <div key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </PageGridItem>
        ) : null}
      </StaggerReveal>
    </section>
  )
}

export default ServiceLandingPage
