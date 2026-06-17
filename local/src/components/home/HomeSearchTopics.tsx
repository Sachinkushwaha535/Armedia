import Link from 'next/link'
import { homeSearchTopics } from '../../lib/homeSeo'

function HomeSearchTopics() {
  return (
    <section
      className="am-section am-twg-section am-theme-paper am-home-seo-topics"
      aria-labelledby="home-topics-heading"
    >
      <div className="am-container">
        <p className="am-home-seo-kicker">Explore Armedia</p>
        <h2 id="home-topics-heading" className="am-home-seo-title">
          Popular services and resources
        </h2>
        <p className="am-home-seo-lead">
          Browse the areas clients ask about most — from strategy and paid media to AI workflows,
          reporting, SEO, and campaign planning resources.
        </p>
        <ul className="am-home-seo-tags">
          {homeSearchTopics.map((topic) => (
            <li key={topic.label}>
              <Link href={topic.href}>{topic.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HomeSearchTopics
