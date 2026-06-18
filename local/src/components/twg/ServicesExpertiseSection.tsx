import Link from 'next/link'
import { serviceAreas } from '../../data/homeContent'
import ServiceAreaIcon from './ServiceAreaIcon'

const NUMBER_MARKERS = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧']

type ServicesExpertiseSectionProps = {
  showViewAllLink?: boolean
}

function ServicesExpertiseSection({ showViewAllLink = false }: ServicesExpertiseSectionProps) {
  return (
    <section className="armedia-section-light border-t border-black/10" id="expertise">
      <div className="armedia-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="armedia-eyebrow text-black/50">Services</p>
            <h2 className="armedia-heading mt-4 text-black">
              Areas
              <br />
              of expertise
            </h2>
            <p className="armedia-body mt-5 max-w-sm font-heading text-base font-semibold text-black/85">
              Multidisciplined gameplan
            </p>
            <p className="armedia-body mt-4 max-w-sm text-black/70">
              We are a full-service marketing media agency. Our team works together to build connected
              campaign systems for your business.
            </p>
            {showViewAllLink ? (
              <Link href="/services" className="armedia-btn-secondary mt-8">
                Our services
              </Link>
            ) : (
              <Link href="/contact" className="armedia-btn-secondary mt-8">
                Request consultation
              </Link>
            )}
          </aside>

          <div className="services-expertise-grid grid gap-0 border border-black/10 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <article
                key={area.title}
                className="services-expertise-card border-b border-r border-black/10 bg-white p-6 lg:p-8"
              >
                <ServiceAreaIcon variant={area.icon} className="mb-6" />
                <h3 className="font-heading text-xl font-bold text-black">{area.title}</h3>
                <ol className="mt-4 space-y-2">
                  {area.items.map((item, index) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-black/80">
                      <span className="mt-0.5 shrink-0 font-heading text-[11px] text-black/45">
                        {NUMBER_MARKERS[index] ?? `${index + 1}.`}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesExpertiseSection
