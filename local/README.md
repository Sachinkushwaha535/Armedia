# Armedia Website Review Checklist

This README tracks the feedback items for the Armedia website, what has already been fixed, and what still needs to be reviewed or modified before launch.

## Project Commands

```bash
npm run dev      # Start local development server
npm run build    # Create production build
npm run start    # Run production server after build
npm run lint     # Run ESLint
```

## Feedback Summary

The main feedback is to make the website feel complete and intentional:

- Finish or remove incomplete items such as missing social links, legal links, sitemap links, and placeholder content.
- Make sure the contact form submits successfully to the correct email address.
- Review the full site on mobile and improve section-by-section responsiveness.
- Review footer content so it matches the header navigation and actual website content.
- Replace the AI-looking logo with a proper logo system.

## Already Fixed

- Legal pages exist:
  - `/privacy`
  - `/terms`
- Sitemap route exists:
  - `/sitemap.xml`
- Footer copyright row was simplified:
  - Removed `Privacy Policy`, `Terms of Service`, and `Sitemap` from the copyright row.
  - Copyright is centered.
- Header logo layout was updated:
  - Header now shows the logo sign on the left.
  - `ARMEDIA` and `Digital Studio` show to the right of the sign, not underneath.
- Footer logo layout was kept as a full logo lockup:
  - Logo sign with text below remains in the footer.
- Browser tab/favicon was updated:
  - Added `src/app/icon.svg`.
  - Updated `public/favicon.svg`.
  - Metadata in `src/app/layout.tsx` points to the sign-only icon.
- Lint check currently passes:
  - `npm.cmd run lint`

## Current Contact Form Status

The contact form posts to:

- `src/app/api/contact/route.ts`

It uses Nodemailer with Gmail:

- `EMAIL_USER`
- `EMAIL_PASS`
- `CONTACT_TO_EMAIL` optional, falls back to `EMAIL_USER`

If these environment variables are missing, the API returns:

```text
The contact form is not configured yet. Please email hello@armedia.co.nz.
```

### Contact Form Remaining Steps

- Add the email variables to the deployment environment.
- Use a Gmail app password, not the normal Gmail password.
- Submit a real test inquiry from the website.
- Confirm the email arrives in the correct inbox.
- Confirm reply-to is set to the visitor email.
- Confirm success and error messages look good on mobile.

## Remaining Work

### 1. Social Links

Current issue:

- Footer CSS includes social link styling, but real social links are not clearly implemented.

Decision needed:

- Add real social media links if Armedia has active profiles.
- Remove social UI completely if there are no real profiles.

Recommended links if available:

- LinkedIn
- Instagram
- Facebook
- X/Twitter only if actively used

### 2. Footer Content

Current footer groups:

- Company: About, Contact
- Services: Web development, AI and data, Cybersecurity, UX/UI design
- Start: Book a call, Email us
- Legal: Privacy, Terms, Sitemap

Review needed:

- Confirm these match the actual business offering.
- Remove any link that is not useful.
- Consider matching the header more closely:
  - Home
  - Services
  - About
  - Contact
  - Privacy
  - Terms

### 3. Placeholder Content

Some content still looks generic and should be reviewed:

- Testimonials in `src/components/siteData.ts`
- Client names in `src/components/siteData.ts`
- Featured work examples in `src/components/siteData.ts`
- Any copy mentioning generic studio-style claims that are not real.

Action:

- Replace placeholder clients/testimonials/projects with real Armedia work.
- If real case studies are not ready, remove those sections or rewrite them as capabilities.

### 4. Mobile Responsiveness

Mobile review still needs to be completed manually across the site.

Pages to review:

- `/`
- `/services`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

Things to check:

- Header spacing and menu behavior.
- Logo size in mobile header.
- Hero text wrapping.
- Sections that become too tall or too narrow.
- Cards that should become 2-column grids on tablet/mobile where appropriate.
- Contact form field spacing.
- Footer logo, footer columns, and legal links.

Important note:

- Do not apply one global layout rule everywhere. Review section by section.

### 5. Logo

Current state:

- Header uses sign-only logo plus text on the right.
- Footer uses full logo lockup.
- Favicon uses sign-only logo.

Remaining improvement:

- The SVG logo is custom-built in code, but it should be reviewed visually in the browser.
- If a final professional logo asset exists, replace the SVG with the final brand asset.
- Check favicon after hard refresh or incognito because browsers cache favicons.

### 6. Legal Pages

Current state:

- Privacy and Terms pages exist.

Remaining:

- Review the legal copy before launch.
- Confirm it is suitable for Armedia, New Zealand, and the actual services offered.
- Update business name, email, and any legal wording if needed.

## Suggested Final QA Steps

1. Run `npm run lint`.
2. Run `npm run build`.
3. Start the site locally with `npm run dev`.
4. Test every header and footer link.
5. Submit the contact form with real test data.
6. Test on mobile widths:
   - 390px
   - 430px
   - 768px
7. Test desktop widths:
   - 1280px
   - 1440px
   - 1920px
8. Open the site in incognito and confirm favicon appears.
9. Review all copy for placeholder or AI-sounding content.
10. Remove anything that is not real, useful, or connected to the business.

## Priority Order

1. Configure and test the contact form email.
2. Clean footer links and remove/add social links.
3. Replace placeholder content with real business content.
4. Review and fix mobile responsiveness section by section.
5. Finalize logo assets and favicon.
6. Review privacy and terms copy.
7. Run full QA before deployment.
