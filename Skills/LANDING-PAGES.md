---
name: landing-pages
description: Create high-conversion landing pages for small businesses using plain HTML/CSS/JS or React. Use this skill when the user asks for a landing page, homepage, campaign page, or lead-gen page for restaurants, PC stores, agencies, or similar local businesses.
---

Build a production-ready landing page focused on conversion for a specific small business type.

## Output Modes

Use one of these output modes based on the user request:
- `vanilla`: Single-page `index.html` with linked `styles.css` and `script.js`
- `react`: Reusable React components with a page-level container and scoped styles

If the user asks for "plain HTML/CSS/JS with React", provide:
1. A vanilla implementation first
2. A React implementation second

## Business Types

Support these business categories out of the box:
- Restaurants and cafes
- PC stores and computer repair shops
- Agencies (marketing, creative, automation, consulting)
- Local professional services (salons, gyms, clinics, law firms, accounting)

When the business type is not listed, map it to the closest category and keep the same conversion structure.

## Core Workflow

1. Capture page objective
2. Capture target audience and offer
3. Choose page structure and section order
4. Draft conversion-first copy
5. Implement visual direction and responsive layout
6. Add interaction and form handling
7. Validate accessibility, performance, and mobile rendering

## Input Collection

Ask for missing inputs in this order:
1. Business type and business name
2. Primary goal (`book`, `call`, `visit`, `buy`, `quote`, `lead form`)
3. Primary offer (promo, package, service promise, differentiator)
4. Service area or location
5. Brand assets (logo, colors, photos, preferred tone)
6. Trust assets (reviews, certifications, client logos, stats)
7. Contact details and CTA destination

When inputs are missing, use clearly labeled placeholders and continue.

## Proposed Input Packs

Offer these packs and let the user choose one before final polish:

### Pack A: Quick Launch
- Inputs: business name, business type, one CTA, phone/email
- Best for: fast draft in under 30 minutes
- Tradeoff: weakest brand alignment

### Pack B: Conversion Standard
- Inputs: all Pack A inputs plus offer, audience, 3 benefits, 3 FAQs, 2 testimonials
- Best for: most small businesses
- Tradeoff: needs moderate copy input

### Pack C: Premium Brand Fit
- Inputs: all Pack B inputs plus brand voice guide, photo direction, competitor references, objection list
- Best for: ad campaigns and premium services
- Tradeoff: highest input and review effort

Default to `Pack B` if the user does not choose.

## Section Blueprints by Business Type

Use these section patterns.

### Restaurants
1. Hero with cuisine promise and reservation CTA
2. Signature dishes or menu highlights
3. Social proof and ratings
4. Location, hours, and map block
5. Reservation or order CTA

### PC Stores
1. Hero with service promise and speed claim
2. Service grid (repair, upgrades, custom builds, accessories)
3. Pricing anchor or diagnostic offer
4. Trust proof (warranty, turnaround, customer ratings)
5. Contact and same-day service CTA

### Agencies
1. Hero with outcome-focused promise
2. Core services with measurable outcomes
3. Case studies or proof metrics
4. Process steps
5. Lead form CTA

## Build Standards

Apply these standards in every output:
- Use semantic HTML and accessible heading hierarchy
- Keep CLS low with explicit media sizing
- Keep JS minimal and purposeful
- Ensure responsive behavior for `360px`, `768px`, and `1280px+`
- Include visible focus states and keyboard-safe interactions
- Keep forms short and conversion-focused

## Copy Rules

Write concise copy with concrete outcomes:
- Lead with benefit, not company history
- Use direct CTAs ("Book a table", "Get repair quote", "Schedule strategy call")
- Handle one major objection in each key section
- Avoid filler and generic claims without proof

## Final Delivery Checklist

Before finalizing:
1. Confirm primary CTA appears above the fold and at end of page
2. Confirm page reads clearly in under 45 seconds
3. Confirm no broken links, missing images, or placeholder text unless explicitly marked
4. Confirm mobile spacing and text legibility
5. Confirm Lighthouse basics: accessible markup, optimized assets, and no blocking scripts unless required

## Reusable Prompt Template

Use this template when starting:

`Build a [vanilla/react/both] landing page for a [business type] named [business name]. Goal: [primary goal]. Offer: [primary offer]. Audience: [target audience]. Tone: [brand tone]. CTA: [cta text + destination]. Include sections for [list sections].`