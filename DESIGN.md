# Jayant Systems — Design Foundation
Version 2.0 · 19 Nov 2026 · Owner: Jayant Systems
Supersedes the v1 "quiet editorial" tokens (Inter display, white page) for the homepage and every page redesigned after this date. Legacy pages keep working on the old tokens until they are migrated.

## 0. Master brand statement (source of truth)
> **You run the business. We handle the digital.**
> Founder-led digital studio · Websites. Software. AI. Automation. Design. Content. Growth. · One partner for your entire digital ecosystem. · BUILD. AUTOMATE. CREATE. GROW.

All copy comes from `src/data/framework.ts` (framework PDF, Nov 2026). Service offerings carry `confirmed` flags; unconfirmed ones never reach the production build (`src/lib/capabilities.ts`). Voice: "we", founder named. No invented clients, testimonials, statistics or guarantees.

## 1. Brief
- **User:** founders of funded startups, clinic owners and D2C brands who need a website, AI automation or a web app and are deciding whether to trust a small studio.
- **Primary action:** book a 15-minute call (secondary: send an inquiry, WhatsApp).
- **Adjectives:** confident · warm · precise.  **Never feels:** like a template, a faceless agency, or a joke at the client's expense.
- **References:** two26.studio (motion grammar: preloader, curved marquee, scroll-scrubbed copy, sticker pills, looping product video, conversational FAQ). Clay.global (restraint, image-led work). We borrow *techniques*, never their copy, illustrations, typefaces or layouts.
- **Content reality:** real live products with real screenshots/screen-recordings; no client testimonials yet; no real founder photo yet. Proof is shown as verifiable facts and live links only.

## 2. Direction
Warm paper, one loud brand orange, heavy grotesk headlines, and motion that rewards scrolling — playful in movement, serious in claims. Mode: light.
The Aesthetic Origins preset (black + red, dark UI) does **not** fit: buyers include clinics and first-time founders, where warmth and legibility beat drama.

## 3. Typography
Primary display: **Bricolage Grotesque** (Google Fonts, SIL OFL — free for commercial use), variable weight + optical size + width.
Text: **Geist** (Google Fonts, OFL). Labels/data: **Geist Mono**. All loaded with `next/font/google` (self-hosted, CSP-safe). Latin only — add a Devanagari face before any Hindi copy.

| Role | Family / weight | Desktop | Mobile | Line-height | Tracking |
|---|---|---|---|---|---|
| Mega (hero, wordmark) | Bricolage 800 | 168px | 64px | 0.86 | −0.045em, uppercase |
| Display/H1 | Bricolage 700 | 148px (home) / 96px (pages) | 46px / 40px | 0.94–1.0 | −0.04em, sentence case, two-tone (line 2 in flame-ink) |
| H2 (section) | Bricolage 700 | 56–104px | 30–42px | 0.98–1.04 | −0.03em, sentence case |
| Statement (scrubbed paragraph) | Bricolage 600 | 56px | 30px | 1.08 | −0.025em |
| H3 | Geist 500 | 24px | 20px | 1.25 | −0.015em |
| Body | Geist 400 | 17px | 16px | 1.6 | 0 |
| Small | Geist 400 | 14px | 14px | 1.5 | 0 |
| Label/Eyebrow | Geist Mono 500 | 13px | 12px | 1.3 | +0.04em, uppercase |

## 4. Colour
| Token | Role | HEX | RGB | CMYK |
|---|---|---|---|---|
| `paper` | page background | #F7F1EA | 247 241 234 | 0/2/5/3 |
| `ink` | text, dark sections, primary button | #161310 | 22 19 16 | 0/14/27/91 |
| `flame` | brand accent — fills only (ribbon, stickers, CTA circle, preloader) | #F37021 | 243 112 33 | 0/54/86/5 |
| `flame-ink` | orange **text** on paper | #B8430A | 184 67 10 | 0/64/95/28 |

Neutral ramp: `sand` #EFE5DA (alt sections) · `hairline` #E2D7CA · `muted` #6B625A (secondary text) · `ember` #F4B48F (unread words in the scrubbed statement only).

