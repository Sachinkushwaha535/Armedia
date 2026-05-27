import Link from 'next/link'
import HomeContactSection from './HomeContactSection'

const philosophyCards = [
  {
    title: 'Commercial clarity first',
    icon: '01',
    points: ['Sharper market position', 'Audience and offer mapping', 'Campaign goals before execution'],
  },
  {
    title: 'Channel strategy',
    icon: '02',
    points: ['Digital, OOH, and offline planning', 'Creative matched to each placement', 'Budget directed by channel role'],
  },
  {
    title: 'Intelligence layer',
    icon: '03',
    points: ['AI-assisted workflows', 'BI dashboards and reporting', 'Automation where it improves speed'],
  },
  {
    title: 'Measured improvement',
    icon: '04',
    points: ['Campaign tracking', 'Lead quality review', 'Optimisation after launch'],
  },
]

const whyUsCards = [
  {
    title: 'Strategy before spend',
    tag: 'Strategy',
    desc: 'We define the audience, offer, message, media mix, and measurement plan before budget goes live.',
  },
  {
    title: 'Premium execution system',
    tag: 'Execution',
    desc: 'Creative, landing pages, media, tracking, and reporting are built as one connected campaign system.',
  },
  {
    title: 'Clear performance thinking',
    tag: 'Growth',
    desc: 'Every recommendation is tied to a business outcome: awareness, enquiries, footfall, sales, or reporting clarity.',
  },
  {
    title: 'Calm client communication',
    tag: 'Support',
    desc: 'You get practical next steps, concise reviews, and a clear view of what is happening and why.',
  },
]

const growthCards = [
  {
    title: 'Sharper creative direction',
    label: 'Design',
    desc: 'Campaign messages, ad concepts, content direction, and media assets shaped to make your offer easier to understand and remember.',
  },
  {
    title: 'Cleaner measurement',
    label: 'Analytics',
    desc: 'Dashboards, tracking, campaign summaries, and review rhythms connect media activity to practical business decisions.',
    featured: true,
  },
  {
    title: 'One connected team',
    label: 'Team',
    desc: 'Strategy, media, creative, AI, BI, and technology capabilities work together instead of sitting in separate silos.',
  },
]

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'Armedia provides AI marketing workflows, business intelligence dashboards, advertising, digital media, OOH and offline media, SEO, landing pages, web development, CRM, content, and growth strategy.',
  },
  {
    question: 'How does Armedia improve marketing performance?',
    answer:
      'We improve performance by clarifying the offer, choosing the right channel mix, tightening creative, setting up measurement, and optimising campaigns around lead quality and commercial outcomes.',
  },
  {
    question: 'How quickly can we start?',
    answer:
      'Most projects begin with a focused discovery conversation, then a clear action plan covering priority channels, timeline, budget range, and the assets needed to launch.',
  },
  {
    question: 'Do you work with growing businesses?',
    answer:
      'Yes. Armedia works with local businesses, startups, retail brands, service companies, and growth-focused teams across New Zealand and nearby markets.',
  },
  {
    question: 'What makes Armedia different?',
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
  { num: 6, suffix: '', label: 'Integrated service pillars' },
  { num: 5, suffix: '', label: 'Stage campaign process' },
  { num: 1, suffix: '', label: 'Connected growth system' },
  { num: 2, suffix: '', label: 'NZ and AU market focus' },
]

const bentoServices = [
  {
    icon: 'AI',
    iconClass: 'lime',
    title: 'AI Marketing Studio',
    sub: 'AI-assisted workflows for content planning, campaign summaries, lead qualification, customer support, and faster marketing operations.',
    tags: ['AI workflows', 'Campaign summaries', 'Lead qualification', 'Outcome: faster execution'],
    cardClass: 'bc1 bc-accent',
  },
  {
    icon: 'BI',
    iconClass: 'cyan',
    title: 'Business Intelligence',
    sub: 'Dashboards, campaign analytics, market insight, and reporting systems that turn scattered data into confident decisions.',
    tags: ['Dashboards', 'Campaign analytics', 'Market insight', 'Outcome: smarter decisions'],
    cardClass: 'bc2',
  },
  {
    icon: 'AD',
    iconClass: 'orange',
    title: 'Advertising',
    sub: 'Paid search, paid social, retargeting, creative testing, media buying, and conversion tracking built around lead quality.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting', 'Outcome: stronger leads'],
    cardClass: 'bc3',
  },
  {
    icon: 'DM',
    iconClass: 'lime',
    title: 'Digital Media',
    sub: 'SEO, landing pages, social campaigns, content systems, and digital journeys that make your brand easier to find and choose.',
    tags: ['SEO', 'Landing pages', 'Social media', 'Outcome: qualified reach'],
    cardClass: 'bc4',
  },
  {
    icon: 'OOH',
    iconClass: 'white',
    title: 'OOH & Offline Media',
    sub: 'Outdoor advertising, print, activations, retail visibility, and local media planned with digital follow-through and recall.',
    tags: ['Billboards', 'Print media', 'Activations', 'Outcome: brand recall'],
    cardClass: 'bc5 bc-orange',
  },
  {
    icon: 'GO',
    iconClass: 'cyan',
    title: 'Strategy & Growth',
    sub: 'Positioning, go-to-market planning, funnel strategy, campaign roadmaps, and performance reviews for more deliberate growth.',
    tags: ['Positioning', 'GTM strategy', 'Funnel strategy', 'Outcome: clear growth plan'],
    cardClass: 'bc7',
    inline: true,
  },
]

const processSteps = [
  { num: '01', title: 'Diagnose', desc: 'We clarify your offer, audience, competition, current channels, constraints, and the commercial result the campaign must support.' },
  { num: '02', title: 'Position', desc: 'We sharpen the message, channel role, funnel path, campaign structure, and measurement plan before execution begins.' },
  { num: '03', title: 'Build', desc: 'We create the campaign assets, landing pages, media plan, AI workflows, dashboards, and tracking foundations needed to launch.' },
  { num: '04', title: 'Launch', desc: 'We activate campaigns across the selected channels with clean handover, live checks, and practical communication.' },
  { num: '05', title: 'Improve', desc: 'We review performance, identify friction, refine the strongest ideas, and help your team decide what to scale next.' },
]

const portfolioProjects = [
  {
    title: 'AI campaign command centre',
    description: 'A premium workflow for campaign summaries, lead quality, content planning, and weekly marketing actions.',
    metric: 'Designed to reduce manual reporting and make the next best action easier to see.',
    feedback: 'Built to connect with CRM, ad platforms, analytics, and reporting data once integrations are approved.',
    tags: ['AI tool', 'BI dashboard', 'Campaign analytics'],
    thumb: 'work-thumb-a',
    badge: 'AI + BI',
  },
  {
    title: 'Digital and OOH launch plan',
    description: 'A connected launch plan combining paid social, Google search, outdoor visibility, print, and local activation.',
    metric: 'Built around awareness, enquiries, retargeting, and stronger offline recall.',
    feedback: 'Useful for brands that need one coordinated campaign instead of disconnected channel activity.',
    tags: ['OOH media', 'Paid ads', 'Offline marketing'],
    thumb: 'work-thumb-b',
    badge: 'MEDIA',
  },
]

