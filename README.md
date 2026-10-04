# The Supply Room — Office Supplies Affiliate Site

A Next.js starter for an Amazon affiliate site focused on office supplies,
built around a "requisition form / supply catalog" visual identity: manila
paper tones, ledger-style comparison tables, and rubber-stamp badges.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Before you launch

1. **Amazon Associates tag.** The tag `dsetzer841-20` is already set in every
   product link across all guides (`best-desk-organizers`, `best-cable-management`,
   `best-workstation-upgrades`, `best-label-makers`). To use a different tag,
   sign up at https://affiliate-program.amazon.com and update the `tag=` value
   in each link.
2. **Replace placeholder products** with ones you've actually researched or
   tested. Amazon requires disclosure and periodically reviews accounts for
   thin or inaccurate content — genuine write-ups protect your account.
3. **Fill in `/about`** with real information about who runs the site. This
   matters for reader trust and for Google's quality guidelines.
4. **Keep the disclosure page** (`/disclosure`) linked from the footer of
   every page — this is an FTC requirement, not optional.
5. **Add real product images.** `next.config.js` is already set up to allow
   images from Amazon's media domains.

## Structure

```
app/
  page.js                                  → Homepage
  office-supplies/page.js                  → Category hub
  office-supplies/best-desk-organizers/     → Buying guide 01
  office-supplies/best-cable-management/    → Buying guide 02
  office-supplies/best-workstation-upgrades/ → Buying guide 03
  office-supplies/best-label-makers/        → Buying guide 04
  about/page.js
  disclosure/page.js
components/
  Header.js, Footer.js
  StampBadge.js        → signature rubber-stamp badge element
  ComparisonTable.js    → ledger-style product comparison table
```

## Adding a new buying guide

Duplicate the `best-desk-organizers` folder, rename it, and update the
`PRODUCTS` array and write-ups. Link to it from `app/office-supplies/page.js`
and the homepage's featured guides section.

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel, Netlify, or any
Node host. `npm run build && npm run start` for a production build.
