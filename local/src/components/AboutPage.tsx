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
  {
    title: 'AI marketing tools and automation',
    body: 'Practical workflows for campaign summaries, content planning, lead qualification, support prompts, and weekly reporting.',
  },
  {
    title: 'Business intelligence and campaign dashboards',
    body: 'Dashboards and review rhythms that help teams see channel performance, lead quality, spend, and next actions clearly.',
  },
  {
    title: 'Performance advertising and media buying',
    body: 'Paid search, paid social, retargeting, placement planning, creative testing, and conversion tracking shaped around business goals.',
  },
  {
    title: 'Digital, OOH, offline, PR, event, and retail marketing',
    body: 'Connected campaign planning across online reach, physical visibility, launch activity, retail moments, and local awareness.',
  },
  {
    title: 'Web development, mobile apps, SEO, e-commerce, and software support',
    body: 'Campaign-ready digital foundations: fast pages, forms, analytics, integrations, search structure, and customer journeys.',
  },
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
    body: 'Prospects can review example systems for media plans, ad creative, landing page concepts, dashboards, and launch structures.',
  },
  {
    title: 'Verification policy',
    body: 'Named logos, testimonials, screenshots, and performance numbers are used only when they are accurate and approved.',
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
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Team Model</p>
          <h2>Senior roles around strategy, creative, and intelligence.</h2>
          <p>
            The team structure reflects the core roles clients engage for campaign planning,
            creative execution, and performance analysis.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-avatar ${member.avatarClass}`} aria-label={`${member.name} profile mark`}>
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
          <h2>Professional trust areas focused on evidence.</h2>
          <p>
            Strong agency positioning depends on evidence. These sections focus on campaign
            examples, verification standards, performance snapshots, and practical reporting.
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
