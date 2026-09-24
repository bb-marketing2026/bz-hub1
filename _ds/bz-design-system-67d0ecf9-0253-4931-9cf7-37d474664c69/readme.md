# bluezoo Design System

A complete, code-first design system for **bluezoo** — a professional-services advisory firm operating across four service lines: **Governance, Strategy, Risk and Resilience**. This system encodes the brand's logos, colour, typography, components and templates so any agent or designer can produce on-brand work — from a slide to a full marketing site.

> **Source of truth:** `uploads/BZ BRAND GUIDE.jpg` (the official one-page brand guide) plus the supplied official logo PNGs (primary, mono, reverse, white, and the four service-line lockups). No codebase or Figma was provided; everything here is derived from those brand assets. If a codebase or Figma file exists, attach it and this system can be reconciled against the real product UI.

---

## 1. Company & product context

bluezoo advises **boards and executive teams**. It is not a SaaS product company — its "products" are **services and the collateral that sells and delivers them**: the website, presentation/proposal decks, brochures, letterhead, email and social. The brand guide's own *Core Collateral List* confirms this: Website, Business Cards, A5 Sales Brochure, Banner, LinkedIn, Email Signature, Presentation / Proposal / Letterhead / Video templates, EDM campaign, downloadable resources.

**The four service lines**, each with a geometric low-poly animal mascot and a signature colour:

| Service | Animal | Signature colour | Idea it carries |
|---|---|---|---|
| **Governance** | Elephant | Teal `#137B8F` | Memory, weight, doing it properly |
| **Strategy** | Lion | Deep navy `#153E5A` | Direction, confidence, leading |
| **Risk** | Fox | Slate `#4B6969` | Cunning, foresight, reading the terrain |
| **Resilience** | Hummingbird | Olive `#6C793C` | Agility, recovery, endurance |

The **primary brand** is the origami **butterfly** mark (navy + teal triangles) above the lowercase **bluezoo** wordmark.

---

## 2. Content fundamentals (voice & tone)

How bluezoo writes — follow this for every label, heading and paragraph.

- **Lowercase wordmark, always.** The brand is **bluezoo**, never "Bluezoo" or "BlueZoo" in logo/wordmark contexts. In running sentences, sentence-case "bluezoo" is fine.
- **Calm, senior, plain-spoken.** The reader is a director or executive. Write like a trusted advisor in the room, not a vendor pitching. Short declarative sentences. No hype, no exclamation marks.
- **"We" and "you/your".** First-person plural for the firm ("we sit alongside your people"), second person for the client. Avoid "I".
- **Confidence without bravado.** Favour words like *steady, considered, defensible, rigorous, quietly, hold, endure, confidence*. Example heading used in this system: *"Steady counsel for an uncertain world."*
- **Outcome-led.** Lead with the decision or result, then the method. "Make the next decision with confidence" beats "Our methodology is…".
- **Australian / British spelling.** *organisation, prioritise, programme, defence, colour.* (The brand guide is AU.)
- **Sentence case for headings and buttons.** Not Title Case. ("Book a consult", not "Book A Consult".)
- **Eyebrows / labels are UPPERCASE with wide tracking** (e.g. `GOVERNANCE`, `FINDINGS`, `OUR APPROACH`) — this is the one place caps are used.
- **No emoji.** Ever. The brand is corporate-professional. Use line icons or the service animals instead.
- **Numbers earn their place.** Use a few sharp proof points (recovery time, audit pass rate) — never a wall of vanity stats.

---

## 3. Visual foundations

**Colour.** Two brand hues — **BZ Blue `#284B63`** (authority) and **BZ Green / teal `#3C6E71`** (the human, approachable accent) — on a disciplined neutral grey scale anchored by **BZ Grey `#353535`** and **Light Grey `#D9D9D9`**. The eight-swatch **service-line palette** extends this into per-line colours (see table above). Colour is used *purposefully*: brand blue for primary surfaces and headings, teal for accents and CTAs, and a single service colour to "own" a section, card, or deck divider. Avoid mixing more than one service colour in a single component.

