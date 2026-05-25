'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const serviceIcons = {
  web: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Web development icon">
      <path d="M4 5.5h16v10.8H4z" />
      <path d="M8.5 20h7" />
      <path d="M12 16.3V20" />
      <path d="M4 8.8h16" />
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Android development icon">
      <path d="M7.5 9.2h9v7.3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2z" />
      <path d="M9 6.2 7.7 4.5" />
      <path d="m15 6.2 1.3-1.7" />
      <path d="M8.5 9.2a3.5 3.5 0 0 1 7 0" />
      <path d="M6 11.2v4" />
      <path d="M18 11.2v4" />
      <path d="M10.4 11.6h.1" />
      <path d="M13.5 11.6h.1" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Mobile app development icon">
      <rect x="7" y="3" width="10" height="18" rx="2" ry="2" />
      <path d="M12 18.5h.01" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" role="img" aria-label="UX/UI design icon">
      <path d="M12 4.2a7.8 7.8 0 0 0 0 15.6h1.1a1.9 1.9 0 0 0 1.3-3.2l-.3-.3a1.4 1.4 0 0 1 1-2.4h1.2A3.7 3.7 0 0 0 20 10.2c0-3.3-3.6-6-8-6Z" />
      <path d="M7.6 10.1h.1" />
      <path d="M10 7.8h.1" />
      <path d="M13.6 7.8h.1" />
      <path d="M16.2 10.2h.1" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Software development icon">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 5-2 14" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" role="img" aria-label="IT consulting icon">
      <path d="M4.8 18.8 9 14.6l3 2.5 6.8-8.2" />
      <path d="M15 8.9h3.8v3.8" />
      <path d="M5 6h5" />
      <path d="M5 10h3" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Cloud solutions icon">
      <path d="M7.8 17.8h9.1a3.5 3.5 0 0 0 .4-7 5.2 5.2 0 0 0-9.9-1.6 4.3 4.3 0 0 0 .4 8.6Z" />
      <path d="M8.7 20.6h6.6" />
      <path d="M12 17.8v2.8" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Cybersecurity icon">
      <path d="M12 3.8 18.4 6v5.2c0 4-2.5 7.6-6.4 9-3.9-1.4-6.4-5-6.4-9V6z" />
      <path d="m9.4 12 1.8 1.8 3.6-4" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Data analytics icon">
      <path d="M5.5 18.5V11" />
      <path d="M12 18.5v-13" />
      <path d="M18.5 18.5v-8" />
      <path d="M4 18.5h16" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI icon">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  rag: (
    <svg viewBox="0 0 24 24" role="img" aria-label="RAG & Knowledge Systems icon">
      <path d="M9 3H5a2 2 0 0 0-2 2v4" />
      <path d="M21 3h-4" />
      <path d="M15 3h-4v2c0 1 .5 2 1.5 2.5L14 9" />
      <path d="M3 13v4a2 2 0 0 0 2 2h4" />
      <path d="M21 13v4a2 2 0 0 0-2 2h-4" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  agents: (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI Agents icon">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
    </svg>
  ),
  finetune: (
    <svg viewBox="0 0 24 24" role="img" aria-label="LLM fine-tuning icon">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  aiapi: (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI API integration icon">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="M12 5v14" />
    </svg>
  ),
  aistrategy: (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI strategy icon">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
  docai: (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI Document Processing icon">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
      <path d="M10 9H8" />
    </svg>
  ),
  leads: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Lead generation icon">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      <path d="M19 5v4" />
      <path d="M17 7h4" />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Workflow development icon">
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <rect x="15" y="14" width="6" height="6" rx="1" />
      <path d="M9 7h6" />
      <path d="M15 7v7" />
      <path d="M12 14h3" />
    </svg>
  ),
  procurement: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Procurement services icon">
      <path d="M4 7h16" />
      <path d="M6 7l1.5 11h9L18 7" />
      <path d="M9 11h6" />
      <path d="M10 14h4" />
    </svg>
  ),
  framework: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Strategic framework icon">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4" />
      <path d="M6.5 10v4" />
      <path d="M17.5 10v4" />
      <path d="M10 17.5h4" />
    </svg>
  ),
} // ✅ serviceIcons closes here

const serviceCards = [
  // ─── AI & Automation Solutions ───
  {
    id: 'ai-agents',
    title: 'AI Agents & Automation',
    desc: 'Automate repeatable tasks, speed up team decision cycles, and connect custom AI tools with your existing business software stack.',
    items: [
      'Autonomous task agents',
      'Multi-agent orchestration workflows',
      'Tool-use and function calling',
      'Long-running data pipelines',
      'Human-in-the-loop validation systems',
    ],
    icon: 'agents',
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots & Assistants',
    desc: 'Provide clients and internal operations teams with immediate answers using intelligent assistants built around your content databases.',
    items: [
      'LLM-powered chat interfaces',
      'Voice AI communication modules',
      'Customer support automation bots',
      'Internal operational assistants',
      'Multi-language language processing',
    ],
    icon: 'ai',
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Optimization',
    desc: 'Turn manual administration bottlenecks into connected automation paths that reduce cost per acquisition risks and operational delays.',
    items: [
      'n8n / Make / Zapier automation loops',
      'Document processing data pipelines',
      'Email and calendar calendar systems',
      'Trigger-based background actions',
      'No-code and custom API automation',
    ],
    icon: 'workflow',
  },
  {
    id: 'ai-api',
    title: 'AI API Integration',
    desc: 'Deploy custom AI capabilities into your existing products with reliable endpoints, strict rate-limiting, and cost control frameworks.',
    items: [
      'OpenAI / Claude / Gemini endpoints',
      'LangChain and LlamaIndex orchestration',
      'Custom middleware integration solutions',
      'Streaming token response architectures',
      'Rate limiting and system cost optimization',
    ],
    icon: 'aiapi',
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    desc: 'Identify profitable automation targets, eliminate wasted software build cycles, and construct an actionable business roadmap.',
    items: [
      'AI readiness baseline assessments',
      'Use-case discovery workshops',
      'Headless build vs buy analysis',
      'AI compliance and risk governance',
      'ROI modeling for pipeline projects',
    ],
    icon: 'aistrategy',
  },
  {
    id: 'predictive',
    title: 'Predictive Data Analytics',
    desc: 'Leverage underlying corporate data to forecast market demand, mitigate customer churn, and drive smarter business intelligence.',
    items: [
      'Demand forecasting structures',
      'Churn prediction tracking models',
      'System anomaly detection loops',
      'Custom product recommendation engines',
      'Lead scoring and prioritization ranking',
    ],
    icon: 'data',
  },
  {
    id: 'doc-ai',
    title: 'AI Document Processing',
    desc: 'Extract, classify, and structure static files automatically so your team can accelerate information-heavy data workflows.',
    items: [
      'Intelligent document data extraction',
      'OCR and AI data capture pipelines',
      'Contract and commercial invoice analysis',
      'Automated text classification tagging',
      'Multi-format file parsing modules',
      'Summarization and auto-report generation',
    ],
    icon: 'docai',
  },

  // ─── Digital, Web & Strategy Services ───
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    desc: 'Protect your digital web architecture with practical security auditing, threat reduction, and compliance-ready data controls.',
    items: [
      'Threat surface assessments',
      'Network defense infrastructure',
      'Data risk management protocols',
      'System vulnerability audits',
      'Privacy compliance solutions',
    ],
    icon: 'security',
  },
  {
    id: 'web',
    title: 'Next.js & Web Development',
    desc: 'Build fast, responsive frontend systems and headless applications engineered to establish brand trust and maximize organic traffic.',
    items: [
      'Custom React web applications',
      'Headless e-commerce stores',
      'Responsive interface layouts',
      'Technical SEO optimization',
      'Core Web Vitals performance tuning',
    ],
    icon: 'web',
  },
  {
    id: 'mobile',
    title: 'Android & iOS App Engineering',
    desc: 'Launch polished mobile application layers that sync with your operational infrastructure and support frictionless client conversion paths.',
    items: [
      'Native Android and iOS applications',
      'App Store publishing deployment paths',
      'API and Firebase system syncing',
      'Swift / Kotlin backend management',
      'Mobile performance optimization metrics',
    ],
    icon: 'mobile',
  },
  {
    id: 'design',
    title: 'UX/UI Conversion Design',
    desc: 'Design clear, premium user interfaces that translate complex service values into intuitive, high-converting digital customer journeys.',
    items: [
      'User journey research studies',
      'Interactive layout prototyping',
      'Scalable Figma design systems',
      'Wireframing content topology',
      'Usability verification testing',
    ],
    icon: 'design',
  },
  {
    id: 'software',
    title: 'Custom Software Engineering',
    desc: 'Develop secure, highly scalable software backends for internal databases, web utilities, and business-critical core systems.',
    items: [
      'Modern microservices architectures',
      'Cloud-native deployment infrastructure',
      'Full-stack application development',
      'Secure internal tooling platforms',
      'Scalable enterprise system layouts',
    ],
    icon: 'code',
  },
  {
    id: 'consulting',
    title: 'IT Strategy & Tech Audits',
    desc: 'Make better asset investment choices using thorough infrastructure audits, technology roadmaps, and digital transformation mapping.',
    items: [
      'Tech stack structural audits',
      'Operational process optimization steps',
      'Strategic system layout planning',
      'Digital transformation blueprints',
      'Technology architecture roadmaps',
    ],
    icon: 'strategy',
  },
  {
    id: 'leads',
    title: 'Lead Generation & CRO',
    desc: 'Align your website architecture, CRM tracking pipelines, and media channels to capture and qualify commercial user inquiries.',
    items: [
      'B2B customer acquisition funnels',
      'Targeted email marketing sequences',
      'Conversion rate optimization (CRO)',
      'Enterprise CRM data integration',
      'Advanced multi-channel attribution tracking',
    ],
    icon: 'leads',
  },
  {
    id: 'workflow',
    title: 'Workflow Engine Development',
    desc: 'Design custom automation workflows that bridge operational units, software tools, and milestones into a smoother pipeline.',
    items: [
      'Business process automation tracks',
      'Custom workflow management software',
      'Frictionless API system connections',
      'Repetitive task automation scripts',
      'Operational efficiency optimization maps',
    ],
    icon: 'workflow',
  },
  {
    id: 'procurement',
    title: 'SaaS & Procurement Services',
    desc: 'Drive better vendor selections, eliminate shadow IT budget waste, and maintain clear procurement strategies for system tools.',
    items: [
      'Software vendor sourcing strategies',
      'SaaS license cost optimization',
      'Technology supply management steps',
      'Contract validation negotiation tactics',
      'Procurement roadmap framework plans',
    ],
    icon: 'procurement',
  },
  {
    id: 'framework',
    title: 'Strategic Growth Frameworks',
    desc: 'Construct an actionable business scaling model backed by clear data visibility, explicit KPIs, and immediate next steps.',
    items: [
      'Business growth strategy models',
      'Cross-channel media plan mapping',
      'Competitive market share analysis',
      'Operational playbook architectures',
      'KPI and metrics dashboard tracking',
    ],
    icon: 'framework',
  },
]


