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

- **Public Marketing Website:** High-performance, statically optimized pages detailing Services, Case Studies (Healthkinator, Teacher Sathi, Sentinel AI), Packages, and Process.
- **Dynamic Pricing & Packages:** 3 core tiers (Foundation, Growth, Scale) configured in the database with floor/display pricing.
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
- Complete Supabase Database Schema & Migrations
- Marketing Content & Case Studies
- Razorpay Server Integration (`src/lib/payments/razorpay.ts`)

### Planned
- **Phase 8:** Email notifications via Resend.
- **Phase 9:** Automated Kickoff scheduling via Cal.com.
- **Phase 10:** Automated PDF generation for Invoices & Agreements.

---
*Built with precision for Jayant's Studio.*
