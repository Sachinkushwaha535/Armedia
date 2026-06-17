'use client'

import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageHeader from './motion/PageHeader'
import {
  contactCardScrollVariants,
  contactMethodBadgeVariants,
  contactPageViewport,
  fadeLeftVariants,
  fadeRightVariants,
  fadeUpVariants,
  getServiceIconTone,
  scaleInVariants,
  serviceCardScrollWithStagger,
  slowTransition,
  softTransition,
  staggerContainer,
  viewportOnce,
} from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

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
  const { shouldAnimate } = useMotionPreset()
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const scrollBgY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 110 : 0])
  const scrollGlowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.5, 0.88, 0.72, 0.52])
  const headerY = useTransform(scrollYProgress, [0, 0.28], [0, shouldAnimate ? -30 : 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.22], [1, shouldAnimate ? 0.86 : 1])

  const checklistVariants = serviceCardScrollWithStagger(0.06, 0.1)

  return (
    <section
      ref={sectionRef}
      className="page-shell section start-project-pro page-start-animated page-start-scroll"
      aria-labelledby="start-project-title"
    >
      <motion.div
        className="start-project-scroll-bg"
        aria-hidden="true"
        style={shouldAnimate ? { y: scrollBgY, opacity: scrollGlowOpacity } : undefined}
      />

      <motion.div
        className="start-project-header-wrap"
        style={shouldAnimate ? { y: headerY, opacity: headerOpacity } : undefined}
      >
        <PageHeader
          kicker="Start a project"
          title="Build a sharper brief for your next campaign."
          description="Use this page to prepare a professional project inquiry for marketing media, AI, BI, advertising, OOH, offline campaigns, content, web, app, or growth strategy work."
          titleId="start-project-title"
          withScrollProgress
        />
      </motion.div>

      <div className="about-premium-layout start-project-layout">
        <div className="about-premium-content">
          {shouldAnimate ? (
            <motion.div
              className="about-intro-card start-project-intro-card"
              initial="hidden"
              whileInView="visible"
              viewport={contactPageViewport}
              variants={contactCardScrollVariants}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p className="eyebrow" variants={fadeLeftVariants} transition={softTransition}>
                Project Builder
              </motion.p>
              <motion.h2 variants={fadeLeftVariants} transition={{ ...softTransition, delay: 0.06 }}>
                Pick your service direction.
              </motion.h2>
              <motion.p variants={fadeLeftVariants} transition={{ ...softTransition, delay: 0.12 }}>
                You do not need a perfect brief. Select the areas that feel relevant, then send us
                your goal and we will help shape the right scope.
              </motion.p>
              <motion.div
                className="about-tech-grid start-project-type-grid"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer(0.05, 0.14)}
              >
                {projectTypes.map((type, index) => {
                  const tone = getServiceIconTone(index)
                  return (
                    <motion.span
                      key={type}
                      className={`start-project-type-pill start-project-type-pill--${tone}`}
                      variants={scaleInVariants}
                      transition={{ duration: 0.42, delay: index * 0.04 }}
                      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.03 }}
                    >
                      {type}
                    </motion.span>
                  )
                })}
              </motion.div>
            </motion.div>
          ) : (
            <div className="about-intro-card start-project-intro-card">
              <p className="eyebrow">Project Builder</p>
              <h2>Pick your service direction.</h2>
              <p>
                You do not need a perfect brief. Select the areas that feel relevant, then send us
                your goal and we will help shape the right scope.
              </p>
              <div className="about-tech-grid start-project-type-grid">
                {projectTypes.map((type, index) => (
                  <span key={type} className={`start-project-type-pill start-project-type-pill--${getServiceIconTone(index)}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="studio-grid project-start-grid">
            {intakeSteps.map((step, index) => {
              const tone = getServiceIconTone(index)
              if (shouldAnimate) {
                return (
                  <motion.article
                    key={step.title}
                    className={`studio-card start-project-step-card start-project-step-card--${tone}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={contactPageViewport}
                    variants={contactCardScrollVariants}
                    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                  >
                    <span className="start-project-step-shine" aria-hidden="true" />
                    <motion.p
                      className={`start-project-step-num start-project-step-num--${tone}`}
                      variants={contactMethodBadgeVariants}
                    >
                      {step.num}
                    </motion.p>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </motion.article>
                )
              }
              return (
                <article key={step.title} className={`studio-card start-project-step-card start-project-step-card--${tone}`}>
                  <p className={`start-project-step-num start-project-step-num--${tone}`}>{step.num}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        {shouldAnimate ? (
          <motion.aside
            className="about-premium-side"
            initial="hidden"
            whileInView="visible"
            viewport={contactPageViewport}
            variants={contactCardScrollVariants}
            transition={{ duration: 0.58, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-feature-card start-project-checklist-card">
              <motion.p className="eyebrow" variants={fadeRightVariants} transition={softTransition}>
                Fast Brief Checklist
              </motion.p>
              <motion.h3 variants={fadeRightVariants} transition={{ ...softTransition, delay: 0.06 }}>
                Answer these before you contact us.
              </motion.h3>
              <motion.div
                className="about-feature-list start-project-checklist"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={checklistVariants}
              >
                {briefPrompts.map((question, index) => (
                  <motion.div
                    key={question}
                    className={`about-feature-row start-project-checklist-row start-project-checklist-row--${getServiceIconTone(index)}`}
                    variants={fadeUpVariants}
                    transition={softTransition}
                    whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                  >
                    <div>
                      <strong>{question}</strong>
                      <p>Short answers are enough. The first call can fill the gaps.</p>
                    </div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.aside>
        ) : (
          <aside className="about-premium-side">
            <div className="about-feature-card start-project-checklist-card">
              <p className="eyebrow">Fast Brief Checklist</p>
              <h3>Answer these before you contact us.</h3>
              <div className="about-feature-list start-project-checklist">
                {briefPrompts.map((question, index) => (
                  <div
                    key={question}
                    className={`about-feature-row start-project-checklist-row start-project-checklist-row--${getServiceIconTone(index)}`}
                  >
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
        )}
      </div>

      {shouldAnimate ? (
        <motion.section
          className="services-card project-estimator start-project-cta-card"
          aria-labelledby="project-estimator-heading"
          initial="hidden"
          whileInView="visible"
          viewport={contactPageViewport}
          variants={contactCardScrollVariants}
          transition={slowTransition}
        >
          <div className="start-project-cta-glow" aria-hidden="true" />
          <motion.p className="eyebrow" variants={fadeUpVariants} transition={softTransition}>
            Ready to move?
          </motion.p>
          <motion.h2 id="project-estimator-heading" variants={fadeUpVariants} transition={{ ...softTransition, delay: 0.06 }}>
            Send your project details and get a clearer action plan.
          </motion.h2>
          <motion.p variants={fadeUpVariants} transition={{ ...softTransition, delay: 0.12 }}>
            Tell us your campaign goal, preferred channels, target audience, timeline, and budget
            range. We will respond with practical next steps for strategy, execution, and measurement.
          </motion.p>
          <motion.div
            className="hero-actions"
            variants={staggerContainer(0.1, 0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={scaleInVariants} transition={softTransition}>
              <Link className="button button-primary" href="/contact">
                Send project details
              </Link>
            </motion.div>
            <motion.div variants={fadeUpVariants} transition={softTransition}>
              <Link className="button button-secondary" href="/services">
                Explore all services
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      ) : (
        <section className="services-card project-estimator start-project-cta-card" aria-labelledby="project-estimator-heading">
          <p className="eyebrow">Ready to move?</p>
          <h2 id="project-estimator-heading">Send your project details and get a clearer action plan.</h2>
          <p>
            Tell us your campaign goal, preferred channels, target audience, timeline, and budget
            range. We will respond with practical next steps for strategy, execution, and measurement.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Send project details</Link>
            <Link className="button button-secondary" href="/services">Explore all services</Link>
          </div>
        </section>
      )}
    </section>
  )
}

export default StartProjectPage
