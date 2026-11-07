# Jayant's Studio — Web & AI Systems

> Websites That Win Customers. AI Systems That Save Time.

This is the central repository for **Jayant's Studio**, a high-converting lead-generation portfolio and complete business automation system. It serves as both the public-facing agency website and the underlying backend operating system for managing proposals, negotiations, agreements, invoicing, and client onboarding.

## Overview

This project is a bespoke web platform designed for a solo freelancer (Jayant) specializing in Web Development and AI Automation. It eliminates the need for third-party CRM, proposal, and invoicing tools by rolling the entire client lifecycle—from initial lead to paid invoice—into a single custom-built Next.js application powered by Supabase.

## Why This Project Exists

To convert cold outreach and LinkedIn leads (specifically Indian SMBs and startup founders in Education, Healthcare, and Professional Services) into paying clients, while automating the administrative overhead of running a solo freelance practice. 

The platform guarantees a seamless, highly professional client experience:
1. Lead discovers services via public pages.
2. Admin generates and sends a unique Proposal Token.
3. Lead reviews the proposal, selects a package, and optionally negotiates terms directly on the platform.
4. Admin approves terms; Lead signs a digital agreement.
5. System auto-generates an invoice and processes payment via Razorpay.
6. System auto-schedules the kickoff call (Cal.com) and triggers the onboarding workflow.

## Architecture

The application is built on a monolithic Next.js App Router architecture, heavily utilizing Server Components for the public-facing marketing pages and secure API routes for backend webhooks and operations.

```text
User / Lead                      Admin (Jayant)
    │                                 │
    ▼                                 ▼
Next.js Frontend (React 19 + Tailwind v4)
    │
    ├─ Public Pages (Hero, Packages, Case Studies, FAQ, Process)
    ├─ Client Portal (Proposals, Negotiations, Invoices, Onboarding)
    │
    ▼
Next.js API Routes (Serverless Backend)
    │
    ├─ /api/payments (Razorpay Integration)
    ├─ /api/webhooks (Razorpay, Cal.com, Resend)
    ├─ /api/pdf (Invoice / Agreement Generation)
    │
    ▼
Supabase (PostgreSQL Database + Auth)
    │
    ├─ Row Level Security (RLS)
    ├─ PostgreSQL Triggers (Updated_At, Audit)
    └─ Relational Schema (Proposals, Invoices, Payments, Bookings)
```

## Tech Stack

### Frontend
- **Framework:** Next.js (App Router, version 16.3+)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **UI & Animations:** Framer Motion, Base UI, Lucide React
- **Typography/PDF:** PDFKit

### Backend
- **API Architecture:** Next.js API Routes (Node.js runtime)
- **Database:** Supabase (PostgreSQL)
- **Validation:** Zod
- **Authentication:** Supabase SSR & JS Client

### Infrastructure & Services
- **Deployment:** Netlify (`netlify.toml` configured)
- **Payments:** Razorpay API
- **Monitoring & Error Tracking:** Sentry
- **Scheduling:** Cal.com (via Webhooks)
- **Email/Communications:** Resend (via Webhooks)

## Repository Structure

```text
project/
├── .next/                  # Next.js build output (gitignored)
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # Backend API routes (payments, webhooks, auth)
│   │   ├── (public pages)  # about, admin, blog, portfolio, pricing, services, etc.
│   │   └── page.tsx        # Main landing page
│   ├── components/         # Reusable React components (Hero, FAQ, Navbar, etc.)
│   ├── data/               # Static site data (blog, strategy, content)
│   └── lib/                # Shared utilities, API response handlers, payments logic
├── supabase/
│   └── migrations/         # PostgreSQL schema and RLS policies (00001 to 00013)
├── .env.example            # Environment variables template
├── netlify.toml            # Netlify deployment configuration
├── package.json            # Project dependencies and scripts
└── sentry.*.config.ts      # Sentry telemetry configuration (client, server, edge)
```

## Features

### Implemented

