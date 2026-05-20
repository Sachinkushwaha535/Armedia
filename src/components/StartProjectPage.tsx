'use client'

import Link from 'next/link'
import PageShell from './PageShell'

const projectSteps = [
  {
    title: 'Share the goal',
    description: 'Tell us what you want to improve, who the project is for, and what success should look like.',
  },
  {
    title: 'Map the scope',
    description: 'We turn the brief into practical service options, timeline considerations, and the right next step.',
  },
  {
    title: 'Start with clarity',
    description: 'You get a focused conversation about budget, constraints, priorities, and delivery approach.',
  },
]

const estimatorQuestions = [
  'What type of project do you need: website, AI workflow, app, data, or consulting?',
  'What is the main business goal: more inquiries, faster operations, clearer reporting, or better trust?',
  'What timeline and budget range should we plan around?',
  'Which tools need to connect: CRM, email, analytics, payments, documents, or internal systems?',
]

function StartProjectPage() {
  return (
    <PageShell
      kicker="Start a project"
      title="Begin with a sharper brief."
      description="This page is for new project conversations. If you only need to ask a general question, use the contact page instead."
      actions={
        <>
          <Link className="button button-primary" href="/contact">
            Send project details
          </Link>
          <Link className="button button-secondary" href="/services">
            Review services
          </Link>
        </>
      }
    >
      <div className="studio-grid project-start-grid">
        {projectSteps.map((step) => (
          <article className="studio-card" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <section className="services-card project-estimator" aria-labelledby="project-estimator-heading">
        <p className="eyebrow">AI-ready brief</p>
        <h2 id="project-estimator-heading">Answer these before you contact us for faster lead qualification.</h2>
        <p>
          These prompts prepare the same information an AI project estimator or summary workflow
          would need: goal, scope, tools, timeline, and commercial constraints.
        </p>
        <ul>
          {estimatorQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
        <Link className="button button-primary" href="/contact">
          Send answers
        </Link>
      </section>
    </PageShell>
  )
}

export default StartProjectPage
