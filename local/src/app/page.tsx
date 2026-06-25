import type { Metadata } from 'next'
import HomeSite from '../components/HomeSite'
import {
  buildSocialMetadata,
  defaultOgTitle,
  defaultTwitterTitle,
  pageDescriptions,
} from '../data/siteMetadata'
import { homepageKeywords } from '../data/siteKeywords'

const faqItems = [
  {
    question: 'What does Armedia do?',
    answer:
      'Armedia helps brands plan and improve campaigns through strategy, advertising, media planning, AI workflows, business intelligence, and performance reporting.',
  },
  {
    question: 'Who is Armedia best suited for?',
    answer:
      'Armedia works best for businesses that want clearer positioning, better campaign structure, stronger measurement, and more joined-up execution across channels.',
  },
  {
    question: 'How does Armedia improve marketing performance?',
    answer:
      'Armedia improves performance by clarifying the offer, selecting the right channel mix, strengthening creative direction, improving measurement, and refining campaigns around business outcomes.',
  },
  {
    question: 'Does Armedia only work on digital campaigns?',
    answer:
      'No. Armedia supports digital media, advertising, landing pages, reporting, and strategy, while also planning OOH, offline media, and broader campaign systems where needed.',
  },
  {
    question: 'How do projects usually begin?',
    answer:
      'Most projects start with a discovery conversation followed by a practical action plan covering goals, priorities, channels, timing, and the next steps to launch.',
  },
]

export const metadata: Metadata = {
  title: {
    absolute: 'Web Development & Media Agency Auckland | End-to-End Business Growth — Armedia',
  },
  description: pageDescriptions.home,
  keywords: [...homepageKeywords],
  alternates: {
    canonical: '/',
  },
  ...buildSocialMetadata({
    description: pageDescriptions.home,
    path: '/',
    openGraphTitle: defaultOgTitle,
    twitterTitle: defaultTwitterTitle,
  }),
}

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <main id="main-content" className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeSite />
    </main>
  )
}