- **Phase 6 Browser Verification, Regression Fixes & Release Preparation:**
  - **Multi-Viewport Browser Verification:** Automated Chrome DevTools Protocol (CDP) test suite verifying Homepage, Contact, and Booking pages across 390 × 844, 768 × 1024, and 1440 × 900 viewports. Verified zero horizontal overflow, visible early hero booking CTA (top: 477px, before preview at 657px on mobile), mobile menu Escape/close handling, and fixed-header anchor clearance (`#work`, `#services`, `#about`, `#contact`).
  - **Calendar Load & Timeout Hardening:** Changed iframe to `loading="eager"` on `/contact/book-a-consultation`, resolving mount-started timeout mismatch. Tied both 12-second loading timeouts and `onLoad` handlers to generation attempt IDs (`activeAttemptRef`), preventing stale load signals from clobbering retry timers or dismissing fallback recovery overlays.
  - **Inquiry Form Interactive Testing:** Verified whitespace input rejection, input preservation during mocked 500 failures, dynamic WhatsApp and mailto fallback URL generation with encoded project briefs, and mocked 200 success confirmation rendering with accessible heading focus.
  - **Metadata & Canonical Repair:** Removed `alternates: { canonical: "/" }` from `src/app/layout.tsx` and declared explicit canonicals on `src/app/page.tsx`, eliminating soft-404 canonical inheritance on `_not-found.html` and admin routes. Removed phantom `hi-IN` hreflang links.
  - **Security Policy Alignment:** Synchronized `netlify.toml` CSP headers with `next.config.ts` (`frame-src 'self' https://api.razorpay.com https://cal.com;`), guaranteeing that browser intersection checks on Netlify deployments permit embedded schedulers and authorized APIs without conflict. Documented Phase 7 launch checklist in `docs/phase-6-handoff.md`.
- **Phase 5 Reliable Call Booking & Security Diagnosis:**
  - **Resilient Cal.com Scheduling:** Embedded calendar (`/contact/book-a-consultation`) with an authoritative link to `CONTACT_INFO.calComUrl`, bounded 12-second loading timeout, accessible retry action guarded against async race conditions via retry-ID tracking, persistent direct external calendar link above the embed, and clear fallback channels to WhatsApp (+91 96673 44125) and written inquiry.
  - **Concise Scoping Intro & Grounded Claims:** Streamlined founder introduction with Jayant Olhyan explaining scoping call deliverables (goals, technical fit, budget/timeline expectations). Removed all unverified claims (24h proposal guarantees, elite awards, conference talks, completed dual degrees, and automated Google Meet promises). Noted automatic local timezone adjustment as observed in the live calendar.
  - **Inquiry Logic Extraction & True Implementation Testing:** Extracted validation, payload construction, fallback URL encoding, and 10s timeout handling into `src/lib/inquiry.ts`. Rewrote `tests/inquiry.test.ts` to exercise actual application logic rather than duplicate mock helpers. Corrected documentation to distinguish local HTTP 200 responses from live Netlify form storage and delivery.
  - **CSP Diagnosis & 3-Gate Release Protocol:** Analyzed CSP discrepancy between `next.config.ts` (`frame-src 'self' https://api.razorpay.com https://cal.com`) and `netlify.toml` (headers omitting `frame-src`). Documented required staging header synchronization and 3-gate release verification checklist in `docs/phase-5-handoff.md`.
- **Phase 4 Inquiry Simplification & Reliable Submission:**
  - **Friction-Free Contact Form:** Required fields reduced strictly to Name, Email, Project Description, and Policy Agreement. Qualification inputs (Company, Phone, Project Type, Budget, Timeline) are organized in an accessible `<details>` disclosure (*"Additional project details (optional)"*), eliminating required-field friction.
  - **Accessible Validation & DOM Uniqueness:** Replaced `alert()` validation with inline errors and `role="alert"` announcements, auto-focusing the first invalid field upon validation failure. All element and error IDs dynamically use React 19 `useId()` prefixes to avoid ID collisions. Whitespace-only name and description submissions are strictly rejected.
  - **Reliable Submissions with Timeout:** Netlify Forms registration preserved (`public/__forms.html`). Added a 10-second `AbortController` timeout and rapid double-click submission prevention.
  - **Preserved User State & Direct Recovery:** User-entered details are strictly preserved during timeouts, network interruptions, and server errors. Surfaces direct manual fallback buttons to send the inquiry on WhatsApp or Email with pre-filled, properly encoded briefs based on `CONTACT_INFO`.
  - **Harmonized Contact Page:** Aligned `/contact` layout and typography with the redesign's neutral design system, maintaining clear alternatives to book a call via Cal.com or reach out directly.
- **Phase 3 Landing Page Clarity, Credibility & Responsive Presentation:**
  - **Factual Opening Hero:** Clear statement of services (custom websites, software, practical AI systems) and target clients (founders, teams, and growing businesses). The primary booking CTA ("Book a call" -> `/contact/book-a-consultation`) and secondary action ("Send an inquiry" -> `#contact`) are positioned directly below the headline and concise supporting copy, ensuring visibility within the initial 390 × 844 mobile viewport above the Teacher Sathi live production preview.
  - **Evidence-Led Capabilities Strip:** Audited proof row replacing unverified award/speaking claims with 4 verifiable technical capabilities: Live Shipped Production Systems (`#work`), Inspectable Open Source Repositories (`github.com/JayantOlhyan`), 100% Founder Direct Delivery (`#about`), and Ongoing Academic Pursuits in CS & AI (MSIT New Delhi and IIT Guwahati).
  - **Focused Selected Work:** Trimmed from 6 to 3 distinct, high-relevance projects with real `.webp` screenshots: Healthkinator (Personal Product · AI Prototype), CivicSetu (Civic Tech · Workflow Prototype), and MSIT College Portal (Academic Project · Institutional Redesign), displaying verified problems addressed, architectural contributions, technologies, and live demo / source code links.
  - **Simplified 3-Group Offerings & 4-Stage Process:** Condensed homepage services into Websites & Web Applications, Practical AI Integrations, and Business Workflow Automation with clear deliverables, linked to `/services`. Reorganized the delivery process into 4 sequential phases: 01 Discovery & Alignment, 02 Written Scope & Milestones, 03 Direct Build & Staging Demos, and 04 Production Launch & Handover.
  - **Tightened Founder, FAQ, and Contact Flow:** Grounded founder presentation stating ongoing CS and Data Science studies; focused 5-question commercial FAQ addressing scope, cost estimation, timelines, source code ownership, and 30-day post-launch support; removed redundant double card borders and duplicate headings around `ContactForm` in `HomeContact`.
  - **Layout & Responsiveness Hardening:** Removed `overflow-x-clip` on `<main>` to prevent masking layout defects; verified accessible focus indicators, touch targets, and clean responsive stacking across 390px, 768px, and 1440px viewports.
- **Phase 2 Navigation & Contact Paths:** Simplified primary navigation to 4 essential destinations (*Work, Services, About, Contact*) with automatic homepage in-page anchor resolution (`#section` vs `/#section`) and `scroll-mt-24` fixed-header offset. Standardized primary header and mobile action to **"Book a call"** routing to `/contact/book-a-consultation`, paired with a secondary **"Send an inquiry"** path. Streamlined the footer to prioritize core destinations, verified direct contact channels (Email, WhatsApp, Phone), and legal policies while removing the oversized 6-column public directory.
- **Centralized Contact Configuration:** Single shared configuration module (`src/data/contact.ts`) driving active header, footer, homepage, and contact surfaces without fabricated details.
- **Duration Claim Harmonization:** Removed conflicting 15-min and 15–20 min duration claims across public pages to avoid calendar event discrepancies while preserving scheduling functionality.
- **Evidence-Led Founder & Engineering Capabilities:** Grounded proof strip linking to live deployments (Teacher Sathi, Healthkinator, CivicSetu, MSIT College Portal), public GitHub repositories (`github.com/JayantOlhyan`), direct founder engineering accountability, and ongoing CS & Data Science studies (MSIT New Delhi and IIT Guwahati).
- **Direct Discovery & Call Booking System:** Live interactive Cal.com scheduling embed (`/contact/book-a-consultation`), dual-channel WhatsApp quick-booking (+91 96673 44125), direct founder communication guarantee (12–24h response), and Netlify-backed written project brief form (`ContactForm`).
- **Dynamic Pricing & Packages:** 3 core tiers (Starter, Growth, Scale) with transparent deliverables, timelines, risk reversals, and direct scoping call action triggers.
- **Client Management System:** Granular database schema mapping clients to proposals, package selections, and agreements.
- **Proposals & Negotiations Workflow:** Token-based proposal sharing, allowing clients to request changes and propose custom prices (`negotiations` table).
- **Invoicing System:** Automated invoice sequence generation (INV-YYYY-XXXX) based on agreed commercial terms.
- **Payments Integration:** Server-side Razorpay integration (`src/lib/payments/razorpay.ts`) for creating payment links and processing refunds.
- **Database Schema & Migrations:** 13 robust Supabase SQL migrations covering everything from foundational RLS to onboarding hardening.

### Planned / In Progress

- **Cal.com Integration (Phase 9):** Automated kickoff scheduling webhook handlers.
- **Resend Email Integration (Phase 8):** Automated transactional email notifications.
- **Digital Signatures:** Collecting IP and User-Agent for binding digital agreements (`agreements` table).
- **PDF Generation:** Automated rendering of agreements and invoices via `PDFKit`.

## Prerequisites

