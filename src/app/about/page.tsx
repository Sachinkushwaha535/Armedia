import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'About Armedia | Founder-Led Auckland Web Design & React Studio',
  description:
    'Learn about Armedia, a founder-led Auckland digital studio for premium web design, React development, Next.js websites, SEO, API integrations, and AI workflows.',
  keywords: [
    'about Armedia',
    'founder led Auckland digital studio',
    'Auckland digital studio',
    'web design Auckland team',
    'digital strategy',
    'React development',
    'Next.js development',
    'TypeScript development',
    'website design agency',
    'technology consulting',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Armedia | Founder-Led Auckland Digital Studio',
    description:
      'Founder-led strategy, design, React development, SEO, integrations, and AI workflow thinking for websites and digital growth systems.',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Armedia | Founder-Led Auckland Digital Studio',
    description:
      'Premium web design, React development, Next.js delivery, SEO, API integrations, and AI workflows from Auckland.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-about">
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
