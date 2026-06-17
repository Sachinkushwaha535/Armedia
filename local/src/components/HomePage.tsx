'use client'

import { motion } from 'framer-motion'
import AnimatedTicker from './AnimatedTicker'
import ClientLogosStrip from './ClientLogosStrip'
import DownloadPopup from './DownloadPopup'
import AreasOfExpertise from './home/AreasOfExpertise'
import EngagementsShowcase from './home/EngagementsShowcase'
import FaqSection from './home/FaqSection'
import HomeSearchTopics from './home/HomeSearchTopics'
import IntroStatement from './home/IntroStatement'
import PremiumContact from './home/PremiumContact'
import PremiumHero from './home/PremiumHero'
import ProcessTimeline from './home/ProcessTimeline'
import ResultsShowcase from './home/ResultsShowcase'
import ServicesShowcase from './home/ServicesShowcase'
import StatsBand from './home/StatsBand'
import WhyArmedia from './home/WhyArmedia'
import NewsletterSection from './NewsletterSection'
import TestimonialsCarousel from './TestimonialsCarousel'
import { clients, testimonials } from './siteData'
import { tickerItems } from '../data/homeData'
import TwgSectionHeader from './motion/TwgSectionHeader'
import { testimonialDriftVariants, viewportOnce } from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

function HomePage() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <div className="am-home">
      <PremiumHero />
      <IntroStatement />
      <AnimatedTicker items={tickerItems} />

      <ServicesShowcase />
      <AreasOfExpertise />
      <EngagementsShowcase />
      <ProcessTimeline />
      <StatsBand />
      <ResultsShowcase />

      <section className="am-section am-twg-section am-theme-ink am-section-testimonials" aria-labelledby="testimonials-heading">
        <div className="am-container">
          <TwgSectionHeader
            tag="Testimonials"
            title="What clients say about working with Armedia"
            titleId="testimonials-heading"
            centered
          />
          <motion.div
            className="testimonials-carousel-shell"
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnce}
            variants={testimonialDriftVariants}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TestimonialsCarousel items={testimonials} />
          </motion.div>
        </div>
      </section>

      <ClientLogosStrip clients={clients} />
      <WhyArmedia />
      <NewsletterSection />
      <FaqSection />
      <HomeSearchTopics />
      <PremiumContact />
      <DownloadPopup />
    </div>
  )
}

export default HomePage
