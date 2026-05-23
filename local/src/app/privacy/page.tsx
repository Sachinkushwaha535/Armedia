import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Armedia handles contact details and project inquiry information.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-privacy">
      <Header />
      <main>
        <PageShell
          kicker="Privacy"
          title="Privacy Policy"
          description="We collect only the information needed to respond to inquiries and deliver project work."
        >
          <div className="legal-content">
            <section>
              <h2>Information we collect</h2>
              <p>
                When you contact Armedia, we may collect your name, email address, phone number,
                company details, and project information shared through the contact form or email.
              </p>
            </section>

            <section>
              <h2>How we use it</h2>
              <p>
                We use inquiry details to reply to you, scope potential work, provide services,
                maintain business records, and improve our website and client experience.
              </p>
            </section>

            <section>
              <h2>Sharing and storage</h2>
              <p>
                We do not sell personal information. We may use trusted service providers for
                email, hosting, analytics, and project delivery where needed to operate the business.
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
              <h2>Contact</h2>
              <p>
                For privacy questions or access requests, email{' '}
                <a href="mailto:hello@armedia.co.nz">hello@armedia.co.nz</a>.
              </p>
            </section>
          </div>
        </PageShell>
      </main>
      <Footer />
    </div>
  )
}
