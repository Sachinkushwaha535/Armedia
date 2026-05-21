'use client'

import Link from 'next/link'
import ArmediaLogo from './ArmediaLogo'

const footerGroups = [
  {
    title: 'Company',
    links: [
      // { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
  title: 'Services',
  links: [
    { label: 'Web development', href: '/services#web' },
    { label: 'AI and data', href: '/services#ai' },
    { label: 'Cybersecurity', href: '/services#cybersecurity' },
    { label: 'UX/UI design', href: '/services#design' },
  ],
},
  {
    title: 'Start',
    links: [
      { label: 'Book a call', href: '/contact' },
      { label: 'Email us', href: 'mailto:hello@armedia.co.nz' },
    ],
  },
  {
    title: 'Legal',
    links: [
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
          <span>© 2026 Armedia. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


