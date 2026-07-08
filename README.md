# Alma Solo Travel

**Curated solo journeys for women.**

A production-quality marketing site for Alma Solo Travel — a boutique
travel-planning studio creating personalised solo itineraries for women, from
considered budget trips to luxury experiences.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion,
Lucide icons, and React Hook Form + Zod.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (next/core-web-vitals + TypeScript) |
| `npm run typecheck` | `tsc --noEmit` |

### Environment variables

Copy `.env.example` to `.env.local`. **Nothing is required to run locally** —
the enquiry form and newsletter use a built-in mock. See the file for the keys
you'll add when wiring up email, CRM and analytics.

---

## Design rationale

The brief was a warm, editorial, Mediterranean identity with the craftsmanship
of a leading luxury travel brand — without cloning any reference.

- **Colour.** A warm cream (`--background`) dominates, with olive and terracotta
  used sparingly for emphasis and a sun-washed yellow accent over photography.
  No pure black or white. All tokens are CSS variables in
  [`globals.css`](src/app/globals.css) and mapped into Tailwind via `@theme`.
- **Type.** Cormorant Garamond (display serif, with italics for editorial
  rhythm) against Manrope (interface sans). Strong size contrast, constrained
  measures (`.measure`), uppercase micro-labels (`.eyebrow`).
- **Layout.** Generous vertical rhythm (`.section`), asymmetric editorial grids,
  large full-bleed imagery, alternating image/text splits.
- **Motion.** Restrained: a slow hero scale, soft fade-and-rise on scroll,
  image hover zoom, animated text-link underlines, a smooth header transition
  and accordion. Everything collapses under `prefers-reduced-motion`.
- **Tone.** Warm and human, aspirational but attainable. Copy is honest — no
  fabricated reviews, awards, statistics or safety guarantees.

---

## Architecture

```
src/
├─ app/                      # App Router routes
│  ├─ layout.tsx             # Fonts, metadata, Header/Footer, Organization JSON-LD
│  ├─ page.tsx               # Homepage (12 sections)
│  ├─ services/              # Services & pricing
│  ├─ destinations/          # Index (filterable) + [slug] detail template
│  ├─ about/ how-it-works/   # Editorial pages
│  ├─ journal/               # Index + [slug] article template
│  ├─ enquire/               # Multi-step enquiry form
│  ├─ privacy|terms|cookies/ # Legal placeholders
│  ├─ api/enquiry|subscribe/ # Mock POST endpoints
│  ├─ sitemap.ts robots.ts   # SEO
│  └─ opengraph-image.tsx    # Generated OG image
├─ components/
│  ├─ layout/                # Header, MobileMenu, Footer
│  ├─ ui/                    # Button, TextLink, Wordmark, SectionHeading, Reveal, …
│  ├─ sections/              # HomeHero
│  └─ *                      # EditorialHero, ImageTextSplit, DestinationCard,
│                            #   DestinationSlider, ServiceTier, JournalCard,
│                            #   ComparisonTable, FAQAccordion, NewsletterForm,
│                            #   EnquiryForm, Testimonial, LegalPage
├─ data/                     # Typed content: destinations, articles, services,
│                            #   navigation, faqs, images
├─ lib/                      # utils (cn, constants), motion variants, seo helpers
└─ types/                    # Shared interfaces
```

**Content architecture.** All editorial content lives in typed data files in
[`src/data`](src/data). Pages and cards are generated from that data — nothing
is duplicated across page components. Add a destination or article by appending
a typed object; the index, detail page, sitemap and JSON-LD update automatically.

**Rendering.** Server Components by default. Client Components are used only for
interaction: `Header`, `MobileMenu`, `DestinationSlider`, `DestinationsGrid`,
`FAQAccordion`, `NewsletterForm`, `EnquiryForm`, and the `Reveal` motion wrapper.

---

## Accessibility

- Semantic landmarks (`header`/`main`/`footer`/`nav`), logical heading order.
- Skip-to-content link; visible focus states site-wide (`:focus-visible`).
- Mobile menu: `role="dialog"`, body scroll-lock, Escape to close, focus trap,
  and focus returned to the trigger on close.
