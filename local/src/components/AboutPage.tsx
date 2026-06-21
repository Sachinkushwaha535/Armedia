import Link from 'next/link'
import {
  aboutCapabilities,
  aboutPillars,
  aboutProofAreas,
  aboutTeamRoles,
} from '../data/aboutPageContent'

function AboutPage() {
  return (
    <>
      <section className="contact-page-hero armedia-section-dark">
        <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />
        <div className="armedia-container relative z-10">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">Who we are</span>
          </nav>
          <p className="armedia-eyebrow text-brand-gold">About Armedia</p>
          <h1 className="services-page-title mt-4 max-w-4xl">
            An Auckland agency built to support your business end to end.
          </h1>
          <p className="armedia-lead mt-6 max-w-2xl text-brand-muted">
            Armedia is a web development and media agency that helps businesses build stronger
            systems across website, media, sales, workflow, automation, and reporting.
          </p>
          <p className="armedia-body mt-4 max-w-2xl text-brand-muted">
            We work across the parts of the business that usually get split between multiple
            suppliers — web, creative, campaigns, dashboards, integrations, and operational support
            — so execution stays connected.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="armedia-btn-primary">
              Book a strategy call
            </Link>
            <Link href="/services" className="armedia-btn-secondary-light w-fit">
              Our services
            </Link>
          </div>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-black/50">Agency positioning</p>
          <h2 className="armedia-heading mt-4 max-w-3xl text-black">
            Not just a marketing agency. A practical partner for web, media, systems, and business
            growth.
          </h2>
          <p className="armedia-body mt-5 max-w-2xl text-black/70">
            Armedia is shaped for businesses that need connected delivery across web, media, sales
            systems, operations, and reporting — not disconnected vendor handoffs.
          </p>

          <div className="about-pillar-grid mt-12">
            {aboutPillars.map((item, index) => (
              <article key={item.title} className="about-pillar-card">
                <span className="about-pillar-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="armedia-section-muted border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-black/50">Capabilities</p>
          <h2 className="armedia-heading mt-4 text-black">Built for planning, execution, and measurement</h2>

          <div className="about-capability-list mt-10 divide-y divide-black/10 border-y border-black/10">
            {aboutCapabilities.map((item, index) => (
              <article key={item.title} className="about-capability-row py-6 lg:py-7">
                <span className="font-heading text-sm font-bold tabular-nums text-brand-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mt-2 lg:mt-0">
                  <h3 className="font-heading text-base font-bold text-black lg:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-black/50">Team model</p>
          <h2 className="armedia-heading mt-4 text-black">Senior roles around strategy, creative, and intelligence</h2>
          <p className="armedia-body mt-4 max-w-2xl text-black/70">
            The team structure reflects the core roles clients engage for campaign planning,
            creative execution, and performance analysis.
          </p>

          <div className="about-team-grid mt-10">
            {aboutTeamRoles.map((member) => (
              <article key={member.name} className="about-team-card">
                <span className="about-team-avatar" aria-hidden="true">
                  {member.initials}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-black">{member.name}</h3>
                <p className="mt-2 text-sm text-black/70">{member.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <p className="armedia-eyebrow text-brand-gold">Proof system</p>
          <h2 className="armedia-heading mt-4 text-white">Professional trust built on evidence</h2>
          <p className="armedia-body mt-4 max-w-2xl text-brand-muted">
            Strong agency positioning depends on evidence — campaign examples, verification
            standards, and practical reporting.
          </p>

          <div className="about-proof-grid mt-10">
            {aboutProofAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:p-7"
              >
                <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.body}</p>
              </article>
            ))}
          </div>

          <Link href="/contact" className="armedia-btn-primary mt-10 inline-flex">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
