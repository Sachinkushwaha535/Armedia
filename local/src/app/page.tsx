import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

const faqItems = [
  {
    question: 'What services does Armedia offer?',
    answer:
      'Armedia provides AI marketing workflows, business intelligence dashboards, advertising, digital media, OOH and offline media, SEO, landing pages, web development, CRM, content, and growth strategy.',
  },
  {
    question: 'How does Armedia improve marketing performance?',
    answer:
      'Armedia improves performance by clarifying the offer, choosing the right channel mix, tightening creative, setting up measurement, and optimising campaigns around lead quality and commercial outcomes.',
  },
  {
    question: 'Does Armedia work with growing businesses?',
    answer:
      'Yes. Armedia works with local businesses, startups, retail brands, service companies, and growth-focused teams across New Zealand and nearby markets.',
  },
  {
    question: 'What makes Armedia different?',
    answer:
      'Armedia connects media planning, creative direction, AI workflows, BI dashboards, performance advertising, offline visibility, and technology support in one growth system.',
  },
  {
    question: 'How quickly can we start?',
    answer:
      'Most projects begin with a focused discovery conversation, then a clear action plan covering priority channels, timeline, budget range, and the assets needed to launch.',
  },
]

export const metadata: Metadata = {
  title: 'Premium AI, BI, Advertising & Marketing Media Agency',
  description:
    'Armedia is a New Zealand marketing media agency helping ambitious brands plan growth campaigns across AI marketing workflows, business intelligence, advertising, SEO, digital media, OOH, offline media, and strategy.',
  keywords: [
    'marketing media agency',
    'AI marketing agency New Zealand',
    'business intelligence dashboard agency Auckland',
    'OOH advertising New Zealand',
    'integrated marketing agency NZ',
    'advertising agency Auckland',
    'AI marketing tools',
    'business intelligence',
    'advertising agency',
    'digital media',
    'OOH media',
    'offline marketing',
    'growth strategy',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Premium AI, BI, Advertising & Marketing Media Agency',
    description:
      'Strategy, media planning, creative direction, AI workflows, BI dashboards, advertising, SEO, OOH, and offline media in one connected growth system.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium AI, BI, Advertising & Marketing Media Agency',
    description:
      'Armedia plans modern growth campaigns across AI, BI, advertising, SEO, digital media, OOH, and offline channels.',
  },
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
    <div className="site-shell page-home">
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