- Accordion uses real buttons with `aria-expanded`/`aria-controls`.
- Form fields have associated labels, `aria-invalid`, `aria-describedby` error
  links, `role="alert"` messages, and a `role="progressbar"` step indicator.
- All images have descriptive alt text; decorative images use `alt=""`.
- Touch targets ≥ 44px; responsive from 320px up; `prefers-reduced-motion`
  respected globally and per-animation.

---

## SEO

Per-route metadata + Open Graph + Twitter cards + canonical URLs
([`lib/seo.ts`](src/lib/seo.ts)), `sitemap.xml`, `robots.txt`, a generated OG
image, and JSON-LD: `TravelAgency` (Organization), `BreadcrumbList` on inner
pages, and `Article` on journal posts.

---

## Image assets to replace before production

All photography is **placeholder imagery from Unsplash**, defined in a single
file: [`src/data/images.ts`](src/data/images.ts) (hero/brand images) and the
`hero`/`cardImage`/`gallery` fields in
[`src/data/destinations.ts`](src/data/destinations.ts) and
[`src/data/articles.ts`](src/data/articles.ts).

To replace: change each `id` (Unsplash photo id) or swap `unsplash(id)` for a
local path (e.g. `"/images/andalucia-hero.jpg"`) and update the `remotePatterns`
in [`next.config.ts`](next.config.ts) if needed. **Update the `alt` text to match
the real image.** Assets to source with proper licences/model releases:

- Homepage hero + all section images (intro, planning, solo-support, founder,
  group journeys, enquiry CTA)
- **Founder portrait** (currently a stock portrait — replace with a real photo)
- 6 destination heroes + 6 card images + 18 gallery images
- 3 journal lead images
- Page heroes: about, services, how-it-works, destinations, journal

Imagery should be candid and editorial, show women travelling independently
(late 20s–mid 40s), and avoid staged corporate tourism stock.

---

## Placeholder content to finalise

- **Founder bio, brand story** — written in Maddie's voice but not embellished
  with fabricated years/credentials; review before launch.
- **Prices** (`From €195 / €425 / €895`) — indicative placeholders.
- **Contact email** `hello@almasolotravel.com`, social URLs (Instagram,
  Pinterest, TikTok point to platform roots).
- **Legal pages** (Privacy, Terms, Cookies) — clearly-labelled placeholders,
  require review by a qualified adviser.
- **FAQ answers** — reviewed for accuracy.

---

## Integrations still required

The enquiry form (`/api/enquiry`) and newsletter (`/api/subscribe`) are **mocks**
that validate input and return success without sending anything.

- [ ] **Email delivery** — wire an email provider (e.g. Resend/Postmark) into
      [`app/api/enquiry/route.ts`](src/app/api/enquiry/route.ts) and
      [`app/api/subscribe/route.ts`](src/app/api/subscribe/route.ts). Keys in
      `.env.local`.
- [ ] **CRM** — persist enquiries to your CRM of choice.
- [ ] **Analytics** — add a privacy-respecting analytics script
      (`NEXT_PUBLIC_ANALYTICS_ID`).
- [ ] **Cookie consent** — add a consent banner before any non-essential cookies.
- [ ] **Payment provider** — if you later take deposits/payments online.
- [ ] **CMS** — the typed data files can be swapped for a headless CMS
      (the `Destination`/`Article` interfaces make the shape explicit).
- [ ] **Error monitoring** — e.g. Sentry.
- [ ] **Set `NEXT_PUBLIC_SITE_URL`** to the production domain for correct
      canonical/OG/sitemap URLs.

---

## Notes

- No fabricated testimonials, awards, press logos, client statistics or
  destination-expertise claims are used anywhere. The single "quote" on the
  homepage is a clearly-labelled brand philosophy statement, and the planning
  pull-quote is an illustrative traveller sentiment — not attributed reviews.
- Safety is never presented as guaranteed; destination guidance uses balanced,
  practical language.
