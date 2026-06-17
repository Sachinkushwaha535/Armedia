'use client'

import Link from 'next/link'
import PageGridItem from './motion/PageGridItem'
import PageHeader from './motion/PageHeader'
import StaggerReveal from './motion/StaggerReveal'
import { siteUrl } from './siteConfig'

type ServiceLandingPageProps = {
  kicker: string
  title: string
  path: string
  description: string
  points: string[]
  outcomes: string[]
  benefits: string[]
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
  timeline,
  technologies,
  portfolio,
  faq,
}: ServiceLandingPageProps) {
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
    ...(faq &&
      faq.length > 0 && {
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

  const sections = [
    { title: 'What is included', items: points },
    { title: 'Business outcomes', items: outcomes },
    { title: 'Benefits', items: benefits },
    { title: 'Timeline', items: timeline },
    { title: 'Technologies', items: technologies },
    { title: 'Portfolio fit', items: portfolio },
  ]

  let cardIndex = 0

  return (
    <section
      className="page-shell section page-shell-animated page-service-landing-scroll"
      aria-labelledby="service-landing-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="service-landing-scroll-bg" aria-hidden="true" />

      <div className="service-landing-header-wrap am-container">
        <PageHeader
          kicker={kicker}
          title={title}
          description={description}
          titleId="service-landing-title"
          withScrollProgress
          actions={
            <>
              <Link className="btn-primary" href="/contact">
                Book a growth consultation
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link className="btn-ghost" href="/services">
                View all services
              </Link>
            </>
          }
        />
      </div>

      <div className="am-container service-landing-layout">
        <StaggerReveal className="service-landing-grid" stagger={0.07}>
          {sections.map((section) => (
            <PageGridItem
              key={section.title}
              className="service-landing-card"
              index={cardIndex++}
              variant="blur"
            >
              <p className="eyebrow">{section.title}</p>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </PageGridItem>
          ))}

          {faq && faq.length > 0 ? (
            <PageGridItem
              className="service-landing-card service-landing-card--faq"
              index={cardIndex}
              variant="blur"
            >
              <p className="eyebrow">FAQ</p>
              {faq.map((item) => (
                <div key={item.question} className="service-landing-faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </PageGridItem>
          ) : null}
        </StaggerReveal>

        <aside className="service-landing-cta">
          <p className="eyebrow">Next step</p>
          <h2>Ready to shape this for your brand?</h2>
          <p>
            Share your goals, audience, and timeline — we will recommend the most practical mix of
            strategy, media, creative, and delivery.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">
              Book a consultation
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ServiceLandingPage
