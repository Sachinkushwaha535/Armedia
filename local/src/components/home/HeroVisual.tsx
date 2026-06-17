'use client'

import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { heroPanelVariants } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type FlowVector = {
  dx: number
  dy: number
}

type HeroSignal = {
  id: string
  path: string
  tone: 'gold' | 'coral' | 'gold-soft' | 'indigo'
  duration: number
  flow: FlowVector
}

type HeroPanel = {
  id: string
  label: string
  value: string
  detail: string
  x: string
  y: string
  floatDelay: number
  signalId: string
  flow: FlowVector
  flowDuration: number
}

const signals: HeroSignal[] = [
  {
    id: 'a',
    path: 'M200,200 C120,120 80,80 60,60',
    tone: 'gold',
    duration: 2.8,
    flow: { dx: -0.78, dy: -0.68 },
  },
  {
    id: 'b',
    path: 'M200,200 C280,100 320,70 340,50',
    tone: 'coral',
    duration: 3.1,
    flow: { dx: 0.72, dy: -0.7 },
  },
  {
    id: 'c',
    path: 'M200,200 C300,280 330,310 350,340',
    tone: 'gold-soft',
    duration: 3.4,
    flow: { dx: 0.68, dy: 0.74 },
  },
  {
    id: 'd',
    path: 'M200,200 C100,300 70,330 45,355',
    tone: 'indigo',
    duration: 3,
    flow: { dx: -0.76, dy: 0.66 },
  },
]

const panels: HeroPanel[] = [
  {
    id: 'strategy',
    label: 'Strategy Layer',
    value: 'Positioning',
    detail: 'Audience · Offer · Channel role',
    x: '6%',
    y: '10%',
    floatDelay: 0,
    signalId: 'a',
    flow: { dx: -0.78, dy: -0.68 },
    flowDuration: 2.8,
  },
  {
    id: 'bi',
    label: 'BI Reporting',
    value: 'Live',
    detail: 'Dashboards · Campaign clarity',
    x: '52%',
    y: '4%',
    floatDelay: 0.4,
    signalId: 'b',
    flow: { dx: 0.72, dy: -0.7 },
    flowDuration: 3.1,
  },
  {
    id: 'media',
    label: 'Media Mix',
    value: '6 channels',
    detail: 'Digital · OOH · Offline',
    x: '56%',
    y: '82%',
    floatDelay: 0.8,
    signalId: 'c',
    flow: { dx: 0.68, dy: 0.74 },
    flowDuration: 3.4,
  },
  {
    id: 'ai',
    label: 'AI Workflows',
    value: '+34%',
    detail: 'Faster execution rhythm',
    x: '4%',
    y: '62%',
    floatDelay: 1.2,
    signalId: 'd',
    flow: { dx: -0.76, dy: 0.66 },
    flowDuration: 3,
  },
]

const flowDotOffsets = [0, 0.38, 0.72]

type HeroFlowPanelProps = {
  panel: HeroPanel
  shouldAnimate: boolean
  springX: MotionValue<number>
  springY: MotionValue<number>
  enterProps: Record<string, unknown>
  index: number
}

