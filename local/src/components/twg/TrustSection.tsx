import Link from 'next/link'

const pillars = [
  {
    title: 'Clear commercial focus',
    body: 'Campaigns start with audience, offer, and measurement — so budget maps to outcomes, not activity for its own sake.',
  },
  {
    title: 'Connected channel execution',
    body: 'Strategy, advertising, media, AI workflows, and reporting work as one system instead of disconnected vendor silos.',
  },
  {
    title: 'Honest reporting',
    body: 'Dashboards and reviews are built for decisions — what to scale, refine, or pause — with plain-language summaries.',
  },
]

function TrustSection() {
  return (
    <section className="armedia-section-muted border-t border-black/10">
      <div className="armedia-container py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="armedia-eyebrow text-black/50">Why Armedia</p>
          <h2 className="armedia-heading mt-4 text-black">
            Built for teams that need clarity, not noise
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-black/10 bg-white p-6 lg:p-8"
            >
              <h3 className="font-heading text-lg font-bold text-black">{pillar.title}</h3>
              <p className="armedia-body mt-3 text-black/70">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="armedia-btn-primary">
            Start a conversation
          </Link>
          <Link href="/services" className="armedia-btn-secondary">
            View services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
