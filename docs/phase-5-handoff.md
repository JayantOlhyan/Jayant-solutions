# Phase 5 — Reliable Call Booking & Security Diagnosis Handoff

Date: 8 November 2026 (IST)  
Scope: Reliable call booking implementation, resilient Cal.com iframe handling, accurate scheduling claims, security header diagnosis (CSP in `next.config.ts` vs `netlify.toml`), and end-to-end launch release checklist.

---

## 1. Summary of Changes

### A. Calendar Loading Resilience & Fallback Options
- **Authoritative Scheduler Destination:** Bound to `CONTACT_INFO.calComUrl` (`https://cal.com/jayant-web-and-ai-systems/strategy-call`).
- **Persistent External Link:** Positioned a permanent *"Open calendar in full tab ↗"* link directly above the calendar embed in every state (loading, loaded, and timeout). Visitors are never blocked from reaching the external scheduler.
- **Bounded Loading Timeout & Race-Condition Protection:** Integrated a 12-second loading timer. An `iframeLoad` event clears the timer and confirms the loaded signal. If loading does not complete within 12 seconds, the container transitions to a clear, accessible fallback overlay offering:
  1. *Open on Cal.com* (direct link to the external scheduler)
  2. *Retry loading* (deliberate user action that cleans up previous timers and increments a retry ID, preventing stale timers from clobbering state)
  3. *Chat on WhatsApp* link
  4. *Project brief form* link (`/contact`)
- **Proper DOM & Lifecycle Cleanup:** Timers are strictly cleared on successful iframe load, on user retry, and on component unmount.
- **No Cross-Origin Assumptions:** Treated `onLoad` purely as a load signal without attempting cross-origin DOM access or assuming slot availability.

### B. Accurate Scheduling Claims & Content Simplification
- **Removed Exaggerated / Unsupported Claims:**
  - Removed claims guaranteeing a written proposal within 24 hours (*"Within 24 hours, you receive a transparent fixed-milestone proposal"*). Replaced with factual scoping process.
  - Removed unverified awards and speaking credentials (*"Winner Elite Hack 1.0"* and *"Speaker MRIIRS International AI Conf 2026"*).
  - Removed misleading completed degree claims (*"Dual CS & AI Pedigree / B.Tech CS (MSIT) · BSc Data Science & AI (IIT Guwahati)"*).
  - Removed immediate response speed guarantees (*"Fastest Response ● Typically < 1 hr"*).
  - Removed unverified automated promises (*"Google Meet invitation generated upon booking"*).
- **Duration Consistency:** Kept phrasing strictly as *"Book a call"* without making conflicting 15-minute or 30-minute duration promises.
- **Observed Timezone Behavior:** Explicitly noted that *"Calendar times adjust to your browser's local timezone"* as observed on the live Cal.com scheduler.

### C. Visual & Responsive Presentation
- Replaced legacy classes with the neutral redesign system (`neutral-950`, `neutral-600`, `border-neutral-200`, `bg-neutral-50`).
- Responsive min-heights (`min-h-[580px] sm:min-h-[640px] md:min-h-[700px]`) prevent rigid height lock-in on mobile viewports (390 × 844) while keeping surrounding context and fallback buttons accessible.

---

## 2. Security Configuration Diagnosis (CSP)

### Comparison of Defined Policies

| Policy Attribute | `next.config.ts` (Next.js Application Headers) | `netlify.toml` (Netlify Edge CDN Headers) |
| :--- | :--- | :--- |
| `frame-src` | `'self' https://api.razorpay.com https://cal.com;` | **Missing** (falls back to `default-src 'self'`) |
| `connect-src` | `'self' https://*.supabase.co https://api.razorpay.com https://cal.com https://*.ingest.sentry.io;` | `'self';` |
| `script-src` | `'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://app.cal.com https://*.ingest.sentry.io;` | `'self' 'unsafe-inline';` |

