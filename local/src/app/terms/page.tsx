import type { Metadata } from 'next'
import LegalPageShell from '../../components/LegalPageShell'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { contactEmail } from '../../components/siteConfig'
import { legalKeywords } from '../../data/siteKeywords'

export const metadata: Metadata = {
  title: 'Terms of Service | Website Use & Project Terms',
  description: 'General website, campaign enquiry, marketing media, advertising, AI, and BI project terms for Armedia.',
  keywords: [...legalKeywords],
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | Website Use & Project Terms',
    description:
      'General website, campaign enquiry, marketing media, advertising, AI, and BI project terms for Armedia.',
    url: '/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Website Use & Project Terms',
    description:
      'General website, campaign enquiry, marketing media, advertising, AI, and BI project terms for Armedia.',
  },
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <LegalPageShell
        breadcrumb="Terms"
        eyebrow="Legal"
        title="Terms of Service"
        description="These terms cover use of the Armedia website, campaign enquiries, and initial discussions for marketing media, advertising, AI, BI, and strategy work."
      >
        <section>
          <h2>Website use</h2>
          <p>
            The content on this website is provided for general information purposes only.
            You agree not to misuse the site, attempt unauthorised access, interfere with
            functionality, or use the website in any way that could harm the platform or its users.
          </p>
        </section>

        <section>
          <h2>Project enquiries</h2>
          <p>
            Submitting an enquiry does not establish a client relationship. All projects are
            subject to formal agreement, including defined scope, timelines, pricing, and
            responsibilities agreed upon in writing.
          </p>
        </section>

        <section>
          <h2>Marketing and media services</h2>
          <p>
            Armedia may provide services such as AI marketing tools, business intelligence,
            advertising, media planning, digital media, OOH media, offline marketing, content
            direction, influencer planning, PR support, event marketing, CRM campaigns, and
            growth strategy. Exact deliverables depend on the written scope agreed for each project.
          </p>
        </section>

        <section>
          <h2>Campaign performance</h2>
          <p>
            Marketing results can vary based on budget, audience, creative quality, market
            conditions, media availability, platform changes, and client inputs. We work toward
            measurable improvement, but we do not guarantee specific sales, leads, rankings,
            reach, impressions, or revenue unless a separate written agreement clearly states otherwise.
          </p>
        </section>

        <section>
          <h2>Client responsibilities</h2>
          <p>
            Clients are responsible for providing accurate business information, timely feedback,
            approved brand assets, access to required tools or accounts, legal permissions for
            content, and final approval for campaigns before launch where approval is required.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            All website content, including text, design, graphics, and code, is owned by Armedia
            or used under licence. Unauthorised use, reproduction, or distribution is prohibited.
            Ownership of client deliverables is defined within individual project agreements.
          </p>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            Armedia is not liable for any direct or indirect damages arising from the use or
            inability to use this website. We do not guarantee uninterrupted access or error-free
            operation. For campaign work, liability is limited to the terms agreed in the relevant
            project agreement.
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
          <h2>Email contact</h2>
          <p>
            For any questions regarding these terms, please contact us at{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </section>
      </LegalPageShell>
      <TWGFooter />
    </main>
  )
}
