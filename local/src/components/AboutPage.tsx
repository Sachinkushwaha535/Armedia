import PageShell from './PageShell'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'
import { FadeIn, Stagger, StaggerItem } from './ui/motion'

const agencyPillars = [
  {
    title: 'Strategy before spending',
    body: 'We clarify the audience, offer, message, media mix, funnel, and measurement plan before campaign execution begins.',
  },
  {
    title: 'Media across channels',
    body: 'Digital media, OOH, offline activations, content, PR, social, CRM, and advertising are planned as one connected growth system.',
  },
  {
    title: 'AI and intelligence layer',
    body: 'AI workflows and BI dashboards help teams move faster, review performance clearly, and find the next best action.',
  },
]

const capabilities = [
  {
    title: 'AI marketing tools and automation',
    body: 'Practical workflows for campaign summaries, content planning, lead qualification, support prompts, and weekly reporting.',
  },
  {
    title: 'Business intelligence and campaign dashboards',
    body: 'Dashboards and review rhythms that help teams see channel performance, lead quality, spend, and next actions clearly.',
  },
  {
    title: 'Performance advertising and media buying',
    body: 'Paid search, paid social, retargeting, placement planning, creative testing, and conversion tracking shaped around business goals.',
  },
  {
    title: 'Digital, OOH, offline, PR, event, and retail marketing',
    body: 'Connected campaign planning across online reach, physical visibility, launch activity, retail moments, and local awareness.',
  },
  {
    title: 'Web development, mobile apps, SEO, e-commerce, and software support',
    body: 'Campaign-ready digital foundations: fast pages, forms, analytics, integrations, search structure, and customer journeys.',
  },
]

const team = [
  {
    initials: 'ST',
    name: 'Strategy Lead',
    role: 'Brand direction, campaign planning, and media roadmap',
    skills: ['Positioning', 'Media mix', 'Funnel', 'Growth'],
  },
  {
    initials: 'CR',
    name: 'Creative Lead',
    role: 'Campaign ideas, content direction, ad creative, and brand systems',
    skills: ['Creative', 'Content', 'Ads', 'Brand'],
  },
  {
    initials: 'BI',
    name: 'Intelligence Lead',
    role: 'AI workflows, reporting, dashboards, tracking, and optimisation',
    skills: ['AI', 'BI', 'Analytics', 'Automation'],
  },
]

const proofAreas = [
  {
    title: 'Campaign portfolio',
    body: 'Prospects can review example systems for media plans, ad creative, landing page concepts, dashboards, and launch structures.',
  },
  {
    title: 'Verification policy',
    body: 'Named logos, testimonials, screenshots, and performance numbers are used only when they are accurate and approved.',
  },
  {
    title: 'Performance reviews',
    body: 'Every campaign should connect to reporting so awareness, enquiries, leads, conversion, and recall can be reviewed.',
  },
]

function AboutPage() {
  return (
    <PageShell
      kicker="About Armedia"
      title="A marketing media agency built for smarter growth."
      description="Armedia brings strategy, media planning, AI tools, business intelligence, advertising, creative direction, and campaign-supporting technology into one clear agency system."
      actions={<Button href="/contact">Book a strategy call</Button>}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Agency positioning</p>
            <div className="mt-6 flex gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-lg font-bold text-accent"
                aria-label="Armedia agency mark"
              >
                AR
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Media, intelligence, creative, and technology working together.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Armedia is shaped for brands that need more than isolated ads or one-off creatives. We help plan
                  the right campaign system, choose the right media, create clearer messages, connect reporting, and
                  improve execution over time.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['AI', 'BI', 'Advertising', 'OOH', 'Offline', 'Digital'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we believe</p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Good media work starts with clarity, then becomes measurable.
            </h3>
            <div className="mt-6 space-y-5">
              {agencyPillars.map((item, index) => (
                <div key={item.title} className="flex gap-4 border-b border-white/[0.06] pb-5 last:border-0">
                  <div className="flex-1">
                    <strong className="text-sm text-white">{item.title}</strong>
                    <p className="mt-1 text-sm text-zinc-500">{item.body}</p>
                  </div>
                  <span className="text-sm font-light text-zinc-600">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { num: '18', label: 'Service capabilities' },
          { num: '6', label: 'Core growth channels' },
          { num: 'AI', label: 'Workflow-ready thinking' },
          { num: 'BI', label: 'Reporting-led decisions' },
        ].map((stat) => (
          <FadeIn key={stat.label}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <strong className="text-3xl font-semibold text-accent">{stat.num}</strong>
              <span className="mt-2 block text-xs text-zinc-500">{stat.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading tag="Capabilities" title="Built for brands that need planning, execution, and measurement" />
        <Stagger className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <StaggerItem key={item.title}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/30">
                <span className="text-xs text-zinc-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-20">
        <SectionHeading
          tag="Team model"
          title="Senior roles around strategy, creative, and intelligence"
          description="The team structure reflects the core roles clients engage for campaign planning, creative execution, and performance analysis."
        />
        <Stagger className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-500">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-20">
        <SectionHeading tag="Proof system" title="Professional trust areas focused on evidence" />
        <Stagger className="grid gap-4 md:grid-cols-3">
          {proofAreas.map((signal) => (
            <StaggerItem key={signal.title}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-white">{signal.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{signal.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </PageShell>
  )
}

export default AboutPage
