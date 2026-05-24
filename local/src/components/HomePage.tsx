'use client'

import Link from 'next/link'
import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'

const philosophyCards = [
  {
    title: 'Strategy first',
    icon: '01',
    points: ['Clear market direction', 'Audience and offer mapping', 'Campaign goals before execution'],
  },
  {
    title: 'Media thinking',
    icon: '02',
    points: ['Digital, OOH, and offline planning', 'Creative matched to placement', 'Channel-ready campaign structure'],
  },
  {
    title: 'AI advantage',
    icon: '03',
    points: ['Faster content workflows', 'Smarter reporting', 'Automation where it saves real time'],
  },
  {
    title: 'Measured growth',
    icon: '04',
    points: ['Campaign tracking', 'Business intelligence dashboards', 'Optimisation after launch'],
  },
]

const whyUsCards = [
  {
    title: 'Performance Marketing',
    tag: 'Strategy',
    desc: 'Campaigns planned around reach, lead quality, conversion, and measurable growth instead of random posting.',
  },
  {
    title: 'Fast & Scalable Execution',
    tag: 'Execution',
    desc: 'From first idea to live campaign, we structure creative, media, tracking, and reporting so work can scale cleanly.',
  },
  {
    title: 'Trusted & Result-Oriented',
    tag: 'Growth',
    desc: 'Every campaign direction is tied to a business outcome: awareness, enquiries, footfall, sales, or reporting clarity.',
  },
  {
    title: 'Dedicated Support',
    tag: 'Support',
    desc: 'Clear communication, practical recommendations, and campaign reviews help you know what is happening and why.',
  },
]

const growthCards = [
  {
    title: 'Creative Excellence',
    label: 'Design',
    desc: 'Ad creatives, campaign messages, content direction, and media assets designed to make your brand easier to remember.',
  },
  {
    title: 'Measurable Results',
    label: 'Analytics',
    desc: 'Dashboards, tracking, campaign summaries, and optimisation reviews help connect media spend to business outcomes.',
    featured: true,
  },
  {
    title: 'Skilled Professionals',
    label: 'Team',
    desc: 'Strategy, media, creative, AI, BI, and technology capabilities combined into one growth-focused agency workflow.',
  },
]

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide AI marketing tools, business intelligence, advertising, digital media, OOH media, offline marketing, content, PR, CRM, web development, app development, SEO, and campaign automation.',
  },
  {
    question: 'How can digital marketing grow my business?',
    answer:
      'A clear campaign system can improve visibility, generate better leads, increase brand recall, and help your team understand which channels deserve more budget.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Some improvements can appear quickly after launch, while stronger growth usually needs consistent testing, reporting, and optimisation across several weeks.',
  },
  {
    question: 'Do you work with small businesses?',
    answer:
      'Yes. We can create practical plans for local businesses, startups, retail brands, service companies, and growing teams.',
  },
  {
    question: 'What makes your agency different?',
    answer:
      'We connect media planning, creative, AI workflows, BI dashboards, performance advertising, offline visibility, and technology support in one growth system.',
  },
]

const tickerItems = [
  'AI Marketing Tools',
  'Business Intelligence',
  'Performance Advertising',
  'Digital Media',
  'OOH Media',
  'Offline Marketing',
  'Brand Strategy',
  'Campaign Analytics',
]

const stats = [
  { num: 6, suffix: '+', label: 'Core growth channels' },
  { num: 24, suffix: '/7', label: 'AI-ready support thinking' },
  { num: 5, suffix: '', label: 'Step campaign process' },
  { num: 100, suffix: '%', label: 'Strategy-led execution' },
]

