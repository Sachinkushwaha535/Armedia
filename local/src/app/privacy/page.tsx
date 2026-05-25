import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Armedia handles contact details, campaign inquiries, analytics information, and project communication.',
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
      'How Armedia handles contact details, campaign inquiries, analytics information, and project communication.',
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
    <div className="site-shell page-privacy">
      <Header />
      <main id="main-content">
        <PageShell
          kicker="Privacy"
          title="Privacy Policy"
          description="We collect only the information needed to respond to inquiries, plan campaigns, deliver media services, and improve client communication."
        >
          <div className="legal-content">
            <section>
              <h2>Information we collect</h2>
              <p>
                When you contact Armedia, we may collect your name, email address, phone number,
                company details, brand information, campaign goals, target audience, budget range,
                timeline, current marketing channels, and project information shared through the
                contact form, email, calls, or project communication.
              </p>
            </section>

            <section>
              <h2>How we use it</h2>
              <p>
                We use inquiry details to reply to you, understand your campaign needs, prepare
                recommendations, scope services, deliver media and marketing work, maintain business
                records, and improve our website, reporting, and client experience.
              </p>
            </section>

            <section>
              <h2>Campaign and analytics data</h2>
              <p>
                If you choose to work with us, we may review campaign performance data, website
                analytics, ad account reports, CRM exports, audience information, or media results
                that you provide or authorize. This information is used only for planning,
                reporting, optimisation, and agreed project delivery.
              </p>
            </section>

            <section>
              <h2>Sharing and storage</h2>
              <p>
                We do not sell personal information. We may use trusted service providers for
                email, hosting, analytics, advertising platforms, reporting tools, CRM systems,
                design tools, and project delivery where needed to operate the business.
              </p>
            </section>

            <section>
              <h2>Data security</h2>
              <p>
                We apply standard security practices to protect your data from unauthorized access,
                misuse, or disclosure.
              </p>
            </section>

            <section>
              <h2>Data retention</h2>
              <p>
                We retain information only as long as necessary for business or legal purposes,
                after which it is securely removed.
              </p>
            </section>

            <section>
              <h2>Email contact</h2>
              <p>
                For privacy questions or access requests, email{' '}
                <a href="mailto:contact.armedianz@gmail.com">contact.armedianz@gmail.com</a>.
              </p>
            </section>
          </div>
        </PageShell>
      </main>
      <Footer />
    </div>
  )
}
