import Link from 'next/link'
import { serviceAreas } from '../../data/homeContent'
import ServiceImage from './ServiceImage'

function ServicesStickySection() {
  return (
    <section className="twg-section border-t border-brand-line bg-white text-black">
      <div className="mx-auto max-w-content px-5 py-14 lg:px-12 lg:py-20">
        <p className="twg-kicker text-black/60">Services</p>
        <div className="mt-4 border-t border-black/15 pt-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-black">
                Areas of expertise
              </h2>
              <p className="mt-3 font-heading text-lg font-semibold text-black/80">Multidisciplined gameplan</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/70">
                We are a full-service marketing media agency. Our team works together to build connected campaign systems
                for your business.
              </p>
              <Link href="/services" className="twg-pill-btn twg-pill-btn-dark mt-8">
                <span className="twg-pill-dot bg-white" />
                Our services
              </Link>
            </aside>

            <div className="grid gap-0 border-t border-black/10 md:grid-cols-2">
              {serviceAreas.map((area) => (
                <article
                  key={area.title}
                  className="border-b border-r border-black/10 bg-white p-6 transition-transform duration-200 hover:-translate-y-1 md:p-8"
                >
                  <div className="mb-5">
                    <ServiceImage src={area.image} title={area.title} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-black">{area.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-black/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-black/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStickySection
