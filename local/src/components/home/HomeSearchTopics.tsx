import Link from 'next/link'
import { homeSearchTopics } from '../../lib/homeSeo'

function HomeSearchTopics() {
  return (
    <section
      className="am-section am-twg-section am-theme-paper am-home-seo-topics"
      aria-labelledby="home-topics-heading"
    >
      <div className="am-container">
        <p className="am-home-seo-kicker">New Zealand marketing media agency</p>
        <h2 id="home-topics-heading" className="am-home-seo-title">
          Strategy, advertising, AI, BI, SEO, web, and media planning in Auckland &amp; across NZ
        </h2>
        <p className="am-home-seo-lead">
          Armedia is a marketing media agency based in Auckland, supporting growth-focused brands
          across New Zealand with integrated strategy, performance advertising, Google Ads, Meta ads,
          SEO, digital media, OOH, offline marketing, AI workflows, BI reporting, web design, and
          campaign analytics — so every channel works toward clearer leads, stronger recall, and
          measurable growth.
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
