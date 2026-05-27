import Link from 'next/link'

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

  return (
    <section className="page-shell section" aria-labelledby="service-landing-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="section-heading">
        <p className="eyebrow">{kicker}</p>
        <h1 className="page-title" id="service-landing-title">{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/start-project">Start a project</Link>
          <Link className="button button-secondary" href="/services">View all services</Link>
        </div>
      </div>

      <div className="studio-grid">
        <article className="studio-card">
          <h2>What is included</h2>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <article className="studio-card">
          <h2>Business outcomes</h2>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
        <article className="studio-card">
          <h2>Benefits</h2>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </article>

        {pricing && (
          <article className="studio-card">
            <h2>Pricing</h2>
            <p>{pricing}</p>
          </article>
        )}

        <article className="studio-card">
          <h2>Timeline</h2>
          <ul>
            {timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="studio-card">
          <h2>Technologies</h2>
          <ul>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
        <article className="studio-card">
          <h2>Portfolio fit</h2>
          <ul>
            {portfolio.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {faq && faq.length > 0 && (
          <article className="studio-card">
            <h2>FAQ</h2>
            {faq.map((item) => (
              <div key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </article>
        )}
      </div>
    </section>
  )
}

export default ServiceLandingPage