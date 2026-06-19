import Link from 'next/link'
import ArmediaLogo from '../ArmediaLogo'
import {
  footerIndustries,
  footerLocations,
  footerServiceLinks,
  footerSocialLinks,
} from '../../data/footerLinks'
import { displayPhone, displayPhoneHref, officeAddress } from '../../data/contactPageContent'
import { contactEmail } from '../siteConfig'

function TWGFooter() {
  return (
    <footer className="armedia-section-dark border-t border-white/10">
      <div className="armedia-container py-14 lg:py-16">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="armedia-heading max-w-lg text-white">
            Forward-thinking marketing media for growth-focused brands
          </h2>
          <p className="text-sm leading-relaxed text-brand-muted md:text-[0.95rem]">
            Strategy, advertising, AI workflows, BI dashboards, and campaign reporting — Auckland
            and across New Zealand.
          </p>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Contact</p>
            <a
              href={displayPhoneHref}
              className="block font-heading text-2xl font-bold underline decoration-white/30 transition-colors hover:text-brand-gold lg:text-3xl"
            >
              {displayPhone}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-block text-sm text-brand-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
            >
              {contactEmail}
            </a>
            {/* <Link
              href="/contact"
              className="mt-5 inline-flex font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gold transition-opacity hover:opacity-80"
            >
              Contact page →
            </Link>
            <div className="mt-6 flex flex-col gap-2">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  {social.label} ↗
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Services</p>
            <ul className="space-y-2 text-sm">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Locations</p>
            <ul className="space-y-2 text-sm text-brand-muted">
              {footerLocations.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <p className="armedia-eyebrow mb-4 mt-8 text-brand-gold">Industries</p>
            <ul className="space-y-2 text-sm text-brand-muted">
              {footerIndustries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Address</p>
            <address className="text-sm not-italic leading-relaxed text-brand-muted">
              <strong className="text-white">{officeAddress.name}</strong>
              <br />
              {officeAddress.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={officeAddress.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gold transition-opacity hover:opacity-80"
            >
              Get directions →
            </a>
            <div className="mt-6 h-12 w-12">
              <ArmediaLogo className="h-full w-full object-contain" variant="mark" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Armedia</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="font-heading text-xs uppercase tracking-[0.12em] text-brand-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-brand-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-heading text-xs uppercase tracking-[0.12em] text-brand-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-brand-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TWGFooter
