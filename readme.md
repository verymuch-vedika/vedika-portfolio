# Vedika's Design System

The visual language of **Vedika Merchant's portfolio** (vedikamerchant.com) — a service & experience designer and UX researcher with 6+ years across energy, automotive, finance and banking. One product surface: a personal portfolio website (home page + long-form case studies + resume).

## Sources
Built from the DC files in this project (no Figma or repo was provided):
- `Home.dc.html` — home page (hero, about, trusted-by, case stack, journey, testimonials, contact, footer)
- `DPCL Case Study.dc.html`, `ZMW…`, `Pearstream…`, `Mature Money Case Study.dc.html` — case-study template
- `Resume.dc.html` — A4 resume on `<doc-page>`; `images/` — photography, covers, client logos

## Index
- `styles.css` — entry point (imports only) → `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/` — Icon, TextLink, Eyebrow, Tag, FactChip, IconCircle
- `components/cards/` — CaseCard, QuoteCard, StatCard, TimelineCard, InfoCard, BannerQuote, MetaList
- `components/navigation/` — NavBar, SectionNav, PillTabs, Footer
- `components/resume/` — ResumeHeader, ResumeSection, RoleHeading, EntryList (from `Resume.dc.html`, A4 print)
- `components/mobile/` — MobileNav (hamburger dropdown), TimelineStepper (≤960px)
- `Design System.dc.html` — visual overview page of every card
- `components/_loader.js` — preview helper (uses compiled bundle, else transpiles sources)
- `ui_kits/portfolio/` — click-through Home → Case study recreation
- `assets/` — icons (own sprite as SVG), logo-mark.svg, favicon.svg, photography, client logos
- `SKILL.md` — agent-skill entry

**Intentional additions:** `Icon` (wraps the inline SVG sprite into a component); `Tag tone="light"` (not used in source).

## Content fundamentals
- **Voice:** first person, warm, plain-spoken, a little playful. "Hi, I’m Vedika", "Optimist | Realist | Workist", "98% chance I’ll ask a “why?” or “how?” one more time".
- **I / you:** "I" for Vedika; readers are addressed directly in CTAs ("Want to get in touch? Drop me a line", "Email me").
- **Casing:** Title Case for section headings ("About Me", "Case Studies", "My Journey"); sentence case for everything else, including card titles ("Came back, went solo"). Uppercase only inside Tags.
- **Numbers carry proof:** "+6 Years designing", "+100M Users impacted", "1.7 lakh+ households", "650+ dealerships". Indian numbering (lakh) is kept where it's native to the project.
- **Case-study copy** is outcome-first and concrete: Problem / Approach & what I did / Outcome, "Too long; didn’t read", NDA disclaimer at the top. Emphasis inside grey prose = a span switched to ink #222, never bold.
- **Testimonials** are short excerpts with ellipses, attributed "Role · Company".
- **Punctuation:** curly quotes and apostrophes (’ “ ”), middle dot separators, ↓ / ↗ arrows in link text. **No emoji.**

## Visual foundations
- **Colour:** essentially monochrome. Ink #222 on white and warm-neutral greys (#f3f3f3 canvas, #f2f2f2 section, #fafafa soft, #efefef media). Secondary text #7b7b7b, tertiary #a3a3a3. #222 doubles as the accent (dots, active bars, tags, dark discs). The only hue: faint sand/mint radial glows behind the Journey section.
- **Type:** Inter Tight only. Display & numerals in Light 300 with tight negative tracking (-0.02 to -0.035em, line-height .86–.9); headings Regular 400; wordmark and banner quote 500. Body 17px/1.72 grey — generous and airy.
- **Backgrounds:** flat greys alternate section to section; no gradients except the soft glows and photo vignettes. Footer is ink with hairline outlined tile rectangles; the contact CTA uses soft tile blocks under a 54px top-rounded panel, masked out in the middle.
- **Imagery:** portraits and personal photos are black-and-white (grayscale + slight sepia, raised contrast); case covers are illustrations/screens at saturate(.85). Banner photo is grayscale at 55% brightness with a radial dark vignette.
- **Corners:** never sharp. 6px thumbs, 8px about card, 12px inner media, 14px cards, 20px case cards, 999px pills/chips/eyebrows.
- **Cards:** white on grey, no border or a 1px #e3e3e3 hairline, no shadow at rest. Shadow appears only on interaction (hover lift 0 18px 40px -24px) or for the active timeline card.
- **Borders:** 1px hairlines (#dcdcdc / #e3e3e3) for rails, chip outlines, metadata rules.
- **Hover:** image zoom to 1.05 over 1.2s; arrow nudges translate(3px,-3px); cards lift 6px; nav links gain a 1px underline; footer pills fill #2f2f2f; border darkens #e3e3e3 → #dcdcdc. No colour-shift hovers.
- **Press/focus:** no shrink; focus is a 2px ink outline, 3px offset, 4px radius.
- **Motion:** expo-out cubic-bezier(.16,1,.3,1) for everything spatial; scroll reveals fade + rise 28px over 1s with small staggers; counters tick up over 1.6s; portrait slides in 40px. All disabled under reduced motion.
- **Transparency/blur:** only for sticky bars (rgba(243,243,243,.9) + blur 8–10px) and the "Coming soon" glass pill.
- **Layout:** fluid gutter clamp(20px, 4.3vw, 62px); 1280px container; 100px nav; sticky left index/TOC columns; sticky stacking case cards on desktop; horizontal draggable journey track.

## Iconography
- A tiny **own inline SVG sprite** (`<symbol>`s in each page): arrow-up-right ↗ (signature link arrow), arrow-down, chevrons, arrow-right, spark (filled 4-point star bullet), ask (question in circle), expand, quote (filled). 1.5–1.6px round-cap strokes, `currentColor`. Copied to `assets/icons/*.svg` and wrapped by the `Icon` component.
- Unicode arrows (↓ ↗) appear in link text ("Resume ↓"). No icon font, no emoji, no PNG icons.
- **Logo:** the brand is the plain wordmark "Vedika" in Inter Tight 500. A V monogram (`assets/logo-mark.svg`) and `favicon.svg` exist in source.
