import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

export const metadata: Metadata = {
  title: 'Web Design, React, SEO & AI Solutions in Auckland',
  description:
    'Armedia helps Auckland and New Zealand businesses grow with premium web design, React and Next.js development, SEO-ready landing pages, e-commerce, API integrations, automation, and AI solutions.',
  keywords: [
    'Web Design Auckland',
    'React Development NZ',
    'Next.js Agency NZ',
    'premium web design Auckland',
    'Auckland SEO services',
    'ecommerce website Auckland',
    'API integration Auckland',
    'AI solutions New Zealand',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Design, React, SEO & AI Solutions in Auckland',
    description:
      'Fast websites, scalable web apps, SEO-ready landing pages, e-commerce, API workflows, and AI-enabled systems for measurable digital growth.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design, React, SEO & AI Solutions in Auckland',
    description:
      'Armedia builds websites, web apps, SEO-ready pages, e-commerce, API integrations, automation, and AI solutions for growing businesses.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-home">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
