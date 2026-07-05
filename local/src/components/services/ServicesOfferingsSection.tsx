import Link from 'next/link'
import type { ArmediaServiceCard } from '../../data/armediaServices'
import ArmediaServiceIcon from './ArmediaServiceIcon'

type ServicesOfferingsSectionProps = {
  kicker: string
  title: string
  description: string
  services: ArmediaServiceCard[]
}

function ServicesOfferingsSection({ kicker, title, description, services }: ServicesOfferingsSectionProps) {
  return (
    <section className="armedia-section-light border-t border-black/10">
      <div className="armedia-container py-16 lg:py-20">
        <p className="armedia-eyebrow text-black/50">{kicker}</p>
        <h2 className="armedia-heading mt-4 max-w-3xl text-black">{title}</h2>
        <p className="armedia-body mt-4 max-w-2xl text-black/70">{description}</p>

        <div className="services-offerings-grid mt-12">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="services-offering-card scroll-mt-28">
              {service.badge ? (
                <span className="services-offering-badge">{service.badge}</span>
              ) : null}
              <ArmediaServiceIcon variant={service.icon} />
              <h3 className="mt-5 font-heading text-lg font-bold text-black">{service.title}</h3>
              <p className="armedia-body mt-3 text-black/70">{service.desc}</p>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-black/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={service.href} className="services-offering-link mt-6 inline-flex">
                {service.linkLabel ?? 'Discuss this service →'}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOfferingsSection
