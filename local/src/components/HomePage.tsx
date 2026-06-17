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
import TrustSection from './home/TrustSection'
import WhyArmedia from './home/WhyArmedia'
import NewsletterSection from './NewsletterSection'
import { industries } from './siteData'
import { tickerItems } from '../data/homeData'

function HomePage() {
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
      <TrustSection />
      <ClientLogosStrip clients={industries} />
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
