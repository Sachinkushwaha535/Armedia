import Link from 'next/link'
import AboutSectionHeading from './AboutSectionHeading'
import WhoWeAreFaq from './WhoWeAreFaq'
import {
  whoWeAreCapabilities,
  whoWeAreCta,
  whoWeAreFit,
  whoWeAreFaq,
  whoWeAreHero,
  whoWeAreMethodology,
  whoWeAreProtection,
  whoWeAreWhy,
} from '../data/whoWeAreContent'

function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero armedia-section-dark">
        <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />
        <div className="armedia-container relative z-10 py-28 lg:py-32">
          <div className="about-hero-grid">
            <div>
              <p className="armedia-eyebrow text-brand-gold">{whoWeAreHero.eyebrow}</p>
              <h1 className="mt-5 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white">
                {whoWeAreHero.headlineLine1}
                <span className="mt-2 block text-brand-gold">{whoWeAreHero.headlineLine2}</span>
              </h1>
              <p className="armedia-lead mt-6 max-w-xl text-brand-muted">{whoWeAreHero.subline}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={whoWeAreHero.primaryCta.href} className="armedia-btn-primary">
                  {whoWeAreHero.primaryCta.label}
                </Link>
                <Link href={whoWeAreHero.secondaryCta.href} className="armedia-btn-secondary-light">
                  {whoWeAreHero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="about-hero-stats">
              {whoWeAreHero.stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <p className="about-stat-value">{stat.value}</p>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="about-section-shell">
            <AboutSectionHeading
              label="Why we exist"
              title={whoWeAreWhy.headlineLine1}
              titleAccent={whoWeAreWhy.headlineLine2}
            />
            <div className="about-section-content space-y-5">
              <p className="armedia-body text-brand-muted">{whoWeAreWhy.paragraphs[0]}</p>
              <p className="armedia-body text-brand-muted">{whoWeAreWhy.paragraphs[1]}</p>
              <p className="armedia-body font-semibold text-brand-gold">{whoWeAreWhy.paragraphs[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="about-section-shell about-section-shell--stacked">
            <AboutSectionHeading label="What we do" title={whoWeAreCapabilities.title} />
          </div>

          <div className="about-capability-grid about-section-below">
            {whoWeAreCapabilities.items.map((item) => (
              <article key={item.number} className="about-capability-card">
                <span className="about-capability-index">{item.number}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{item.title}</h3>
                <p className="armedia-body mt-3 text-brand-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="armedia-body about-section-below max-w-3xl text-white/45">
            {whoWeAreCapabilities.footnote}
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="about-section-shell about-section-shell--stacked">
            <AboutSectionHeading label="How we work" title={whoWeAreMethodology.title} />
          </div>

          <div className="about-method-grid about-section-below">
            {whoWeAreMethodology.steps.map((step) => (
              <article key={step.number} className="about-method-step">
                <div className="about-method-circle">{step.number}</div>
                <h3 className="mt-5 font-heading text-base font-bold text-white">{step.title}</h3>
                <p className="armedia-body mt-3 text-brand-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <AboutSectionHeading label="Who we work with" title={whoWeAreFit.title} />

          <div className="about-fit-grid about-section-below">
            <article className="about-fit-card about-fit-card--good">
              <h3 className="font-heading text-lg font-bold text-white">{whoWeAreFit.goodFit.title}</h3>
              <ul className="about-fit-list mt-5">
                {whoWeAreFit.goodFit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="about-fit-card about-fit-card--bad">
              <h3 className="font-heading text-lg font-bold text-white">{whoWeAreFit.notFit.title}</h3>
              <ul className="about-fit-list mt-5">
                {whoWeAreFit.notFit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* How we protect you */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="about-section-shell about-section-shell--stacked">
            <AboutSectionHeading label="How we protect you" title={whoWeAreProtection.title} />
          </div>

          <div className="about-protection-grid about-section-below">
            {whoWeAreProtection.items.map((item) => (
              <article key={item.title} className="about-protection-card">
                <span className="about-protection-dot" aria-hidden="true" />
                <h3 className="font-heading text-base font-bold text-white">{item.title}</h3>
                <p className="armedia-body mt-3 text-brand-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhoWeAreFaq label="FAQ" title={whoWeAreFaq.title} items={whoWeAreFaq.items} />

      {/* CTA */}
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="about-section-shell about-section-shell--stacked">
            <AboutSectionHeading title={whoWeAreCta.title} subline={whoWeAreCta.subline} />
          </div>

          <div className="about-cta-grid about-section-below">
            {whoWeAreCta.boxes.map((box) => (
              <article key={box.title} className="about-cta-card">
                <h3 className="font-heading text-xl font-bold text-white">{box.title}</h3>
                <p className="armedia-body mt-3 text-brand-muted">{box.sub}</p>
                <Link href={box.href} className="about-cta-link mt-6 inline-flex">
                  {box.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeArePage
