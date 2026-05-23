'use client'

import Link from 'next/link'
import ArmediaLogo from './ArmediaLogo'

const footerGroups = [
  {
    title: 'Studio',
    links: [
      { label: 'Home', href: '/' },
      // { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
  title: 'Services',
  links: [
    { label: 'Web development', href: '/services#web' },
    { label: 'AI solutions', href: '/services#ai-agents' },
    { label: 'Automation', href: '/services#ai-automation' },
    { label: 'Cybersecurity', href: '/services#cybersecurity' },
  ],
},
  {
    title: 'Growth',
    links: [
      { label: 'SEO-ready websites', href: '/services#web' },
      { label: 'Lead generation', href: '/services#leads' },
      { label: 'UX/UI design', href: '/services#design' },
      { label: 'Workflow systems', href: '/services#workflow' },
    ],
  },
  {
    title: 'Start',
    links: [
      { label: 'Start a project', href: '/contact' },
      { label: 'Email us', href: 'mailto:contact.armedianz@gmail.com' },
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
          {/* <p className="footer-positioning">
            Websites, web apps, AI workflows, automation, and digital systems built for clearer
            visibility, stronger performance, and measurable growth.
          </p> */}
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
          <span>© 2026 Armedia. Auckland digital studio for web, AI, and growth systems.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


