import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LegalContentReveal, { LegalSection } from '../../components/motion/LegalContentReveal'
import LegalPageShell from '../../components/motion/LegalPageShell'
import { contactEmail } from '../../components/siteConfig'

export const metadata: Metadata = {
  title: 'Terms of Service | Armedia Marketing Media Agency New Zealand',
  description:
    'Terms governing use of the Armedia website, campaign inquiries, and marketing media, advertising, AI, BI, and strategy services in New Zealand.',
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | Armedia',
    description:
      'Terms governing use of the Armedia website, campaign inquiries, and marketing media services.',
    url: '/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Armedia',
    description:
      'General website, campaign inquiry, marketing media, advertising, AI, and BI project terms for Armedia.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-terms armedia-site">
      <Header />
      <main id="main-content">
        <LegalPageShell
          kicker="Terms"
          title="Terms of Service"
          titleId="terms-title"
          description="These terms govern your use of the Armedia website and initial discussions relating to marketing media, advertising, AI, business intelligence, and growth strategy work."
        >
          <LegalContentReveal>
            <LegalSection index={0}>
              <h2>Agreement overview</h2>
              <p>
                By accessing this website or submitting an inquiry, you agree to these Terms of
                Service. If you do not agree, please do not use the site. A separate written agreement
                is required before Armedia commences paid campaign or project work.
              </p>
            </LegalSection>

            <LegalSection index={1}>
              <h2>Website use</h2>
              <p>
                Content on this website is provided for general information purposes. You agree not to
                misuse the site, attempt unauthorized access, interfere with functionality, scrape
                content without permission, or use the website in any way that could harm Armedia,
                its users, or third parties.
              </p>
            </LegalSection>

            <LegalSection index={2}>
              <h2>Inquiries and engagements</h2>
              <p>
                Submitting a contact form, brief, or inquiry does not create a client relationship or
                binding contract. All engagements are subject to a formal agreement that defines scope,
                deliverables, timelines, fees, approvals, and responsibilities in writing.
              </p>
            </LegalSection>

            <LegalSection index={3}>
              <h2>Services we provide</h2>
              <p>
                Armedia may provide strategy, advertising, digital media, OOH and offline marketing,
                content and creative direction, AI workflows, business intelligence, reporting, CRM
                support, web-related delivery, and growth planning. Exact services depend on the written
                scope agreed for each project.
              </p>
            </LegalSection>

            <LegalSection index={4}>
              <h2>Performance expectations</h2>
              <p>
                Marketing outcomes can vary based on budget, audience, creative quality, market
                conditions, media availability, platform changes, seasonality, and client inputs.
                Armedia works toward measurable improvement, but we do not guarantee specific sales,
                leads, rankings, reach, impressions, or revenue unless a separate written agreement
                clearly states otherwise.
              </p>
            </LegalSection>

            <LegalSection index={5}>
              <h2>Client responsibilities</h2>
              <p>
                Clients are responsible for providing accurate business information, timely feedback,
                approved brand assets, access to required tools or ad accounts, legal permissions for
                content and claims, and final campaign approval where approval is required before launch.
              </p>
            </LegalSection>

            <LegalSection index={6}>
              <h2>Intellectual property</h2>
              <p>
                Website content — including text, design, graphics, and code — is owned by Armedia or
                used under licence. Unauthorized copying, distribution, or commercial use is prohibited.
                Ownership and usage rights for client deliverables are defined in the relevant project
                agreement.
              </p>
            </LegalSection>

            <LegalSection index={7}>
              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Armedia is not liable for indirect, incidental,
                or consequential loss arising from use of this website. We do not guarantee
                uninterrupted or error-free access. For campaign work, liability is limited to the terms
                set out in the applicable project agreement.
              </p>
            </LegalSection>

            <LegalSection index={8}>
              <h2>Updates and contact</h2>
              <p>
                We may update these terms from time to time. Continued use of the website after changes
                are published constitutes acceptance of the updated terms. Questions about these terms
                can be sent to{' '}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
              </p>
            </LegalSection>
          </LegalContentReveal>
        </LegalPageShell>
      </main>
      <Footer />
    </div>
  )
}
