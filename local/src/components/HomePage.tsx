'use client'

import Link from 'next/link'
import { useEffect } from 'react'

/* ─── Static data ─── */
const philosophyCards = [
  {
    title: 'Clarity',
    icon: '◈',
    points: ['Transparent communication', 'Clear deliverables', 'Jargon-free process'],
  },
  {
    title: 'Quality',
    icon: '◎',
    points: ['Rigorous testing', 'Detailed craft', 'Uncompromising standards'],
  },
  {
    title: 'Speed',
    icon: '⚡',
    points: ['Agile methodology', 'Rapid prototyping', 'Efficient workflows'],
  },
  {
    title: 'Growth',
    icon: '⬡',
    points: ['Built to scale', 'Future-proof tech', 'Continuous improvement'],
  },
]

const insights = [
  {
    title: 'The Future of Web UX in 2026',
    category: 'UX Design',
    date: 'May 2026',
    desc: 'How emerging interaction patterns, AI-assisted interfaces, and edge performance are reshaping expectations.',
    thumbClass: 'it1',
    thumbLabel: 'UX RESEARCH',
  },
  {
    title: 'Scaling Your E-Commerce Platform',
    category: 'E-commerce',
    date: 'Apr 2026',
    desc: 'The architecture decisions and conversion strategies that separate mid-market stores from category leaders.',
    thumbClass: 'it2',
    thumbLabel: 'GROWTH',
  },
]

const tickerItems = [
  'Strategy', 'UX Design', 'Web Development', 'E-commerce',
  'Brand Systems', 'Performance', 'SEO', 'Cloud & DevOps',
]

const stats = [
  { num: 120, suffix: '+', label: 'Satisfied clients' },
  { num: 8, suffix: '+', label: 'Years of craft' },
  { num: 40, suffix: 'M+', label: 'Revenue driven' },
  { num: 99, suffix: '%', label: 'Client retention' },
]

const bentoServices = [
  { icon: '⚡', iconClass: 'lime', title: 'Strategy & Direction', sub: 'We start by mapping your opportunity — competitors, audience, architecture, and commercial goals.', tags: ['Digital strategy', 'Brand positioning', 'Site architecture', 'Campaign planning'], cardClass: 'bc1 bc-accent' },
  { icon: '✦', iconClass: 'cyan', title: 'UX / UI Design', sub: 'Premium interfaces built from a rigorous design system.', tags: [], cardClass: 'bc2' },
  { icon: '', iconClass: '', title: '', sub: 'Service groups covering every stage of growth.', tags: [], cardClass: 'bc3 bc-num', largeNum: '04' },
  { icon: '⬡', iconClass: 'orange', title: 'Web Development', sub: 'React, TypeScript, Next.js — fast and reliable.', tags: [], cardClass: 'bc4' },
  { icon: '◎', iconClass: 'white', title: 'Growth & SEO', sub: 'Performance optimisation, analytics, and continuous iteration that compounds results over time.', tags: [], cardClass: 'bc5 bc-orange' },
  { icon: '⊕', iconClass: 'lime', title: 'E-commerce', sub: 'Revenue-focused storefronts and checkout flows.', tags: [], cardClass: 'bc6' },
  { icon: '◈', iconClass: 'cyan', title: 'API & Integrations', sub: 'CRM, analytics, payment, and third-party services wired up cleanly.', tags: [], cardClass: 'bc7', inline: true },
]

const processSteps = [
  { num: '01', title: 'We listen', desc: 'Understand your business, audience, constraints, and goals.' },
  { num: '02', title: 'We research', desc: 'Map the opportunity and find the clearest path forward.' },
  { num: '03', title: 'We design', desc: 'Premium, credible, and effortless to use.' },
  { num: '04', title: 'We build', desc: 'Fast, responsive code with careful attention to detail.' },
  { num: '05', title: 'We deliver', desc: 'Launch, test, refine, and support so it keeps performing.' },
]

/* ─── Hooks ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useCounterAnimation() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.count')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            const target = parseInt(el.dataset.target ?? '0', 10)
            const duration = 1800
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const ease = 1 - Math.pow(1 - p, 3)
              el.textContent = String(Math.round(ease * target))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    counters.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─── Component ─── */
