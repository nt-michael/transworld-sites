# TransWorld SG website (first build)

Next.js 16 (App Router, TypeScript, plain CSS). No UI or animation libraries.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 (redirects to /en)
npm run build && npm start
```

## What is built

| Route (under `/en`, `/fr`, `/es`) | Page |
| --- | --- |
| `/` | Home: hero slider only, between header and footer |
| `/about` | About: the group, its three subsidiaries, how they work together |
| `/global-trade` | Global Trade overview |
| `/procurement-sourcing` | Procurement & Sourcing subsidiary |
| `/contact` | Contact: what do you need, offices |
| `/global-trade/farm-to-market` | Farm to market (nine steps) |
| `/global-trade/products` | Products index |
| `/global-trade/products/[slug]` | Product template, six products |
| `/property-services` | Property Services with quote form |

Every other page in the sitemap (Partners, Careers, the six service pages, and so on) shows a
"Page in progress" holding page, listed in `plannedPages` in `lib/content.ts`.
Any other URL is a 404.

Old URLs redirect permanently: `/products`, `/products/[slug]`, `/services`
(see `next.config.mjs`).

## Where things live

- `lib/content.ts`: all page copy, products, services, image URLs.
- `lib/i18n.ts`: locales and interface labels (menu, footer) in EN, FR, ES.
- `app/globals.css`: colour tokens, layout, glass, motion.
- `components/`: header, language switcher, mobile menu, footer, forms.

## Still to do

- **Client facts.** Anything showing "To be confirmed" (search for `TBC`).
- **Translations.** Page copy is English only. French and Spanish pages show a
  short notice and mark the copy as English. Menu and footer are translated.
- **Forms.** `SiteForm` posts to Formspree. One env var per form: `NEXT_PUBLIC_FORMSPREE_PROPERTY`, `_TRADE`, `_CONTACT`, `_CAREERS` (the part after `formspree.io/f/`). Build-time, so redeploy after changing.
- **Photos.** Four free Unsplash photos stand in for client photos
  (`images` in `lib/content.ts`). Products without a photo use a plain tile.
- **Logo.** The header uses a text wordmark.
- **Domain.** Canonical URLs and language alternates are not set until the
  primary domain (.com or .ca) is chosen.
- **Remaining pages** from the redesign document.

## Accessibility notes

- Skip link, landmarks, one `h1` per page, language set per locale.
- Mobile menu is a native `<dialog>`: focus is trapped, Escape closes it.
- Glass falls back to solid panels with `prefers-reduced-transparency` or
  where blur is unsupported.
- All motion is off with `prefers-reduced-motion`. Scroll reveals only hide
  content once JavaScript has run.
- Not yet done: automated axe checks and screen-reader passes.

## Home page

- `components/HeroSlider.tsx`: four-slide hero (the group, then one slide per
  subsidiary). Rotates every 7 seconds, pauses on hover and focus,
  has a pause button, and does not rotate under `prefers-reduced-motion`.
- `components/Carousel.tsx`: the "Services and products" card slider, built on
  native scrolling.

## Deploy to Vercel

From this folder, with the Vercel CLI signed in to the right account:

```bash
npx vercel link     # choose the existing TransWorld project
npx vercel          # preview deployment, safe to share
npx vercel --prod   # replaces the live site: do this only when ready
```

Or push this folder to the Git repository the Vercel project is connected to;
a branch push creates a preview deployment automatically.

## Design (October 2026 reimagine)

Editorial corporate layout inspired by geaerospace.com, same colour identity.

- Header: white bar, real logo (`public/logo-v1.png`, taken from the current site), four
  mega-menu sections (click to open, Escape / outside click / navigation closes), language
  menu and Contact button. No glass or blur anywhere.
- Mobile menu: always-rendered panel slid in with a CSS transform; accordion per section;
  page behind is inert and scroll-locked. Opens on the first tap.
- Focus: a single 3px ring on keyboard focus only (`:focus-visible`), never on mouse click.
- Type: Archivo (headings) + Geist (body).
- `public/logo-v1.png` is not in this folder's history; copy it from the current site
  before running locally.
