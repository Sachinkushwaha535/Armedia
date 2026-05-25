'use client'

import Link from 'next/link'
import { clients } from './siteData'

function HomeHero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Armedia.co.nz</p>
          <h1>Premium Web Design &amp; React Development Studio in Auckland.</h1>
          <p className="lede">
            Next.js websites, React web apps, SEO-ready pages, and AI-enabled workflows for
            Auckland and New Zealand businesses that need a stronger digital first impression.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Book a free strategy call
            </Link>
            <Link className="button button-secondary" href="/services">
              View Auckland web services
            </Link>
          </div>

          <div className="hero-trust">
            <span>Auckland-based digital studio</span>
            <div className="avatar-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <strong>Performance-focused builds</strong>
          </div>

          <div className="hero-meta" aria-label="Studio highlights">
            <div>
              <strong>Strategy</strong>
              <span>Conversion paths, technical roadmaps</span>
            </div>
            <div>
              <strong>Design</strong>
              <span>Premium UI, optimized user journeys</span>
            </div>
            <div>
              <strong>Build</strong>
              <span>Fast headless React architectures</span>
            </div>
          </div>
        </div>

        {/* Aside layout optimized for semantic text crawlers */}
        <aside className="hero-panel" aria-label="Selected clients and capabilities">
          <div className="hero-visual">
            <div className="hero-orb hero-orb-left" aria-hidden="true" />
            <div className="hero-orb hero-orb-right" aria-hidden="true" />
            <div className="hero-portrait" aria-hidden="true">
              <div className="portrait-card" />
              
              {/* Card 1: Repositioned to show real agency audits instead of retail numbers */}
              <div className="floating-card floating-card-top">
                <span className="floating-label">UI Audit</span>
                <strong>Conversion focused</strong>
                <div className="floating-bar" />
              </div>
              
              {/* Card 2: Repositioned to highlight technical performance search intent */}
              <div className="floating-card floating-card-right">
                <span className="floating-label">Core Web Vitals</span>
                <strong>99+ Performance score</strong>
              </div>
              
              {/* Card 3: Repositioned to highlight search engine architecture optimization */}
              <div className="floating-card floating-card-bottom">
                <span className="floating-label">Technical SEO</span>
                <strong>Schema and metadata map</strong>
              </div>
            </div>
          </div>

          <div className="panel-card panel-primary">
            <span className="panel-label">Trusted by</span>
            <ul className="client-list">
              {clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default HomeHero
