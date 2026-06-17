'use client'

import Link from 'next/link'
import LegalContentReveal, { LegalSection } from './motion/LegalContentReveal'
import LegalPageShell from './motion/LegalPageShell'

export type ChecklistSection = {
  title: string
  items: string[]
}

type CampaignChecklistViewProps = {
  sections: ChecklistSection[]
}

function CampaignChecklistView({ sections }: CampaignChecklistViewProps) {
  return (
    <LegalPageShell
      kicker="Free resource"
      title="Campaign planning checklist"
      titleId="checklist-title"
      description="Use this checklist before your next campaign goes live. It helps align goals, channels, assets, tracking, and review rhythms — whether you work with Armedia or run campaigns in-house."
      actions={
        <>
          <Link className="btn-primary" href="/contact">
            Book a growth consultation
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link className="btn-ghost" href="/start-project">
            Start a project brief
          </Link>
        </>
      }
    >
      <LegalContentReveal updatedLabel="6 sections · Pre-launch planning">
        {sections.map((section, index) => (
          <LegalSection key={section.title} index={index}>
            <h2>{section.title}</h2>
            <ul className="resource-checklist-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </LegalSection>
        ))}

        <p className="resource-footer-note">
          Want help applying this to your brand? <Link href="/contact">Contact Armedia</Link> or
          explore <Link href="/services">our services</Link>.
        </p>
      </LegalContentReveal>
    </LegalPageShell>
  )
}

export default CampaignChecklistView
