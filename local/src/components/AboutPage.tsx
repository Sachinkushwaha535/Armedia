'use client'

import Link from 'next/link'
import PageShell from './PageShell'

/**
 * 1. OPTIMIZED DATA ARRAYS WITH HIGHER SEMANTIC INTENT
 * - Integrated key commercial industry phrases natively into text items.
 * - Kept definitions concise, punchy, and highly scannable for users.
 */
const agencyPillars = [
  {
    title: 'Strategy Before Ad Spend',
    body: 'We define target audiences, message frameworks, optimal media mixes, and conversion tracking plans before campaign deployment begins.',
  },
  {
    title: 'Omnichannel Media Delivery',
    body: 'Digital advertising channels, OOH media buying, local activations, PR, and CRM lifecycle workflows are unified into one cohesive growth network.',
  },
  {
    title: 'AI Automation & BI Intelligence',
    body: 'Automated AI workflows and marketing analytics dashboards streamline execution timelines and isolate clear performance trends.',
  },
]

const capabilities = [
  'AI marketing workflows and operations automation',
  'Business intelligence (BI) data pipelines and performance dashboards',
  'Cross-channel performance advertising and digital media buying',
  'Integrated digital media planning, OOH, PR, and event marketing',
  'Next.js web development, technical SEO, e-commerce, and API systems',
]

const team = [
  {
    initials: 'ST',
    name: 'Strategy Lead',
    role: 'Brand strategy development, cross-channel campaign architectures, and scalable media roadmaps.',
    skills: ['Positioning', 'Media Mix', 'Conversion Funnel', 'Growth'],
    avatarClass: 'ta1',
  },
  {
    initials: 'CR',
    name: 'Creative Lead',
    role: 'Campaign creative direction, high-converting ad creative concepts, and unified brand design systems.',
    skills: ['Creative', 'Content Marketing', 'Ad Assets', 'Brand Systems'],
    avatarClass: 'ta2',
  },
  {
    initials: 'BI',
    name: 'Intelligence Lead',
    role: 'Custom AI workflows, predictive reporting models, tracking integrations, and conversion optimization.',
    skills: ['AI Tools', 'BI Dashboards', 'Analytics', 'Automation'],
    avatarClass: 'ta3',
  },
]

const proofAreas = [
  {
    title: 'Campaign Portfolio',
    body: 'Prepared to display verified billboard placements, digital ad creative matrices, landing page frameworks, and marketing performance reports.',
  },
  {
    title: 'Validated Client Proof',
    body: 'Authentic local client case studies, verified Google Business reviews, and operational testimonials introduced post-approval.',
  },
  {
    title: 'Data Performance Reviews',
    body: 'Every media asset maps to active conversion rate optimization metrics to measure exact awareness lift, leads, and brand recall values.',
  },
]

function AboutPage() {
  return (
    <PageShell
      kicker="About Armedia"
      title="A marketing media agency built for smarter growth."
      description="Armedia integrates data-driven advertising strategy, premium media planning, custom AI workflows, business intelligence platforms, and modern web technology into one high-performance framework."
      actions={
        <Link className="button button-primary" href="/contact">
          Book a strategy call
        </Link>
      }
    >
      <section className="about-premium-layout">
        <div className="about-premium-content">
          <div className="about-intro-card">
            <p className="eyebrow">Agency Positioning</p>
            <div className="about-profile-row">
              <div className="about-profile-photo" aria-label="Armedia agency mark">
                AR
              </div>
              <div>
                <h2>Media data analytics, creative assets, and automation technology working together.</h2>
                <p>
                  Armedia is engineered for modern brands that require absolute cohesion rather than isolated, disjointed campaigns. We build scalable marketing infrastructures, navigate media buying channels, refine brand hooks, and run strict conversion performance optimization.
                </p>
                <div className="about-tech-grid">
                  <span>AI Workflows</span>
                  <span>BI Dashboards</span>
                  <span>Performance Ads</span>
                  <span>OOH Media</span>
                  <span>Offline Activation</span>
                  <span>Technical SEO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-feature-card">
            <p className="eyebrow">What We Believe</p>
            <h3>Successful media campaigns require absolute data clarity, followed by strict performance tracking.</h3>
            <div className="about-feature-list">
              {agencyPillars.map((item, index) => (
                <div className="about-feature-row" key={item.title}>
                  <div>
                    <strong className="text-gray-900">{item.title}</strong>
                    <p className="text-gray-600 text-sm mt-0.5">{item.body}</p>
                  </div>
                  <span className="text-gray-400 font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-card">
              <strong>18</strong>
              <span>Service capabilities</span>
            </div>
            <div className="about-stat-card">
              <strong>6</strong>
              <span>Core growth channels</span>
            </div>
            <div className="about-stat-card">
              <strong>AI</strong>
              <span>Workflow automation</span>
            </div>
            <div className="about-stat-card">
              <strong>BI</strong>
              <span>Analytics reporting</span>
            </div>
          </div>
        </div>

        <div className="about-premium-side">
          <div className="about-feature-card">
            <p className="eyebrow">Capabilities</p>
            <h3>Built for brands requiring full-funnel media planning, deployment, and attribution.</h3>
            <div className="about-feature-list">
              {capabilities.map((item, index) => (
                <div className="about-feature-row" key={item}>
                  <div>
                    <strong className="text-gray-900 text-sm">{item}</strong>
                    <p className="text-gray-600 text-xs mt-0.5">Part of our end-to-end agency engineering architecture built to drive measurable customer acquisition results.</p>
                  </div>
                  <span className="text-gray-400 font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Team Model</p>
          <h2>Senior execution roles across brand strategy, creative, and data intelligence.</h2>
          <p>
            Our core team operates at the intersection of media logistics and automation development, offering verified technical backgrounds to scale your enterprise pipeline.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-avatar ${member.avatarClass}`} aria-label={`${member.name} profile layout placeholder`}>
                {member.initials}
              </div>
              <h3 className="team-name text-lg font-bold">{member.name}</h3>
              <p className="team-role text-gray-600 text-sm">{member.role}</p>
              <div className="team-skills">
                {member.skills.map((skill) => (
                  <span className="team-skill text-xs bg-gray-100 px-2 py-0.5 rounded font-medium" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Proof System</p>
          <h2>Established corporate trust parameters backed by verified campaign performance.</h2>
          <p>
            Transparent tracking metrics. We structure all corporate milestones around absolute attribution records, real conversion data, and client-authorized case studies.
          </p>
        </div>

        <div className="studio-grid">
          {proofAreas.map((signal) => (
            <article className="studio-card" key={signal.title}>
              <h3 className="text-base font-bold mb-1">{signal.title}</h3>
              <p className="text-gray-600 text-sm">{signal.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage
