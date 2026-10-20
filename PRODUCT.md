# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS single-page site. No build tools, framework, backend, or runtime API.

## Users

Portfolio reviewers — recruiters, potential clients, and other developers — evaluating frontend craft through a complete, believable barbershop landing page. The brand and its data are fictional.

## Product Purpose

Single-page demonstration site for Wolves Barber that presents the fictional shop's identity, services, gallery, reviews, and contact information. The page exists to show visual direction, responsive behavior, accessibility, and code quality — not to process real bookings.

## Positioning

Quiet-luxury neighborhood barbershop: charcoal ground, warm ivory type, one muted gold accent, and editorial typography. The experience should feel composed and specific, not like a generic barbershop template.

## Operating Context

- Static single-page site (HTML/CSS/JS, pt-BR)
- All imagery is authored locally as SVG or generated locally; no image API, stock library, or third-party embed
- Booking CTAs are intentionally inert `<button type="button">` elements with no destination. They keep the visual affordance of the real product while making clear, via the footer note, that this is a fictional demonstration
- Gallery: six local illustrations in a responsive grid, replacing the former Instagram/Elfsight widget
- Location: local SVG map (`assets/images/map-wolves.svg`) instead of an external map iframe; the address is plain text
- Reviews: three clearly labeled illustrative testimonials (“Depoimento ilustrativo”), not real Google reviews
- Contact details are fictional: Alameda da Lua, 42 — Jardim Noturno, São Paulo — SP; (11) 4002-8922; @wolvesbarber
- Google Fonts are the only external runtime request

## Capabilities and Constraints

- Services and prices:
  - Corte — R$ 55,00
  - Barba — R$ 45,00
  - Corte e barba — R$ 90,00
  - Progressiva — a partir de R$ 120,00
  - Relaxamento — a partir de R$ 60,00
  - Luzes — a partir de R$ 150,00
  - Sobrancelha — R$ 15,00
  - Depilação nasal/ouvido — R$ 15,00
  - Pézinho — R$ 15,00
- Hours: Tuesday to Saturday, 09:00–21:00; Sunday, 09:00–15:00; closed Monday
- Address: Alameda da Lua, 42 — Jardim Noturno, São Paulo — SP
- Phone: (11) 4002-8922
- Instagram: @wolvesbarber
- Tone of voice: direct, warm, confident — precise rather than informal
- Must preserve: the fictional nature of the brand and the absence of live integrations

## Brand Commitments

- Name: Wolves Barber
- Mark: a faceted wolf-skull portrait in muted gold — pompadour, mustache, teeth, and beard — used as the header logo, hero art, and favicon source
- Palette: charcoal ground, warm ivory text, muted gold accent, bronze hairlines
- Type: Playfair Display for display and editorial voice; Inter for body, labels, prices, and navigation
- Visual direction: “Cadeira à Meia-Noite” — a dark, well-run room under one warm lamp
- No stock photography, no gradients, no decorative shadows

## Evidence on Hand

- Locally authored SVGs: `wolves-icon.svg`, `wolves-hero.svg`, `wolves-favicon.svg`
- Six gallery illustrations: `fade.jpg`, `barba.jpg`, `toalha.jpg`, `cadeira.jpg`, `navalha.jpg`, `image.jpg`
- Local map illustration: `map-wolves.svg`
- Generated social cover: `og-cover.jpg` (1200×630)
- Generated favicons: 16/32/180/192/512 PNG, multi-size `favicon.ico`, and `site.webmanifest`

## Product Principles

1. Craft over generic: every section should feel deliberately composed for this brand.
2. Honest demonstration: fictional data and inert CTAs must be legible as such, without breaking the experience.
3. Accessibility is part of the design, not a cleanup pass: semantics, focus, contrast, reduced motion, and touch targets are built in.
4. Simple to maintain: one HTML file, one stylesheet, one script, local assets, no build step.

## Accessibility & Inclusion

- Semantic landmarks, headings, lists, and definition lists
- Visible `:focus-visible` styles on every interactive element
- `prefers-reduced-motion` disables entrances, smooth scrolling, and looping effects
- Responsive from 320px to wide desktop without horizontal overflow
- Touch targets at least 44px high
- Decorative SVGs are hidden from assistive technology; meaningful images carry alt text
- Demo CTAs expose `aria-describedby` pointing to the footer demonstration note
