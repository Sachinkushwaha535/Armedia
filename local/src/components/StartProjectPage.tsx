import PageShell from './PageShell'
import CTABanner from './ui/CTABanner'
import SectionHeading from './ui/SectionHeading'
import { FadeIn, Stagger, StaggerItem } from './ui/motion'

const projectTypes = [
  'AI Marketing Studio',
  'Business Intelligence',
  'Advertising',
  'Digital Media',
  'OOH / Offline Media',
  'Content & Creative',
  'Web / App Development',
  'Full Growth Strategy',
]

const intakeSteps = [
  {
    num: '01',
    title: 'Tell us the outcome',
    description:
      'Share what you want: leads, awareness, brand recall, launch support, campaign reporting, automation, or sales growth.',
  },
  {
    num: '02',
    title: 'Choose the right mix',
    description:
      'We map the best combination of AI, BI, advertising, digital media, OOH, offline, content, CRM, and technology.',
  },
  {
    num: '03',
    title: 'Get a clear next step',
    description:
      'You receive a focused recommendation for scope, timeline, starting priorities, and what information is needed next.',
  },
]

const briefPrompts = [
  'What product, service, or brand do you want to promote?',
  'Who is the target audience and location?',
  'Which channels are you considering: ads, social, OOH, offline, events, email, web, app, or AI?',
  'What is the timeline and approximate budget range?',
  'What does success mean: leads, calls, sales, awareness, footfall, downloads, or reporting clarity?',
]

function StartProjectPage() {
  return (
    <>
      <PageShell
        kicker="Start a project"
        title="Build a sharper brief for your next campaign."
        description="Use this page to prepare a professional project inquiry for marketing media, AI, BI, advertising, OOH, offline campaigns, content, web, app, or growth strategy work."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <FadeIn>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project builder</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Pick your service direction.</h2>
                <p className="mt-3 text-sm text-zinc-400">
                  You do not need a perfect brief. Select the areas that feel relevant, then send us your goal and we
                  will help shape the right scope.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <Stagger className="mt-6 grid gap-4 sm:grid-cols-3">
              {intakeSteps.map((step) => (
                <StaggerItem key={step.title}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <span className="text-xs font-semibold text-accent">{step.num}</span>
                    <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500">{step.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <FadeIn delay={0.1}>
            <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <SectionHeading tag="Brief checklist" title="Answer these before you contact us" />
              <div className="space-y-5">
                {briefPrompts.map((question, index) => (
                  <div key={question} className="flex gap-4 border-b border-white/[0.06] pb-5">
                    <div className="flex-1">
                      <strong className="text-sm text-white">{question}</strong>
                      <p className="mt-1 text-xs text-zinc-500">Short answers are enough. The first call can fill the gaps.</p>
                    </div>
                    <span className="text-sm text-zinc-600">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
            </aside>
          </FadeIn>
        </div>
      </PageShell>

      <CTABanner
        tag="Ready to move?"
        title="Send your project details and get a clearer action plan"
        description="Tell us your campaign goal, preferred channels, target audience, timeline, and budget range."
        primaryLabel="Send project details"
        primaryHref="/contact"
        secondaryLabel="Explore all services"
        secondaryHref="/services"
      />
    </>
  )
}

export default StartProjectPage