**Typography.** The brand face is **Calibri** — humanist, friendly, highly legible. Calibri is proprietary, so this system ships **Carlito**, the open, metric-compatible clone, via Google Fonts (⚠️ substitution — see Caveats). Hierarchy from the guide: H1 in BZ Blue, H2 in BZ Green, H3 in BZ Grey underlined, body & caption in BZ Grey, quotes in italic. Weights available: 400 (regular, also covers the guide's "Light") and 700 (bold). Headings are bold; body is regular; eyebrows are bold uppercase with `0.14em` tracking.

**Geometry & shape.** The brand is built from **straight-edged origami triangles** — so the UI is **crisp, not bubbly**. Corner radii are modest (`4–10px` for controls and cards, never pill-everything). Pills are reserved for tags, service badges and filter chips.

**Backgrounds.** Mostly **flat white or near-white** (`--surface-page`). Hero and closing surfaces use a **restrained dark gradient** from `--bz-blue-900` → `--bz-blue-700` (and occasionally toward teal). The origami **mark appears as a large, low-opacity (8–14%) watermark** on dark surfaces — never busy patterns, photos-as-texture, or rainbow gradients.

**Imagery.** The signature imagery *is* the geometric animals and the butterfly mark. When photography is used it should be cool-toned, calm and corporate. There are no decorative blobs or illustrations beyond the brand's own line-art animals.

**Elevation & borders.** Shadows are **soft and cool** (tinted with blue, never warm black) — see `--shadow-sm…xl`. Cards are white with a `1px` subtle border and a small shadow; an optional **3px coloured top bar** ties a card to a service line. Hairline rules (`1px var(--border-subtle)`) separate list rows and slide footers.

**Motion.** Calm and professional: `200ms` ease (`--ease-standard`) for hovers, `320ms` ease-out for larger transitions. **No bounce, no spring.** Hover = a step darker (primary buttons) or a light grey wash (ghost); links underline. Press/active = one shade darker again (no shrink/scale gimmicks). Respect `prefers-reduced-motion`.

**Layout.** Generous margins, a max content width of `~1320px`, and a 4px spacing scale. Slides are a fixed `1280×720` (16:9) with `~76–90px` padding and a consistent footer (small wordmark + slide title · number).

---

## 4. Iconography

- **Primary icon language:** thin, single-weight **line icons** (≈1.5px stroke, rounded joins) — matching the brand guide's "Design Elements" row (target, clock, hand-with-coins, award, bar-chart, magnifier, people, ID-card).
- The brand guide ships these as **raster line icons**, not a font or SVG set we could extract losslessly. This system therefore standardises on **[Lucide](https://lucide.dev)** (loaded from CDN) — an open line-icon set with the same thin, rounded-stroke character. ⚠️ This is a substitution for a true bluezoo icon set (see Caveats). Tint icons with `--bz-blue-700` or `--bz-teal-600`.
- **Service animals** (elephant / lion / fox / hummingbird) act as **brand icons** for their service lines — use the supplied lockups in `assets/`. Do not redraw them.
- **No emoji. No Unicode-glyph icons.** If Lucide lacks a needed glyph, choose the nearest Lucide match rather than mixing icon sets.

Usage example (CDN):
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="shield-check"></i>
<script>lucide.createIcons();</script>
```

---

## 5. Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`-only manifest.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **generated** (do not edit).

**Tokens** (`tokens/`, all reached from `styles.css`)
- `fonts.css` — Carlito (Calibri substitute) via Google Fonts.
- `colors.css` — primary + service palettes, blue/teal/grey ramps, semantic aliases.
- `typography.css` — families, weights, type scale, line-heights, tracking.
- `spacing.css` — spacing, radius, border, shadow, container, motion tokens.
- `base.css` — light element reset + brand defaults + `.bz-eyebrow` helper.

**Components** (`components/`, React, exported on `window.BluezooDesignSystem_67d0ec`)
- `actions/` — **Button** (primary / secondary / ghost / onDark; sizes; service accents).
- `forms/` — **Input** (label/hint/error), **Checkbox**.
- `display/` — **Card** (elevated/outline/flat + accent bar), **Badge**, **Stat**, **ServiceBadge**.

**UI kits** (`ui_kits/`)
- `website/` — interactive marketing-site recreation: Home, Services (with switcher), Insights, Contact, shared Header/Footer. See its `README.md`.

**Slides** (`slides/`) — presentation template specimens at 1280×720: `title`, `section`, `content`, `stats`, `quote`, `services`, `closing`.

**Foundation cards** (`guidelines/`) — the specimen `.html` cards that populate the Design System tab (Colors, Type, Spacing, Brand).

**Assets** (`assets/`)
- `logo-primary.png` — full-colour lockup (light backgrounds, default).
- `logo-black.png` — mono black lockup.
- `logo-white.png` — all-white lockup (dark backgrounds).
- `logo-reverse.png` — colour mark + white wordmark (dark backgrounds).
- `logo-mark.png` — colour butterfly mark only (light bg / favicon / avatar).
- `logo-mark-white.png` — colour mark with white strokes (dark bg).
- `logo-governance.png · logo-strategy.png · logo-risk.png · logo-resilience.png` — service-line lockups.

---

## 6. Caveats & substitutions

- ⚠️ **Font:** Calibri → **Carlito** (open, metric-compatible). Pixel-faithful for layout; use real Calibri inside native Office collateral (decks, Word proposals).
- ⚠️ **Icons:** no extractable bluezoo icon set was provided → standardised on **Lucide** (CDN) for matching thin-line style.
- The colour ramps, semantic aliases, spacing/shadow/motion scales and all components are **derived** to harmonise with the brand guide — they extend, but never contradict, the five primary + eight service colours.
- The marketing site and slide copy are **representative samples**, not approved bluezoo content.
