import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LegalContentReveal, { LegalSection } from '../../components/motion/LegalContentReveal'
import LegalPageShell from '../../components/motion/LegalPageShell'
import { contactEmail } from '../../components/siteConfig'

export const metadata: Metadata = {
  title: 'Privacy Policy | Armedia Marketing Media Agency New Zealand',
  description:
    'How Armedia collects, uses, stores, and protects personal information for campaign inquiries, marketing services, and client communication in New Zealand.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Armedia',
    description:
      'How Armedia collects, uses, stores, and protects personal information for campaign inquiries and marketing services.',
    url: '/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Armedia',
    description:
      'How Armedia handles contact details, campaign inquiries, analytics information, and project communication.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-privacy armedia-site">
      <Header />
      <main id="main-content">
        <LegalPageShell
          kicker="Privacy"
          title="Privacy Policy"
          titleId="privacy-title"
          description="Armedia respects your privacy. This policy explains what information we collect, why we collect it, how we use it, and how you can contact us with questions."
        >
          <LegalContentReveal>
            <LegalSection index={0}>
              <h2>Overview</h2>
              <p>
                Armedia is a New Zealand-based marketing media agency. We collect personal information
                only when it is reasonably necessary to respond to inquiries, scope campaigns, deliver
                services, maintain business records, and improve how we communicate with clients and
                prospects.
              </p>
            </LegalSection>

            <LegalSection index={1}>
              <h2>Information we collect</h2>
              <p>
                When you contact us or submit a project brief, we may collect your name, email address,
                phone number, company name, role, brand details, campaign objectives, audience
                information, budget range, timeline, preferred channels, and any supporting notes you
                choose to share through our website forms, email, phone, or project communication.
              </p>
            </LegalSection>

            <LegalSection index={2}>
              <h2>How we use your information</h2>
              <p>
                We use this information to respond to your inquiry, understand your marketing needs,
                prepare recommendations, define scope, deliver agreed services, coordinate media and
                creative work, maintain accurate business records, and improve our website, reporting,
                and client experience. We do not sell personal information.
              </p>
            </LegalSection>

            <LegalSection index={3}>
              <h2>Campaign and analytics data</h2>
              <p>
                If you engage Armedia, we may review campaign performance data, website analytics, ad
                account reports, CRM exports, audience insights, or media results that you provide or
                formally authorize. This information is used only for planning, reporting,
                optimisation, and delivery within the agreed project scope.
              </p>
            </LegalSection>

            <LegalSection index={4}>
              <h2>Sharing and trusted providers</h2>
              <p>
                We may share information with trusted service providers where necessary to operate our
                business — for example email, hosting, analytics, advertising platforms, reporting
                tools, CRM systems, design platforms, or project delivery tools. These providers are
                expected to handle data responsibly and only for the purpose we engage them.
              </p>
            </LegalSection>

            <LegalSection index={5}>
              <h2>Security and retention</h2>
              <p>
                We apply reasonable technical and organisational safeguards to protect information from
                unauthorized access, misuse, or disclosure. We retain information only for as long as
                needed for business, legal, or contractual purposes, after which it is securely deleted
                or de-identified where appropriate.
              </p>
            </LegalSection>

            <LegalSection index={6}>
              <h2>Your rights and contact</h2>
              <p>
                You may request access to, correction of, or deletion of personal information we hold
                about you, subject to applicable law and legitimate business needs. For privacy questions
                or requests, email{' '}
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
