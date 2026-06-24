import { whatWeDo } from '../../data/homeContent'

function WhatWeDoSection() {
  return (
    <section className="armedia-section-light border-t border-black/10">
      <div className="armedia-container py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="armedia-eyebrow text-black/50">{whatWeDo.kicker}</p>
          <h2 className="armedia-heading mt-4 text-black">
            Web, media, sales systems, and operations —{' '}
            <span className="font-display italic text-brand-gold">connected in one business system.</span>
          </h2>
          <p className="armedia-lead mt-5 text-black/70">{whatWeDo.subline}</p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