### Diagnosis & Release Impact
1. **Local Production Build:** Next.js serves headers configured in `next.config.ts`. The CSP header explicitly permits `frame-src https://cal.com`, allowing the embedded scheduler to load without browser security violations.
2. **Live Domain Precedence:** Live inspection in Phase 1 confirmed that the active CDN was serving headers containing `frame-src https://cal.com`. Therefore, an active embed block is not currently present on live.
3. **Required Release Correction (Pre-Deploy):** If Netlify applies `netlify.toml` headers with higher precedence than Next.js server headers upon deployment, `default-src 'self'` in `netlify.toml` will block `https://cal.com` iframes. Before releasing to production, `netlify.toml`'s CSP must be narrowly updated to include `frame-src 'self' https://cal.com https://api.razorpay.com;` without broadly weakening other restrictions. Security headers were left unchanged during this phase per task constraints.

---

## 3. Verification Results

| Check | Command / Harness | Result |
| :--- | :--- | :--- |
| **Type Check** | `npx tsc --noEmit --incremental false` | **PASS** (Exit 0, zero errors) |
| **Lint** | `npm run lint` | **PASS** (Exit 0, zero new warnings) |
| **Inquiry Test Suite** | `npm run test:inquiry` | **PASS** (6/6 tests passing: Netlify field match, minimal payload, empty qualification handling, whitespace rejection, fallback encoding, timeout abort) |
| **Sales Test Suite** | `npm run test:sales` | **PASS** (23/23 tests passing) |
| **Production Build** | `npm run build` | **PASS** (All 93 static pages compiled successfully in 1.5s) |

> [!NOTE]
> **Implementation Tests vs. Browser Verification:**
> - **Verified by automated tests:** Pure validation logic, Netlify URL-encoded payload formatting, empty qualification handling, whitespace rejection, query parameter preservation in WhatsApp/Email links, and non-retry timeout logic in `src/lib/inquiry.ts`.
> - **Verified by compilation & DOM inspection:** Component tree mounting, unique ID generation via `useId()`, accessibility roles (`role="alert"`, `role="status"`, `aria-live`), and descriptive iframe titles.
> - **Explicitly Unverified:** Real-browser pixel-level responsive layout (at 390px, 768px, 1440px), cross-origin iframe rendering of live Cal.com slots in a restricted browser context, live Netlify Forms database persistence, and automated Cal.com booking confirmation receipt.

---

## 4. End-to-End Release Checklist

Complete these three concrete launch gates prior to public announcement:

### Gate 1: Deploy Intended Revision
- [ ] Push branch `redesign/phase-1-foundations` to GitHub.
- [ ] Merge to `main` or trigger a production deploy preview on Netlify.
- [ ] Confirm deployed commit matches the latest commit on `redesign/phase-1-foundations`.
- [ ] Synchronize `netlify.toml` CSP `frame-src` and `connect-src` with `next.config.ts` if header conflicts appear on Netlify CDN.

### Gate 2: Netlify Form Detection & Lead Persistence
- [ ] In the Netlify Dashboard, navigate to **Forms** and confirm `project-inquiry` is registered.
- [ ] Submit a test inquiry on `/contact` using a real email inbox controlled by the tester (e.g. `tester@yourdomain.com`).
- [ ] Verify the inquiry is stored in Netlify Forms with all fields parsed.
- [ ] Verify the notification email is delivered to `jayantwebaisystems@gmail.com` with `Reply-To` set to the tester's email.
- [ ] Delete the test inquiry from Netlify Forms.

### Gate 3: Live Discovery Call Booking Confirmation
- [ ] Navigate to `/contact/book-a-consultation` on the live domain.
- [ ] Verify the Cal.com iframe loads available slots without CSP console errors.
- [ ] Book a test discovery call slot using a tester-controlled email.
- [ ] Confirm email confirmation receipt for both the attendee and Jayant Olhyan.
- [ ] Cancel the test booking in Cal.com to release the calendar slot.
- *(Note: Basic discovery-call booking confirmation is independent of the complex post-sale kickoff/onboarding webhooks).*
