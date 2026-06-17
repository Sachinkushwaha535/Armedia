'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  const [guideUrl, setGuideUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.email.trim() || loading) return

    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setStatus(data.message ?? 'Thanks — your guide is ready.')
      if (data.guideUrl) setGuideUrl(data.guideUrl)
      setForm({ name: '', phone: '', email: '' })
    } catch {
      setStatus('Something went wrong. You can open the guide directly below.')
      setGuideUrl('/resources/campaign-checklist')
    } finally {
      setLoading(false)
    }
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
              title="Campaign growth guide for New Zealand teams"
              titleId="newsletter-heading"
            />
            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              A practical playbook on media mix, AI workflows, reporting, and review rhythms — or{' '}
              <Link href="/resources/campaign-checklist">open the guide directly</Link>.
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
                  required
                />
              </motion.label>
              <motion.label variants={fadeUpVariants}>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number (optional)"
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
                disabled={loading}
              >
                <span className="twg-pill-dot" aria-hidden="true" />
                {loading ? 'Sending…' : 'Get the guide'}
              </motion.button>
            </motion.div>
            {status ? (
              <p className="newsletter-status" role="status">
                {status}
                {guideUrl ? (
                  <>
                    {' '}
                    <Link href={guideUrl}>Open guide</Link>
                  </>
                ) : null}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
