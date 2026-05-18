'use client'

import Link from 'next/link'
import PageShell from './PageShell'

function AboutPage() {
  return (
    <PageShell
      kicker="About Armedia"
      title="A digital studio built for scalable growth."
      description="Armedia builds premium websites, AI solutions, and digital products engineered for performance and results."
      actions={
        <Link className="button button-primary" href="/contact">
          Book a strategy call
        </Link>
      }
    >
      <section className="about-premium-layout">
        {/* LEFT SIDE */}
        <div className="about-premium-content">
          <div className="about-intro-card">
            <p className="eyebrow">Who We Are</p>

            <h2>
              We build digital products engineered for growth and modern
              user experiences.
            </h2>

            <p>
              Armedia specializes in web development, AI solutions, and
              premium UI/UX design — combining strategy and clean
              engineering to deliver fast, scalable results.
            </p>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-card">
              <strong>120+</strong>
              <span>Projects Delivered</span>
            </div>

            <div className="about-stat-card">
              <strong>99%</strong>
              <span>Client Satisfaction</span>
            </div>

            <div className="about-stat-card">
              <strong>8+</strong>
              <span>Years of Experience</span>
            </div>

            <div className="about-stat-card">
              <strong>24/7</strong>
              <span>Support & Collaboration</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-premium-side">
          <div className="about-feature-card">
            <p className="eyebrow">Why Businesses Choose Armedia</p>

            <h3>
              We build digital experiences that feel modern, trustworthy,
              and results-driven.
            </h3>

            <div className="about-feature-list">
              <div className="about-feature-row">
                <div>
                  <strong>Strategic Communication</strong>
                  <p>
                    Transparent collaboration and structured project execution.
                  </p>
                </div>
                <span>01</span>
              </div>

              <div className="about-feature-row">
                <div>
                  <strong>Modern Design Systems</strong>
                  <p>
                    Scalable interfaces built for performance and trust.
                  </p>
                </div>
                <span>02</span>
              </div>

              <div className="about-feature-row">
                <div>
                  <strong>Reliable Development</strong>
                  <p>
                    Fast, optimized, and production-ready workflows.
                  </p>
                </div>
                <span>03</span>
              </div>
            </div>
          </div>

          <div className="about-tech-card">
            <p className="eyebrow">Technology Stack</p>

            <div className="about-tech-grid">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>AI Solutions</span>
              <span>Cloud Services</span>
              <span>MongoDB</span>
              <span>UI/UX Systems</span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage