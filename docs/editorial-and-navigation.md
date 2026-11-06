# Editorial line, design rules and navigation trees

Applies to the three sites in this monorepo. Written 2026-11-06.

| Site | App | Audience | Languages |
|---|---|---|---|
| TransWorld SG Consulting | `apps/transworld` | Canadian businesses that buy cocoa and other raw produce | EN, FR, ES |
| TransWorld Business Services (working name) | `apps/services` | Property managers, general contractors, buyers needing sourcing | EN, FR |
| Transco SG Group | `apps/transco` | International buyers and local producers in and around Cameroon | FR, EN |

The link between Transco and TransWorld is not advertised on any site. It is also never denied, and it is disclosed where a legal page or a counterparty requires it.

---

## 1. What the benchmark taught us

Nine reference sites were reviewed for structure and tone only. Nothing is copied.

**What worked, and we adopt it (as patterns, in our own words)**
- A quote button in the header that stays visible and uses one label everywhere (Neatrique, Ardie's).
- A short, numbered process shown before the form (Ardie's, Handyman Personnel).
- Service pages that say what is included and what is not (SM Clean's post-construction page states that debris removal belongs to the contractor).
- Origin shown with real region names and photos (Canada Cacao Company).
- Separate paths for different audiences (Handyman Personnel's employers and workers).
- Sample and enquiry paths, per-batch certificates of analysis and traceability as trust anchors (Global Cacao).

**What failed on those sites, and we avoid it**
- Vague superlatives with no proof ("finest", "premier", "decades").
- Several different button labels for the same action (Darling Solutions).
- The main B2B path buried in a small text link (CocoaSupply bulk orders).
- No price anchor, no spec rows, no minimum order (almost all of them).
- Broken or misleading links, repeated sections, typos, stale copyright years.
- Mixed positioning, such as home cleaning in a commercial menu (Neatrique).
- Claims such as "organic" without a visible certificate.

## 2. Editorial line

**One sentence:** *Say what it is, what is included, how it works and what happens next, in plain words a buyer can check.*

### Shared rules
1. **Specific beats impressive.** Replace adjectives with facts: a region name, a unit, a process step, a "not included" line.
2. **Every page ends in the same single action.** The label is **Request a quote** on all three sites. A secondary action is allowed per site (see section 5).
3. **Show the process before the form.** Three to five steps, each with what the visitor gets.
4. **State scope in both directions.** Each service and product page has "Included" and "Not included".
5. **No unproven claim.** Certifications, insurance, WSIB, years in business, volumes and client names appear only once confirmed. Until then they show a visible "To be confirmed" marker in the source and are left off the live page.
6. **One name per thing.** Pick one product name, one service name and one spelling (Canadian English: "cheque", "labour", "colour"), and keep it in the menu, headline, URL and form.
7. **Short paragraphs, descriptive links, no filler.** Buttons say what happens next ("Request a quote", "Request samples"), never "Learn more" or "More info".
8. **Prices:** show the pricing logic or a starting range when known, otherwise say what the quote depends on (quantity, destination, access, timing).
9. **Bilingual by design.** English and French are written together, not translated afterwards. Spanish stays on the trade site only.

### Voice by site

| | TransWorld (trade, Canada) | Services (property and sourcing, Canada) | Transco (origin, Cameroon) |
|---|---|---|---|
| Personality | Calm importer: precise, dependable, a little formal | Reliable crew lead: practical, reassuring, local | Grower and exporter: warm, proud of origin, factual |
| Opens with | The product and the buyer's problem (consistent supply) | The job and the outcome (ready to hand over, ready to open) | The place and the crop |
| Proof | Spec rows, minimum order, lead time, sample route, third-party inspection | Checklists, process, service area, photos of finished work | Named regions, harvest calendar, drying and packing steps, photos |
| Never says | "Finest", "best", "organic" without certificate | "Premier", "highest standard" | "Authentic" without detail, mixing "cacao" and "cocoa" |
| CTA | Request a quote, Request samples | Request a quote, Call | Request a quote |

### Content blocks, reused everywhere
- **Hero:** headline (what it is), one line (who it is for), primary and secondary button.
- **Proof strip:** three to four checkable facts.
- **Offer cards:** name, one line, link.
- **How it works:** numbered steps.
- **Scope:** Included, Not included, Suited for.
- **Spec table** (trade only): Origin, Grade, Packaging, Minimum order, Lead time, Documents.
- **FAQ:** five to eight real questions.
- **Quote band:** the closing block with the form link and phone.

---

## 3. Design system rules (summary, details in `packages/ui`)

- **Colour:** keep the existing identity. Atlantic Blue `#1555B8` is the group colour and the primary action everywhere. Each site has one accent:
  - TransWorld trade: Amber `#F2A65A` on dark, Cocoa `#8A4B1F` on light, Shell `#F3EDE6` as tile ground.
  - Services: Aqua `#5EEAD4` on dark, Deep Teal `#0B6B63` on light.
  - Transco: Leaf `#7BD389` on dark, Forest `#1F6B3A` on light (new, picked to read as origin and farmland and to stay distinct from the other two; contrast to be re-checked in the final design review).
- **Type:** Sora for headings, Geist for body.
- **Shape:** 20 px card radius, pill buttons.
- **Rule:** an accent is never used as text on a light background. The darker pair is used instead.
- **Header:** logo, 4 to 6 menu items, a persistent **Request a quote** button. On mobile the same button stays visible next to the menu icon.

---

## 4. Navigation trees

Every tree has the same header ending: **[Request a quote]** button, plus a Quote page that holds the form.

### 4.1 TransWorld SG Consulting (`apps/transworld`)

```
Home
Products
  Cocoa beans
  Cocoa butter
  Cocoa powder (to confirm)
  Coffee
  Shea butter
  All products
How it works
  From farm to market
  Quality control
  Request samples
Partners
About
  Company
  Team
  Careers
Contact
[Request a quote]            <- header button, opens /request-a-quote
Footer: Privacy, Terms, Accessibility, language switch (EN / FR / ES)
```

Today the site has Products, Global Trade services, Farm to market, Partners, About, Contact, Careers. The new pages are **Quality control**, **Request samples** and **Request a quote**.

### 4.2 TransWorld Business Services (`apps/services`)

```
Home
Property Services
  Commercial cleaning
  Post-construction cleaning
  Demolition
  Drywall
  Concrete work
  Moving support
Procurement & Sourcing
  Supplier search
  Procurement
  Quality control
  Export preparation
  Supplier development
Projects                     <- photos and short job stories (placeholder until supplied)
About
  Company
  Service area
  Careers
Contact
[Request a quote]            <- header button, opens /request-a-quote
Footer: Privacy, Terms, Accessibility, language switch (EN / FR)
```

The quote form has a first field "What do you need?" with the property services and the sourcing request as options, so one form serves both halves.

### 4.3 Transco SG Group (`apps/transco`)

```
Home
Produce
  Cocoa beans
  Coffee
  Shea nuts
  Other produce
Origin and growers
  Regions
  Growers and cooperatives
  Harvest calendar
Quality and export
  Drying, sorting and packing
  Inspection and documents
  Shipping
About
Contact
[Request a quote]            <- header button, opens /request-a-quote
Footer: Legal notice, Privacy, language switch (FR / EN)
```

---

## 5. Calls to action

| Where | Primary | Secondary |
|---|---|---|
| Header, every page | **Request a quote** (button) | Phone link on desktop |
| TransWorld hero | Request a quote | Request samples |
| Services hero | Request a quote | Call |
| Transco hero | Request a quote | See the produce |
| Page footer band, every page | Request a quote | Email |

## 6. Placeholders still needed from the client
Phone and email per site, insurance and WSIB status, product specs and minimum orders, certifications, named growers and regions, team names and photos, project photos, Formspree IDs (one per site and form), the Services site name, and the three domains.
