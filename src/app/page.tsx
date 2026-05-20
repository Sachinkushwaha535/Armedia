import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

export const metadata: Metadata = {
  title: 'Premium Web Design & React Development Studio in Auckland',
  description:
    'Armedia builds premium web design, React development, Next.js websites, SEO-ready landing pages, e-commerce, API integrations, and AI solutions in Auckland, NZ.',
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
    title: 'Premium Web Design & React Development Studio in Auckland',
    description:
      'Next.js websites, React web apps, SEO-ready pages, e-commerce, API integrations, and AI solutions for Auckland and New Zealand businesses.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Web Design & React Development Studio in Auckland',
    description:
      'Armedia builds premium web design, React development, Next.js websites, SEO, e-commerce, API integrations, and AI solutions in Auckland.',
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
