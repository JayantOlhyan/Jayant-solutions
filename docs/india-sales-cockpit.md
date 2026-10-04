# India sales cockpit

## Existing app and the extension

The repository is a Next.js 16 App Router app using React 19, Tailwind 4, Manrope and the existing admin navy/brass palette. Public routes cover services, portfolio, pricing, resources and contact. `/admin/dashboard` is a server-rendered operations dashboard. `/proposal/[client]` and its commercial pages are the existing client-facing proposal experience. The Supabase schema already covers clients, proposals, selections, negotiations, commercial terms, agreements, invoices, payments, bookings and onboarding. Razorpay webhook/payment handling remains in place.

`/admin/sales` adds one private route with three bookmarkable views (`#today`, `#prospects`, `#playbook`). It links to existing commercial operations; it does not replace the public website or payment processing. The public navigation, footer, breadcrumbs and floating contact CTA are hidden on this route, keeping the workspace focused. The existing service worker now excludes admin/API responses from caching and changes cache version to remove older cached pages.

- **Today:** actual collections, cash gap, days remaining in IST, due/overdue and upcoming actions, daily activity, historical funnel and 12 execution steps.
- **Prospects:** Indian business/contact details, qualification and research, activity history, call/objection notes, explicit next actions, scoped proposal text, existing-proposal reference, outcomes and receipt ledger.
- **Playbook:** diagnostic offer, explicitly experimental INR prices, opening/audit messages, discovery questions, objections, follow-up messages, closing instructions and the seven approved projects. No prospects, testimonials or performance claims are seeded.

## Enable in the existing environment

1. Apply `supabase/migrations/00014_india_sales_cockpit.sql` through your normal Supabase migration process before deploying this branch.
2. Keep the existing `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and server-only `SUPABASE_SERVICE_ROLE_KEY` configuration.
3. Sign in with an account in `admin_users` whose role is `admin` or `super_admin`. Existing enrolled MFA is enforced. User-editable role metadata alone does not grant access to this workspace.
4. Open **India sales cockpit** from `/admin/dashboard`.

The PR does not run a migration against production, deploy, send outreach, issue invoices or charge anyone. A missing database/configuration produces a visible error rather than an empty success state. There is no local-storage-only fallback. Export downloads the actual workspace as JSON; protect that file as prospect and payment data. Import is not provided.

## Cash and sprint rules

- Sprint dates: 3 October through **18 November 2026**, inclusive in **Asia/Kolkata**.
- Target: **₹3,20,000 actually received**. The user's **₹3,000 existing cash** is shown separately, never invented as a sale or credited toward collected revenue.
- Quotes, proposals, wins and promised deposits are not cash. Recording Won never records a payment.
- The new ledger is manual: verify each real bank/UPI/Razorpay receipt, then record its amount, date and unique reference. Existing global Razorpay payments are not automatically summed into this India-only ledger. This avoids counting unrelated business or counting a payment twice.
- Future receipts and non-positive / sub-paise amounts are rejected. Only unvoided receipts dated inside the sprint contribute to the target. All valid recorded receipts still appear on the prospect.
- Reference uniqueness ignores case and surrounding whitespace. Void incorrect entries with a reason, then enter the corrected receipt. Both remain in history. Voiding is a bookkeeping correction, not a refund command; refund handling remains in existing operations.
- Proposal text is drafted from this prospect's actual scope and INR terms. Copying does not send it or advance the stage. Existing proposal links are references only; changing cockpit scope does not silently rewrite existing agreements or invoices. Review the existing commercial templates before using them for a sprint deal.

## Next-action and funnel rules

- Terminal Lost and Do not contact records generate no outreach tasks. Do not contact cannot be reopened through the cockpit.
- A saved action/date pair takes precedence. Booked calls use the agreed time in IST. Wins remain actionable until the quoted amount is fully received, using the payment due date.
- Unanswered outreach is due on Days **2, 5, 10, 20, 45** from first contact (Day 0). A reply moves out of this cadence. Logging a late follow-up skips elapsed slots to prevent a burst of catch-up messages. The last follow-up prompts closing the loop or agreeing a new next step.
- Dates beyond 18 November remain visible, with cash excluded from sprint results if received later. No division by zero or negative countdown after the deadline.
- Stage changes clear the old custom reminder; save an agreed next action after logging the new outcome. Each first observed milestone is preserved, including after a loss. A stage jump records only the outcome actually selected, without fabricating intermediate replies or calls.
- Funnel ratios describe recorded sprint activity. They are not predicted conversion benchmarks. Daily counts use first milestone dates so re-logging contact is not another first contact.
- Updates use a version compare-and-swap. A stale tab gets a conflict rather than silently overwriting another admin. Reload before retrying; unsaved form edits remain visible after failed saves.

## Implementation map

- `src/lib/sales/model.ts`: validation, date/cash/funnel rules, stage transitions and next actions.
- `src/lib/sales/server.ts`: admin membership check and paginated Supabase reads (avoids the default response cap undercounting the sprint).
- `src/app/api/admin/sales/route.ts`: same-origin, admin-authorized commands; validation, duplicate protection, version conflicts, no-store responses.
- `src/components/sales/`: dashboard, prospect editor and playbook.
- `src/data/sales-playbook.ts`: approved proof and practical scripts.
- `supabase/migrations/00014_india_sales_cockpit.sql`: two private tables; RLS enabled with browser-role privileges revoked. Only the server service role accesses them.

## Verification

Run `npm run test:sales`, `npx tsc --noEmit` and `npm run build`. Sales regression tests are also a required step in the existing CI workflow. Tests exercise the model and apply the migration to an isolated PostgreSQL-compatible PGlite database, checking denied anonymous/authenticated access, uniqueness, receipt correction and concurrent version updates.

Before production use, verify admin/MFA access and a create/edit/reload cycle against the deployed Supabase project after migration. The local browser test uses a test-only Supabase HTTP facade and isolated PGlite data; it cannot certify the production connection, real Razorpay settlements or delivery of messages.

Local verification completed: 23 model/database tests, focused ESLint, TypeScript, production build, and desktop/390px browser checks of create → outcomes → reload → proposal → win → receipt. Additional HTTP checks passed for unauthenticated access, same-origin protection, future receipts, stale saves and receipt voids. The existing repository-wide lint reports 16 errors and 133 warnings outside the new sales code; `npm audit` reports 13 inherited findings (1 critical, 11 high, 1 moderate). The existing CI audit gate can therefore fail independently of this feature.
