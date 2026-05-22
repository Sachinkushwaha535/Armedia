import Link from 'next/link'

type ServiceLandingPageProps = {
  kicker: string
  title: string
  description: string
  points: string[]
  outcomes: string[]
  benefits: string[]
  pricing: string
  timeline: string[]
  technologies: string[]
  portfolio: string[]
  faq: {
    question: string
    answer: string
  }[]
}

function ServiceLandingPage({
  kicker,
  title,
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
  const detailCards = [
    { title: 'What is included', items: points },
    { title: 'Business outcomes', items: outcomes },
    { title: 'Benefits', items: benefits },
    { title: 'Pricing', body: pricing },
    { title: 'Timeline', items: timeline },
    { title: 'Technologies', items: technologies },
    { title: 'Portfolio fit', items: portfolio },
  ]

  return (
    <section className="page-shell section service-landing">
      <div className="section-heading service-landing-hero">
        <p className="eyebrow">{kicker}</p>
        <h1 className="page-title">{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/start-project">Start a project</Link>
          <Link className="button button-secondary" href="/services">View all services</Link>
        </div>
      </div>

      <div className="studio-grid service-detail-grid">
        {detailCards.map((card, index) => (
          <article className="studio-card service-detail-card" key={card.title}>
            <span className="service-card-num">{String(index + 1).padStart(2, '0')}</span>
            <h2>{card.title}</h2>
            {card.body ? <p>{card.body}</p> : null}
            {card.items ? (
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}

        <article className="studio-card service-detail-card service-faq-card">
          <span className="service-card-num">08</span>
          <h2>FAQ</h2>
          {faq.map((item) => (
            <details className="service-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </article>
      </div>
    </section>
  )
}

export default ServiceLandingPage