function HeroFlowPanel({
  panel,
  shouldAnimate,
  springX,
  springY,
  enterProps,
  index,
}: HeroFlowPanelProps) {
  const parallaxX = useTransform([springX, springY], ([x, y]) => {
    const px = x as number
    const py = y as number
    const projection = px * panel.flow.dx + py * panel.flow.dy
    return projection * panel.flow.dx * 42
  })
  const parallaxY = useTransform([springX, springY], ([x, y]) => {
    const px = x as number
    const py = y as number
    const projection = px * panel.flow.dx + py * panel.flow.dy
    return projection * panel.flow.dy * 42
  })
  const glowOpacity = useTransform([springX, springY], ([x, y]) => {
    const px = x as number
    const py = y as number
    const projection = Math.abs(px * panel.flow.dx + py * panel.flow.dy)
    return 0.35 + Math.min(projection * 0.9, 0.55)
  })
  const glow = useMotionTemplate`0 0 28px rgba(217, 164, 65, ${glowOpacity})`

  return (
    <motion.div
      key={panel.id}
      className={`am-hero-panel am-hero-panel--${panel.signalId}`}
      style={{ left: panel.x, top: panel.y, boxShadow: glow }}
      {...enterProps}
      variants={heroPanelVariants}
      transition={{ duration: 0.65, delay: 0.55 + index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div style={{ x: parallaxX, y: parallaxY }}>
        <motion.div
          animate={
            shouldAnimate
              ? {
                  x: [0, panel.flow.dx * 16, panel.flow.dx * 9, 0],
                  y: [0, panel.flow.dy * 16, panel.flow.dy * 9, 0],
                }
              : undefined
          }
          transition={
            shouldAnimate
              ? {
                  duration: panel.flowDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: panel.floatDelay,
                  times: [0, 0.42, 0.68, 1],
                }
              : undefined
          }
        >
          <span className="am-hero-panel-flow-tag" aria-hidden="true" />
          <span>{panel.label}</span>
          <strong>{panel.value}</strong>
          <small>{panel.detail}</small>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

type HeroVisualProps = {
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
  enablePointer?: boolean
}

function HeroVisual({ pointerX, pointerY, enablePointer = false }: HeroVisualProps) {
  const { shouldAnimate } = useMotionPreset()
  const springX = pointerX
  const springY = pointerY
  const stageRotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const stageRotateX = useTransform(springY, [-0.5, 0.5], [7, -7])
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-22, 22])
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-18, 18])
  const signalsShiftX = useTransform(springX, [-0.5, 0.5], [-10, 10])
  const signalsShiftY = useTransform(springY, [-0.5, 0.5], [-8, 8])

  const enterProps = shouldAnimate
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : {}

  return (
    <div className="am-hero-visual" aria-hidden="true">
      <motion.svg
        className="am-hero-signals"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        style={enablePointer ? { x: signalsShiftX, y: signalsShiftY } : undefined}
      >
        <defs>
          <marker
            id="am-hero-arrow-gold"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" className="am-hero-arrow-head am-hero-arrow-head-gold" />
          </marker>
          <marker
            id="am-hero-arrow-coral"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" className="am-hero-arrow-head am-hero-arrow-head-coral" />
          </marker>
          <marker
            id="am-hero-arrow-indigo"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" className="am-hero-arrow-head am-hero-arrow-head-indigo" />
          </marker>
          <filter id="am-hero-flow-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {signals.map((signal) => (
          <g key={signal.id} className={`am-hero-signal-group am-hero-signal-group--${signal.tone}`}>
            <path
              id={`hero-signal-${signal.id}`}
              className={`am-hero-signal am-hero-signal-${signal.id}`}
              d={signal.path}
              markerEnd={`url(#am-hero-arrow-${signal.tone === 'gold-soft' ? 'gold' : signal.tone === 'indigo' ? 'indigo' : signal.tone})`}
            />
            <path
              className={`am-hero-signal-flow am-hero-signal-flow-${signal.id}`}
              d={signal.path}
              style={{ animationDuration: `${signal.duration}s` }}
            />
            {shouldAnimate
              ? flowDotOffsets.map((offset, dotIndex) => (
                  <circle
                    key={`${signal.id}-dot-${dotIndex}`}
                    className={`am-hero-flow-dot am-hero-flow-dot-${signal.tone}`}
                    r={dotIndex === 0 ? 4.2 : 2.8}
                    filter="url(#am-hero-flow-glow)"
                    opacity={dotIndex === 0 ? 1 : 0.72}
                  >
                    <animateMotion
                      dur={`${signal.duration}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                      begin={`${offset * signal.duration}s`}
                      calcMode="linear"
                    >
                      <mpath href={`#hero-signal-${signal.id}`} />
                    </animateMotion>
                  </circle>
                ))
              : null}
          </g>
        ))}

        <circle className="am-hero-hub-node" cx="200" cy="200" r="5.5" />
      </motion.svg>

      <motion.div
        className="am-hero-stage"
        style={enablePointer ? { rotateY: stageRotateY, rotateX: stageRotateX } : undefined}
      >
        <span className="am-hero-orbit-ring am-hero-orbit-ring-a" />
        <span className="am-hero-orbit-ring am-hero-orbit-ring-b" />
        <span className="am-hero-orbit-ring am-hero-orbit-ring-c" />

        <motion.div
          className="am-hero-core am-hero-core--lower"
          style={enablePointer ? { x: parallaxX, y: parallaxY } : undefined}
          animate={
            shouldAnimate
              ? {
                  scale: [1, 1.035, 1],
                  boxShadow: [
                    '0 0 0 rgba(217, 164, 65, 0)',
                    '0 0 32px rgba(217, 164, 65, 0.22)',
                    '0 0 0 rgba(217, 164, 65, 0)',
                  ],
                }
              : undefined
          }
          transition={
            shouldAnimate
              ? {
                  scale: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                  boxShadow: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                  default: { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
                }
              : { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
          }
          {...enterProps}
          variants={heroPanelVariants}
        >
          <span className="am-hero-core-label">Growth System</span>
          <strong>Strategy</strong>
          <div className="am-hero-core-pills">
            <span>AI</span>
            <span>BI</span>
            <span>Media</span>
          </div>
        </motion.div>

        {panels.map((panel, index) => (
          <HeroFlowPanel
            key={panel.id}
            panel={panel}
            shouldAnimate={shouldAnimate}
            springX={springX}
            springY={springY}
            enterProps={enterProps}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default HeroVisual
