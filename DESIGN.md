---
name: Wolves Barber
description: Fictional quiet-luxury barbershop landing — charcoal ground, one gold accent, Playfair Display over Inter, bronze hairlines, flat depth, local art.
colors:
  ground: "#111110"
  surface: "#1a1917"
  surface-2: "#242220"
  ink: "#f5f2eb"
  ink-soft: "#a8a196"
  ink-mid: "#e4e0d8"
  gold: "#c9a45c"
  gold-soft: "#e0c58c"
  gold-deep: "#a5823e"
  rule: "#35302a"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.7rem, 5.5vw, 5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 3.5vw, 3.05rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  brand:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  promise:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.35rem, 1.6vw, 1.55rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  price:
    fontFamily: "Inter, Segoe UI, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.02em"
    fontVariantNumeric: "tabular-nums"
  body:
    fontFamily: "Inter, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Inter, Segoe UI, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Inter, Segoe UI, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
  label:
    fontFamily: "Inter, Segoe UI, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
    textTransform: "uppercase"
rounded:
  sm: "0.25rem"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "1.75rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.7rem"
    typography: label
  button-primary-hover:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.7rem"
    typography: label
  nav-action:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.sm}"
    padding: "0.45rem 0.85rem"
    borderWidth: "1px"
    typography: label
---

# Design System: Wolves Barber

## Overview

**Creative North Star: “Cadeira à Meia-Noite”**

The page is a chair under one warm shop lamp after dark: a charcoal ground, warm ivory type, and a single muted gold line that carries every action. The brand is fictional, but the room should feel specific — calm, well-run, and expensive by attitude rather than by ornament.

The visual language is editorial quiet luxury. Near-black grounds, warm off-white text, and one gold accent. Depth comes from 1px bronze hairlines and lifted charcoal fields, never shadows. Playfair Display carries the voice; Inter keeps prices, labels, navigation, and captions matter-of-fact.

**Key Characteristics:**
- Charcoal-first, never pure black and never a light page
- One chroma: gold means act, link, or current place
- Serif display over a neutral sans body
- Flat by default: no shadows, no gradients, no blur
- Square media, small 0.25rem control radius
- One arrival curve for every entrance
- Local art instead of stock photography or third-party embeds

## Colors

### Primary
- **Gold** (#c9a45c): The accent system — primary CTA fill, service prices, focus outline, gallery hairlines, the wolf mark.
- **Gold Soft** (#e0c58c): Gold as text on dark — prices, the footer handle, the hero signature subtitle, icon strokes.
- **Gold Deep** (#a5823e): Pressed state for filled actions.

### Neutral
- **Ground** (#111110): Page ground and the hero plate.
- **Surface** (#1a1917): The services band, gallery cards, review cards, and contact colophon.
- **Surface 2** (#242220): Hover grounds for rows and controls.
- **Ink** (#f5f2eb): Headlines, body, values.
- **Ink Soft** (#a8a196): Descriptions, captions, nav at rest, footer.
- **Ink Mid** (#e4e0d8): The hero deck — a step brighter than Ink Soft, a step quieter than Ink.
- **Rule** (#35302a): 1px bronze hairlines, dividers, and media borders.

**The One Accent Rule.** Gold, Gold Soft, and Gold Deep are the only chroma. A second hue breaks the room.

## Typography

**Display:** Playfair Display (Georgia, Times New Roman, serif)
**Body:** Inter (Segoe UI, Arial, sans-serif)

Playfair carries headlines, service names, the wordmark, and the hero signature. Inter handles prices, labels, navigation, and supporting copy. Italic Playfair 500 is reserved for the hero signature, the emphasized phrase in the hero deck, and the second line of the hero statement.

### The Ramp

| Step | Token | Size | Weight | Tracking | Role |
|---|---|---|---|---|---|
| Display | `--type-display` | clamp(2.7rem, 5.5vw, 5rem) | 600 | -0.02em | Hero statement only, lh 1 |
| Headline | `--type-headline` | clamp(1.9rem, 3.5vw, 3.05rem) | 600 | -0.01em | Section titles, lh 1.04 |
| Brand | `--type-brand` | 1.3rem | 600 | 0.01em | Header wordmark |
| Title | `--type-title` | 1.375rem | 500 | -0.005em | Service names, contact heading |
| Promise | `--type-promise` | clamp(1.35rem, 1.6vw, 1.55rem) | 500 | -0.005em | Hero promise line, lh 1.3 |
| Price | `--type-price` | 1.0625rem | 700 | 0.02em | Tabular prices |
| Body | `--type-body` | clamp(1rem, 1.15vw, 1.0625rem) | 400 | normal | Intros, decks, lh 1.65 |
| Body small | `--type-body-sm` | 0.9375rem | 400 | normal | Service descriptions, facts, lh 1.55 |
| Caption | `--type-caption` | 0.8125rem | 600 | 0.08em | Meta lines, gallery notes, footer |
| Label | `--type-label` | 0.75rem | 700 | 0.12–0.18em | Nav, buttons, ledger labels |

- The hero statement is the only Display instance on the page.
- Sections do not use eyebrows or kickers. The headline is the first thing said.
- Uppercase tracking belongs to short functional strings only.

## Layout

A centered stage of `min(100% - 3rem, 1200px)`, with a matching header gutter. Sections use `clamp(4.25rem, 8.5vw, 7rem)` vertical padding and 1px Rule separators. The services and contact bands are Surface fields, not cards.

The hero is a two-column split inside the stage: text starts at the stage's left edge, and the wolf plate occupies the right column, capped to the art's native 4/5 frame so it is never cropped. Both outer margins match, which keeps the emblem aligned with the header and the sections below on wide screens. The statement is authored in two lines — “Seu estilo.” in roman, “Sua identidade.” in italic — and keeps that break at every width. Below 901px it stacks and centers: the text blocks center, and the plate becomes a 4/5 illustration capped at `min(100%, 30rem)`.

The services ledger is two columns of five and four rows on desktop, collapsing to one column below 700px. The gallery is a three-column grid, two columns at 900px and below. The contact section is a colophon: intro and CTA left, facts and local map right, stacking below 900px. The header collapses to a toggle at 700px. Below 600px the stage narrows to 1rem gutters.

Spacing rhythm: 0.75rem label gaps → 1rem grid gaps → 1.5rem row padding → 2rem column gaps → fluid section padding.

### Anchors and the sticky bar

Every section carries `scroll-margin-top: calc(var(--scroll-offset) + var(--scroll-gap))`. The closed header is 5.5rem on desktop and 4.75rem at 700px and below. The script updates `aria-current` on the section under the viewport's middle band; current state is an ivory underline, hover is gold.

## Elevation & Depth

**The Flat-By-Default Rule.** No shadows, no gradients, no blur. Depth is built from hairlines, full-bleed color fields, and the ground/ink contrast. Hover changes color or underline, never elevation.

## Shapes

Media is square and flush. Controls use 0.25rem corners. The brand mark is a 2.75rem circle. All borders are 1px Rule.

## Components

### Buttons

- **Shape:** 0.25rem corners, uppercase Label type, min-height 3rem, padding `1rem clamp(1.15rem, 2.2vw, 1.7rem)`.
- **Primary:** Gold fill, Ground text. Used for the hero and contact “Agendar” actions. Both are inert `<button type="button">` elements in this demo; they keep the affordance without a destination.
- **Nav action:** Gold text in a 1px muted-gold outline at 701px and wider. It reads as an action, not as the current section. In the mobile menu it remains a full-width list row.
- **Hover / press:** the nav action fills Gold with Ground text on hover or focus; primary actions step to Gold Deep over 180ms. `:active` scales to 0.98; focus also uses the global 2px gold outline at 3px offset.
- **Demo disclosure:** each inert action references `#demo-note` with `aria-describedby` and carries a demonstration `title`.

### Masthead

Sticky Ground bar with a 1px Rule border. Left: the wolf icon in a 2.75rem bordered circle, then the Playfair wordmark with a gold “Wolves” and a tracked uppercase “Barber”. Right: Label-step links, Ink Soft at rest; hover and focus turn gold; the current section wears an ivory underline. The nav action is gold text in a thin muted-gold outline from 701px up; hover and focus fill it with gold and switch the text to Ground. In the mobile menu it remains a full-width text row. Links and the action keep a 2.75rem minimum height.

### Hero

Two-column split inside the stage. The text column contains the Display statement, the Promise subtitle, a deck with one italic phrase, the intro paragraph behind a 1px Rule hairline, a caption meta line, and the primary action. The media column holds `wolves-hero.svg` in a 4/5 frame — the art's native ratio — centered vertically so the full circle and wolf-skull emblem are visible at every desktop width, with an HTML signature (“Wolves” in italic Playfair over tracked “BARBER”) anchored near the bottom. The signature is decorative and pointer-inert.

Below 900px the hero stacks and centers. The media becomes a 4/5 plate capped at 30rem. No video, autoplay, or looping animation exists in the hero.

### Service Ledger

A printed ledger on Surface with nine rows in two columns. Each row is a grid: name and description left, tabular Gold Soft price right. A 1px rule opens the ledger, and each row closes on its own hairline so the last row of each column is finished. There are no dotted leaders. Graduated services carry an Ink Soft “a partir de” before the number. Hover or focus-within fills the row with Gold and flips text to Ground.

### Gallery

A three-column grid of six local illustrations, each in a 4/5 frame with a 1px Rule border and a Surface caption block. Captions name the cut and add a short material note. Below 361px the caption padding and title size tighten so two columns remain legible. A caption under the grid states that the images are illustrative. No Instagram widget, iframe, or third-party script.

### Reviews

Three review cards between the gallery and contact. They are explicitly fictional and each card carries a visible “Depoimento ilustrativo” label. When the grid drops to one column at 900px and below, each card caps at 46rem and centers; desktop stays three columns. There is no Google API, no rating average, and no external profile link.

### Contact Colophon

Surface field with two columns: headline, intro, inert CTA, and status left; a `<dl>` of facts right behind a vertical Rule hairline that becomes a top border when stacked. Facts are phone, hours, Instagram, and address in plain text — no `tel:`, `https:`, or map links. Each label carries a 1.6-stroke line icon in Gold Soft. At 901px and above the status sits at the bottom of the left column behind a 1px rule, closing the asymmetry against the taller facts column; below 901px it stays directly under the CTA. Below the facts, `map-wolves.svg` is a local 8/5 illustration with a 1px border and a caption identifying it as an illustrative map.

### Collapsible Menu (≤700px)

- **Toggle:** “Menu” label plus two bars in currentColor that rotate into an X. Hover and open take gold.
- **State:** only the toggle's `aria-expanded`; CSS reads it and the script mirrors it with `data-open` on the nav.
- **Progressive enhancement:** `html[data-nav-toggle="ready"]` is written by `script.js`. Without it, the toggle stays hidden and the nav remains a visible list.
- **Panel:** in flow, not overlaid; no focus trap. Rows are full-width and separated by Rule hairlines. Closing on link or CTA click, outside click, and Escape restores the toggle as the source of truth.

### Footer

A single flex row: copyright, fictional phone and handle, Instagram in Gold Soft, and a full-width demonstration note under a 1px Rule. The note is the target of every demo CTA's `aria-describedby`.

## Motion

Motion has one job: the room settling around the visitor and confirming a press. Nothing loops; nothing floats.

### The Focal Moment — *the room settles*

- **The veil lifts.** `.hero__media::after` fades from 0.92 to 0 over 620ms, revealing the wolf plate.
- **The plate settles.** `wolves-hero.svg` scales from 1.045 to 1 over 900ms.
- **The statement is pressed.** The h1 opens through a `clip-path` inset over 560ms.

All three are compositor-only and use `--ease-settle` (`cubic-bezier(0.16, 1, 0.3, 1)`). The deck, intro, meta, and action are outside the choreography and arrive complete.

### Supporting Motion

- **Service ledger:** nine rows, 40ms apart, 320ms each, bound to `[data-revealed]` with a 5s safety net.
- **Gallery and reviews:** the same reveal contract; content is visible without JavaScript.
- **Menu:** rows settle 40ms apart over 200ms.
- **Press:** `.action:active` scales to 0.98 over 150ms.

### Rules

- **One curve.** No bounce, elastic, or second easing.
- **The visible default.** Resting state is the finished state; entrances use `animation-fill-mode: backwards`.
- **Type, never controls.** A `clip-path` may reveal a heading; it never covers an interactive element.
- **Reduced motion** collapses durations and delays to 0.01ms, removes smooth scrolling, and disables the ledger observer so content renders static.

## Do's and Don'ts

### Do

- Keep grounds charcoal and text Ink; use Gold only to act, link, or mark the current place.
- Build depth with 1px bronze rules and Surface fields.
- Set media flush: 0 radius, `object-fit: cover`.
- Use uppercase with 0.12–0.18em tracking for short functional strings only.
- Set font sizes from `--type-*` tokens.
- Honor `prefers-reduced-motion` and keep the global focus style on every interactive element.
- Label fictional content and inert actions honestly.

### Don't

- Add shadows, gradients, or blur.
- Introduce a second chroma or lift the ground to a light page.
- Add an eyebrow or section number above a headline.
- Uppercase a sentence or exceed 0.18em tracking outside the brand subtitle.
- Round media or use more than 0.25rem on controls (the brand circle is the exception).
- Reintroduce the Elfsight widget, a Google Maps iframe, or real review data.
- Give the demo CTAs a destination.

## Recorded Decisions

- **The brand is fictional.** Wolves Barber, its address, phone, prices, hours, reviews, and map are invented for portfolio demonstration. The footer note makes this explicit, and the CTAs are inert by design.
- **Local art replaces external media.** The former animated video and Instagram widget were removed. The hero uses `wolves-hero.svg`; the gallery uses six local illustrations; the map is a local illustration. This removes third-party scripts, network dependence, and the video compatibility fallback.
- **The wolf mark is a faceted portrait.** The master artwork (`image.jpg`) was vectorized and recomposed into `wolves-icon.svg`, `wolves-hero.svg`, and `wolves-favicon.svg`. The gold facets, pompadour, mustache, teeth, and beard are preserved on charcoal, with no photographic texture.
- **The header CTA became a button.** The old WhatsApp link opened a real destination. The replacement keeps the label and gold treatment but is a `type="button"` element with no href, so it cannot initiate a booking.
- **Contact facts are plain text.** Phone, handle, and address are not links: a `tel:` or map link would create a false promise in a fictional demo.
- **The gallery is an in-house grid.** Six illustrations keep the page self-contained and give the portfolio a consistent visual voice. The grid drops from three to two columns at 900px.
- **The map is illustrative, not geographic.** `map-wolves.svg` avoids an external iframe and does not pretend to be a live map.
- **Reviews are labeled illustrations.** The cards no longer claim to be Google reviews. The “Depoimento ilustrativo” label and the section intro remove any ambiguity.
- **The hero signature is HTML, not baked into the image.** This keeps the wordmark selectable, responsive, and independent of the SVG composition.
- **The type-scale refinement pass is CSS-only and reversible.** The stage is 1200px, the display and headline steps peak at 5rem and 3.05rem, and the hero promise has its own type step. No HTML, JS, or content was changed in that pass.
- **The 2026 editorial refinement is incremental.** The hero statement breaks after “Seu estilo.” with the second line in italic; the desktop nav action is outlined; the ledger opens and closes on hairlines; gallery captions tighten below 361px; single-column reviews cap at 46rem; and the contact status anchors the bottom of the left desktop column. Only the hero statement markup and CSS changed; JS and content are unchanged.
