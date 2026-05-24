'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const philosophyCards = [
  {
    title: 'Clarity',
    icon: '◈',
    points: ['Clear project direction', 'Simple deliverables', 'No confusing tech talk'],
  },
  {
    title: 'Quality',
    icon: '✦',
    points: ['Polished design', 'Reliable engineering', 'Performance-first delivery'],
  },
  {
    title: 'Speed',
    icon: '➜',
    points: ['Fast decisions', 'Focused builds', 'Smooth launch process'],
  },
  {
    title: 'Growth',
    icon: '⬢',
    points: ['Built for enquiries', 'Ready to scale', 'Easy to improve'],
  },
]

const insights = [
  {
    title: 'How Better UX Turns Traffic Into Enquiries',
    category: 'UX Design',
    date: 'May 2026',
    desc: 'A practical look at clarity, trust, page speed, and user flow for service businesses that want more qualified leads.',
    thumbClass: 'it1',
    thumbLabel: 'CONVERSION',
  },
  {
    title: 'Building E-Commerce Pages That Sell Cleaner',
    category: 'E-commerce',
    date: 'Apr 2026',
    desc: 'Product pages, checkout journeys, tracking, and technical foundations that help online stores scale with less friction.',
    thumbClass: 'it2',
    thumbLabel: 'COMMERCE',
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
  { num: 120, suffix: '+', label: 'Growth conversations' },
  { num: 8, suffix: '+', label: 'Years of digital experience' },
  { num: 40, suffix: '+', label: 'Web and workflow systems' },
  { num: 99, suffix: '%', label: 'Mobile-first build focus' },
]

const bentoServices = [
  {
    icon: '◈',
    iconClass: 'lime',
    title: 'Web Design Auckland',
    sub: 'Result-focused business websites and landing pages built to create trust, explain your offer clearly, and turn visitors into enquiries.',
    tags: ['Figma', 'Responsive UI', 'Brand systems', 'Outcome: stronger enquiries'],
    cardClass: 'bc1 bc-accent',
  },
  {
    icon: '⚛',
    iconClass: 'cyan',
    title: 'React Development',
    sub: 'Fast React and TypeScript interfaces for dashboards, portals, content platforms, and web apps that need to feel smooth and reliable.',
    tags: ['React', 'TypeScript', 'Component systems', 'Outcome: scalable frontends'],
    cardClass: 'bc2',
  },
  {
    icon: '⌕',
    iconClass: 'orange',
    title: 'SEO',
    sub: 'SEO-ready structure, metadata, schema, content planning, and Core Web Vitals improvements to help the right people find you.',
    tags: ['Metadata', 'Schema', 'Core Web Vitals', 'Outcome: better visibility'],
    cardClass: 'bc3',
  },
  {
    icon: '◉',
    iconClass: 'lime',
    title: 'E-commerce',
    sub: 'Conversion-focused storefronts, product journeys, checkout improvements, and analytics for stores that want cleaner sales paths.',
    tags: ['Shopify', 'Next.js', 'Payments', 'Outcome: cleaner buying paths'],
    cardClass: 'bc4',
  },
  {
    icon: '⇄',
    iconClass: 'white',
    title: 'API Integration',
    sub: 'CRM, booking, analytics, payment, email, and internal tools connected so your team spends less time on manual admin.',
    tags: ['REST APIs', 'Webhooks', 'CRM', 'Outcome: smoother operations'],
    cardClass: 'bc5 bc-orange',
  },
  {
    icon: '✦',
    iconClass: 'cyan',
    title: 'AI Solutions',
    sub: 'AI agents, support assistants, content workflows, and automation systems that help teams respond faster and work smarter.',
    tags: ['AI agents', 'Automation', 'Knowledge bases', 'Outcome: faster operations'],
    cardClass: 'bc7',
    inline: true,
  },
]

const processSteps = [
  { num: '01', title: 'We understand', desc: 'We learn your business, audience, goals, and the result your website or system needs to create.' },
  { num: '02', title: 'We plan', desc: 'We map the clearest strategy for pages, user flow, technology, SEO, and conversion points.' },
  { num: '03', title: 'We design', desc: 'We create a premium digital experience that builds trust and guides visitors toward action.' },
  { num: '04', title: 'We build', desc: 'We develop fast, responsive, scalable pages and workflows with careful technical detail.' },
  { num: '05', title: 'We improve', desc: 'We launch, test, refine, and support the work so it keeps performing after go-live.' },
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
          <div className="hero-eyebrow fade-up fade-up-1">
            <span className="eyebrow-dot" />
            Auckland, NZ Digital Studio
          </div>

          <h1 className="hero-h1 fade-up fade-up-2">
            Build a sharper digital presence with <em className="hero-em">web design</em>
            <br />
            React, SEO &amp; AI solutions.
          </h1>

          <p className="hero-sub fade-up fade-up-3">
            Armedia helps Auckland and New Zealand businesses turn ideas into fast websites,
            scalable web apps, SEO-ready landing pages, e-commerce experiences, API workflows,
            and AI-enabled systems built for visibility, trust, and measurable growth.
          </p>

          <div className="hero-actions fade-up fade-up-4">
            <Link className="btn-primary" href="/contact">
              Start your growth project <span className="btn-arrow">-&gt;</span>
            </Link>
            <Link className="btn-ghost" href="/services">
              Discover services
            </Link>
          </div>

          <p className="hero-sub fade-up fade-up-4">
            Strategy, design, development, SEO, integrations, and automation delivered with clear
            communication from first scope to launch.
          </p>

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
              Digital services built
              <br />
              to attract, convert &amp; scale.
            </h2>
          </div>
          <p className="section-desc">
            From premium websites to AI-enabled workflows, every service is shaped around clearer
            messaging, stronger performance, better search visibility, and measurable business outcomes.
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
        <h2 className="section-h2" id="proc-heading">How we turn goals into results</h2>
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
        <h2 className="section-h2" id="phil-heading">What guides every build</h2>
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
