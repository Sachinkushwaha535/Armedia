import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const posts = [
  {
    title: 'How Auckland businesses can improve website trust in 2026',
    href: '/blog/website-trust-auckland-2026',
    description: 'Practical trust signals for service websites: speed, clarity, proof, contact details, and stronger service pages.',
  },
  {
    title: 'Where AI workflows help small service teams first',
    href: '/blog/ai-workflows-service-teams',
    description: 'A simple guide to using AI for intake summaries, lead qualification, follow-up, reporting, and internal admin.',
  },
]

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Armedia articles on web design, React, Next.js, AI workflows, SEO, and digital systems for New Zealand businesses.',
  alternates: { canonical: '/blog' },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="page-shell section">
          <div className="section-heading">
            <p className="eyebrow">Blog</p>
            <h1 className="page-title">Digital strategy, web performance, and AI workflow notes.</h1>
            <p>Starter SEO articles for the authority content plan. Add new posts regularly as real insights and project learnings become available.</p>
          </div>

          <div className="studio-grid">
            {posts.map((post) => (
              <article className="studio-card" key={post.href}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link className="text-link" href={post.href}>Read article</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
