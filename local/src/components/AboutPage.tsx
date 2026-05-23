'use client'

import Link from 'next/link'
import PageShell from './PageShell'

function AboutPage() {
  return (
    <PageShell
      kicker="About"
      title="A studio built around strategy, detail, and dependable delivery."
      description="We combine art direction with clean engineering so each page feels intentional, fast, and easy to use."
      actions={
        <Link className="button button-primary" href="/contact">
          Book a call
        </Link>
      }
    >
      <div className="about-layout">
        <div className="studio-grid">
          <div className="studio-card">
            <h3>Approach</h3>
            <p>
              Build the story, set the hierarchy, and keep the interface confident without overcomplicating the experience.
            </p>
          </div>
          <div className="studio-card">
            <h3>Stack</h3>
            <p>React, TypeScript, modern CSS, scalable components, and lean delivery.</p>
          </div>
          <div className="studio-card">
            <h3>Outcome</h3>
            <p>Fast pages, stronger trust, and a brand presence that feels established.</p>
          </div>
        </div>

        <div className="services-card">
          <p className="eyebrow">Why Armedia</p>
          <h3>We care about the small details that make a site feel expensive and trustworthy.</h3>
          <div className="services-list">
            <div className="service-row">
              <span>Clear communication</span>
              <span>01</span>
            </div>
            <div className="service-row">
              <span>Strong design thinking</span>
              <span>02</span>
            </div>
            <div className="service-row">
              <span>Reliable delivery</span>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

export default AboutPage
