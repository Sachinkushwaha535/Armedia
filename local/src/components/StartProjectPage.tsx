'use client'

import Link from 'next/link'

/**
 * 1. OPTIMIZED DATA ARRAYS WITH HIGHER SEMANTIC INTENT
 * - Integrated focused search terms naturally into tags and checklists.
 * - Kept text lengths concise and highly scannable for B2B decision makers.
 */
const projectTypes = [
  'AI Marketing Automation',
  'Business Intelligence Dashboards',
  'Performance Advertising',
  'Digital Media Buying',
  'OOH / Offline Media Planning',
  'Content & Creative Assets',
  'Headless Web / App Engineering',
  'Full Growth Strategy',
]

const intakeSteps = [
  {
    num: '01',
    title: 'Define the commercial outcome',
    description: 'Share your performance targets: qualified leads, brand recall metrics, launch visibility, automated pipelines, or sales volume growth.',
  },
  {
    num: '02',
    title: 'Select the optimal channel mix',
    description: 'We match your goals against the best combination of AI workflows, BI reporting, advertising, digital media, OOH, and CRM systems.',
  },
  {
    num: '03',
    title: 'Receive an actionable allocation map',
    description: 'Get a clear recommendation covering project scope, execution timeline, channel priorities, and a technical discovery framework.',
  },
]

const briefPrompts = [
  'What product, service, or brand ecosystem do you want to scale?',
  'Who is your target audience demographic and physical coverage location?',
  'Which channels are you targeting: search ads, programmatic social, OOH billboards, email, or AI systems?',
  'What is your deployment timeline and approximate campaign budget range?',
  'What metric defines success: inbound calls, validated leads, footfall tracking, or conversion rate data?',
]

function StartProjectPage() {
  return (
    <section className="page-shell section start-project-pro" aria-labelledby="start-project-title">
      <div className="section-heading">
        <p className="eyebrow">Start a project</p>
        <h1 className="page-title" id="start-project-title">
          Build a sharper brief for your next campaign.
        </h1>
        <p className="text-gray-600">
          Prepare a professional project inquiry covering performance marketing, custom AI workflows, business intelligence dashboards, omnichannel media buying, or comprehensive brand growth strategy execution.
        </p>
      </div>

      <div className="about-premium-layout">
        <div className="about-premium-content">
          <div className="about-intro-card">
            <p className="eyebrow">Project Builder</p>
            <h2>Select your service direction</h2>
            <p className="text-sm text-gray-600">
              You do not need a perfect campaign brief. Choose the core operational tracks that match your brand objectives, and we will help you map the exact technical scope.
            </p>
            <div className="about-tech-grid mt-4">
              {projectTypes.map((type) => (
                <span key={type} className="text-xs bg-gray-50 border border-gray-100 text-gray-700 px-3 py-1 rounded font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="studio-grid project-start-grid mt-8">
            {intakeSteps.map((step) => (
              <article className="studio-card border border-gray-100 p-5 rounded bg-white" key={step.title}>
                <p className="eyebrow font-mono text-xs text-gray-400 mb-2">{step.num}</p>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="about-premium-side">
          <div className="about-feature-card border border-gray-100 p-5 rounded bg-white">
            <p className="eyebrow">Brief Checklist</p>
            <h3 className="text-base font-bold mb-4">Core data vectors to isolate before our alignment call.</h3>
            <div className="about-feature-list space-y-4">
              {briefPrompts.map((question, index) => (
                <div className="about-feature-row flex justify-between items-start gap-4 border-b border-gray-50 pb-3 last:border-0 last:pb-0" key={question}>
                  <div className="space-y-0.5">
                    <strong className="text-xs text-gray-900 font-semibold block">{question}</strong>
                    <p className="text-[11px] text-gray-500">Short notes are completely sufficient. Our technical team will fill in structural parameters.</p>
                  </div>
                  <span className="text-xs font-mono text-gray-400 pt-0.5">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="services-card project-estimator mt-12 bg-gray-50 p-6 rounded border border-gray-100" aria-labelledby="project-estimator-heading">
        <p className="eyebrow">Ready to move?</p>
        <h2 className="text-xl font-bold mt-1 mb-2" id="project-estimator-heading">
          Send your campaign parameters to receive a tailored execution roadmap.
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-2xl">
          Outline your customer acquisition goals, preferred distribution channels, target demographics, and budget parameters. We will map out clear next steps for your cross-channel strategy, execution tracking, and attribution setups.
        </p>
        <div className="hero-actions flex gap-3">
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
