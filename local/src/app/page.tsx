import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

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
  title: 'Marketing Media Agency for Strategy, Advertising, AI & BI',
  description:
    'Armedia helps New Zealand brands grow through strategy, advertising, AI workflows, business intelligence, media planning and reporting.',
  keywords: [
    'marketing media agency New Zealand',
    'advertising agency Auckland',
    'AI marketing agency New Zealand',
    'business intelligence agency Auckland',
    'media planning agency NZ',
    'growth strategy agency',
    'campaign reporting agency',
    'OOH advertising New Zealand',
    'SEO agency Auckland',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Armedia | Marketing Media Agency for Strategy, Advertising, AI & BI',
    description:
      'Strategy, media planning, AI workflows, BI dashboards, advertising, and campaign reporting for growth-focused brands in New Zealand.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | Strategy, Advertising, AI & BI',
    description:
      'New Zealand marketing media agency for strategy, media planning, AI workflows, BI dashboards, advertising, and campaign reporting.',
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
    <div className="relative min-h-screen">
      <Header />
      <main id="main-content" className="relative">
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