const marketingMediaServiceCards = [
  {
    id: 'ai-marketing-studio',
    title: 'AI Marketing Automation',
    desc: 'Accelerate content workflows, automate campaign ingestion summaries, streamline lead qualification, and deploy custom reporting tools.',
    items: [
      'AI content and ad-copy workflows',
      'Automated campaign summaries',
      'Lead qualification scoring maps',
      'AI chatbots and business assistants',
      'Automated performance metric reports',
    ],
    icon: 'ai',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Dashboards',
    desc: 'Synthesize complex marketing, sales pipeline, and competitive data into unified data visualization systems for clear decision-making.',
    items: [
      'BI platform dashboards',
      'Cross-channel performance reporting',
      'Market share and competitor analysis',
      'Customer lifetime value insights',
      'Growth strategy execution roadmaps',
    ],
    icon: 'data',
  },
  {
    id: 'advertising',
    title: 'Performance Marketing & Advertising',
    desc: 'Plan, deploy, and scale paid client campaigns across target search, social media buying, and inbound lead generation funnels.',
    items: [
      'Meta Ads management models',
      'Google Ads and search positioning',
      'Programmatic ad creative testing',
      'Multi-stage retargeting funnels',
      'Advanced conversion attribution tracking',
    ],
    icon: 'leads',
  },
  {
    id: 'digital-media',
    title: 'Digital Media & Campaign Assets',
    desc: 'Expand organic visibility with data-driven social campaigns, custom landing pages, solid technical SEO foundations, and clear direction.',
    items: [
      'Social media strategy planning',
      'High-converting landing page creation',
      'SEO structural hierarchy setups',
      'Video and visual asset direction',
      'Digital customer journey mapping',
    ],
    icon: 'web',
  },
  {
    id: 'ooh-offline-media',
    title: 'OOH Advertising & Offline Media',
    desc: 'Connect out-of-home advertising and real-world activations natively with digital campaign metrics, tracking tools, and mental recall.',
    items: [
      'Billboard and outdoor media planning',
      'Print media allocation strategies',
      'Localized brand activations and events',
      'Offline promotional strategy maps',
      'Digital-to-offline customer tracking',
    ],
    icon: 'design',
  },
  {
    id: 'brand-growth-strategy',
    title: 'Brand Architecture & Media Strategy',
    desc: 'Define your market positioning, core offers, target audience demographics, and optimal media mix before budget deployment begins.',
    items: [
      'Brand positioning frameworks',
      'Go-to-market strategy blueprints',
      'Omnichannel media mix planning',
      'Funnel and retention journey mapping',
      'Accountable monthly performance reviews',
    ],
    icon: 'strategy',
  },
  {
    id: 'media-buying-planning',
    title: 'Media Planning & Buying',
    desc: 'Map programmatic placements, allocate budgets fluidly across networks, and coordinate vendors to maximize total reach and mental availability.',
    items: [
      'Omnichannel budget allocation maps',
      'Media spend pacing configurations',
      'Premium ad placement strategy',
      'Cross-network vendor coordination',
      'Reach and frequency optimization',
    ],
    icon: 'framework',
  },
  {
    id: 'content-creative-production',
    title: 'Content & Creative Asset Production',
    desc: 'Produce high-converting ad creative concepts, structured social assets, optimized landing page copy, and production-ready brand materials.',
    items: [
      'Ad creative execution direction',
      'Social media content architectures',
      'Short-form video script concepts',
      'Conversion-focused landing page copy',
      'Campaign asset design matrices',
    ],
    icon: 'design',
  },
  {
    id: 'social-influencer-marketing',
    title: 'Social & Creator Marketing',
    desc: 'Build brand equity and trust using systematic social media strategy planning, creator collaborations, and structured content calendars.',
    items: [
      'Organic social media strategy',
      'Influencer partnership campaign planning',
      'Creator briefing framework development',
      'Data-driven content distribution calendars',
      'Community engagement execution steps',
    ],
    icon: 'agents',
  },
  {
    id: 'brand-activation-pr',
    title: 'Brand Activation & PR Strategy',
    desc: 'Support product launches, local marketing promotions, public-facing campaigns, and corporate authority moments with clear media direction.',
    items: [
      'Launch campaign architecture planning',
      'Press and PR distribution messaging',
      'Localized activation strategy maps',
      'Partnership network campaign design',
      'Reputation and trust validation models',
    ],
    icon: 'aistrategy',
  },
  {
    id: 'event-retail-marketing',
    title: 'Event & Retail Activation',
    desc: 'Formulate practical campaign roadmaps for trade exhibitions, retail promotions, commercial events, and physical footfall generation.',
    items: [
      'Event promotion distribution plans',
      'Retail campaign strategy mapping',
      'In-store visibility asset layouts',
      'Footfall generation campaign planning',
      'Offer and promotional pricing structure',
    ],
    icon: 'mobile',
  },
  {
    id: 'crm-retention-marketing',
    title: 'CRM Automation & Retention Marketing',
    desc: 'Drive repeatable backend revenue with lifecycle email marketing, targeted customer segmentation, and performance retention tracking.',
    items: [
      'Lifecycle email marketing campaigns',
      'Automated message flow planning',
      'Advanced behavioral customer segmentation',
      'Customer retention offer structures',
      'CRM database metrics reporting',
    ],
    icon: 'workflow',
  },
  {
    id: 'web-development',
    title: 'Headless Web Development',
    desc: 'Engineered fast, responsive websites and marketing architectures that secure brand trust, satisfy search indexing, and capture leads.',
    items: [
      'Custom React web applications',
      'Technical campaign landing pages',
      'Responsive interface code assembly',
      'Core Web Vitals performance tuning',
      'Secure lead capture form layers',
    ],
    icon: 'web',
  },
  {
    id: 'android-ios-development',
    title: 'Android & iOS App Engineering',
    desc: 'Develop high-performance mobile application layers built for consumer engagement, internal tool pipelines, and secure API utilities.',
    items: [
      'Android native application planning',
      'iOS mobile application architecture',
      'App store deployment readiness checks',
      'API and Firebase infrastructure syncing',
      'Mobile user experience optimization',
    ],
    icon: 'mobile',
  },
  {
    id: 'seo-landing-pages',
    title: 'SEO & Conversion Optimization',
    desc: 'Maximize organic search console visibility and digital ad conversions using structured landing configurations and clear schema maps.',
    items: [
      'Technical SEO content hierarchies',
      'High-intent keyword landing pages',
      'JSON-LD metadata and schema tags',
      'Frictionless conversion copy layouts',
      'Page speed optimization standards',
    ],
    icon: 'web',
  },
  {
    id: 'ecommerce-growth',
    title: 'E-commerce Conversion Growth',
    desc: 'Optimize online product discoverability, clear checkout steps, conversion rate optimization (CRO) tracks, and remarketing tags for online stores.',
    items: [
      'Product page design optimization',
      'Checkout journey friction reviews',
      'Average order value bundle planning',
      'Dynamic remarketing tracking setups',
      'Store analytics and revenue mapping',
    ],
    icon: 'procurement',
  },
  {
    id: 'software-engineering',
    title: 'Custom Software Engineering',
    desc: 'Build secure digital data tools, interactive corporate portals, and production frameworks supporting cross-channel operations.',
    items: [
      'Custom metrics platform dashboards',
      'Internal operational software portals',
      'Full-stack software application assembly',
      'Scalable cloud infrastructure layouts',
      'Code QA testing and compilation check',
    ],
    icon: 'code',
  },
  {
    id: 'api-automation',
    title: 'API Integration & Workflow Pipelines',
    desc: 'Unify disparate marketing tech stacks, CRM systems, inbound forms, data storage, and notification alerts into smooth automated pipelines.',
    items: [
      'Enterprise CRM data integrations',
      'Analytics tool database connections',
      'Frictionless webhook webhook routines',
      'Email and form data automation paths',
      'Automated background reporting pipelines',
    ],
    icon: 'aiapi',
  },
]

