import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'About | Auckland Digital Studio for Strategy, Design & Engineering',
  description:
    'Learn about Armedia, an Auckland digital studio combining strategy, UX/UI design, React, TypeScript, and modern engineering to build fast, trusted digital products.',
  keywords: [
    'about Armedia',
    'Auckland digital studio',
    'digital strategy',
    'React development',
    'TypeScript development',
    'website design agency',
    'technology consulting',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Armedia | Auckland Digital Studio',
    description:
      'Strategy, design, and dependable engineering for websites, web apps, and digital growth systems.',
    url: '/about',
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
