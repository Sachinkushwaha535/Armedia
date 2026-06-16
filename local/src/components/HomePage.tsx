'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import HomeContactSection from './HomeContactSection'
import {
  agencyStats,
  featuredWork,
  processSteps,
  serviceShowcaseSlides,
  testimonials,
} from './siteData'
import { contactEmail, contactPhone, contactPhoneHref } from './siteConfig'
import AnimatedCounter from './ui/AnimatedCounter'
import BackgroundGlow from './ui/BackgroundGlow'
import Button from './ui/Button'
import CTABanner from './ui/CTABanner'
import Marquee from './ui/Marquee'
import ProcessStrip from './ui/ProcessStrip'
import ProjectCard from './ui/ProjectCard'
import SectionHeading from './ui/SectionHeading'
import ServicesShowcase from './ui/ServicesShowcase'
import {
  AnimatedBand,
  AnimatedSection,
  HeroSection,
  RevealLine,
  RevealText,
  Stagger,
  StaggerItem,
} from './ui/motion'

const marqueeItems = [
  'Strategy',
  'Advertising',
  'AI Workflows',
  'Business Intelligence',
  'Digital Media',
  'OOH Media',
  'Performance Marketing',
  'Growth Planning',
]

const heroLines = ['Plan smarter campaigns', 'with AI, BI', 'and connected media strategy']

const faqItems = [
  {
    question: 'What types of clients do you work with?',
    answer:
      'We work with ambitious brands, SMEs, and growth-focused teams that need clearer strategy, stronger execution, and better reporting across media and marketing.',
  },
  {
    question: 'What happens after I enquire?',
    answer:
      'We review your goals, audience, timing, and preferred channels, then respond with the most practical next step, usually a discovery call or project scoping discussion.',
  },
  {
    question: 'Do you offer one-off projects or ongoing support?',
    answer:
      'Both. We can help with a focused campaign, a launch plan, or ongoing strategy, media, reporting, and optimisation support.',
  },
  {
    question: 'Can you help with both digital and offline media?',
    answer:
      'Yes. Armedia supports digital campaigns, landing pages, reporting, and advertising as well as OOH, print, and wider offline media planning.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We align each campaign to commercial outcomes such as awareness, enquiries, lead quality, sales, recall, or clearer reporting for decision-making.',
  },
]

