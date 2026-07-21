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

1. **Get your Amazon Associates tag.** Sign up at
   https://affiliate-program.amazon.com, then replace every `YOURTAG-20`
   placeholder in `app/office-supplies/best-desk-organizers/page.js` with
   your real tracking ID.
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
  office-supplies/best-desk-organizers/     → First buying guide
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