const bentoServices = [
  {
    icon: 'AI',
    iconClass: 'lime',
    title: 'AI Marketing Studio',
    sub: 'AI tools and workflows for content ideas, campaign summaries, lead qualification, automated reports, and faster marketing operations.',
    tags: ['AI content', 'Campaign reports', 'Lead scoring', 'Outcome: faster execution'],
    cardClass: 'bc1 bc-accent',
  },
  {
    icon: 'BI',
    iconClass: 'cyan',
    title: 'Business Intelligence',
    sub: 'Dashboards, market insights, competitor analysis, campaign analytics, and reporting systems that make growth decisions clearer.',
    tags: ['Dashboards', 'Market insights', 'Competitor data', 'Outcome: smarter decisions'],
    cardClass: 'bc2',
  },
  {
    icon: 'AD',
    iconClass: 'orange',
    title: 'Advertising',
    sub: 'Meta Ads, Google Ads, creative testing, media buying, retargeting, and campaign management built around measurable outcomes.',
    tags: ['Meta Ads', 'Google Ads', 'Retargeting', 'Outcome: stronger leads'],
    cardClass: 'bc3',
  },
  {
    icon: 'DM',
    iconClass: 'lime',
    title: 'Digital Media',
    sub: 'Social campaigns, content systems, landing pages, SEO, video-first assets, and digital journeys that create awareness and enquiries.',
    tags: ['Social media', 'SEO', 'Landing pages', 'Outcome: digital reach'],
    cardClass: 'bc4',
  },
  {
    icon: 'OOH',
    iconClass: 'white',
    title: 'OOH & Offline Media',
    sub: 'Outdoor advertising, print, local promotions, activations, and offline campaign planning connected with digital tracking.',
    tags: ['Billboards', 'Print media', 'BTL campaigns', 'Outcome: brand recall'],
    cardClass: 'bc5 bc-orange',
  },
  {
    icon: 'GO',
    iconClass: 'cyan',
    title: 'Strategy & Growth',
    sub: 'Go-to-market planning, brand positioning, funnel strategy, campaign roadmaps, and performance reviews for sustainable growth.',
    tags: ['GTM strategy', 'Brand positioning', 'Funnels', 'Outcome: clear growth plan'],
    cardClass: 'bc7',
    inline: true,
  },
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We understand your brand, audience, offer, market position, and the result your campaign needs to create.' },
  { num: '02', title: 'Strategy', desc: 'We choose the right mix of AI, BI, advertising, digital media, OOH, offline marketing, and content.' },
  { num: '03', title: 'Creative', desc: 'We shape campaign messages, visual direction, landing pages, and media assets for each channel.' },
  { num: '04', title: 'Execution', desc: 'We launch campaigns, set up tracking, connect tools, and keep communication clear from start to finish.' },
  { num: '05', title: 'Optimisation', desc: 'We review performance, improve weak points, and use insights to scale what is working.' },
]

