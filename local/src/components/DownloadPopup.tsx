'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { defaultTransition, fadeUpVariants } from '../lib/motion'

const STORAGE_KEY = 'armedia-download-popup-dismissed'

type DownloadPopupProps = {
  scrollDepth?: number
  delayMs?: number
}

function DownloadPopup({ scrollDepth = 0.55, delayMs = 12000 }: DownloadPopupProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    let shown = false
    const show = () => {
      if (shown) return
      shown = true
      setIsVisible(true)
    }

    const timer = window.setTimeout(show, delayMs)

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      const depth = window.scrollY / scrollable
      if (depth >= scrollDepth) show()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delayMs, scrollDepth])

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setIsVisible(false)
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isVisible ? (
        <>
          <motion.button
            key="download-popup-backdrop"
            type="button"
            className="download-popup-backdrop"
            aria-label="Dismiss offer"
            onClick={dismiss}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={defaultTransition}
          />
          <motion.aside
            key="download-popup-panel"
            className="download-popup"
            role="dialog"
            aria-labelledby="download-popup-title"
            aria-modal="true"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            exit={prefersReducedMotion ? undefined : 'hidden'}
            variants={fadeUpVariants}
            transition={defaultTransition}
          >
            <button
              type="button"
              className="download-popup-close"
              onClick={dismiss}
              aria-label="Dismiss offer"
            >
              ×
            </button>

            <p className="download-popup-kicker">Free resource</p>
            <h3 id="download-popup-title">Campaign planning checklist</h3>
            <p className="download-popup-copy">
              Goals, channels, assets, tracking, and review rhythms — a practical checklist before
              your next campaign goes live.
            </p>

            <div className="download-popup-actions">
              <Link
                className="download-popup-btn"
                href="/resources/campaign-checklist"
                onClick={dismiss}
              >
                Open checklist
                <span aria-hidden="true">→</span>
              </Link>
              <button type="button" className="download-popup-dismiss" onClick={dismiss}>
                Not now
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

export default DownloadPopup
