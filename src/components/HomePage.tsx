'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const philosophyCards = [
  {
    title: 'Clarity',
    icon: '01',
    points: ['Transparent communication', 'Clear deliverables', 'Jargon-free process'],
  },
  {
    title: 'Quality',
    icon: '02',
    points: ['Rigorous testing', 'Detailed craft', 'Uncompromising standards'],
  },
  {
    title: 'Speed',
    icon: '03',
    points: ['Agile methodology', 'Rapid prototyping', 'Efficient workflows'],
  },
  {
    title: 'Growth',
    icon: '04',
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
  'Web Design Auckland',
  'React Development NZ',
  'Next.js Agency NZ',
  'E-commerce',
  'API Integration',
  'AI Solutions',
  'Technical SEO',
  'Performance',
]

const stats = [
  { num: 120, suffix: '+', label: 'Project conversations' },
  { num: 8, suffix: '+', label: 'Years of digital craft' },
  { num: 40, suffix: '+', label: 'Launch and growth systems' },
  { num: 99, suffix: '%', label: 'Responsive build focus' },
]

const bentoServices = [
  {
    icon: 'WD',
    iconClass: 'lime',
    title: 'Web Design Auckland',
    sub: 'Premium landing pages and business websites shaped around trust, clarity, conversion, and mobile performance.',
    tags: ['Figma', 'Responsive UI', 'Brand systems', 'Result: stronger enquiries'],
    cardClass: 'bc1 bc-accent',
  },
  {
    icon: 'RD',
    iconClass: 'cyan',
    title: 'React Development',
    sub: 'Fast React and TypeScript interfaces for dashboards, portals, content platforms, and customer-facing web apps.',
    tags: ['React', 'TypeScript', 'Component systems', 'Result: scalable frontends'],
    cardClass: 'bc2',
  },
  {
    icon: 'SEO',
    iconClass: 'orange',
    title: 'SEO',
    sub: 'Technical SEO, content structure, metadata, schema, and Core Web Vitals improvements for New Zealand search visibility.',
    tags: ['Metadata', 'Schema', 'Core Web Vitals', 'Result: better discoverability'],
    cardClass: 'bc3',
  },
  {
    icon: 'EC',
    iconClass: 'lime',
    title: 'E-commerce',
    sub: 'Conversion-focused storefronts, product journeys, checkout improvements, and analytics for growing online stores.',
    tags: ['Shopify', 'Next.js', 'Payments', 'Result: cleaner buying paths'],
    cardClass: 'bc4',
  },
  {
    icon: 'API',
    iconClass: 'white',
    title: 'API Integration',
    sub: 'CRM, booking, analytics, payment, email, and internal tools connected with reliable API workflows.',
    tags: ['REST APIs', 'Webhooks', 'CRM', 'Result: less manual admin'],
    cardClass: 'bc5 bc-orange',
  },
  {
    icon: 'AI',
    iconClass: 'cyan',
    title: 'AI Solutions',
    sub: 'AI agents, content workflows, support assistants, and automation systems for practical business operations.',
    tags: ['AI agents', 'Automation', 'Knowledge bases', 'Result: faster operations'],
    cardClass: 'bc7',
    inline: true,
  },
]

