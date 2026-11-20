# Phase 6 — Browser Verification, Regression Fixes & Release Preparation Handoff

Date: 8 November 2026 (IST)  
Branch: `redesign/phase-1-foundations`  
Scope: Local production build browser inspection (390 × 844, 768 × 1024, 1440 × 900), calendar load & timeout hardening, inquiry form validation & mock submission tests, SEO metadata/canonical audit, and security policy synchronization.

---

## 1. Summary of Changes

### A. Calendar Loading & Timeout Architecture (`src/app/contact/book-a-consultation/page.tsx`)
- **Resolved Lazy Loading Mismatch:** Changed `loading="lazy"` to `loading="eager"` on the dedicated consultation page so the scheduler begins loading immediately on page mount, aligning with the 12-second bounded timeout timer.
- **Strict Attempt ID Guarding:** Tied both the loading timer and the iframe `onLoad` handler to `activeAttemptRef.current` (`retryCount`). Stale load events or outdated timers from earlier attempts cannot clear a newer timer or alter state.
- **Usable Fallback Overlay:** If the 12-second timer expires before load completion (e.g. stalled network or connection drop), the state transitions to `"timeout"`. `handleIframeLoad` preserves the `"timeout"` overlay once fired, ensuring error documents or late arrivals do not dismiss user recovery options.
- **DOM & Lifecycle Cleanup:** Timers are strictly cleared on successful iframe load, on user retry, and on component unmount.
- **Permanent Escape Link:** Kept the persistent *"Open calendar in full tab ↗"* link (`CONTACT_INFO.calComUrl`) visible above the embed in all states (loading, loaded, and timeout).

### B. SEO Metadata & Canonical Tag Repair
- **Root Layout Canonical Decoupling (`src/app/layout.tsx`):** Removed `alternates: { canonical: "/" }` from the root layout. Previously, Next.js caused all untagged child pages (including 404 `_not-found.html`, admin logins, and `/proposal`) to inherit canonical URLs pointing to the homepage.
- **Homepage Explicit Canonical (`src/app/page.tsx`):** Exported dedicated `metadata` with `alternates: { canonical: "/" }` on the homepage route. Verified via static build inspection that zero non-root pages now inherit root canonicals.
- **Removed Phantom Hreflang References (`src/app/contact/layout.tsx` & `src/app/contact/book-a-consultation/layout.tsx`):** Cleaned up nonexistent `hi-IN` language alternates pointing to non-existent `/hi/...` paths.

### C. Security Policy Synchronization (`netlify.toml` vs. `next.config.ts`)
- **Edge CDN CSP Alignment:** Synchronized `netlify.toml`'s `Content-Security-Policy` with `next.config.ts`.
  - Added `frame-src 'self' https://api.razorpay.com https://cal.com;` to prevent Netlify edge CDN headers from blocking the Cal.com scheduler iframe.
  - Aligned `connect-src`, `script-src`, `style-src`, `font-src`, and `img-src` to permit Cal.com, Razorpay, Sentry, Supabase, Google Fonts, and Unsplash without compromising default protections.
  - Because browsers enforce the strict *intersection* of multiple CSP headers, unifying directives across Next.js server headers and Netlify CDN headers guarantees zero policy conflicts.

---

## 2. Browser Verification Matrix

All tests executed against the local production build (`next start -p 3000`) using Google Chrome Headless via Chrome DevTools Protocol (CDP):

| # | Page | Viewport | Interaction / Flow | Verification Check | Result | Concrete Evidence |
| :- | :--- | :--- | :--- | :--- | :-: | :--- |
| 1 | Homepage | Mobile (390 × 844) | Viewport scroll | No horizontal overflow | **PASS** | `scrollWidth: 390px, innerWidth: 390px` |
| 2 | Homepage | Mobile (390 × 844) | Hero above-the-fold | Booking CTA visible early before project preview | **PASS** | `bookBtnTop: 477px, previewTop: 657px, visible: true` |
| 3 | Homepage | Tablet (768 × 1024) | Viewport scroll | No horizontal overflow | **PASS** | `scrollWidth: 768px, innerWidth: 768px` |
| 4 | Homepage | Tablet (768 × 1024) | Hero layout | Booking CTA visible early before project preview | **PASS** | `bookBtnTop: 520px, previewTop: 672px, visible: true` |
| 5 | Homepage | Desktop (1440 × 900) | Viewport scroll | No horizontal overflow | **PASS** | `scrollWidth: 1440px, innerWidth: 1440px` |
| 6 | Homepage | Desktop (1440 × 900) | Hero layout | Booking CTA visible early before project preview | **PASS** | `bookBtnTop: 533px, previewTop: 706px, visible: true` |
| 7 | Homepage | Mobile (390 × 844) | Mobile menu open & Escape | Menu opens with all 4 links + Book a call; closes on Escape | **PASS** | Links: `Work, Services, About, Contact, Book a call`; overlay unmounts on Escape (`expanded: false`) |
| 8 | Homepage | Desktop (1440 × 900) | Anchor `#work` | Section clears fixed header | **PASS** | `headerHeight: 72px, sectionTop: 192px` (positive offset) |
| 9 | Homepage | Desktop (1440 × 900) | Anchor `#services` | Section clears fixed header | **PASS** | `headerHeight: 72px, sectionTop: 192px` (positive offset) |
| 10 | Homepage | Desktop (1440 × 900) | Anchor `#about` | Section clears fixed header | **PASS** | `headerHeight: 72px, sectionTop: 192px` (positive offset) |
| 11 | Homepage | Desktop (1440 × 900) | Anchor `#contact` | Section clears fixed header | **PASS** | `headerHeight: 72px, sectionTop: 192px` (positive offset) |
| 12 | Contact | Desktop (1440 × 900) | Empty submit | Rejects empty fields, triggers `role="alert"`, focuses first invalid field | **PASS** | Focused ID: `_R_...-name`, alerts: `Please enter your name`, `description`, `agreement` |
| 13 | Contact | Desktop (1440 × 900) | Whitespace submit | Rejects whitespace-only name and project description | **PASS** | Captured alerts: `Please enter your name.` and `description` |
| 14 | Contact | Desktop (1440 × 900) | Mocked 500 error | Preserves inputs, shows error banner, generates WhatsApp & mailto links | **PASS** | Inputs preserved (`Rohan Sharma`), WhatsApp & mailto links contain prefilled URL-encoded brief |
| 15 | Contact | Desktop (1440 × 900) | Mocked 200 success | Displays confirmation screen, sets focus on heading | **PASS** | Heading `Project inquiry submitted` displayed, form replaced |
| 16 | Booking | Mobile (390 × 844) | Initial render | Embed mounts eagerly without horizontal overflow, external link present | **PASS** | `iframeLoading: eager`, `hasOverflow: false`, persistent external link visible |
| 17 | Booking | Tablet (768 × 1024) | Initial render | Embed mounts eagerly without horizontal overflow, external link present | **PASS** | `iframeLoading: eager`, `hasOverflow: false` |
| 18 | Booking | Desktop (1440 × 900) | Initial render | Embed mounts eagerly without horizontal overflow, external link present | **PASS** | `iframeLoading: eager`, `hasOverflow: false` |
| 19 | Booking | Desktop (1440 × 900) | Stalled load (12s) | 12s timeout expires on stalled network; renders accessible fallback overlay | **PASS** | Alert banner `Calendar loading could not be confirmed`, `Retry loading` button, external Cal.com link, WhatsApp link |
| 20 | Booking | Desktop (1440 × 900) | Click Retry loading | Clears timer, increments attempt ID, resets to loading spinner | **PASS** | `clicked: true`, `backToLoading: true`, status: `Connecting to Cal.com scheduler…` |