Contrast (computed): ink on paper 16.5 ✓ · muted on paper 5.32 ✓ · flame-ink on paper 4.87 ✓ · ink on flame 6.3 ✓ · flame on ink 6.3 ✓ · #D9520B on paper 3.63 (display ≥ 48px only).
**Don'ts:** flame (#F37021) as text on paper (2.62 ✗) · white text on flame (2.94 ✗) · ember as resting text (1.59 ✗ — it must end as ink, and is ink when JS is off or motion is reduced).

## 5. Components
- **Radius:** media 20px · cards 24px · buttons, chips, inputs full pill · icon buttons circles.
- **Borders:** 1px `hairline`; no shadows on UI, soft shadows only on product screens inside media.
- **Primary button:** ink pill + label, paired with a flame circle holding ↗; on hover the circle rotates 45° and the pill lifts 2px. Secondary: hairline-outline pill → ink fill on hover. Text link: underline draws left→right. Focus-visible: 2px flame outline + 3px offset on every interactive element.
- **Sticker chip:** flame fill, ink text, Geist 500 14px, pill, rotated −6°…+6°.
- **Nav:** pill links (sand fill) left · wordmark centre · hours + “Let’s talk” right. Hides on scroll down, returns on scroll up.
- **Inputs:** pill, sand fill, ink text, flame focus ring.
- **Icons:** lucide, 1.75 stroke.

## 6. Signature motifs (max 3)
1. **Curved flame ribbon** — a tilted SVG band with a looping marquee of services, between hero and statement.
2. **Scroll-scrubbed statement** — one big paragraph whose words turn from `ember` to `ink` as you read; sticker chips drop onto it with a bounce.
3. **Live product loops** — square, muted, looping screen-recordings of shipped products instead of static mockups.

## 7. Imagery & motion
- Imagery: only real product captures (live URLs) and real photos. No stock, no AI-generated people or UIs.
- Video: muted, looping, `playsinline`, poster frame, WebM + MP4, ≤ 1 MB square / ≤ 2.5 MB hero; pause when off-screen.
- Motion: GSAP (ScrollTrigger, SplitText, CustomEase) + Lenis. Ease `expo.out` for entrances, `power3.inOut` for transitions; hovers 250ms. Preloader ≤ 1.4s, first visit per session only.
- `prefers-reduced-motion`: no preloader, no scrubbing (statement rendered in ink), marquee static, videos show posters, stickers placed without animation.
- Without JS everything is visible and readable.

## 8. Spacing & grid
8px base · container 1360px max, 40px side padding (16px mobile) · section padding 160px desktop / 96px mobile.

## 9. Tokens
See `src/app/globals.css` (`--color-paper`, `--color-ink`, `--color-flame`, `--color-flame-ink`, `--color-sand`, `--color-hairline`, `--color-muted`, `--color-ember`, `--font-bricolage`) and `src/app/layout.tsx` (font loading).

## 10. Don'ts
- No invented testimonials, logos, ratings, client names or statistics. Missing proof stays out or is a marked `[PLACEHOLDER]`.
- No second accent colour. Flame covers < 10% of any viewport.
- No content that only exists inside an animation or a video.
- Don't copy reference sites' copy, illustrations, characters or fonts.

## Changelog
- 2026-11-20 · v2.2 · Site-wide polish. Legacy `:root` tokens now map to paper/ink/flame-ink and every h1–h3 uses Bricolage. Inner-page header uses the homepage grammar (pills · wordmark · hours + “Let’s talk”). Footer moves to a flame field with ink type, a closing line and an edge-to-edge paper wordmark (decorative); the homepage `Wordmark` moved into it. Homepage closing CTA becomes an ink card so it separates from the footer. Contact page and form migrated to the studio direction.
- 2026-11-20 · v2.1 · Framework integration. Headlines move to sentence case at weight 700 with a two-tone ink / flame-ink second line; uppercase 800 is kept only for the wordmark, preloader, project names and proof numerals. Ribbon copy becomes BUILD • AUTOMATE • CREATE • GROW. New page template (`src/components/framework/blocks.tsx`) used by services, divisions, industries, about, process, pricing, FAQ and company pages. Site header switches to paper (#F7F1EA).
- 2026-11-19 · v2.0 · New direction for the motion-led homepage (Bricolage Grotesque, paper/ink/flame palette, three motifs).