function WordMarquee() {
  const reducedMotion = useReducedMotion()
  const words = ['ideas', 'around', 'growth', 'around']

  if (reducedMotion) {
    return (
      <p className="text-center text-2xl font-semibold uppercase text-white/20">
        Ideas around growth
      </p>
    )
  }

  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex w-max gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`text-5xl font-semibold uppercase tracking-tight sm:text-6xl lg:text-7xl ${
              word === 'around' || word === 'growth' ? 'text-accent' : 'text-white/10'
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function HomePage() {
  const reducedMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="relative overflow-hidden">
      <BackgroundGlow />

      {/* Hero — opens on page load, text reveals line by line */}
      <HeroSection
        className="relative px-5 pb-8 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-12"
        aria-labelledby="home-hero-title"
      >
        <div className="container-agency">
          <div className="max-w-5xl">
            <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <RevealLine delay={0.35} />
              <RevealText delay={0.4}>Auckland &amp; New Zealand</RevealText>
            </p>

            <h1 id="home-hero-title" className="heading-display">
              {heroLines.map((line, i) => (
                <RevealText
                  key={line}
                  className={i === 1 ? 'text-gradient-accent' : 'text-gradient'}
                  delay={0.45 + i * 0.14}
                >
                  {line}
                </RevealText>
              ))}
            </h1>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-body mt-8 max-w-2xl overflow-hidden"
            >
              <RevealText as="p" delay={1.15}>
                Armedia helps ambitious brands turn marketing activity into a connected growth system:
                sharper positioning, better media planning, stronger creative, cleaner reporting, and
                campaigns that are easier to measure and improve.
              </RevealText>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
                <Button href="/contact">Book a growth consultation</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
            </motion.div>
          </div>
        </div>
      </HeroSection>

      <AnimatedBand>
        <ProcessStrip steps={processSteps.map((s) => s.title)} />
      </AnimatedBand>
      <AnimatedBand>
        <Marquee items={marqueeItems} />
      </AnimatedBand>

      {/* About */}
      <AnimatedSection className="section-pad bg-surface" aria-labelledby="about-heading">
        <div className="container-agency">
          <Stagger className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              embedded
              tag="About Armedia"
              title="A forward-thinking marketing media agency for growth-focused brands"
              description="Instead of scattered tasks and disconnected vendors, Armedia gives you a strategic partner that can shape the plan, build the assets, launch the campaign, and make the results easier to understand."
            />
            <StaggerItem>
              <Stagger className="grid gap-4 sm:grid-cols-2" fast>
              {[
                { label: 'Strategy', desc: 'Clear plans before budget goes live' },
                { label: 'Media', desc: 'Digital, OOH, and offline in one system' },
                { label: 'Intelligence', desc: 'AI workflows and BI dashboards' },
                { label: 'Results', desc: 'Measured improvement after launch' },
              ].map((item) => (
                <StaggerItem key={item.label} variant="scaleUp">
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/30 hover:bg-white/[0.05]">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {item.label}
                    </span>
                    <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                  </article>
                </StaggerItem>
              ))}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      {/* How we help */}
      <AnimatedSection className="section-pad" aria-labelledby="help-heading">
        <div className="container-agency">
          <Stagger>
            <SectionHeading
              embedded
              tag="How we help"
              title="Marketing and media your business can count on"
              description="From AI workflows and BI dashboards to advertising, SEO, OOH, and growth strategy — every service is designed to improve visibility, lead quality, and reporting clarity."
              align="center"
            />
            <StaggerItem variant="scaleUp">
              <ServicesShowcase services={serviceShowcaseSlides} />
            </StaggerItem>
            <StaggerItem>
              <div className="mt-12 text-center">
                <Button href="/services" variant="secondary">
                  View all services
                </Button>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      <AnimatedBand>
        <div className="border-y border-white/[0.06] bg-elevated">
          <div className="container-agency section-pad !py-12">
            <WordMarquee />
          </div>
        </div>
      </AnimatedBand>

      {/* Featured work */}
      <AnimatedSection className="section-pad" aria-labelledby="work-heading">
        <div className="container-agency">
          <Stagger>
            <SectionHeading
              embedded
              tag="Featured engagements"
              title="Example campaign systems built for clarity and performance"
              description="These example engagement models show how creative, media, technology, and reporting can work together in one scoped campaign plan."
            />
            <StaggerItem>
              <Stagger className="grid gap-6 lg:grid-cols-2">
            {featuredWork.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={{
                  title: project.title,
                  description: project.description,
                  tags: project.tags,
                  index: i + 1,
                  gradient: project.gradient,
                  href: project.href,
                }}
              />
            ))}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="section-pad bg-surface" aria-labelledby="proc-heading">
        <div className="container-agency">
          <Stagger>
            <SectionHeading
              embedded
              tag="Our process"
              title="A clear path from idea to measurable campaign"
              description="Every step from diagnosis to improvement is transparent, practical, and tied to the commercial result your campaign must support."
              align="center"
            />
            <StaggerItem>
              <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <StaggerItem key={step.step} variant="scaleUp">
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-accent/30 hover:bg-white/[0.04]">
                  <span className="text-4xl font-light text-white/15">{step.step}</span>
                  <h3 className="mt-4 text-base font-semibold capitalize text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </article>
              </StaggerItem>
            ))}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="section-pad" aria-labelledby="stats-heading">
        <div className="container-agency">
          <Stagger>
            <SectionHeading embedded tag="Why Armedia" title="Built for clarity, trust, and momentum" align="center" />
            <StaggerItem>
              <Stagger className="grid gap-8 md:grid-cols-3">
            {agencyStats.map((stat) => (
              <StaggerItem key={stat.label} variant="scaleUp">
                <article className="text-center">
                  <p className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">{stat.label}</p>
                </article>
              </StaggerItem>
            ))}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="section-pad bg-surface" aria-labelledby="testimonials-heading">
        <div className="container-agency">
          <Stagger>
            <SectionHeading
              embedded
              tag="Client proof"
              title="What partners can expect from working with Armedia"
              align="center"
            />
            <StaggerItem>
              <Stagger className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <StaggerItem key={item.name} variant="scaleUp">
                <blockquote className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-lg leading-relaxed text-zinc-300">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-6 border-t border-white/[0.06] pt-6">
                    <strong className="block text-sm text-white">{item.name}</strong>
                    <span className="text-xs text-zinc-500">{item.role}</span>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      <CTABanner
        tag="Ready to grow?"
        title="Turn your next campaign into a connected growth system"
        description="Share your goal and we will recommend the right mix of strategy, media, AI, BI, and execution support."
        primaryLabel="Book a consultation"
        secondaryLabel="Start your project brief"
      />

      {/* FAQ */}
      <AnimatedSection className="section-pad bg-surface" aria-labelledby="faq-heading">
        <div className="container-agency max-w-3xl">
          <Stagger>
            <SectionHeading embedded tag="FAQ" title="Frequently asked questions" align="center" />
            <StaggerItem>
              <Stagger className="space-y-3" fast>
            {faqItems.map((item, index) => (
              <StaggerItem key={item.question}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/15">
                  <button
                    className="flex w-full items-start gap-4 p-5 text-left"
                    type="button"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span className="text-sm font-light text-zinc-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-sm font-medium text-white">{item.question}</span>
                    <motion.span animate={{ rotate: openFaq === index ? 45 : 0 }} className="text-accent">
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-14 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection className="section-pad" aria-labelledby="home-contact-heading">
        <div className="container-agency">
          <Stagger>
            <SectionHeading
              embedded
              tag="Contact"
              title="Let us shape your next growth campaign"
              description="Share your business goal, target audience, budget range, and preferred channels."
              align="center"
            />
            <StaggerItem>
              <Stagger className="grid gap-6 lg:grid-cols-5">
            <StaggerItem variant="scaleUp" className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <Stagger className="mb-8 grid gap-4 sm:grid-cols-3" fast>
                  {[
                    { label: 'Email', title: 'Email the studio', content: contactEmail, href: `mailto:${contactEmail}` },
                    {
                      label: 'Call',
                      title: contactPhone ? 'Call the studio' : 'Request a call back',
                      content: contactPhone ?? 'Share your number and we will respond.',
                      href: contactPhoneHref,
                    },
                    {
                      label: 'Plan',
                      title: 'Get a campaign plan',
                      content: 'Strategy, creative, media, tracking, reporting, and improvement.',
                    },
                  ].map((method) => (
                    <StaggerItem key={method.label}>
                      <article className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                          {method.label}
                        </span>
                        <strong className="mt-2 block text-sm text-white">{method.title}</strong>
                        {method.href ? (
                          <a className="link-underline mt-1 block text-sm text-accent" href={method.href}>
                            {method.content}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-zinc-500">{method.content}</p>
                        )}
                      </article>
                    </StaggerItem>
                  ))}
                </Stagger>
                <HomeContactSection />
              </div>
            </StaggerItem>
            <StaggerItem variant="scaleUp" className="lg:col-span-2">
              <aside className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  What you can expect
                </span>
                <div className="mt-6 space-y-4">
                  {agencyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-4 border-b border-white/[0.06] pb-4 last:border-0"
                    >
                      <strong className="text-2xl font-light text-accent">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </strong>
                      <span className="text-sm text-zinc-400">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                  We keep the conversation clear: what should be prioritised, which channels make sense,
                  what assets are needed, and how performance will be reviewed after launch.
                </p>
                <strong className="mt-6 block text-sm text-zinc-300">Armedia Growth Strategy Team</strong>
              </aside>
            </StaggerItem>
          </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default HomePage
