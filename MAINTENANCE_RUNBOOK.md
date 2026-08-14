# OPERATIONAL MAINTENANCE & SCALING RUNBOOK (Checklist 14A.1 - 14B.6)
**Project**: Jayant Web & AI Systems  
**Effective Date**: August 2026  
**Document Classification**: Operational Maintenance SOP  

---

## 1. Recurring Maintenance Schedule

### Weekly Cadence (Owner: Technical Operations)
1. **Sentry Error Inspection**: Review unresolved issues; investigate any error with >5 occurrences or affecting payment/signing routes.
2. **Slow Query Review (14A.3)**: Open Supabase Dashboard → Reports → Query Performance. Review queries with average execution time > 100ms.
3. **Payment Failure Rate Audit (11B.6)**: Verify rolling failure rate is < 5%. Reconcile any unhandled webhook events in `payment_events`.
4. **Email Deliverability Check (4A.5, 4A.6)**: Check Resend reputation score and inspect `email_suppressions` for unexpected bounce spikes.

### Monthly Cadence (Owner: Lead Architect)
1. **Dependency Updates (14A.1)**: Review Dependabot automated PRs. Run `npm audit --audit-level=high` and execute local regression tests before merging.
2. **Platform Cost Review (14B.6)**: Reconcile invoices across Netlify, Supabase, Resend, and Sentry against budget allocations.
3. **Backup & PITR Verification (2B.6, 2B.7)**: Verify Supabase automated daily backups and confirm PITR recovery window status.
4. **Rate Limit Calibration (14B.5)**: Review `rate_limits` table for false-positive rate limit blocks on legitimate client traffic.

### Quarterly Cadence (Owner: Senior Engineering)
1. **Database Index Audit (14A.2)**: Review index usage statistics (`pg_stat_user_indexes`) to identify unused or missing indexes on high-traffic tables.
2. **Database Table Bloat & Autovacuum (14A.5)**: Verify autovacuum worker activity and dead tuple counts across core tables (`invoices`, `audit_events`, `payments`).
3. **Staging Concurrency Benchmark (14B.4)**: Execute automated load simulation against staging environment to ensure p95 latency remains < 500ms.
4. **Access Control Audit (9A.4)**: Review `admin_users` table to ensure super-admin and admin permissions adhere strictly to least-privilege.

### Annual Cadence (Owner: Management & Legal)
1. **Legal & Privacy Policy Review (13.1, 13.9)**: Review Terms of Service and Privacy Policy against updated India DPDP Act regulations. Increment document version constant (e.g. `v2027.1`) if substantive changes are enacted.
2. **Vendor DPA & Security Review (13.6)**: Re-verify compliance certificates (SOC 2, ISO 27001) for all sub-processors (Supabase, Razorpay, Resend, Netlify, Sentry).
3. **Disaster Recovery Tabletop Drill**: Test point-in-time database restore to a sandbox project.

---

## 2. API Deprecation & Lifecycle Policy (Checklist 14A.6)

Because the system powers private agency client portals and administrative workflows, the API lifecycle is governed by an internal semantic deprecation procedure:

```
[1. NEW] ──> [2. ACTIVE] ──> [3. DEPRECATED (30-day notice)] ──> [4. RETIRED]
```

- **Minor / Non-Breaking Additions**: Added directly to existing endpoints with optional fields.
- **Breaking Changes**:
  1. Add header `Deprecation: date="YYYY-MM-DD"` and `Sunset: date="YYYY-MM-DD"` to legacy responses.
  2. Update frontend components and clients to consume the new schema.
  3. Maintain backward compatibility for a minimum 30-day transition period.
  4. Decommission legacy endpoints only after telemetry confirms zero incoming requests.

---

## 3. Cost Monitoring & Budget Thresholds (Checklist 14B.6)

| Service | Tier / Plan | Expected Monthly Cost | Usage Metric | Billing Alert Threshold |
|---|---|---|---|---|
| **Netlify** | Starter / Pro | $0 - $19 / mo | Bandwidth & Build minutes | Alert at 80% usage ($15) |
| **Supabase** | Free / Pro | $0 - $25 / mo | Database storage & egress | Alert at 80% storage ($20) |
| **Razorpay** | Standard Merchant | Variable (2% per txn) | Transaction volume | Monitor chargeback rate (< 1%) |
| **Resend** | Free / Pro | $0 - $20 / mo | Email volume (3,000 free) | Alert at 2,500 emails/mo |
| **Sentry** | Developer / Team | $0 - $26 / mo | Error event volume | Alert at 80% quota (40k events) |
| **Cal.com** | Individual / Team | $0 - $12 / mo | Booking seats | Monitor active integrations |
| **Domain (Hostinger/Cloudflare)**| Annual | ~$14 / yr (₹1,200) | DNS & Domain registration | Auto-renewal enabled |
