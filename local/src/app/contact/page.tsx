import type { Metadata } from 'next'
import ContactPage from '../../components/ContactPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Contact | Start a Web, AI, Data or IT Project',
  description:
    'Contact Armedia in Auckland to discuss web development, AI solutions, data analytics, cybersecurity, mobile app development, UX/UI design, or IT consulting projects.',
  keywords: [
    'contact Armedia',
    'hire web developer Auckland',
    'AI development company',
    'IT consulting contact',
    'website project inquiry',
    'digital agency Auckland',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Armedia | Start a Digital Project',
    description:
      'Tell Armedia about your website, AI, data, cybersecurity, mobile app, UX/UI, or IT consulting project.',
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