---

## 3. Automated Test Suite Results

All verification suites ran clean with zero errors:

| Check | Command | Result | Notes |
| :--- | :--- | :-: | :--- |
| **Inquiry Unit Tests** | `npm run test:inquiry` | **PASS** | 6 passed, 0 failed (Netlify form registration, payload builder, whitespace rejection, fallback URLs, timeout abort) |
| **Sales Unit Tests** | `npm run test:sales` | **PASS** | 23 passed, 0 failed |
| **TypeScript Check** | `npx tsc --noEmit --incremental false` | **PASS** | Exit code 0, 0 type errors |
| **ESLint Check** | `npm run lint` | **PASS** | 0 errors (99 pre-existing warnings in untouched routes) |
| **Production Build** | `npm run build` | **PASS** | All 93 static pages generated successfully in 1.1s |

---

## 4. Remaining Defects & Risk Assessment

| Issue / Risk | Severity | Launch Impact | Mitigation / Next Action |
| :--- | :---: | :---: | :--- |
| **Netlify Edge CDN vs. Next.js Header Conflict** | Medium | Low (Mitigated) | `netlify.toml` CSP has been synchronized with `next.config.ts`. Confirm headers on live deploy preview. |
| **Cal.com Cross-Origin Scheduling Availability** | Low | Low (Mitigated) | Embedded calendar is subject to Cal.com uptime. Mitigated by always-visible external link and 12-second bounded timeout with direct WhatsApp (+91 96673 44125) and project brief fallbacks. |
| **Live Database Storage & Inbox Receipt** | High | Informational | Local HTTP 200 verifies payload structure, serialization, and browser UI state. Actual Netlify Forms database persistence and email notification receipt remain open until verified on production (Gate 2). |

---

## 5. Phase 7 Release Checklist

Execute these steps in order when releasing to production:

- [ ] **Step 1: Deploy Intended Revision**
  - Push branch `redesign/phase-1-foundations` to GitHub.
  - Deploy commit to Netlify (deploy preview or production).
  - Retain previous deployment ID for instant rollback if required.
- [ ] **Step 2: Inspect Live Production Security Headers & Calendar**
  - Run `curl -I https://jayant-systems.online/contact/book-a-consultation`.
  - Confirm `Content-Security-Policy` includes `frame-src 'self' https://api.razorpay.com https://cal.com;`.
  - Verify embedded Cal.com calendar loads real slots in desktop and mobile viewports without CSP errors.
- [ ] **Step 3: Confirm Netlify Form Detection**
  - Open Netlify Dashboard -> **Site Configuration** -> **Forms**.
  - Confirm `project-inquiry` is registered and active.
- [ ] **Step 4: Live Inquiry Submission Verification**
  - Submit one labeled test inquiry (e.g. `Name: Tester [Phase 7 Verification]`) on `/contact` using an email address under direct tester control.
  - Confirm row persistence in Netlify Forms dashboard.
  - Confirm email notification receipt in `jayantwebaisystems@gmail.com` with valid `Reply-To`.
  - Delete test record from Netlify Forms dashboard.
- [ ] **Step 5: Live Calendar Booking Verification**
  - On `/contact/book-a-consultation`, select an available test slot and complete booking with a tester-controlled email.
  - Confirm Google Meet / Cal.com invitation received by both attendee and Jayant Olhyan.
  - Cancel the test booking in Cal.com to release the time slot.
- [ ] **Step 6: Mark Release Complete**
  - Keep inquiry delivery, completed booking confirmation, and live/local release alignment open until confirmed in production.

