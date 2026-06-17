import type { Transition, Variants, ViewportOptions } from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1] as const
export const easeSoft = [0.33, 1, 0.68, 1] as const
export const easeCinematic = [0.16, 1, 0.3, 1] as const

/* ── Viewport presets ── */
export const viewportOnce: ViewportOptions = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -48px 0px',
}

export const viewportOnceTight: ViewportOptions = {
  once: true,
  amount: 0.25,
  margin: '0px 0px -32px 0px',
}

export const viewportReplay: ViewportOptions = {
  once: false,
  amount: 0.22,
  margin: '0px 0px -40px 0px',
}

/* ── Core reveal variants ── */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeUpMobileVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
}

export const fadeLeftMobileVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRightMobileVariants: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0 },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

export const scaleInFeaturedVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

export const blurInVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const blurInSoftVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const splitRevealLeftVariants: Variants = {
  hidden: { opacity: 0, x: -44, y: 14 },
  visible: { opacity: 1, x: 0, y: 0 },
}

export const splitRevealRightVariants: Variants = {
  hidden: { opacity: 0, x: 44, y: 14 },
  visible: { opacity: 1, x: 0, y: 0 },
}

export const timelineGrowVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 0.6 },
}

export const timelineNodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.55 },
  visible: { opacity: 1, scale: 1 },
}

/* ── Hero variants ── */
export const heroGlowVariants: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
}

export const heroCinematicLineVariants: Variants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const heroPanelVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

/* ── Section-specific variants ── */
export const testimonialDriftVariants: Variants = {
  hidden: { opacity: 0, x: 20, y: 10 },
  visible: { opacity: 1, x: 0, y: 0 },
}

export const testimonialQuoteVariants: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -14 },
}

export const logoFadeVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

export const statPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 18 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

export const serviceIconPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.45, rotate: -14 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 340, damping: 22 },
  },
}

export const serviceCardScrollVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.9, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: easeOut },
  },
}

export const contactGlowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const contactPanelVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

export const contactCardScrollVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.94, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.58, ease: easeOut },
  },
}

export const contactMethodBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 360, damping: 22 },
  },
}

export const contactPageViewport: ViewportOptions = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -40px 0px',
}

export const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export const tickerRevealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/* ── Stagger containers ── */
export function staggerContainer(stagger = 0.08, delayChildren = 0.06): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }
}

export const staggerContainerVariants = staggerContainer()

/* ── Transitions ── */
export const defaultTransition: Transition = { duration: 0.45, ease: easeOut }
export const slowTransition: Transition = { duration: 0.72, ease: easeCinematic }
export const softTransition: Transition = { duration: 0.55, ease: easeSoft }
export const quickTransition: Transition = { duration: 0.32, ease: easeOut }

export function staggerItemTransition(index: number, baseDelay = 0): Transition {
  return { ...defaultTransition, delay: baseDelay + index * 0.07 }
}

/* ── Helpers ── */
export function pickDirectionalVariant(index: number, isMobile: boolean): Variants {
  const left = isMobile ? fadeLeftMobileVariants : fadeLeftVariants
  const right = isMobile ? fadeRightMobileVariants : fadeRightVariants
  return index % 2 === 0 ? left : right
}

export type ServiceCardSection = 'core' | 'supporting'

export function pickServiceCardVariant(
  index: number,
  section: ServiceCardSection,
  isMobile: boolean,
): Variants {
  const up = isMobile ? fadeUpMobileVariants : fadeUpVariants
  const left = isMobile ? fadeLeftMobileVariants : fadeLeftVariants
  const right = isMobile ? fadeRightMobileVariants : fadeRightVariants

  const corePool: Variants[] = [
    up,
    left,
    right,
    scaleInVariants,
    blurInSoftVariants,
    splitRevealLeftVariants,
    splitRevealRightVariants,
    scaleInFeaturedVariants,
  ]

  const supportingPool: Variants[] = [
    blurInVariants,
    scaleInFeaturedVariants,
    right,
    left,
    blurInSoftVariants,
    up,
    scaleInVariants,
    splitRevealRightVariants,
  ]

  const pool = section === 'core' ? corePool : supportingPool
  return pool[index % pool.length]
}

export function serviceCardWithInnerStagger(
  entrance: Variants,
  stagger = 0.045,
  delayChildren = 0.14,
): Variants {
  const visibleState = entrance.visible
  const visibleObject =
    typeof visibleState === 'object' && visibleState !== null && !Array.isArray(visibleState)
      ? visibleState
      : {}

  return {
    hidden: entrance.hidden ?? { opacity: 0 },
    visible: {
      ...visibleObject,
      transition: {
        ...(typeof visibleObject === 'object' && 'transition' in visibleObject
          ? (visibleObject.transition as Transition)
          : {}),
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }
}

export function serviceCardScrollWithStagger(
  stagger = 0.06,
  delayChildren = 0.12,
): Variants {
  return serviceCardWithInnerStagger(serviceCardScrollVariants, stagger, delayChildren)
}

export const serviceCardViewport: ViewportOptions = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -48px 0px',
}

export const ICON_TONES = ['teal', 'coral', 'blue', 'gold', 'violet', 'emerald'] as const
export type ServiceIconTone = (typeof ICON_TONES)[number]

export function getServiceIconTone(index: number): ServiceIconTone {
  return ICON_TONES[index % ICON_TONES.length]
}

export function pickFadeUp(isMobile: boolean): Variants {
  return isMobile ? fadeUpMobileVariants : fadeUpVariants
}

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06, filter: 'blur(8px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
}

export const carouselSlideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 72 : -72,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -72 : 72,
  }),
}

export const heroWordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

/* ── Legacy aliases (kept for compatibility) ── */
export const scaleUpVariants = scaleInVariants
export const slideRightVariants = fadeLeftVariants
export const cardRevealVariants = blurInSoftVariants
export const heroLineVariants = heroCinematicLineVariants
