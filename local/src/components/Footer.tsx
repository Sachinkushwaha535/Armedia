import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import ArmediaLogo from './ArmediaLogo'
import { contactEmail, contactPhone, contactPhoneHref } from './siteConfig'

const footerGroups = [
  {
    title: 'Studio',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Marketing Studio', href: '/services#ai-marketing-studio' },
      { label: 'Business Intelligence', href: '/services#business-intelligence' },
      { label: 'Advertising', href: '/services#advertising' },
      { label: 'SEO Auckland', href: '/seo-agency-auckland' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'OOH media', href: '/services#ooh-offline-media' },
      { label: 'Media buying', href: '/services#media-buying-planning' },
      { label: 'Web design Auckland', href: '/web-design-auckland' },
      { label: 'E-commerce Auckland', href: '/ecommerce-website-auckland' },
    ],
  },
  {
    title: 'Start',
    links: [
      { label: 'Start a project', href: '/start-project' },
      { label: 'React development NZ', href: '/react-development-nz' },
      { label: 'Next.js agency NZ', href: '/nextjs-agency-new-zealand' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

function Footer() {
  const address = '7 Nordon Place Remuera, New Zealand'

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface">
      <div className="container-agency section-pad !pb-12 !pt-16">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Link className="inline-flex items-center gap-3" href="/" aria-label="Armedia home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <ArmediaLogo className="h-7 w-7 object-contain" title="Armedia logo" />
            </span>
            <div>
              <strong className="block text-sm font-semibold tracking-[0.18em] text-white">ARMEDIA</strong>
              <span className="text-xs text-zinc-500">Marketing Media Agency</span>
            </div>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-zinc-500">
            Strategy, advertising, AI workflows, BI dashboards, and connected media for growth-focused
            brands in New Zealand.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">
                {group.title}
              </span>
              <div className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <Link
                    className="link-underline text-sm text-zinc-400 transition-colors hover:text-white"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <a
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                href={`mailto:${contactEmail}`}
              >
                <FaEnvelope className="opacity-60" />
                {contactEmail}
              </a>
              {contactPhone && contactPhoneHref ? (
                <a
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                  href={contactPhoneHref}
                >
                  <FaPhone className="opacity-60" />
                  {contactPhone}
                </a>
              ) : null}
              <Link
                className="flex items-start gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                href="/contact"
              >
                <FaMapMarkerAlt className="mt-0.5 shrink-0 opacity-60" />
                {address}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-xs leading-relaxed text-zinc-600">
            &copy; 2026 Armedia. Marketing media agency for AI, BI, advertising, digital media, OOH,
            offline marketing, media buying, content, PR, events, CRM, and growth strategy.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
