'use client'

import { motion } from 'framer-motion'
import HomeContactSection from '../HomeContactSection'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import { contactEmail, contactPhone, contactPhoneHref } from '../siteConfig'
import {
  contactGlowVariants,
  contactPanelVariants,
  slowTransition,
  softTransition,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function PremiumContact() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <section className="am-section am-twg-section am-theme-slate am-section-contact" aria-labelledby="home-contact-heading">
      <motion.div
        className="am-contact-bg"
        aria-hidden="true"
        initial={shouldAnimate ? 'hidden' : false}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={viewportOnce}
        variants={contactGlowVariants}
        transition={slowTransition}
      />
      <div className="am-container">
        <TwgSectionHeader
          tag="Contact"
          title="Let us shape your next growth campaign"
          titleId="home-contact-heading"
          description="Share your business goal, audience, budget range, and preferred channels. We will translate it into a practical plan for strategy, media, creative, AI, BI, and measurable execution."
          centered
        />

        <div className="am-contact-layout">
          <motion.div
            className="am-contact-main am-glass"
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnce}
            variants={contactPanelVariants}
            transition={{ ...softTransition, delay: 0.18 }}
          >
            <div className="am-contact-methods">
              <article>
                <span>Email</span>
                <strong>Email the studio</strong>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </article>
              <article>
                <span>Call</span>
                <strong>{contactPhone ? 'Call the studio' : 'Request a call back'}</strong>
                {contactPhone && contactPhoneHref ? (
                  <a href={contactPhoneHref}>{contactPhone}</a>
                ) : (
                  <p>Share your number and we will respond with the right next step.</p>
                )}
              </article>
              <article>
                <span>Plan</span>
                <strong>Get a campaign plan</strong>
                <p>Strategy, creative, media, tracking, reporting, and improvement.</p>
              </article>
            </div>
            <HomeContactSection />
          </motion.div>

          <motion.aside
            className="am-contact-aside am-glass"
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnce}
            variants={contactPanelVariants}
            transition={{ ...softTransition, delay: 0.32 }}
          >
            <p className="am-kicker">What you can expect</p>
            <div className="am-aside-stats">
              <span><strong>1</strong>Focused discovery response</span>
              <span><strong>6</strong>Integrated growth pillars</span>
              <span><strong>5</strong>Step campaign process</span>
              <span><strong>24h</strong>Business-day reply target</span>
            </div>
            <p>
              We keep the conversation clear: what should be prioritised, which channels make
              sense, what assets are needed, and how performance will be reviewed after launch.
            </p>
            <strong>Armedia Growth Strategy Team</strong>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default PremiumContact
