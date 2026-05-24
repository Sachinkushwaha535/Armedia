import type { Metadata } from 'next'
import ContactPage from '../../components/ContactPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Contact | Start a Website, AI or Digital Growth Project',
  description:
    'Contact Armedia in Auckland to discuss websites, React and Next.js development, SEO, e-commerce, AI solutions, automation, data, cybersecurity, mobile apps, UX/UI, or IT consulting.',
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
    title: 'Contact Armedia | Start a Website, AI or Digital Growth Project',
    description:
      'Share your goal and get practical next steps for a website, app, AI workflow, automation, SEO, or technical project.',
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
