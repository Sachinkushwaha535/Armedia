'use client'

import Link from 'next/link'
import PageShell from './PageShell'

const journey = [
  {
    title: 'Mission',
    body: 'Help Auckland and New Zealand businesses turn unclear digital ideas into sharp websites, reliable web apps, and practical automation systems.',
  },
  {
    title: 'Company journey',
    body: 'Armedia is being built as a focused digital studio for premium web design, React development, Next.js delivery, SEO foundations, and AI-enabled business workflows.',
  },
  {
    title: 'Industries served',
    body: 'Service businesses, e-commerce teams, healthcare and wellness brands, professional firms, startup products, and growth-focused operators.',
  },
]

const founderExperience = [
  'Web design strategy and responsive interface planning',
  'React, Next.js, TypeScript, and modern frontend delivery',
  'SEO structure, landing pages, and conversion-focused content',
  'AI workflow planning, automation, and API integrations',
]

const team = [
  {
    initials: 'FD',
    name: 'Founder',
    role: 'Strategy, client direction, and delivery leadership',
    experience: 'Digital product planning, UX direction, and launch management',
    skills: ['Strategy', 'UX', 'React', 'SEO'],
    avatarClass: 'ta1',
  },
  {
    initials: 'UX',
    name: 'Design Partner',
    role: 'UX/UI design and brand systems',
    experience: 'Wireframes, responsive layouts, visual systems, and usability review',
    skills: ['Figma', 'UI systems', 'Mobile UX', 'Brand'],
    avatarClass: 'ta2',
  },
  {
    initials: 'FE',
    name: 'Development Partner',
    role: 'Frontend engineering and integrations',
    experience: 'Next.js builds, API connections, performance checks, and deployment support',
    skills: ['Next.js', 'TypeScript', 'APIs', 'QA'],
    avatarClass: 'ta3',
  },
]

const achievements = [
  'Premium Auckland web design and React development positioning completed',
  'SEO-focused service pages for Web Design Auckland, React Development NZ, and Next.js Agency NZ',
  'Production-ready Next.js site structure with metadata, schema, sitemap, and robots support',
  'Verified-review policy added so testimonials are published only when approved or publicly sourced',
]

const trustSignals = [
  {
    title: 'Awards',
    body: 'Public award listings will be added when verified. No unverified badges are displayed.',
  },
  {
    title: 'Certifications',
    body: 'Certification badges and partner credentials are ready to be linked once official proof is available.',
  },
  {
    title: 'Client logos',
    body: 'Approved client logos can be added here after permission. Current positioning avoids fake logo proof.',
  },
  {
    title: 'Google reviews',
    body: 'Google reviews are ready to connect from the live Business Profile once the public review source is confirmed.',
  },
  {
    title: 'Office location',
    body: 'Auckland, New Zealand. Remote project delivery is available for teams across NZ and Australia.',
  },
  {
    title: 'Quality checks',
    body: 'Every build is reviewed for responsive behaviour, metadata, page speed basics, accessibility, and launch readiness.',
  },
]

function AboutPage() {
  return (
    <PageShell
      kicker="About Armedia"
      title="A founder-led Auckland digital studio."
      description="Armedia combines web design, React development, SEO, API integrations, and AI workflow thinking to help businesses launch digital systems that feel credible and perform cleanly."
      actions={
        <Link className="button button-primary" href="/contact">
          Book a strategy call
        </Link>
      }
    >
      <section className="about-premium-layout">
        <div className="about-premium-content">
          <div className="about-intro-card">
            <p className="eyebrow">Founder Information</p>
            <div className="about-profile-row">
              <div className="about-profile-photo" aria-label="Founder photo placeholder">
                FD
              </div>
              <div>
                <h2>Founder-led delivery with strategy, design, and engineering in one workflow.</h2>
                <p>
                  Armedia is led by a founder who works close to each project from first brief to
                  launch. The focus is simple: understand the business goal, shape a clear digital
                  experience, and build it with dependable React and Next.js foundations.
                </p>
                <div className="about-tech-grid">
                  <span>Founder bio</span>
                  <span>Photo slot ready</span>
                  <span>LinkedIn pending verified URL</span>
                  <span>Experience listed below</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-feature-card">
            <p className="eyebrow">Founder Experience</p>
            <h3>Practical experience across the full website and product lifecycle.</h3>
            <div className="about-feature-list">
              {founderExperience.map((item, index) => (
                <div className="about-feature-row" key={item}>
                  <div>
                    <strong>{item}</strong>
                    <p>
                      Used to plan, design, build, test, and improve digital systems for modern
                      service and growth teams.
                    </p>
                  </div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-card">
              <strong>NZ</strong>
              <span>Auckland-based digital studio</span>
            </div>
            <div className="about-stat-card">
              <strong>6</strong>
              <span>Core service lanes</span>
            </div>
            <div className="about-stat-card">
              <strong>3</strong>
              <span>SEO landing pages launched</span>
            </div>
            <div className="about-stat-card">
              <strong>100%</strong>
              <span>Verified-proof review policy</span>
            </div>
          </div>
        </div>

        <div className="about-premium-side">
          <div className="about-feature-card">
            <p className="eyebrow">Company Story</p>
            <h3>Built for businesses that need clarity before they need more features.</h3>
            <div className="about-feature-list">
              {journey.map((item, index) => (
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

          <div className="about-tech-card">
            <p className="eyebrow">Technology Stack</p>
            <div className="about-tech-grid">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>SEO</span>
              <span>API Integration</span>
              <span>AI Workflows</span>
              <span>UI/UX Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2>Small senior team, clear responsibilities.</h2>
          <p>
            The team section is structured for real photos, roles, skills, and experience. Current
            cards use initials until approved team photos are available.
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
              <p className="team-role">{member.experience}</p>
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
          <p className="eyebrow">Achievements</p>
          <h2>What has been strengthened so far.</h2>
        </div>

        <div className="studio-grid">
          {achievements.map((achievement) => (
            <article className="studio-card" key={achievement}>
              <h3>{achievement}</h3>
              <p>
                Documented as part of the current website improvement roadmap and ready for ongoing
                proof, case studies, and client review updates.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-stack">
        <div className="section-heading">
          <p className="eyebrow">Trust Signals</p>
          <h2>Proof areas without fake claims.</h2>
          <p>
            Trust signals are prepared for awards, certifications, client logos, Google reviews,
            and office location. Anything external stays marked until verified.
          </p>
        </div>

        <div className="studio-grid">
          {trustSignals.map((signal) => (
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
