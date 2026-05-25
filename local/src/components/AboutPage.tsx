import Link from 'next/link'
import PageShell from './PageShell'

const agencyPillars = [
  {
    title: 'Strategy before spending',
    body: 'We clarify the audience, offer, message, media mix, funnel, and measurement plan before campaign execution begins.',
  },
  {
    title: 'Media across channels',
    body: 'Digital media, OOH, offline activations, content, PR, social, CRM, and advertising are planned as one connected growth system.',
  },
  {
    title: 'AI and intelligence layer',
    body: 'AI workflows and BI dashboards help teams move faster, review performance clearly, and find the next best action.',
  },
]

const capabilities = [
  'AI marketing tools and automation',
  'Business intelligence and campaign dashboards',
  'Performance advertising and media buying',
  'Digital, OOH, offline, PR, event, and retail marketing',
  'Web development, mobile apps, SEO, e-commerce, and software support',
]

const team = [
  {
    initials: 'ST',
    name: 'Strategy Lead',
    role: 'Brand direction, campaign planning, and media roadmap',
    skills: ['Positioning', 'Media mix', 'Funnel', 'Growth'],
    avatarClass: 'ta1',
  },
  {
    initials: 'CR',
    name: 'Creative Lead',
    role: 'Campaign ideas, content direction, ad creative, and brand systems',
    skills: ['Creative', 'Content', 'Ads', 'Brand'],
    avatarClass: 'ta2',
  },
  {
    initials: 'BI',
    name: 'Intelligence Lead',
    role: 'AI workflows, reporting, dashboards, tracking, and optimisation',
    skills: ['AI', 'BI', 'Analytics', 'Automation'],
    avatarClass: 'ta3',
  },
]

const proofAreas = [
  {
    title: 'Campaign portfolio',
    body: 'Ready for billboard mockups, ad creatives, social media campaigns, landing pages, dashboards, and launch plans.',
  },
  {
    title: 'Client proof',
    body: 'Client logos, testimonials, Google reviews, and case studies should be added only after approval or public verification.',
  },
  {
    title: 'Performance reviews',
    body: 'Every campaign should connect to reporting so awareness, enquiries, leads, conversion, and recall can be reviewed.',
  },
]

function AboutPage() {
  return (
    <PageShell
      kicker="About Armedia"
      title="A marketing media agency built for smarter growth."
      description="Armedia brings strategy, media planning, AI tools, business intelligence, advertising, creative direction, and campaign-supporting technology into one clear agency system."
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
                <h2>Media, intelligence, creative, and technology working together.</h2>
                <p>
                  Armedia is shaped for brands that need more than isolated ads or one-off
                  creatives. We help plan the right campaign system, choose the right media,
                  create clearer messages, connect reporting, and improve execution over time.
                </p>
                <div className="about-tech-grid">
                  <span>AI</span>
                  <span>BI</span>
                  <span>Advertising</span>
                  <span>OOH</span>
                  <span>Offline</span>
                  <span>Digital</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-feature-card">
            <p className="eyebrow">What We Believe</p>
            <h3>Good media work starts with clarity, then becomes measurable.</h3>
            <div className="about-feature-list">
              {agencyPillars.map((item, index) => (
                <div className="about-feature-row" key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
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
              <span>Workflow-ready thinking</span>
            </div>
            <div className="about-stat-card">
              <strong>BI</strong>
              <span>Reporting-led decisions</span>
            </div>
          </div>
        </div>

        <div className="about-premium-side">
          <div className="about-feature-card">
            <p className="eyebrow">Capabilities</p>
            <h3>Built for brands that need planning, execution, and measurement.</h3>
            <div className="about-feature-list">
              {capabilities.map((item, index) => (
                <div className="about-feature-row" key={item}>
                  <div>
                    <strong>{item}</strong>
                    <p>Part of the full-service agency model for campaigns that need structure and follow-through.</p>
                  </div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Team Model</p>
          <h2>Senior roles around strategy, creative, and intelligence.</h2>
          <p>
            This section is structured for real team photos and verified bios. The current cards
            explain the professional roles clients expect from a marketing media agency.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-avatar ${member.avatarClass}`} aria-label={`${member.name} photo placeholder`}>
                {member.initials}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-skills">
                {member.skills.map((skill) => (
                  <span className="team-skill" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Proof System</p>
          <h2>Professional trust areas, ready for real evidence.</h2>
          <p>
            A strong media agency website needs proof. These areas are prepared for real campaign
            examples, approved testimonials, performance snapshots, and client logos.
          </p>
        </div>

        <div className="studio-grid">
          {proofAreas.map((signal) => (
            <article className="studio-card" key={signal.title}>
              <h3>{signal.title}</h3>
              <p>{signal.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage
