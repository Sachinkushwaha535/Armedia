'use client'

import Link from 'next/link'
import PageHero from './ui/PageHero'
import Button from './ui/Button'
import CTABanner from './ui/CTABanner'
import SectionHeading from './ui/SectionHeading'
import { Stagger, StaggerItem } from './ui/motion'

type ServiceIconKey = keyof typeof serviceIcons

interface ServiceCard {
  id: string
  title: string
  desc: string
  items: string[]
  icon: ServiceIconKey
  href: string
}

const serviceIcons = {


  web: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Web development icon">
      <path d="M4 5.5h16v10.8H4z" />
      <path d="M8.5 20h7" />
      <path d="M12 16.3V20" />
      <path d="M4 8.8h16" />
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
    <svg viewBox="0 0 24 24" role="img" aria-label="Strategy icon">
      <path d="M4.8 18.8 9 14.6l3 2.5 6.8-8.2" />
      <path d="M15 8.9h3.8v3.8" />
      <path d="M5 6h5" />
      <path d="M5 10h3" />
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
  agents: (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI agents icon">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
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
    <svg viewBox="0 0 24 24" role="img" aria-label="AI document processing icon">
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
    <svg viewBox="0 0 24 24" role="img" aria-label="Workflow icon">
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <rect x="15" y="14" width="6" height="6" rx="1" />
      <path d="M9 7h6" />
      <path d="M15 7v7" />
      <path d="M12 14h3" />
    </svg>
  ),
  framework: (
    <svg viewBox="0 0 24 24" role="img" aria-label="Framework icon">
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
}

const coreServiceCards: ServiceCard[] = [
  {
    id: 'ai-marketing-studio',
    title: 'AI Marketing Studio',
    desc: 'Use AI to speed up content workflows, campaign summaries, lead qualification, customer support, and reporting.',
    items: [
      'AI content workflows',
      'Campaign summary generation',
      'Lead qualification support',
      'Marketing assistants',
      'Automated weekly reporting',
    ],
    icon: 'ai',
    href: '/contact',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Strategy',
    desc: 'Turn marketing, sales, and customer data into dashboards and decisions your team can act on with confidence.',
    items: [
      'BI dashboards',
      'Campaign reporting',
      'Lead and customer insights',
      'Performance review systems',
      'Growth strategy planning',
    ],
    icon: 'data',
    href: '/contact',
  },
  {
    id: 'advertising',
    title: 'Advertising & Performance Marketing',
    desc: 'Plan, launch, and optimise paid campaigns across search, social, retargeting, and lead generation funnels.',
    items: [
      'Google Ads',
      'Meta Ads',
      'Retargeting funnels',
      'Creative testing',
      'Conversion tracking',
    ],
    icon: 'leads',
    href: '/contact',
  },
  {
    id: 'digital-media',
    title: 'Digital Media',
    desc: 'Build visibility with landing pages, SEO structure, content systems, and campaign-ready digital journeys.',
    items: [
      'Landing pages',
      'SEO structure',
      'Social campaign planning',
      'Content direction',
      'Digital customer journeys',
    ],
    icon: 'web',
    href: '/contact',
  },
  {
    id: 'ooh-offline-media',
    title: 'OOH & Offline Media',
    desc: 'Connect outdoor visibility and offline brand activation with digital campaign goals, tracking, and recall.',
    items: [
      'Billboard planning',
      'Print campaigns',
      'Local activations',
      'Offline promotional strategy',
      'Digital-to-offline flow',
    ],
    icon: 'design',
    href: '/contact',
  },
  {
    id: 'brand-growth-strategy',
    title: 'Brand, Media & Growth Strategy',
    desc: 'Shape the message, offer, audience, media mix, and execution plan before budget is spent.',
    items: [
      'Brand positioning',
      'Go-to-market planning',
      'Media mix strategy',
      'Funnel planning',
      'Monthly performance review',
    ],
    icon: 'strategy',
    href: '/contact',
  },
  {
    id: 'media-buying-planning',
    title: 'Media Planning & Buying',
    desc: 'Plan where your brand should appear, how budget should be split, and which placements can create the strongest reach.',
    items: [
      'Media mix planning',
      'Budget allocation',
      'Placement strategy',
      'Vendor coordination',
      'Reach and frequency planning',
    ],
    icon: 'framework',
    href: '/contact',
  },
  {
    id: 'content-creative-production',
    title: 'Content & Creative Production',
    desc: 'Create campaign-ready ideas, ad creatives, social content, landing page copy, and supporting brand assets.',
    items: [
      'Ad creative direction',
      'Social media content',
      'Landing page copy',
      'Short-form video concepts',
      'Campaign asset planning',
    ],
    icon: 'design',
    href: '/contact',
  },
  {
    id: 'crm-retention-marketing',
    title: 'CRM & Retention Marketing',
    desc: 'Improve repeat business with email campaigns, retention offers, customer segmentation, and CRM reporting.',
    items: [
      'Email campaigns',
      'Customer segmentation',
      'Retention offers',
      'CRM planning',
      'Reporting structure',
    ],
    icon: 'workflow',
    href: '/contact',
  },
]

const supportingServiceCards: ServiceCard[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Build websites and landing pages that support campaigns, create trust, and convert traffic into enquiries.',
    items: [
      'Business websites',
      'Campaign landing pages',
      'Responsive development',
      'Performance optimisation',
      'Lead capture forms',
    ],
    icon: 'web',
    href: '/web-design-auckland',
  },
  {
    id: 'seo-landing-pages',
    title: 'SEO & Landing Pages',
    desc: 'Improve search visibility with focused landing pages, metadata, schema, and stronger content structure.',
    items: [
      'SEO content structure',
      'Keyword landing pages',
      'Metadata and schema',
      'Conversion copy',
      'Page speed basics',
    ],
    icon: 'web',
    href: '/seo-agency-auckland',
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    desc: 'Build custom dashboards, portals, and internal tools that support reporting and business operations.',
    items: [
      'Custom dashboards',
      'Internal portals',
      'Full-stack development',
      'Scalable systems',
      'QA and deployment',
    ],
    icon: 'code',
    href: '/react-development-nz',
  },
  {
    id: 'api-automation',
    title: 'API Integration & Automation',
    desc: 'Connect CRM, forms, analytics, email, dashboards, and reporting systems into smoother workflows.',
    items: [
      'CRM integrations',
      'Analytics connections',
      'Webhook workflows',
      'Email automation',
      'Reporting pipelines',
    ],
    icon: 'aiapi',
    href: '/contact',
  },
  {
    id: 'ai-api',
    title: 'AI API Integration',
    desc: 'Add AI features into products and workflows with scalable architecture, cost control, and reliable integrations.',
    items: [
      'OpenAI / Claude / Gemini APIs',
      'Custom AI middleware',
      'Streaming responses',
      'Rate limiting',
      'Cost control',
    ],
    icon: 'aiapi',
    href: '/contact',
  },
  {
    id: 'doc-ai',
    title: 'AI Document Processing',
    desc: 'Extract, classify, summarise, and structure documents for faster internal operations and reporting.',
    items: [
      'OCR and extraction',
      'Document classification',
      'Invoice and contract analysis',
      'Summaries',
      'Multi-format parsing',
    ],
    icon: 'docai',
    href: '/contact',
  },
]

function ServiceCardGrid({ services, linkLabel }: { services: ServiceCard[]; linkLabel: string }) {
  return (
    <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <StaggerItem key={service.title}>
          <article
            id={service.id}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-accent/30 hover:bg-white/[0.04]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-accent [&_svg]:fill-none">
              {serviceIcons[service.icon]}
            </div>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-zinc-500">
                  <span className="text-accent" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              className="link-underline mt-5 inline-flex text-sm font-medium text-accent"
              href={service.href}
            >
              {linkLabel}
            </Link>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Armedia Services"
        title="Strategy, media, AI, and campaign systems built for growth"
        description="Armedia helps brands plan smarter campaigns with integrated strategy, advertising, digital media, business intelligence, AI workflows, and supporting delivery systems designed to improve visibility, lead quality, and reporting clarity."
        actions={
          <>
            <Button href="/contact">Start your project</Button>
            <Button href="/contact" variant="secondary">
              Book a consultation
            </Button>
          </>
        }
      />

      <div className="container-agency px-5 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Core services"
          title="Growth, media, and intelligence services"
          description="These are the main services Armedia leads with because they align most clearly with the brand promise shown on the homepage."
        />
        <ServiceCardGrid services={coreServiceCards} linkLabel="Discuss this service" />

        <div className="mt-24">
          <SectionHeading
            tag="Supporting capabilities"
            title="Digital delivery and technical support"
            description="These services support campaign execution, digital performance, reporting, and internal systems."
          />
          <ServiceCardGrid services={supportingServiceCards} linkLabel="View service details" />
        </div>
      </div>

      <CTABanner
        tag="Need a clearer recommendation?"
        title="Tell us your goal and we'll recommend the right service mix"
        primaryLabel="Talk to Armedia"
        primaryHref="/contact"
      />
    </>
  )
}

export default ServicesPage