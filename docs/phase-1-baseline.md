# Phase 1 — Launch baseline

Date: 7 November 2026 (IST)
Scope: landing page, contact page, discovery-call booking. No application code changed.

## System inspected
Next.js 16.3.8 installed; React 19; TypeScript; Tailwind 4; npm/package-lock.json. App Router. Active shared shell: app/layout.tsx, v2/SiteHeader, v2/SiteFooter. Homepage uses components/home. Supabase authentication is restricted by middleware matcher to admin routes; API guards and SQL migrations exist. These were traced at configuration level, not audited for security. Other backend/payment features remain outside this sprint.

Netlify is identified by live response headers and repository configuration. Exact linked Netlify project, deployed commit, dashboard settings and environment are not verified. Local .env.local exists; secret values were not printed. Public homepage/contact copy is static; inquiry delivery depends on Netlify Forms rather than Supabase. Booking uses an external Cal.com iframe. CI configuration was inspected.

## Verification results
- Starting git status: clean.
- npm run build: PASS, all 93 static pages generated. Deprecation warnings for middleware convention and Edge Runtime.
- npx tsc --noEmit --incremental false: PASS.
- npm run lint: exit 0, 0 errors and 107 warnings, primarily unused variables/imports.
- npm run test:sales: PASS, 23/23. These tests cover sales logic/database behavior, not public inquiry or calendar delivery.
- Local production server started on port 3100. Homepage, contact and booking pages inspected in browser. Desktop/default viewport and 390 x 844 mobile viewport sampled. This is a baseline inspection, not exhaustive responsive or accessibility certification.
- Cal.com iframe loaded on local booking page and exposed November 2026 available slots and timezone Asia/Calcutta. No booking created.
- Live booking route returned HTTP 200. Live CSP includes frame-src https://cal.com; therefore an active live CSP embed block was NOT established. netlify.toml contains a different restrictive CSP: reconcile configuration before release.

## Prioritized findings
1. P1 — Live/local release divergence. Live homepage and booking page differ substantially from local source. Live booking page visibly displays May 2025 and a custom date/time form, whereas local source embeds Cal.com. Verify deployed revision and deployment source before release. Do not assume a live browser result validates local code.
2. P1 — Lead delivery unverified. ContactForm posts URL-encoded data to /__forms.html; public/__forms.html registers matching Netlify field names and honeypot. Actual Netlify form detection, persistence and inbox notification require deployed verification. A successful static GET is not delivery proof. Local Next.js is not the Netlify Forms processing service.
3. P1 — Booking duration mismatch. Website promises 15 or 15–20 minutes; actual Cal.com event states 30 minutes. Align copy with the event. Confirmation/invitation delivery remains unverified.
4. P2 — Mobile conversion placement. At 390 x 844, homepage opening shows headline and large project screenshot; primary booking/contact actions are below this preview. Move primary action above the preview in Phase 3.
5. P2 — Credential links are insufficient evidence. ProofRow links award/speaking claims to project demos rather than award results/conference records; education links to an internal section. Add appropriate evidence or qualify claims. A running project does not authenticate an award or degree.
6. P2 — Excessive qualification friction. Project type, budget, timeline and description are required alongside name/email/consent. Make qualification fields optional during contact implementation.
7. P2 — Calendar load resilience. Iframe spinner clears on load event, without explicit timeout/error handling. Keep external link and provide a clear fallback state.
8. P2 — Mixed visual systems and duplicated form framing. Neutral homepage and editorial contact page differ in typography/colors; HomeContact wraps a form that already renders its own heading/card. Consolidate during UI phases.
9. P2 — Offline notice appeared on local and live pages in this browser session despite successful page/calendar loading. Do not conclude a production connectivity bug yet: browser navigator.onLine/environment behavior needs reproduction in a normal browser. Check PWAHandler and service-worker caching during release validation.
10. P3 — Framework deprecations and 107 lint warnings are existing debt. Do not broadly refactor unrelated admin/sales surfaces during the landing-page deadline.

## Next phase handoff
Phase 2: consolidate navigation and conversion links using existing active header/footer; preserve backend architecture. Phase 3: finish homepage and evidence. Phase 4: verify deployed inquiry receipt. Phase 5: align scheduling duration and verify booking confirmation. Production dashboard access/inbox evidence is required to establish end-to-end delivery; do not claim this has passed.

## Release acceptance gates
Production build and type check pass; no new lint errors; mobile navigation works; primary call-to-action appears early; factual claims have relevant evidence; real inquiry is persisted and received; real booking is confirmed; live release matches intended source; scoped CSP works; no critical layout failures at mobile/tablet/desktop. Test data and any test booking must be identified explicitly and cleaned up through normal recovery-safe workflows.
