import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
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
