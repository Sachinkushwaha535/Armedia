import Link from 'next/link'
import ArmediaLogo from './ArmediaLogo'
import { contactEmail } from './siteConfig'

const serviceLinks = [
  { label: 'AI Marketing Studio', href: '/services#ai-marketing-studio' },
  { label: 'Business Intelligence', href: '/services#business-intelligence' },
  { label: 'Advertising', href: '/services#advertising' },
  { label: 'Digital Media', href: '/services#digital-media' },
  { label: 'OOH & Offline', href: '/services#ooh-offline-media' },
  { label: 'Strategy & Growth', href: '/services#brand-growth-strategy' },
  { label: 'SEO Auckland', href: '/seo-agency-auckland' },
  { label: 'Web Design Auckland', href: '/web-design-auckland' },
]

const locationLinks = [
  { label: 'Auckland', href: '/contact' },
  { label: 'Wellington', href: '/contact' },
  { label: 'Christchurch', href: '/contact' },
  { label: 'New Zealand', href: '/contact' },
  { label: 'Australia', href: '/contact' },
]

const industryLinks = [
  { label: 'Professional services', href: '/services' },
  { label: 'E-commerce', href: '/ecommerce-website-auckland' },
  { label: 'Retail & local', href: '/services' },
  { label: 'SaaS & tech', href: '/react-development-nz' },
  { label: 'Healthcare', href: '/services' },
  { label: 'Construction', href: '/services' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

function Footer() {
  return (
    <footer className="site-footer twg-footer">
      <div className="footer-inner">
        <div className="twg-footer-brand">
          <Link className="footer-logo twg-footer-logo twg-footer-logo--center" href="/" aria-label="Armedia home">
            <ArmediaLogo className="footer-logo-svg" title="Armedia logo" />
          </Link>
        </div>

        <div className="twg-footer-top">
          <div className="twg-footer-col twg-footer-col--center">
            <h3>Start a conversation</h3>
            <a className="twg-footer-contact" href="tel:+640223040716">+64 022 304 0716</a>
            <a className="twg-footer-contact" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <div className="twg-footer-socials">
              {socialLinks.map((link) => (
                <a key={link.label} className="twg-social-pill" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="twg-footer-col twg-footer-col--center">
            <h3>Services</h3>
            <div className="footer-links">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="twg-footer-col twg-footer-col--center">
            <h3>Locations</h3>
            <div className="footer-links">
              {locationLinks.map((link) => (
                <Link key={link.label} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="twg-footer-col twg-footer-col--center">
            <h3>Industries</h3>
            <div className="footer-links">
              {industryLinks.map((link) => (
                <Link key={link.label} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="twg-footer-col twg-footer-col--center twg-footer-address">
            <h3>Address</h3>
            <p>
              <strong>New Zealand</strong><br />
              7 Nordon Place, Remuera<br />
              Auckland, New Zealand
            </p>
            <div className="twg-footer-legal">
              <Link href="/start-project">Start a project</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom twg-footer-bottom">
          <span>&copy; 2026 Armedia. Strategy, media, AI, BI, advertising, and growth for New Zealand brands.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
