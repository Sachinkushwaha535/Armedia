'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button'
import { AnimatedSection, RevealLine, Stagger, StaggerItem } from './motion'

type CTABannerProps = {
  tag: string
  title: string
  description?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function CTABanner({
  tag,
  title,
  description,
  primaryHref = '/contact',
  primaryLabel = 'Book a consultation',
  secondaryHref = '/start-project',
  secondaryLabel = 'Start your project brief',
}: CTABannerProps) {
  const reducedMotion = useReducedMotion()

  return (
    <AnimatedSection className="section-pad">
      <div className="container-agency">
        <Stagger>
          <StaggerItem variant="scaleUp">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-elevated px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
              {!reducedMotion && (
                <motion.div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <Stagger className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" fast>
                <StaggerItem>
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      <RevealLine />
                      {tag}
                    </span>
                    <h2 className="heading-section mt-4 text-white">{title}</h2>
                    {description ? <p className="text-body mt-4">{description}</p> : null}
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button href={primaryHref}>{primaryLabel}</Button>
                    <Button href={secondaryHref} variant="secondary">
                      {secondaryLabel}
                    </Button>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  )
}
