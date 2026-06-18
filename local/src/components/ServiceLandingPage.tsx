import Link from 'next/link'
import { siteUrl } from './siteConfig'

type ServiceLandingPageProps = {
  kicker: string
  breadcrumb?: string
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
  breadcrumb,
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
  const breadcrumbLabel = breadcrumb ?? kicker
  const pageUrl = `${siteUrl}${path}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: title,
        description,
        url: pageUrl,
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
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: breadcrumbLabel,
            item: pageUrl,
          },
        ],
      },
      ...(faq && faq.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  }

  const blocks = [
    { heading: 'What is included', items: points },
    { heading: 'Business outcomes', items: outcomes },
    { heading: 'Benefits', items: benefits },
    { heading: 'Timeline', items: timeline },
    { heading: 'Technologies', items: technologies },
    { heading: 'Portfolio fit', items: portfolio },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="contact-page-hero armedia-section-dark">
        <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />
        <div className="armedia-container relative z-10">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">{breadcrumbLabel}</span>
          </nav>
          <p className="armedia-eyebrow text-brand-gold">{kicker}</p>
          <h1 className="services-page-title mt-4 max-w-4xl">{title}</h1>
          <p className="armedia-lead mt-6 max-w-2xl text-brand-muted">{description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="armedia-btn-primary">
              Request consultation
            </Link>
            <Link href="/services" className="armedia-btn-secondary-light w-fit">
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="service-landing-grid">
            {blocks.map((block) => (
              <article key={block.heading} className="service-landing-card">
                <h2 className="font-heading text-lg font-bold text-black">{block.heading}</h2>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-black/75">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {pricing ? (
              <article className="service-landing-card">
                <h2 className="font-heading text-lg font-bold text-black">Pricing</h2>
                <p className="mt-4 text-sm leading-relaxed text-black/75">{pricing}</p>
              </article>
            ) : null}

            {faq && faq.length > 0 ? (
              <article className="service-landing-card service-landing-card--wide">
                <h2 className="font-heading text-lg font-bold text-black">FAQ</h2>
                <div className="mt-4 space-y-6">
                  {faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="font-heading text-base font-bold text-black">{item.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-black/75">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>

      <section className="armedia-section-muted border-t border-black/10">
        <div className="armedia-container py-14 lg:py-16">
          <h2 className="armedia-heading text-black">Ready to talk about {breadcrumbLabel.toLowerCase()}?</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70">
            Share your goal and timeline — we will reply with practical next steps.
          </p>
          <Link href="/contact" className="armedia-btn-secondary mt-8 inline-flex">
            Contact Armedia
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServiceLandingPage
