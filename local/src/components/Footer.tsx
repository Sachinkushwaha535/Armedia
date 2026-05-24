'use client'

import Link from 'next/link'
import ArmediaLogo from './ArmediaLogo'

const footerGroups = [
  {
    title: 'Studio',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Marketing Studio', href: '/services#ai-marketing-studio' },
      { label: 'Business Intelligence', href: '/services#business-intelligence' },
      { label: 'Advertising', href: '/services#advertising' },
      { label: 'Digital Media', href: '/services#digital-media' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'OOH media', href: '/services#ooh-offline-media' },
      { label: 'Media buying', href: '/services#media-buying-planning' },
      { label: 'Content production', href: '/services#content-creative-production' },
      { label: 'Influencer marketing', href: '/services#social-influencer-marketing' },
    ],
  },
  {
    title: 'Start',
    links: [
      { label: 'Start a project', href: '/start-project' },
      { label: 'Email us', href: 'mailto:contact.armedianz@gmail.com' },
      { label: 'Web development', href: '/services#web-development' },
      { label: 'Android & iOS', href: '/services#android-ios-development' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-panel">
          <Link className="footer-logo" href="/" aria-label="Armedia home">
            <ArmediaLogo className="footer-logo-svg" title="Armedia logo" />
          </Link>
        </div>

        <div className="footer-top">
          {footerGroups.map((group) => (
            <div className="footer-col" key={group.title}>
              <span className="footer-col-title">{group.title}</span>
              <div className="footer-links">
                {group.links.map((link) => (
                  link.href.startsWith('mailto:') ? (
                    <a href={link.href} key={link.label}>{link.label}</a>
                  ) : (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            &copy; 2026 Armedia. Marketing media agency for AI, BI, advertising, digital media, OOH,
            offline marketing, media buying, content, PR, events, CRM, and growth strategy.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
