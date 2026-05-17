'use client'

import Link from 'next/link'
import { clients } from './siteData'

function HomeHero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Armedia.co.nz</p>
          <h1>We build websites that feel premium, customer friendly and result driven.</h1>
          <p className="lede">
            Premium agency-style websites, web apps, and brand systems for ambitious businesses that want a stronger digital first impression.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Start a project
            </Link>
            <Link className="button button-secondary" href="/services">
              Explore services
            </Link>
          </div>

          <div className="hero-trust">
            <span>Trusted by growing brands</span>
            <div className="avatar-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <strong>120+ satisfied clients</strong>
          </div>

          <div className="hero-meta" aria-label="Studio highlights">
            <div>
              <strong>Strategy</strong>
              <span>Clear plans, stronger direction</span>
            </div>
            <div>
              <strong>Design</strong>
              <span>Editorial, modern, premium</span>
            </div>
            <div>
              <strong>Build</strong>
              <span>Fast, responsive, reliable</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Selected clients and capabilities">
          <div className="hero-visual">
            <div className="hero-orb hero-orb-left" aria-hidden="true" />
            <div className="hero-orb hero-orb-right" aria-hidden="true" />
            <div className="hero-portrait" aria-hidden="true">
              <div className="portrait-card" />
              <div className="floating-card floating-card-top">
                <span className="floating-label">UI Audit</span>
                <strong>Monthly $100</strong>
                <div className="floating-bar" />
              </div>
              <div className="floating-card floating-card-right">
                <span className="floating-label">Premium rate</span>
                <strong>$72.5 / month</strong>
              </div>
              <div className="floating-card floating-card-bottom">
                <span className="floating-label">Get Discount</span>
                <strong>18% / First Pay</strong>
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
