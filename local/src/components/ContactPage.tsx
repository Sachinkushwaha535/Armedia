'use client'

import { type ChangeEvent, type FormEvent, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import PageHeader from './motion/PageHeader'
import {
  contactCardScrollVariants,
  contactMethodBadgeVariants,
  contactPageViewport,
  contactPanelVariants,
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
import { contactEmail, contactFallbackText, contactPhone, contactPhoneHref } from './siteConfig'

const METHOD_BADGES: Record<string, string> = {
  Email: '✉',
  Call: '☎',
  Plan: '◎',
}

function ContactPage() {
  const { shouldAnimate } = useMotionPreset()
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const scrollBgY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 100 : 0])
  const scrollGlowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [0.5, 0.9, 0.75, 0.55])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, shouldAnimate ? -28 : 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, shouldAnimate ? 0.88 : 1])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatusMessage(data.message ?? `Something went wrong. ${contactFallbackText}`)
        return
      }

      setStatusMessage(data.message ?? 'Inquiry submitted successfully.')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch {
      setStatusMessage(`Something went wrong. ${contactFallbackText}`)
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      label: 'Email',
      title: 'Drop us a line',
      content: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>,
    },
    {
      label: 'Call',
      title: contactPhone ? 'Call the studio' : 'Request a call back',
      content: contactPhone && contactPhoneHref ? (
        <a href={contactPhoneHref}>{contactPhone}</a>
      ) : (
        <p>Share your number and we will respond with the right next step.</p>
      ),
    },
    {
      label: 'Plan',
      title: 'Get a clear next step',
      content: <p>We help shape strategy, media, creative, AI, BI, and execution.</p>,
    },
  ]

  const stats = [
    { value: '< 1h', label: 'Response focus' },
    { value: '18', label: 'Service capabilities' },
    { value: 'AI', label: 'Workflow-ready' },
    { value: 'BI', label: 'Reporting-led' },
  ]

  const formVariants = serviceCardScrollWithStagger(0.07, 0.1)

  return (
    <section
      ref={sectionRef}
      className="page-shell section page-contact-animated page-contact-scroll"
      aria-labelledby="page-title"
    >
      <motion.div
        className="contact-page-scroll-bg"
        aria-hidden="true"
        style={shouldAnimate ? { y: scrollBgY, opacity: scrollGlowOpacity } : undefined}
      />

      {shouldAnimate ? (
        <motion.div
          className="page-contact-glow"
          aria-hidden="true"
          initial="hidden"
          animate="visible"
          variants={contactPanelVariants}
          transition={slowTransition}
          style={{ y: scrollBgY }}
        />
      ) : (
        <div className="page-contact-glow" aria-hidden="true" />
      )}

      <motion.div
        className="contact-page-header-wrap"
        style={shouldAnimate ? { y: headerY, opacity: headerOpacity } : undefined}
      >
        <PageHeader
          kicker="Contact"
          title="Let us shape your next growth campaign."
          description="Share your brand goal, audience, campaign idea, timeline, and preferred channels. Armedia will help you turn it into a clear plan for AI, BI, advertising, media, offline marketing, and technology support."
          titleId="page-title"
          withScrollProgress
        />
      </motion.div>

      <div className="contact-pro-layout contact-pro-layout--scroll">
        {shouldAnimate ? (
          <motion.section
            className="contact-pro-main contact-pro-main--animated"
            initial="hidden"
            whileInView="visible"
            viewport={contactPageViewport}
            variants={contactCardScrollVariants}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-method-grid">
              {contactMethods.map((method, index) => {
                const tone = getServiceIconTone(index)
                return (
                  <motion.article
                    key={method.label}
                    className={`contact-method-card contact-method-card--${tone}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={contactPageViewport}
                    variants={contactCardScrollVariants}
                    transition={{ duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -6, transition: { duration: 0.24 } }
                    }
                  >
                    <span className="contact-method-shine" aria-hidden="true" />
                    <motion.span
                      className={`contact-method-badge contact-method-badge--${tone}`}
                      variants={contactMethodBadgeVariants}
                    >
                      {METHOD_BADGES[method.label]}
                    </motion.span>
                    <span className="contact-method-label">{method.label}</span>
                    <strong>{method.title}</strong>
                    {method.content}
                  </motion.article>
                )
              })}
            </div>

            <motion.form
              className="contact-pro-form contact-pro-form--card"
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={contactPageViewport}
              variants={formVariants}
            >
              <motion.div className="contact-form-heading" variants={fadeLeftVariants} transition={softTransition}>
                <p className="eyebrow">Project Inquiry</p>
                <h2>Share your vision with us</h2>
                <p>Tell us your current challenge and we will help turn it into a sharper growth strategy.</p>
              </motion.div>

              <motion.div className="contact-grid" variants={fadeLeftVariants} transition={softTransition}>
                <label>
                  <span>Full name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span>Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </label>
              </motion.div>

              <motion.label variants={fadeLeftVariants} transition={softTransition}>
                <span>Project details</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us your brand, campaign goal, audience, timeline, channels you want to use, and the result you want to achieve."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.label>

              <motion.button
                type="submit"
                className="button button-primary contact-submit"
                disabled={loading}
                variants={fadeUpVariants}
                transition={softTransition}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Launch message'}
              </motion.button>

              {statusMessage ? (
                <motion.p className="contact-status" role="status" variants={fadeUpVariants}>
                  {statusMessage}
                </motion.p>
              ) : null}
            </motion.form>
          </motion.section>
        ) : (
          <section className="contact-pro-main">
            <div className="contact-method-grid">
              {contactMethods.map((method, index) => {
                const tone = getServiceIconTone(index)
                return (
                  <article key={method.label} className={`contact-method-card contact-method-card--${tone}`}>
                    <span className={`contact-method-badge contact-method-badge--${tone}`}>
                      {METHOD_BADGES[method.label]}
                    </span>
                    <span className="contact-method-label">{method.label}</span>
                    <strong>{method.title}</strong>
                    {method.content}
                  </article>
                )
              })}
            </div>
            <form className="contact-pro-form contact-pro-form--card" onSubmit={handleSubmit}>
              <div className="contact-form-heading">
                <p className="eyebrow">Project Inquiry</p>
                <h2>Share your vision with us</h2>
                <p>Tell us your current challenge and we will help turn it into a sharper growth strategy.</p>
              </div>
              <div className="contact-grid">
                <label>
                  <span>Full name</span>
                  <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} autoComplete="name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} autoComplete="email" required />
                </label>
                <label>
                  <span>Phone number</span>
                  <input type="tel" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
                </label>
              </div>
              <label>
                <span>Project details</span>
                <textarea name="message" rows={6} placeholder="Tell us your brand, campaign goal, audience, timeline, channels you want to use, and the result you want to achieve." value={formData.message} onChange={handleChange} required />
              </label>
              <button type="submit" className="button button-primary contact-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Launch message'}
              </button>
              {statusMessage ? <p className="contact-status" role="status">{statusMessage}</p> : null}
            </form>
          </section>
        )}

        {shouldAnimate ? (
          <motion.aside
            className="contact-growth-panel contact-growth-panel--animated"
            initial="hidden"
            whileInView="visible"
            viewport={contactPageViewport}
            variants={contactCardScrollVariants}
            transition={{ duration: 0.58, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p className="eyebrow" variants={fadeRightVariants} transition={softTransition}>
              Why choose us
            </motion.p>
            <motion.h2 variants={fadeRightVariants} transition={{ ...softTransition, delay: 0.06 }}>
              Your growth plan starts with clarity.
            </motion.h2>

            <motion.div
              className="contact-growth-stats"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer(0.08, 0.14)}
            >
              {stats.map((stat, index) => (
                <motion.span
                  key={stat.label}
                  className={`contact-stat-card contact-stat-card--${getServiceIconTone(index)}`}
                  variants={scaleInVariants}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
                >
                  <strong>{stat.value}</strong>
                  {stat.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.p variants={fadeRightVariants} transition={{ ...softTransition, delay: 0.18 }}>
              We connect media planning, creative direction, advertising, OOH, offline marketing,
              AI workflows, dashboards, and campaign-supporting technology into one practical growth system.
            </motion.p>
            <motion.div
              className="contact-panel-links"
              variants={fadeRightVariants}
              transition={{ ...softTransition, delay: 0.24 }}
            >
              <Link className="text-link" href="/services">Explore services</Link>
              <Link className="text-link" href="/start-project">Build a brief</Link>
            </motion.div>
          </motion.aside>
        ) : (
          <aside className="contact-growth-panel">
            <p className="eyebrow">Why choose us</p>
            <h2>Your growth plan starts with clarity.</h2>
            <div className="contact-growth-stats">
              {stats.map((stat, index) => (
                <span key={stat.label} className={`contact-stat-card contact-stat-card--${getServiceIconTone(index)}`}>
                  <strong>{stat.value}</strong>
                  {stat.label}
                </span>
              ))}
            </div>
            <p>
              We connect media planning, creative direction, advertising, OOH, offline marketing,
              AI workflows, dashboards, and campaign-supporting technology into one practical growth system.
            </p>
            <div className="contact-panel-links">
              <Link className="text-link" href="/services">Explore services</Link>
              <Link className="text-link" href="/start-project">Build a brief</Link>
            </div>
          </aside>
        )}
      </div>
    </section>
  )
}

export default ContactPage
