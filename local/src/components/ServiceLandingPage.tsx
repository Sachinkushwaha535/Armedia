import Link from 'next/link'
import PageShell from './PageShell'
import Button from './ui/Button'
import { FadeIn, Stagger, StaggerItem } from './ui/motion'

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
  faq?: { question: string; answer: string }[]
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
    provider: { '@type': 'Organization', name: 'Armedia', url: siteUrl },
    areaServed: ['Auckland', 'New Zealand', 'Australia'],
    serviceType: kicker,
  }

  const cards = [
    { title: 'What is included', items: points },
    { title: 'Business outcomes', items: outcomes },
    { title: 'Benefits', items: benefits },
    { title: 'Timeline', items: timeline },
    { title: 'Technologies', items: technologies },
    { title: 'Portfolio fit', items: portfolio },
    ...(pricing ? [{ title: 'Pricing', items: [pricing], isText: true as const }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageShell
        kicker={kicker}
        title={title}
        description={description}
        actions={
          <>
            <Button href="/start-project">Start a project</Button>
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </>
        }
      >
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/30">
                <h2 className="text-base font-semibold text-white">{card.title}</h2>
                {'isText' in card && card.isText ? (
                  <p className="mt-3 text-sm text-zinc-400">{card.items[0]}</p>
                ) : (
                  <ul className="mt-4 space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-zinc-400">
                        <span className="text-accent" aria-hidden="true">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {faq && faq.length > 0 && (
          <FadeIn className="mt-12">
            <h2 className="text-2xl font-semibold text-white">FAQ</h2>
            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-base font-semibold text-white">{item.question}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.answer}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center sm:p-10">
          <h2 className="text-xl font-semibold text-white">Ready to discuss this service?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
            Book a consultation and we will map the right scope, timeline, and next steps for your campaign.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Book a consultation</Button>
            <Link className="link-underline text-sm font-medium text-accent" href="/start-project">
              Start your project brief
            </Link>
          </div>
        </FadeIn>
      </PageShell>
    </>
  )
}

export default ServiceLandingPage