const activeServiceCards = marketingMediaServiceCards.length ? marketingMediaServiceCards : serviceCards

function ServicesPage() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.reveal-card')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 120)

            io.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
      }
    )

    cards.forEach((card) => io.observe(card))

    return () => io.disconnect()
  }, [])

  return (
    <section className="services-cinematic" aria-labelledby="services-title">
      <div className="services-cinematic-inner">
        <div className="services-copy">
          <p className="services-kicker">Armedia Marketing Media Services</p>
          <h1 id="services-title">AI, BI, advertising, media, and strategy for brand growth.</h1>
          <p>
            From AI-powered marketing tools and business intelligence to performance advertising,
            digital media, OOH media, offline marketing, growth strategy, and campaign-supporting
            IT services, Armedia helps brands plan smarter campaigns and execute with clarity.
          </p>

          <Link className="services-cta" href="/contact">
            Start your project
          </Link>
        </div>

        <div className="cinematic-services-grid">
          {activeServiceCards.map((service) => (
            <article
              className="cinematic-service-card reveal-card"
              key={service.title}
              id={service.id}
            >
              <span className="card-glow" />
              <span className="card-line" />
              <span className="card-shine" />

              <div
                className={`service-icon service-icon-${service.icon}`}
                aria-hidden="true"
              >
                {serviceIcons[service.icon as keyof typeof serviceIcons]}
              </div>

              <h2>{service.title}</h2>
              <p className="service-card-desc">{service.desc}</p>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