function HomePage() {
  useScrollReveal()
  useCounterAnimation()

  const doubledTicker = [...tickerItems, ...tickerItems]

  return (
    <div className="hp-root">
      {/* Ambient blobs */}
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="blob blob-c" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="hp-hero">
        <div className="hp-hero-inner">
          <div className="hero-eyebrow fade-up fade-up-1">
            <span className="eyebrow-dot" />
            Auckland, NZ &nbsp;·&nbsp; Digital Studio
          </div>

          <h1 className="hero-h1 fade-up fade-up-2">
            We build websites that feel{' '}
            <em className="hero-em">premium</em>,<br />
            customer friendly &amp;  result driven.
          </h1>

          <p className="hero-sub fade-up fade-up-3">
            Premium agency-style websites, web apps, and brand systems for ambitious businesses
            that want a stronger digital first impression.
          </p>

          <div className="hero-actions fade-up fade-up-4">
            <Link className="btn-primary" href="/contact">
              Start a project <span className="btn-arrow">→</span>
            </Link>
            <Link className="btn-ghost" href="/services">
              Explore services
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-strip reveal">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">
                  <span className="count" data-target={s.num}>0</span>
                  <span>{s.suffix}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-inner">
          {doubledTicker.map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── CAPABILITIES (BENTO) ── */}
      <section className="hp-section reveal" aria-labelledby="cap-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Capabilities</p>
            <h2 className="section-h2" id="cap-heading">
              Everything needed<br />to launch, refine &amp; scale.
            </h2>
          </div>
          <p className="section-desc">
            We group our deep expertise into clear lanes so every engagement starts with
            clarity and ends with results.
          </p>
        </div>

        <div className="bento">
          {bentoServices.map((s) => (
            <article className={`bento-card ${s.cardClass}`} key={s.cardClass}>
              {s.largeNum ? (
                <>
                  <div className="bento-large-num"><span>{s.largeNum}</span></div>
                  <p className="bento-sub">{s.sub}</p>
                </>
              ) : s.inline ? (
                <>
                  <div className="bento-inline-head">
                    <span className={`bento-icon ${s.iconClass}`}>{s.icon}</span>
                    <h3 className="bento-title">{s.title}</h3>
                  </div>
                  <p className="bento-sub">{s.sub}</p>
                </>
              ) : (
                <>
                  <span className={`bento-icon ${s.iconClass}`}>{s.icon}</span>
                  <div>
                    {s.title && <h3 className="bento-title">{s.title}</h3>}
                    <p className="bento-sub">{s.sub}</p>
                    {s.tags.length > 0 && (
                      <div className="bento-tag-list">
                        {s.tags.map((t) => <span className="bento-tag" key={t}>{t}</span>)}
                      </div>
                    )}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="hp-section hp-section-tight reveal" aria-labelledby="proc-heading">
        <p className="section-tag">Process</p>
        <h2 className="section-h2" id="proc-heading">How we work</h2>
        <div className="process-grid">
          {processSteps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
    

      {/* ── PHILOSOPHY ── */}
      <section className="hp-section hp-section-tight reveal" aria-labelledby="phil-heading">
        <p className="section-tag">Philosophy</p>
        <h2 className="section-h2" id="phil-heading">Our core principles</h2>
        <div className="philosophy-grid">
          {philosophyCards.map((c) => (
            <article className="phil-card" key={c.title}>
              <div className="phil-icon">{c.icon}</div>
              <h3 className="phil-title">{c.title}</h3>
              <ul className="phil-points">
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
     

      {/* ── TESTIMONIALS ── */}
      

      {/* ── INSIGHTS ── */}
      <section className="hp-section hp-section-tight reveal" aria-labelledby="ins-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Latest Insights</p>
            <h2 className="section-h2" id="ins-heading">From the studio</h2>
          </div>
        </div>
        <div className="insights-grid">
          {insights.map((ins) => (
            <article className="insight-card" key={ins.title}>
              <div className={`insight-thumb ${ins.thumbClass}`}>
                <span className="insight-thumb-label">{ins.thumbLabel}</span>
              </div>
              <div className="insight-body">
                <div className="insight-meta">
                  <span className="insight-category">{ins.category}</span>
                  <span className="insight-date">{ins.date}</span>
                </div>
                <h3 className="insight-title">{ins.title}</h3>
                <p className="insight-desc">{ins.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
    
    </div>
  )
}

export default HomePage
