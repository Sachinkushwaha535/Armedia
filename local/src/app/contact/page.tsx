import type { Metadata } from 'next'
import ContactPage from '../../components/ContactPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Contact | Start a Marketing Media Project',
  description:
    'Contact Armedia to discuss AI marketing tools, business intelligence, advertising, digital media, OOH media, offline marketing, or growth strategy.',
  keywords: [
    'contact Armedia',
    'marketing media agency contact',
    'advertising agency inquiry',
    'AI marketing project',
    'business intelligence project',
    'OOH media planning',
    'offline marketing campaign',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Armedia | Start a Marketing Media Project',
    description:
      'Share your campaign goal and get practical next steps for AI, BI, advertising, digital media, OOH, offline marketing, or strategy.',
    url: '/contact',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-contact">
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}