- **Node.js:** v20+
- **Package Manager:** npm
- **Database:** Supabase Account (for PostgreSQL)
- **External Services:** Razorpay Account, Sentry Account, Netlify CLI (optional)

## Environment Variables

Copy `.env.example` to `.env.local` and populate the values. **Never expose `SUPABASE_SERVICE_ROLE_KEY` or `RAZORPAY_KEY_SECRET` to the client.**

| Variable | Required | Purpose | Example |
| -------- | -------- | ------- | ------- |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase Project URL | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase Public Key | `eyJhb...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase Admin Key (Server Only) | `eyJhb...` |
| `NEXT_PUBLIC_APP_URL` | Yes | Base URL for webhooks/links | `http://localhost:3000` |
| `RAZORPAY_KEY_ID` | Yes | Razorpay Auth ID | `rzp_test_...` |
| `RAZORPAY_KEY_SECRET` | Yes | Razorpay Auth Secret | `...` |

## Database

The database relies on a highly normalized PostgreSQL schema orchestrated via Supabase. 

### Core Tables
- `admin_users`: Platform administrators (Jayant).
- `clients`: Lead / client records.
- `packages`: Authoritative catalog of service packages.
- `proposals`: Token-based offers shared with clients.
- `negotiations`: Client-requested scope/price changes.
- `commercial_terms`: The final agreed-upon scope and price.
- `agreements`: Digital contracts linking terms to signatures.
- `invoices` & `payments`: Billing and Razorpay ledger.
- `bookings` & `onboarding`: Post-sale fulfillment.

### Database Setup

All migrations are located in `supabase/migrations/`. To apply them to your Supabase instance, use the Supabase CLI:

```bash
supabase link --project-ref your-project-id
supabase db push
```

## Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "portfolio for agency"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   Create `.env.local` as per the Environment Variables section.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

## API

The application exposes several backend API routes to manage the operational lifecycle.

### Payments
- `POST /api/payments/create-link`: Generates a Razorpay payment link for an invoice.
- `POST /api/payments/verify`: Validates a payment payload.

### Webhooks
- `POST /api/webhooks/razorpay`: Idempotent listener for Razorpay payment success/failure events.
- `POST /api/webhooks/cal`: Listens for scheduling events to update `bookings` status.
- `POST /api/webhooks/resend`: Listens for email delivery events.

## Authentication & Security

- **Row Level Security (RLS):** Enabled on all Supabase tables. Clients access proposals via unique cryptographically generated tokens, not traditional user accounts.
- **Role-Based Access Control (RBAC):** `admin_users` table restricts sensitive mutations to approved administrators via the Supabase Service Role key on the server.
- **Idempotency:** Payment webhooks log events to `payment_events` to prevent double-processing.
- **Rate Limiting:** Managed in `src/lib/rate-limit.ts` to protect public API routes.

## Deployment

This project is configured for deployment on **Netlify**.

1. Connect your GitHub repository to Netlify.
2. The `netlify.toml` file will automatically configure the build command (`next build`) and publish directory (`.next`).
3. Add all environment variables to the Netlify Dashboard.
4. Deploy the site.

## Known Limitations

- **Solo Administrator Assumption:** The architecture assumes a single administrator/agency owner. Multi-tenant or multi-agent capabilities are not supported.
- **Client Portal Authentication:** Clients do not have "accounts" with passwords. They authenticate into their portals via secure, unguessable magic tokens associated with their `proposals`. If a token is lost, the admin must generate a new link.
- **In-Progress Integrations:** Cal.com and Resend webhook endpoints exist as directories but require full business-logic implementation (Phase 8 & 9).
- **Testing:** Automated test coverage (Jest / Cypress / Playwright) is currently missing from the repository.

## Roadmap

### Completed
- Next.js 16.3 + React 19 Frontend UI
- Phase 1: Founder-Led Landing Page Redesign (Editorial Authority & Verified Proof)
- Phase 2: Navigation & Contact-Path Consolidation (Work, Services, About, Contact, Cal.com "Book a call" focus, simplified footer, mobile menu a11y)
- Live Cal.com Discovery Call Scheduler & WhatsApp Quick Booking (`/contact/book-a-consultation`)
- Complete Supabase Database Schema & Migrations
- Marketing Content & Case Studies with Live Shipped Links & GitHub Repos
- Razorpay Server Integration (`src/lib/payments/razorpay.ts`)

### Planned
- **Phase 8:** Email notifications via Resend.
- **Phase 9:** Automated Kickoff scheduling via Cal.com webhooks.
- **Phase 10:** Automated PDF generation for Invoices & Agreements.

---
*Built with precision for Jayant's Studio.*
