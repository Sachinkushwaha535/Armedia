'use client'

import { useCallback, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { portfolioItems } from '../data/homeContent'
import DownloadGuideSection from './twg/DownloadGuideSection'
import FeaturedProjectsList from './twg/FeaturedProjectsList'
import HelpCarousel from './twg/HelpCarousel'
import ProcessSection from './twg/ProcessSection'
import ServicesStickySection from './twg/ServicesStickySection'
import StatisticsSection from './twg/StatisticsSection'
import TrustSection from './twg/TrustSection'
import TWGFooter from './twg/TWGFooter'
import TWGHeroSection from './twg/TWGHeroSection'
import TWGPreloader from './twg/TWGPreloader'

function HomeSite() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [entering, setEntering] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('armedia-visited') === '1') {
      setShowPreloader(false)
      setEntering(true)
    }
  }, [])

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem('armedia-visited', '1')
    setShowPreloader(false)
    requestAnimationFrame(() => setEntering(true))
  }, [])

  return (
    <>
      {showPreloader ? <TWGPreloader onComplete={handlePreloaderComplete} /> : null}

      <div className={entering ? 'twg-site-enter' : showPreloader ? 'twg-site-hidden' : ''}>
        <Navbar />
        <TWGHeroSection />
        <HelpCarousel />
        <FeaturedProjectsList items={portfolioItems} />
        <ProcessSection />
        <StatisticsSection />
        <TrustSection />
        <ServicesStickySection />
        <DownloadGuideSection />
        <TWGFooter />
      </div>
    </>
  )
}

export default HomeSite
