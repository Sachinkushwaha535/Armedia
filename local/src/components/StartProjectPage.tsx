'use client'

import Link from 'next/link'

const projectTypes = [
  'AI Marketing Studio',
  'Business Intelligence',
  'Advertising',
  'Digital Media',
  'OOH / Offline Media',
  'Content & Creative',
  'Web / App Development',
  'Full Growth Strategy',
]

const intakeSteps = [
  {
    num: '01',
    title: 'Tell us the outcome',
    description: 'Share what you want: leads, awareness, brand recall, launch support, campaign reporting, automation, or sales growth.',
  },
  {
    num: '02',
    title: 'Choose the right mix',
    description: 'We map the best combination of AI, BI, advertising, digital media, OOH, offline, content, CRM, and technology.',
  },
  {
    num: '03',
    title: 'Get a clear next step',
    description: 'You receive a focused recommendation for scope, timeline, starting priorities, and what information is needed next.',
  },
]

const briefPrompts = [
  'What product, service, or brand do you want to promote?',
  'Who is the target audience and location?',
  'Which channels are you considering: ads, social, OOH, offline, events, email, web, app, or AI?',
  'What is the timeline and approximate budget range?',
  'What does success mean: leads, calls, sales, awareness, footfall, downloads, or reporting clarity?',
]

function StartProjectPage() {
  return (
    <section className="page-shell section start-project-pro" aria-labelledby="start-project-title">
      <div className="section-heading">
        <p className="eyebrow">Start a project</p>
        <h1 className="page-title" id="start-project-title">
          Build a sharper brief for your next campaign.
        </h1>
        <p>
          Use this page to prepare a professional project inquiry for marketing media, AI, BI,
          advertising, OOH, offline campaigns, content, web, app, or growth strategy work.
        </p>
      </div>

      <div className="about-premium-layout">
        <div className="about-premium-content">
          <div className="about-intro-card">
            <p className="eyebrow">Project Builder</p>
            <h2>Pick your service direction.</h2>
            <p>
              You do not need a perfect brief. Select the areas that feel relevant, then send us
              your goal and we will help shape the right scope.
            </p>
            <div className="about-tech-grid">
              {projectTypes.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>

          <div className="studio-grid project-start-grid">
            {intakeSteps.map((step) => (
              <article className="studio-card" key={step.title}>
                <p className="eyebrow">{step.num}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="about-premium-side">
          <div className="about-feature-card">
            <p className="eyebrow">Fast Brief Checklist</p>
            <h3>Answer these before you contact us.</h3>
            <div className="about-feature-list">
              {briefPrompts.map((question, index) => (
                <div className="about-feature-row" key={question}>
                  <div>
                    <strong>{question}</strong>
                    <p>Short answers are enough. The first call can fill the gaps.</p>
                  </div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="services-card project-estimator" aria-labelledby="project-estimator-heading">
        <p className="eyebrow">Ready to move?</p>
        <h2 id="project-estimator-heading">Send your project details and get a clearer action plan.</h2>
        <p>
          Tell us your campaign goal, preferred channels, target audience, timeline, and budget
          range. We will respond with practical next steps for strategy, execution, and measurement.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Send project details
          </Link>
          <Link className="button button-secondary" href="/services">
            Explore all services
          </Link>
        </div>
      </section>
    </section>
  )
}

export default StartProjectPage