const processSteps = [
  { num: '01', title: 'We listen', desc: 'Understand your business, audience, constraints, and goals.' },
  { num: '02', title: 'We research', desc: 'Map the opportunity and find the clearest path forward.' },
  { num: '03', title: 'We design', desc: 'Premium, credible, and effortless to use.' },
  { num: '04', title: 'We build', desc: 'Fast, responsive code with careful attention to detail.' },
  { num: '05', title: 'We deliver', desc: 'Launch, test, refine, and support so it keeps performing.' },
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
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

    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = parseInt(el.dataset.target ?? '0', 10)
            const duration = 1800
            const start = performance.now()

            el.textContent = '0'

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const ease = 1 - Math.pow(1 - progress, 3)
              el.textContent =
                progress === 1 ? String(target) : String(Math.round(ease * target))

              if (progress < 1) requestAnimationFrame(tick)
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

function HomePage() {
  useScrollReveal()
  useCounterAnimation()

  const doubledTicker = [...tickerItems, ...tickerItems]

  return (
    <div className="hp-root">
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="blob blob-c" aria-hidden="true" />

      <section className="hp-hero">
        <div className="hp-hero-inner">
          <div className="hp-hero-shell">
            <div className="hp-hero-copy">
              <div className="hero-eyebrow fade-up fade-up-1">
                <span className="eyebrow-dot" />
                Auckland, NZ Digital Studio
              </div>

              <h1 className="hero-h1 fade-up fade-up-2">
                Premium web design &amp; <em className="hero-em">React development</em>
                <br />
                studio in Auckland.
              </h1>

              <p className="hero-sub fade-up fade-up-3">
                Armedia builds Next.js websites, React web apps, SEO-ready landing pages, and
                AI-enabled workflows for Auckland and New Zealand businesses that need a sharper
                digital first impression.
              </p>

              <ul className="hero-feature-list fade-up fade-up-3" aria-label="Key service strengths">
                <li>Fast Next.js builds</li>
                <li>SEO-ready structure</li>
                <li>AI workflow options</li>
              </ul>

              <div className="hero-actions fade-up fade-up-4">
                <Link className="btn-primary" href="/contact">
                  Book a free strategy call <span className="btn-arrow">-&gt;</span>
                </Link>
                <Link className="btn-ghost" href="/services">
                  View Auckland web services
                </Link>
              </div>

              <p className="hero-sub hero-note fade-up fade-up-4">
                Auckland-based, performance-focused, and built around clear communication from first
                scope to launch.
              </p>
            </div>

            <div className="hp-hero-media fade-up fade-up-3" aria-hidden="true">
              <div className="hp-media-frame">
                <div className="hp-media-toolbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hp-media-screen">
                  <div className="hp-screen-row hp-screen-row-wide" />
                  <div className="hp-screen-row" />
                  <div className="hp-screen-grid">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="hp-screen-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="hp-float-card hp-float-card-top">
                <span>Launch score</span>
                <strong>98%</strong>
              </div>
              <div className="hp-float-card hp-float-card-bottom">
                <span>Avg. handoff</span>
                <strong>2-4 weeks</strong>
              </div>
              <div className="hp-proof-badge">
                <strong>120+</strong>
                <span>project conversations</span>
              </div>
            </div>
          </div>

          <div className="stats-strip reveal">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-num">
                  <span className="count" data-target={stat.num}>{stat.num}</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-inner">
          {doubledTicker.map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="hp-section reveal" aria-labelledby="cap-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Capabilities</p>
            <h2 className="section-h2" id="cap-heading">
              Everything needed
              <br />
              to launch, refine &amp; scale.
            </h2>
          </div>
          <p className="section-desc">
            Six practical service lanes covering strategy, design, engineering, search, commerce,
            integrations, and AI-enabled operations.
          </p>
        </div>

       <div className="bento">
  {bentoServices.map((service) => (
    <article className={`bento-card ${service.cardClass}`} key={service.title}>
      {service.inline ? (
        <>
          <div className="bento-inline-head">
            <span className={`bento-icon ${service.iconClass}`}>{service.icon}</span>
            <h3 className="bento-title">{service.title}</h3>
          </div>
          <p className="bento-sub">{service.sub}</p>
          <div className="bento-tag-list">
            {service.tags.map((tag) => (
              <span className="bento-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="text-link" href="/contact">Request quote</Link>
        </>
      ) : (
        <>
          <span className={`bento-icon ${service.iconClass}`}>{service.icon}</span>
          <h3 className="bento-title">{service.title}</h3>
          <p className="bento-sub">{service.sub}</p>
          <div className="bento-tag-list">
            {service.tags.map((tag) => (
              <span className="bento-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="text-link" href="/contact">Request quote</Link>
        </>
      )}
    </article>
  ))}
</div>
      </section>

      <section className="hp-section hp-section-tight reveal" aria-labelledby="proc-heading">
        <p className="section-tag">Process</p>
        <h2 className="section-h2" id="proc-heading">How we work</h2>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="hp-section hp-section-tight reveal" aria-labelledby="work-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Portfolio</p>
            <h2 className="section-h2" id="work-heading">Selected project formats</h2>
          </div>
          <p className="section-desc">
            Live project URLs and full client feedback are shared only when approved. These
            examples show the metrics, technology, and outcomes we document for every build.
          </p>
        </div>

        <div className="work-grid">
          {portfolioProjects.map((project, index) => (
            <article className="work-card" key={project.title}>
              <div className={`work-thumb ${project.thumb}`}>
                <span className="work-badge">{project.badge}</span>
                <span className="work-thumb-inner">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="work-info">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-desc">{project.description}</p>
                <p className="work-desc">
                  <strong>Metric:</strong> {project.metric}
                  <br />
                  <strong>Client feedback:</strong> {project.feedback}
                </p>
                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span className="work-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <section className="hp-section hp-section-tight reveal" aria-labelledby="phil-heading">
        <p className="section-tag">Philosophy</p>
        <h2 className="section-h2" id="phil-heading">Our core principles</h2>
        <div className="philosophy-grid">
          {philosophyCards.map((card) => (
            <article className="phil-card" key={card.title}>
              <div className="phil-icon">{card.icon}</div>
              <h3 className="phil-title">{card.title}</h3>
              <ul className="phil-points">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="hp-section hp-section-tight reveal" aria-labelledby="proof-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Testimonials</p>
            <h2 className="section-h2" id="proof-heading">Verified proof only</h2>
          </div>
          <p className="section-desc">
            Placeholder testimonial content has been removed. This area is ready for real Google
            reviews or approved client quotes.
          </p>
        </div>

        <div className="testi-grid">
          {proofNotes.map((note, index) => (
            <article className="testi-card" key={note.name}>
              <div className="testi-quote-mark">"</div>
              <p className="testi-quote">{note.quote}</p>
              <div className="testi-author">
                <span className={`testi-dot ${index === 0 ? 'td1' : 'td2'}`}>
                  {index === 0 ? 'AR' : 'GR'}
                </span>
                <div>
                  <p className="testi-name">{note.name}</p>
                  <p className="testi-role-label">{note.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <section className="hp-section hp-section-tight reveal" aria-labelledby="ins-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Latest Insights</p>
            <h2 className="section-h2" id="ins-heading">From the studio</h2>
          </div>
        </div>
        <div className="insights-grid">
          {insights.map((insight) => (
            <article className="insight-card" key={insight.title}>
              <div className={`insight-thumb ${insight.thumbClass}`}>
                <span className="insight-thumb-label">{insight.thumbLabel}</span>
              </div>
              <div className="insight-body">
                <div className="insight-meta">
                  <span className="insight-category">{insight.category}</span>
                  <span className="insight-date">{insight.date}</span>
                </div>
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-desc">{insight.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
