import Link from 'next/link'
import { serviceAreas } from '../../data/homeContent'
import ServiceImage from './ServiceImage'

function ServicesStickySection() {
  return (
    <section className="armedia-section-light border-t border-black/10">
      <div className="armedia-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="armedia-eyebrow text-black/50">Services</p>
            <h2 className="armedia-heading mt-4 text-black">Areas of expertise</h2>
            <p className="armedia-body mt-5 max-w-sm text-black/70">
              A full-service marketing media agency — strategy, creative, web, digital marketing,
              and insights delivered as one connected plan.
            </p>
            <Link href="/services" className="armedia-btn-secondary mt-8">
              View all services
            </Link>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-xl border border-black/10 bg-[#fafaf8] p-5 transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] lg:p-6"
              >
                <div className="mb-4">
                  <ServiceImage src={area.image} title={area.title} />
                </div>
                <h3 className="font-heading text-base font-bold text-black lg:text-lg">{area.title}</h3>
                <ul className="armedia-body mt-3 space-y-1.5 text-black/70">
                  {area.items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStickySection
