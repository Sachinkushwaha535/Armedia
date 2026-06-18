'use client'

import Link from 'next/link'
import { useState } from 'react'
import { coreServiceCards, supportingServiceCards } from '../data/armediaServices'
import ServicesOfferingsSection from './services/ServicesOfferingsSection'
import {
  servicesDiscoverLinks,
  servicesMethodSlides,
  servicesStrategies,
  servicesTechStack,
} from '../data/servicesPageContent'
import { whatWeDo } from '../data/homeContent'
import ServicesExpertiseSection from './twg/ServicesExpertiseSection'

function ServicesPage() {
  const [methodIndex, setMethodIndex] = useState(0)
  const [openStrategy, setOpenStrategy] = useState(0)
  const method = servicesMethodSlides[methodIndex]

  return (
    <>
      {/* Hero */}
      <section className="services-page-hero armedia-section-dark">
        <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />
        <div className="armedia-container relative z-10">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">Services</span>
          </nav>
          <p className="armedia-eyebrow text-brand-gold">How we help your business</p>
          <h1 className="services-page-title mt-4 max-w-4xl">Services built for strategy, media, and measurable growth</h1>
          <p className="armedia-lead mt-6 max-w-2xl text-brand-muted">
            Armedia connects strategy, advertising, digital media, AI workflows, business intelligence,
            and reporting — so your campaigns are easier to plan, launch, and improve.
          </p>
          <Link href="/contact" className="armedia-btn-primary mt-10">
            Request consultation
          </Link>
        </div>
      </section>

      {/* Core Armedia services (restored) */}
      <ServicesOfferingsSection
        kicker="Our services"
        title="Growth, media, and intelligence services"
        description="These are the main services Armedia leads with — aligned with strategy, advertising, AI workflows, BI, and connected campaign delivery."
        services={coreServiceCards}
      />

      <ServicesOfferingsSection
        kicker="Supporting capabilities"
        title="Digital delivery and technical support"
        description="These services support campaign execution, digital performance, reporting, and internal systems."
        services={supportingServiceCards}
      />

      {/* Areas of expertise (TWG-style taxonomy) */}
      <ServicesExpertiseSection />

      {/* Technology */}
      <section className="armedia-section-muted border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-black/50">Tools of the trade</p>
          <h2 className="armedia-heading mt-4 text-black">Technology capabilities</h2>
          <div className="services-tech-grid mt-10">
            {servicesTechStack.map((tool) => (
              <div key={tool.name} className="services-tech-item">
                <span className="services-tech-name">{tool.name}</span>
                <span className="services-tech-index">{tool.index}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-brand-gold">{whatWeDo.kicker}</p>
          <div className="mt-8 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-white">
                <span className="block">ideas</span>
                <span className="mt-1 block italic text-brand-gold">around</span>
              </h2>
              <p className="armedia-lead mt-6 max-w-md text-brand-muted">{whatWeDo.subline}</p>
            </div>
            <Link href={whatWeDo.cta.href} className="armedia-btn-primary w-fit shrink-0">
              {whatWeDo.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-black/50">How can we help you?</p>
          <h2 className="armedia-heading mt-4 text-black">Method</h2>

          <div className="services-method-tabs mt-8">
            {servicesMethodSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={[
                  'services-method-tab',
                  index === methodIndex ? 'services-method-tab--active' : 'services-method-tab--idle',
                ].join(' ')}
                onClick={() => setMethodIndex(index)}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="font-heading text-sm font-bold tabular-nums text-brand-gold">
                {String(methodIndex + 1).padStart(2, '0')}
              </p>
              <h3 className="armedia-heading mt-3 text-black">{method.title}</h3>
              <p className="armedia-body mt-4 max-w-2xl text-black/75">{method.body}</p>
            </div>
            <Link href="/contact" className="armedia-btn-secondary w-fit shrink-0">
              {method.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="armedia-section-muted border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-black/50">Our strategies</p>
          <h2 className="armedia-heading mt-4 text-black">From strategy to measurement</h2>

          <div className="services-strategy-list mt-10">
            {servicesStrategies.map((item, index) => {
              const isOpen = openStrategy === index
              return (
                <article key={item.step} className="services-strategy-item">
                  <button
                    type="button"
                    className="services-strategy-trigger"
                    onClick={() => setOpenStrategy(index)}
                    aria-expanded={isOpen}
                  >
                    <span>
                      <span className="services-strategy-step">{item.step}</span>
                      <span className="services-strategy-title block">{item.title}</span>
                    </span>
                    <span
                      className={[
                        'services-strategy-toggle',
                        isOpen ? 'services-strategy-toggle--open' : '',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={[
                      'overflow-hidden transition-all duration-300',
                      isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0',
                    ].join(' ')}
                  >
                    <p className="services-strategy-body">{item.body}</p>
                    <ul className="services-strategy-bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Discover CTA */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-brand-gold">Find out why we&apos;re the right fit</p>
          <div className="services-discover-grid mt-8">
            {servicesDiscoverLinks.map((item) => (
              <Link key={item.label} href={item.href} className="services-discover-card">
                <h3>{item.title}</h3>
                <span className="services-discover-label">
                  {item.label} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
          <Link href="/contact" className="armedia-btn-primary mt-10">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
