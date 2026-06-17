'use client'

import { motion } from 'framer-motion'
import { type FormEvent, useState } from 'react'
import TwgSectionHeader from './motion/TwgSectionHeader'
import {
  fadeUpVariants,
  splitRevealLeftVariants,
  splitRevealRightVariants,
  staggerContainer,
  viewportOnce,
} from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

function NewsletterSection() {
  const { shouldAnimate } = useMotionPreset()
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.email.trim()) return
    setStatus('Thanks — your guide request is noted. We will be in touch shortly.')
    setForm({ name: '', phone: '', email: '' })
  }

  return (
    <section
      className="am-section am-twg-section am-theme-obsidian newsletter-section twg-download-section twg-download-section--animated"
      aria-labelledby="newsletter-heading"
    >
      <div className="twg-download-glow twg-download-glow--a" aria-hidden="true" />
      <div className="twg-download-glow twg-download-glow--b" aria-hidden="true" />

      <div className="am-container">
        <div className="twg-download-layout">
          <motion.div
            className="twg-download-copy"
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnce}
            variants={splitRevealLeftVariants}
            transition={{ duration: 0.55 }}
          >
            <TwgSectionHeader
              tag="Free resource"
              title="Download a transparent guide to smarter campaign growth"
              titleId="newsletter-heading"
            />
            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              A practical, no-fluff playbook on media mix, AI workflows, reporting, and what
              actually moves results for New Zealand brands —{' '}
              <strong className="twg-highlight twg-highlight--pulse">built for real teams</strong>.
            </motion.p>
          </motion.div>

          <motion.form
            className="twg-download-form twg-download-form--card"
            onSubmit={handleSubmit}
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnce}
            variants={splitRevealRightVariants}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <motion.div
              variants={staggerContainer(0.08, 0.12)}
              initial={shouldAnimate ? 'hidden' : false}
              whileInView={shouldAnimate ? 'visible' : undefined}
              viewport={viewportOnce}
              className="twg-download-form-fields"
            >
              <motion.label variants={fadeUpVariants}>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete="name"
                />
              </motion.label>
              <motion.label variants={fadeUpVariants}>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  autoComplete="tel"
                />
              </motion.label>
              <motion.label variants={fadeUpVariants}>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.co.nz"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                  required
                />
              </motion.label>
              <motion.button
                type="submit"
                className="twg-pill-btn twg-pill-btn--light"
                variants={fadeUpVariants}
                whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              >
                <span className="twg-pill-dot" aria-hidden="true" />
                Download
              </motion.button>
            </motion.div>
            {status ? <p className="newsletter-status" role="status">{status}</p> : null}
          </motion.form>
        </div>

        <motion.div
          className="twg-download-tagline"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>We&apos;re a forward-thinking marketing media agency</p>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