const portfolioProjects = [
  {
    title: 'AI campaign command centre',
    description: 'A dashboard concept for campaign summaries, lead quality, content planning, and weekly marketing actions.',
    metric: 'Designed to reduce manual reporting and make next steps easier to see.',
    feedback: 'Ready to connect with CRM, ad platforms, and reporting data when integrations are approved.',
    tags: ['AI tool', 'BI dashboard', 'Campaign analytics'],
    thumb: 'work-thumb-a',
    badge: 'AI + BI',
  },
  {
    title: 'Digital and OOH launch plan',
    description: 'A media plan structure combining paid social, Google search, outdoor visibility, print, and local activations.',
    metric: 'Built around awareness, enquiries, retargeting, and offline recall.',
    feedback: 'Useful for brands that need one connected campaign instead of disconnected channel activity.',
    tags: ['OOH media', 'Paid ads', 'Offline marketing'],
    thumb: 'work-thumb-b',
    badge: 'MEDIA',
  },
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  useScrollReveal()
  useCounterAnimation()

  const doubledTicker = [...tickerItems, ...tickerItems]

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (!response.ok) {
        setStatusMessage(data.message ?? 'Something went wrong. Please email contact.armedianz@gmail.com.')
        return
      }

      setStatusMessage(data.message ?? 'Message sent successfully.')
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch {
      setStatusMessage('Something went wrong. Please email contact.armedianz@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="hp-root">
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="blob blob-c" aria-hidden="true" />

      <section className="hp-hero">
        <div className="hp-hero-inner">
          <div className="hero-eyebrow fade-up fade-up-1">
            <span className="eyebrow-dot" />
            AI, BI, Advertising & Media Agency
          </div>

          <h1 className="hero-h1 fade-up fade-up-2">
            Grow your brand with <em className="hero-em">AI-powered media</em>
            <br />
            advertising and strategy.
          </h1>

          <p className="hero-sub fade-up fade-up-3">
            Armedia helps brands plan and execute smarter campaigns across AI tools, business
            intelligence, performance advertising, digital media, OOH media, offline marketing,
            and growth strategy.
          </p>

          <div className="hero-actions fade-up fade-up-4">
            <Link className="btn-primary" href="/contact">
              Book a strategy call <span className="btn-arrow">-&gt;</span>
            </Link>
            <Link className="btn-ghost" href="/services">
              View services
            </Link>
          </div>

          <p className="hero-sub fade-up fade-up-4">
            Strategy, creative direction, media planning, AI automation, dashboards, campaign
            execution, and optimisation in one connected growth system.
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
              Marketing media services built
              <br />
              to plan, launch &amp; scale.
            </h2>
          </div>
          <p className="section-desc">
            Every service is shaped around one goal: clearer brand visibility, better campaign
            decisions, stronger lead generation, and measurable growth across online and offline media.
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
        <h2 className="section-h2" id="proc-heading">How we turn campaigns into growth</h2>
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

      <section className="hp-section hp-section-tight reveal" aria-labelledby="work-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Portfolio</p>
            <h2 className="section-h2" id="work-heading">Campaign formats we can build</h2>
          </div>
          <p className="section-desc">
            These are proof-ready campaign formats. Replace them with live client work, billboard
            mockups, ad creatives, dashboards, and case studies as soon as they are approved.
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
      </section>

      <section className="hp-section hp-section-tight reveal" aria-labelledby="phil-heading">
        <p className="section-tag">Philosophy</p>
        <h2 className="section-h2" id="phil-heading">What guides every campaign</h2>
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

      <section className="hp-section hp-section-tight reveal" aria-labelledby="why-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">Why Us</p>
            <h2 className="section-h2" id="why-heading">Built for campaigns that need clarity and momentum</h2>
          </div>
          <p className="section-desc">
            We combine media planning, creative direction, AI workflows, business intelligence,
            advertising, OOH, offline marketing, and technology support into one execution system.
          </p>
        </div>

        <div className="why-agency-layout">
          <article className="why-agency-feature">
            <p className="section-tag">Discover what sets us apart</p>
            <h3>Data-informed marketing built for real business growth.</h3>
            <p>
              Armedia is shaped for brands that want more than isolated ads. We connect strategy,
              media, creative, reporting, and campaign-supporting technology so every activity has
              a clearer role in the growth plan.
            </p>
            <div className="why-agency-metrics">
              <span><strong>98%</strong>Success focus</span>
              <span><strong>200+</strong>Campaign ideas ready</span>
            </div>
          </article>

          <div className="why-agency-grid">
            {whyUsCards.map((card) => (
              <article className="why-agency-card" key={card.title}>
                <span>{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="growth-card-grid">
          {growthCards.map((card) => (
            <article className={`growth-card ${card.featured ? 'featured' : ''}`} key={card.title}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Link className="text-link" href="/services">Explore more</Link>
            </article>
          ))}
        </div>

        <div className="home-cta-panel">
          <div>
            <p className="section-tag">Transform your business vision</p>
            <h2>Partner with our specialists for campaign results.</h2>
          </div>
          <Link className="btn-primary" href="/start-project">
            Launch your project <span className="btn-arrow">-&gt;</span>
          </Link>
        </div>
      </section>

      <section className="hp-section hp-section-tight reveal" aria-labelledby="faq-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">FAQ</p>
            <h2 className="section-h2" id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <p className="section-desc">
            Find clear answers about our marketing media services, pricing conversations, timelines,
            and performance-focused strategy.
          </p>
        </div>

        <div className="home-faq-layout">
          <aside className="home-faq-sidebar">
            <div className="faq-tab active">
              <span>01</span>
              <strong>General</strong>
              <small>5 questions</small>
            </div>
            <div className="faq-tab">
              <span>02</span>
              <strong>Billing</strong>
              <small>4 questions</small>
            </div>
            <div className="faq-tab">
              <span>03</span>
              <strong>Technical</strong>
              <small>6 questions</small>
            </div>
            <div className="faq-help-card">
              <strong>Still need help?</strong>
              <p>Tell us your question or project idea and our team will help you with a practical next step.</p>
              <Link className="text-link" href="/contact">Get in touch</Link>
            </div>
          </aside>

          <div className="home-faq-list">
            <div className="faq-toolbar">
              <span>{faqItems.length} questions answered</span>
              <input type="search" placeholder="Search questions..." aria-label="Search questions" />
            </div>
            {faqItems.map((item, index) => (
              <details className="home-faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section hp-section-tight reveal" aria-labelledby="home-contact-heading">
        <div className="section-top section-top-centered">
          <div>
            <p className="section-tag">Contact</p>
            <h2 className="section-h2" id="home-contact-heading">Share your vision with us</h2>
          </div>
          <p className="section-desc">
            Get in touch to start growing your business with high-performance marketing media,
            AI, BI, advertising, and campaign strategy.
          </p>
        </div>

        <div className="home-contact-layout">
          <div className="home-contact-card">
            <div className="home-contact-methods">
              <article>
                <span>Email</span>
                <strong>Drop us a line</strong>
                <a href="mailto:contact.armedianz@gmail.com">contact.armedianz@gmail.com</a>
              </article>
              <article>
                <span>Call</span>
                <strong>Give us a ring</strong>
                <p>Share your number and we will call back.</p>
              </article>
              <article>
                <span>Plan</span>
                <strong>Step by step</strong>
                <p>Strategy, campaign, creative, media, and reporting.</p>
              </article>
            </div>

            <form className="home-contact-form" onSubmit={handleSubmit}>
              <h3>Tell us your goal</h3>
              <div className="home-contact-fields">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile no" required />
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email address" required />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project or inquiry in detail..."
                rows={5}
                required
              />
              <button className="btn-primary" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Launch message'}
              </button>
              {statusMessage ? <p className="contact-status" role="status">{statusMessage}</p> : null}
            </form>
          </div>

          <aside className="home-contact-panel">
            <p className="section-tag">Why choose us for your growth</p>
            <div className="home-contact-stats">
              <span><strong>&lt; 1h</strong>Fast response time</span>
              <span><strong>99%</strong>Client retention focus</span>
              <span><strong>5k+</strong>High-impact campaign ideas</span>
              <span><strong>7+</strong>Years of excellence</span>
            </div>
            <p>
              We explore performance-driven strategies focused on maximising ROI and elevating ROAS
              at scale. Every campaign is shaped to deliver measurable growth, premium leads, and
              sustainable revenue.
            </p>
            <strong>Growth Strategy Director</strong>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default HomePage
