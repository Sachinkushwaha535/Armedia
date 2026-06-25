'use client'

import { useState } from 'react'
import AboutSectionHeading from './AboutSectionHeading'
import type { whoWeAreFaq } from '../data/whoWeAreContent'

type FaqItem = (typeof whoWeAreFaq.items)[number]

type WhoWeAreFaqProps = {
  label: string
  title: string
  items: readonly FaqItem[]
}

function WhoWeAreFaq({ label, title, items }: WhoWeAreFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="about-faq armedia-section-dark border-t border-white/10">
      <div className="armedia-container py-16 lg:py-20">
        <AboutSectionHeading label={label} title={title} />

        <div className="about-faq-list about-section-below">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article
                key={item.question}
                className={['about-faq-row', index % 2 === 1 ? 'about-faq-row--alt' : ''].join(' ')}
              >
                <button
                  type="button"
                  className="about-faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="about-faq-question">{item.question}</span>
                  <span className="about-faq-toggle" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={[
                    'about-faq-answer-wrap overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
                  ].join(' ')}
                >
                  <p className="about-faq-answer">{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreFaq
