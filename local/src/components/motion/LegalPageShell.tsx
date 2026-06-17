'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import PageHeader from './PageHeader'
import { useMotionPreset } from '../../lib/useMotionPreset'

type LegalPageShellProps = {
  kicker: string
  title: string
  description: string
  titleId?: string
  children: ReactNode
}

function LegalPageShell({
  kicker,
  title,
  description,
  titleId,
  children,
}: LegalPageShellProps) {
  const { shouldAnimate } = useMotionPreset()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const scrollBgY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 90 : 0])
  const scrollGlowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [0.45, 0.82, 0.68, 0.5])
  const headerY = useTransform(scrollYProgress, [0, 0.28], [0, shouldAnimate ? -24 : 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.22], [1, shouldAnimate ? 0.9 : 1])

  return (
    <section
      ref={sectionRef}
      className="page-shell section page-shell-animated page-legal-scroll"
      aria-labelledby={titleId ?? 'page-title'}
    >
      <motion.div
        className="legal-page-scroll-bg"
        aria-hidden="true"
        style={shouldAnimate ? { y: scrollBgY, opacity: scrollGlowOpacity } : undefined}
      />

      <motion.div
        className="page-legal-header-wrap"
        style={shouldAnimate ? { y: headerY, opacity: headerOpacity } : undefined}
      >
        <PageHeader
          kicker={kicker}
          title={title}
          description={description}
          titleId={titleId ?? 'page-title'}
          withScrollProgress
        />
      </motion.div>

      {children}
    </section>
  )
}

export default LegalPageShell
