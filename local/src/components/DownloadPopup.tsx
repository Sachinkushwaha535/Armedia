'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { defaultTransition, fadeUpVariants } from '../lib/motion'

const STORAGE_KEY = 'armedia-download-popup-dismissed'

type DownloadPopupProps = {
  scrollDepth?: number
  delayMs?: number
}

function DownloadPopup({ scrollDepth = 0.35, delayMs = 8000 }: DownloadPopupProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.aside
          className="download-popup"
          role="dialog"
          aria-labelledby="download-popup-title"
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
          <p className="section-tag">Free resource</p>
          <h3 id="download-popup-title">Download our campaign planning checklist</h3>
          <p>
            A practical guide to shaping your next growth campaign — goals, channels, assets,
            tracking, and review rhythms in one place.
          </p>
          <Link className="btn-primary" href="/start-project" onClick={dismiss}>
            Get the checklist
          </Link>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  )
}

export default DownloadPopup
