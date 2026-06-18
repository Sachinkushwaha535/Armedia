import Link from 'next/link'
import ArmediaLogo from '../ArmediaLogo'
import { contactEmail } from '../siteConfig'

function TWGFooter() {
  return (
    <footer className="armedia-section-dark border-t border-white/10">
      <div className="armedia-container py-14 lg:py-16">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="armedia-heading max-w-lg text-white">
            Forward-thinking marketing media for growth-focused brands
          </h2>
          <p className="armedia-body text-brand-muted">
            Strategy, advertising, AI workflows, BI dashboards, and campaign reporting — Auckland and across New Zealand.
          </p>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-4">
          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Contact</p>
            <a href="tel:+640223040716" className="block font-heading text-3xl font-bold underline decoration-white/30">
              +64 022 304 0716
            </a>
            <a href={`mailto:${contactEmail}`} className="mt-3 inline-block text-sm underline text-brand-muted">
              {contactEmail}
            </a>
            <div className="mt-6 flex flex-col gap-2">
              {['Facebook', 'Instagram', 'LinkedIn', 'Youtube'].map((social) => (
                <a
                  key={social}
                  href="/contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wider"
                >
                  {social} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Services</p>
            <ul className="space-y-2 text-sm underline decoration-white/20">
              <li><Link href="/services">Strategy</Link></li>
              <li><Link href="/services">Advertising</Link></li>
              <li><Link href="/web-design-auckland">Web Design</Link></li>
              <li><Link href="/seo-agency-auckland">SEO</Link></li>
              <li><Link href="/services">Business Intelligence</Link></li>
              <li><Link href="/services">Digital Media</Link></li>
            </ul>
            <p className="mt-8 text-xs text-brand-muted">© {new Date().getFullYear()} Armedia</p>
          </div>

          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Locations</p>
            <ul className="space-y-2 text-sm underline decoration-white/20">
              <li>Auckland</li>
              <li>Wellington</li>
              <li>Christchurch</li>
              <li>Queenstown</li>
            </ul>
            <p className="armedia-eyebrow mb-4 mt-8 text-brand-gold">Industries</p>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>Construction</li>
              <li>eCommerce</li>
              <li>Healthcare</li>
              <li>Tourism</li>
            </ul>
          </div>

          <div>
            <p className="armedia-eyebrow mb-4 text-brand-gold">Address</p>
            <p className="text-sm leading-relaxed text-brand-muted">
              <strong className="text-white">Armedia New Zealand</strong>
              <br />
              7 Nordon Place, Remuera
              <br />
              Auckland 1050, New Zealand
            </p>
            <div className="mt-6 h-12 w-12">
              <ArmediaLogo className="h-full w-full object-contain" variant="mark" />
            </div>
            <div className="mt-6 flex gap-4 text-xs text-brand-muted">
              <Link href="/privacy" className="underline">Privacy</Link>
              <Link href="/terms" className="underline">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TWGFooter
