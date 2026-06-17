import type { Metadata } from 'next'
import CampaignChecklistView from '../../../components/CampaignChecklistView'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Campaign Planning Checklist',
  description:
    'A practical campaign planning checklist from Armedia covering goals, audience, channels, assets, tracking, and review rhythms for New Zealand brands.',
  alternates: { canonical: '/resources/campaign-checklist' },
  openGraph: {
    title: 'Campaign Planning Checklist | Armedia',
    description:
      'Goals, channels, assets, tracking, and review rhythms — a practical pre-launch checklist for marketing campaigns.',
    url: '/resources/campaign-checklist',
    type: 'article',
  },
}

const checklistSections = [
  {
    title: 'Define the commercial goal',
    items: [
      'What outcome matters most: awareness, enquiries, sales, footfall, recall, or reporting clarity?',
      'What timeline and budget range are you working within?',
      'What does success look like in plain language after 30, 60, and 90 days?',
    ],
  },
  {
    title: 'Clarify audience and offer',
    items: [
      'Who is the primary buyer or decision-maker?',
      'What problem does your offer solve, and why choose you now?',
      'Which locations or regions matter most?',
    ],
  },
  {
    title: 'Map the channel mix',
    items: [
      'Which channels fit the goal: paid search, paid social, SEO, email, OOH, print, events, or retail?',
      'What role does each channel play: reach, consideration, conversion, or recall?',
      'What budget split makes sense at launch vs optimisation?',
    ],
  },
  {
    title: 'Prepare campaign assets',
    items: [
      'Landing page or destination URL with a clear call to action',
      'Creative concepts matched to each channel and placement',
      'Forms, phone routing, or booking flow tested end to end',
      'Offline-to-digital follow-through where needed',
    ],
  },
  {
    title: 'Set up tracking and reporting',
    items: [
      'Conversion events defined before launch',
      'UTM or campaign naming conventions agreed',
      'Dashboard or review rhythm for weekly decisions',
      'Lead quality criteria documented',
    ],
  },
  {
    title: 'Plan launch and improvement',
    items: [
      'Launch checklist and owner for each channel',
      'Live checks in the first 48 hours',
      'Weekly review agenda: spend, creative, audience, landing page, and next tests',
      'Decision rules for what to scale, pause, or refine',
    ],
  },
]

export default function Page() {
  return (
    <div className="site-shell page-resource armedia-site">
      <Header />
      <main id="main-content">
        <CampaignChecklistView sections={checklistSections} />
      </main>
      <Footer />
    </div>
  )
}
