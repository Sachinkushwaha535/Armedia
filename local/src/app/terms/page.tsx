import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'General website and project inquiry terms for Armedia.',
  alternates: {
    canonical: '/terms',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-terms">
      <Header />
      <main>
        <PageShell
          kicker="Terms"
          title="Terms of Service"
          description="These terms cover use of the Armedia website and initial project inquiries."
        >
          <div className="legal-content">

            <section>
              <h2>Website use</h2>
              <p>
                The content on this website is provided for general information purposes only.
                You agree not to misuse the site, attempt unauthorized access, interfere with
                functionality, or use the website in any way that could harm the platform or its users.
              </p>
            </section>

            <section>
              <h2>Project inquiries</h2>
              <p>
                Submitting an inquiry does not establish a client relationship. All projects are
                subject to formal agreement, including defined scope, timelines, pricing, and
                responsibilities agreed upon in writing.
              </p>
            </section>

            <section>
              <h2>Intellectual property</h2>
              <p>
                All website content, including text, design, graphics, and code, is owned by Armedia
                or used under license. Unauthorized use, reproduction, or distribution is prohibited.
                Ownership of client deliverables is defined within individual project agreements.
              </p>
            </section>

            <section>
              <h2>Limitation of liability</h2>
              <p>
                Armedia is not liable for any direct or indirect damages arising from the use or
                inability to use this website. We do not guarantee uninterrupted access or error-free operation.
              </p>
            </section>

            <section>
              <h2>Changes to terms</h2>
              <p>
                We may update these terms from time to time. Continued use of the website after
                changes indicates acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                For any questions regarding these terms, please contact us at{' '}
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
