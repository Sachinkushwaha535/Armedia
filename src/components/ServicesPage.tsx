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
  // ─── Data ───────────────────────────────────────────────
  // {
  //   id: 'data',
  //   title: 'Data Solutions',
  //   items: [
  //     'Data Engineering & Pipelines',
  //     'ETL Development',
  //     'Data Warehousing',
  //     'Business Intelligence & Dashboards',
  //     'Data Analytics & Reporting',
  //   ],
  //   icon: 'data',
  // },

  // ─── AI (all specific cards, old generic card removed) ──
  {
    id: 'ai-agents',
    title: 'AI Agents',
    desc: 'Automate repeatable tasks, speed up team decisions, and connect AI with the tools your business already uses.',
    items: [
      'Autonomous task agents',
      'Multi-agent orchestration',
      'Tool-use & function calling',
      'Long-running agent pipelines',
      'Human-in-the-loop agents',
    ],
    icon: 'agents',
  },
  // {
  //   id: 'rag',
  //   title: 'RAG & Knowledge Systems',
  //   items: [
  //     'Retrieval-augmented generation',
  //     'Vector database setup',
  //     'Document Q&A systems',
  //     'Semantic search pipelines',
  //     'Knowledge base integration',
  //   ],
  //   icon: 'rag',
  // },
  {
    id: 'chatbots',
    title: 'Chatbots & Assistants',
    desc: 'Give customers and internal teams faster answers with intelligent assistants built around your content and workflows.',
    items: [
      'LLM-powered chat interfaces',
      'Voice AI assistants',
      'Customer support bots',
      'Internal team assistants',
      'Multi-language support',
    ],
    icon: 'ai',
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    desc: 'Turn manual admin into connected automation that saves time, reduces errors, and keeps work moving.',
    items: [
      'n8n / Make / Zapier AI flows',
      'Document processing pipelines',
      'Email & calendar automation',
      'Trigger-based AI actions',
      'No-code + custom automation',
    ],
    icon: 'workflow',
  },
  // {
  //   id: 'fine-tuning',
  //   title: 'LLM Fine-Tuning',
  //   items: [
  //     'Custom model fine-tuning',
  //     'Domain-specific training data',
  //     'Prompt engineering & evals',
  //     'Model distillation',
  //     'RLHF / preference tuning',
  //   ],
  //   icon: 'finetune',
  // },
  {
    id: 'ai-api',
    title: 'AI API Integration',
    desc: 'Add AI features into your product or process with reliable integrations, cost control, and scalable architecture.',
    items: [
      'OpenAI / Claude / Gemini APIs',
      'LangChain & LlamaIndex',
      'Custom AI middleware',
      'Streaming response handling',
      'Rate limiting & cost control',
    ],
    icon: 'aiapi',
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    desc: 'Find the right AI use cases, avoid wasted build time, and create a practical roadmap for measurable value.',
    items: [
      'AI readiness assessment',
      'Use-case discovery workshops',
      'Build vs buy analysis',
      'AI governance & ethics',
      'ROI modeling for AI projects',
    ],
    icon: 'aistrategy',
  },
  {
    id: 'predictive',
    title: 'Predictive Analytics',
    desc: 'Use business data to forecast demand, identify risk, rank opportunities, and support smarter decisions.',
    items: [
      'Demand forecasting',
      'Churn prediction models',
      'Anomaly detection',
      'Recommendation engines',
      'Scoring & ranking systems',
    ],
    icon: 'data',
  },
  {
    id: 'doc-ai',
    title: 'AI Document Processing',
    desc: 'Extract, classify, summarize, and structure documents so your team can move faster through information-heavy work.',
    items: [
      'Intelligent document extraction',
      'OCR + AI data capture',
      'Contract & invoice analysis',
      'Auto classification & tagging',
      'Multi-format parsing (PDF, Word, Excel)',
      'Summarization & report generation',
    ],
    icon: 'docai',
  },

  // ─── Other Services ──────────────────────────────────────
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    desc: 'Strengthen your digital foundation with practical security checks, risk reduction, and compliance-ready improvements.',
    items: [
      'Threat assessment',
      'Network defense',
      'Risk management',
      'Security audits',
      'Compliance solutions',
    ],
    icon: 'security',
  },
  {
    id: 'web',
    title: 'Web Development',
    desc: 'Build fast, responsive websites and web apps designed to create trust, improve visibility, and convert visitors.',
    items: [
      'Custom web apps',
      'E-commerce',
      'Responsive design',
      'SEO optimization',
      'Performance tuning',
    ],
    icon: 'web',
  },
  {
    id: 'mobile',
    title: 'Android & iOS Development',
    desc: 'Launch mobile experiences that feel polished, connect cleanly with your systems, and support real customer journeys.',
    items: [
      'Native Android and iOS apps',
      'Play Store and App Store deployment',
      'API & Firebase integration',
      'Swift / Objective-C / Kotlin',
      'Performance tuning & optimization',
    ],
    icon: 'mobile',
  },
  {
    id: 'design',
    title: 'UX/UI Design',
    desc: 'Design clear, premium interfaces that make your offer easier to understand and your product easier to use.',
    items: [
      'User research',
      'Prototyping',
      'Design systems',
      'Wireframing',
      'Usability testing',
    ],
    icon: 'design',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    desc: 'Create scalable software foundations for products, platforms, internal tools, and business-critical systems.',
    items: [
      'Modern architectures',
      'Cloud-native solutions',
      'Full-stack development',
      'Microservices',
      'Scalable systems',
    ],
    icon: 'code',
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    desc: 'Make better technology decisions with clear audits, roadmaps, and digital transformation planning.',
    items: [
      'Tech audits',
      'Process optimization',
      'Strategic planning',
      'Digital transformation',
      'Technology roadmap',
    ],
    icon: 'strategy',
  },
  {
    id: 'leads',
    title: 'Lead Generation',
    desc: 'Improve how your website, CRM, tracking, and funnel work together to capture and qualify better enquiries.',
    items: [
      'B2B lead generation',
      'Email marketing campaigns',
      'Sales funnel optimization',
      'CRM integration',
      'Conversion tracking',
    ],
    icon: 'leads',
  },
  {
    id: 'workflow',
    title: 'Workflow Development',
    desc: 'Design custom workflow systems that connect teams, tools, and tasks into a smoother operating process.',
    items: [
      'Business process automation',
      'Custom workflow systems',
      'Integration with tools',
      'Task automation',
      'Efficiency optimization',
    ],
    icon: 'workflow',
  },
  {
    id: 'procurement',
    title: 'Procurement Services',
    desc: 'Support smarter vendor decisions, better cost control, and clearer procurement planning for technology needs.',
    items: [
      'Vendor sourcing',
      'Cost optimization',
      'Supply chain management',
      'Contract negotiation',
      'Procurement strategy',
    ],
    icon: 'procurement',
  },
  {
    id: 'framework',
    title: 'Strategic Framework',
    desc: 'Build a practical growth framework with priorities, KPIs, market direction, and clear next actions.',
    items: [
      'Business strategy development',
      'Growth planning',
      'Market analysis',
      'Operational frameworks',
      'KPI & performance tracking',
    ],
    icon: 'framework',
  },
]

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
          <p className="services-kicker">Armedia IT & Creative Services</p>
          <h1 id="services-title">Services built to improve visibility, workflow, and growth.</h1>
          <p>
            From premium websites and mobile apps to AI automation, cybersecurity, integrations,
            and strategic consulting, Armedia helps businesses build digital systems that work
            clearly, perform reliably, and support measurable outcomes.
          </p>

          <Link className="services-cta" href="/contact">
            Start your project
          </Link>
        </div>

        <div className="cinematic-services-grid">
          {serviceCards.map((service) => (
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