function HomePage() {
  const doubledTicker = [...tickerItems, ...tickerItems]

  return (
    <div className="hp-root">
      <section className="hp-hero" aria-labelledby="home-hero-title">
        <div className="hp-hero-inner">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Premium marketing media agency for modern growth
          </div>

          <h1 className="hero-h1" id="home-hero-title">
            Plan smarter campaigns with <em className="hero-em">AI, BI & media strategy</em>
            <br />
            built for measurable growth.
          </h1>

          <p className="hero-sub">
            Armedia helps ambitious brands turn marketing activity into a connected growth system:
            sharper positioning, better media planning, stronger creative, cleaner data, and
            campaigns that are easier to measure and improve.
          </p>

          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">
              Book a growth consultation <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
            <Link className="btn-ghost" href="/services">
              Explore services
            </Link>
          </div>

          <p className="hero-sub">
            Built for service businesses, retail brands, startups, and growth teams that need
            premium execution across digital, offline, and intelligence-led marketing.
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
            <p className="section-tag">Services</p>
            <h2 className="section-h2" id="cap-heading">
              One premium partner to plan
              <br />
              campaigns, media &amp; measurement.
            </h2>
          </div>
          <p className="section-desc">
            From AI workflows and BI dashboards to advertising, SEO, OOH, offline media, landing
            pages, and growth strategy, every service is designed to make your brand easier to
            discover, trust, and choose.
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
                  <Link className="text-link" href="/contact">Discuss this service</Link>
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
                  <Link className="text-link" href="/contact">Discuss this service</Link>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="hp-section hp-section-tight reveal" aria-labelledby="proc-heading">
        <p className="section-tag">Process</p>
        <h2 className="section-h2" id="proc-heading">A clear path from idea to measurable campaign</h2>
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
            <p className="section-tag">Campaign Systems</p>
            <h2 className="section-h2" id="work-heading">What premium execution looks like</h2>
          </div>
          <p className="section-desc">
            These formats show how we connect creative, media, technology, and reporting. Live
            case studies, approved client examples, and performance proof can be added as projects
            become public.
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
        <p className="section-tag">Operating Principles</p>
        <h2 className="section-h2" id="phil-heading">What makes the work feel sharper</h2>
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
            <p className="section-tag">Why Armedia</p>
            <h2 className="section-h2" id="why-heading">Built for brands that need clarity, trust, and momentum</h2>
          </div>
          <p className="section-desc">
            Instead of scattered tasks and disconnected vendors, Armedia gives you a strategic
            partner that can shape the plan, build the assets, launch the campaign, and make the
            results easier to understand.
          </p>
        </div>

        <div className="why-agency-layout">
          <article className="why-agency-feature">
            <p className="section-tag">Positioning</p>
            <h3>A modern growth studio for marketing that needs more than isolated ads.</h3>
            <p>
              We bring together strategy, creative direction, media execution, AI workflows,
              reporting, and campaign-supporting technology so each activity has a clear role in
              the growth plan.
            </p>
            <div className="why-agency-metrics">
              <span><strong>1</strong>Strategic campaign partner</span>
              <span><strong>1</strong>Connected campaign plan</span>
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
            <p className="section-tag">Ready for a clearer plan?</p>
            <h3>Turn your next campaign into a premium growth system.</h3>
          </div>
          <Link className="btn-primary" href="/start-project">
            Start your project brief <span className="btn-arrow" aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>

      {/* <section className="hp-section hp-section-tight reveal" aria-labelledby="faq-heading">
        <div className="section-top">
          <div>
            <p className="section-tag">FAQ</p>
            <h2 className="section-h2" id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <p className="section-desc">
            Clear answers about services, timelines, collaboration, campaign planning, and what
            makes Armedia different from a conventional marketing supplier.
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
              <strong>Need a sharper answer?</strong>
              <p>Send your project context and we will help you identify the most practical next step.</p>
              <Link className="text-link" href="/contact">Talk to Armedia</Link>
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
      </section> */}

      <section className="hp-section hp-section-tight reveal" aria-labelledby="home-contact-heading">
        <div className="section-top section-top-centered">
          <div>
            <p className="section-tag">Contact</p>
            <h2 className="section-h2" id="home-contact-heading">Let us shape your next growth campaign</h2>
          </div>
          <p className="section-desc">
            Share your business goal, target audience, budget range, and preferred channels. We
            will help translate it into a practical plan for strategy, media, creative, AI, BI,
            and measurable execution.
          </p>
        </div>

        <div className="home-contact-layout">
          <div className="home-contact-card">
            <div className="home-contact-methods">
              <article>
                <span>Email</span>
                <strong>Email the studio</strong>
                <a href="mailto:contact.armedianz@gmail.com">contact.armedianz@gmail.com</a>
              </article>
              <article>
                <span>Call</span>
                <strong>Request a call back</strong>
                <p>Share your number and we will respond with the right next step.</p>
              </article>
              <article>
                <span>Plan</span>
                <strong>Get a campaign plan</strong>
                <p>Strategy, creative, media, tracking, reporting, and improvement.</p>
              </article>
            </div>

            <HomeContactSection />
          </div>

          <aside className="home-contact-panel">
            <p className="section-tag">What you can expect</p>
            <div className="home-contact-stats">
              <span><strong>1</strong>Focused discovery response</span>
              <span><strong>6</strong>Integrated growth pillars</span>
              <span><strong>5</strong>Step campaign process</span>
              <span><strong>1</strong>Clear response process</span>
            </div>
            <p>
              We keep the conversation clear: what should be prioritised, which channels make
              sense, what assets are needed, and how performance will be reviewed after launch.
            </p>
            <strong>Armedia Growth Strategy Team</strong>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default HomePage
