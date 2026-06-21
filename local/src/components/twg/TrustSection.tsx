import Link from 'next/link'

const pillars = [
  {
    title: 'Clear commercial focus',
    body: 'Every engagement starts with the business goal — leads, sales, systems, efficiency, visibility, or execution.',
  },
  {
    title: 'Connected execution',
    body: 'Website, media, CRM, reporting, and workflow all work together instead of sitting across disconnected tools and suppliers.',
  },
  {
    title: 'Operational thinking',
    body: 'We do more than launch campaigns. We help improve the systems, processes, and handoffs your business depends on.',
  },
  {
    title: 'Practical reporting',
    body: 'Dashboards and reviews are built to support decisions — what to fix, what to scale, and what to automate next.',
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
