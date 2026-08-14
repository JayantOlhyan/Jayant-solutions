# SECURITY INCIDENT RESPONSE PLAN & RUNBOOK (Checklist 13.10)
**Project**: Jayant Web & AI Systems  
**Effective Date**: August 2026  
**Document Classification**: Internal Operational Security Protocol  

---

## 1. Incident Response Lifecycle

```
[1. DETECT] ──> [2. CLASSIFY] ──> [3. CONTAIN] ──> [4. INVESTIGATE]
                                                           │
[8. POSTMORTEM] <── [7. NOTIFY] <── [6. RECOVER] <── [5. ERADICATE]
```

### Phase 1: Detection
- Automated alerts from Sentry (error rate spikes, unexpected exceptions).
- Database & infrastructure alerts from Supabase (CPU > 90%, abnormal connection counts).
- Payment failure alert from `src/lib/monitoring/alerts.ts` (>5% failure rate).
- Log warnings from `src/lib/logger.ts` and audit logs in `audit_events`.

### Phase 2: Classification & Severity Matrix
| Severity Level | Definition | Response SLA | Escalation Target |
|---|---|---|---|
| **SEV-1 (Critical)** | Active database breach, root credential leak, live payment redirection | Immediate (< 15 mins) | Lead Architect & Legal Counsel |
| **SEV-2 (High)** | Single proposal token leak, elevated failed payment rates, unauthorized admin login attempt | < 1 hour | Technical Lead |
| **SEV-3 (Medium)** | Transient webhook failure, minor rate-limit bypass attempt | < 4 hours | Technical Operations |
| **SEV-4 (Low)** | Non-exploitable informational anomaly or false positive | < 24 hours | Technical Operations |

### Phase 3: Containment
- Isolate compromised credentials immediately.
- Invalidate active Supabase sessions (`supabase.auth.admin.signOut()`).
- Temporarily lock compromised client or proposal tokens.

### Phase 4: Investigation & Forensic Preservation
- Export relevant `audit_events` and database logs before state changes.
- Identify entry vector, IP addresses, affected records, and timestamp windows.
- Preserve immutable evidence without modifying raw audit tables.

### Phase 5: Eradication
- Patch identified software vulnerability or update database RLS policies.
- Rotate all affected production API keys, secrets, and database passwords.

### Phase 6: Recovery & Verification
- Deploy verified hotfix via GitHub Actions CI pipeline.
- Verify system health via `/api/health` and monitor Sentry error stream.

### Phase 7: Notification & Statutory Disclosures
- **CERT-In (India)**: Report cybersecurity incidents within 6 hours as mandated under CERT-In Directions 2022 if applicable.
- **DPDP Act / GDPR**: If personal data breach occurs, notify affected data principals and regulatory authorities within 72 hours.
- **Affected Clients**: Direct transactional disclosure email detailing breach scope, mitigations taken, and guidance.

### Phase 8: Postmortem & Prevention
- Conduct root-cause analysis (RCA) within 5 business days.
- Update threat models, CI/CD security rules, and code audit checklists.

---

## 2. Operational Incident Response Runbooks

### Scenario A: Leaked Supabase Service Role Key or Root Secret
1. **Alerted**: Lead Architect (`jayantwebaisystems@gmail.com`).
2. **Containment**:
   - Immediately navigate to **Supabase Dashboard → Project Settings → API**.
   - Click **Generate New Secret** to rotate `SUPABASE_SERVICE_ROLE_KEY` and `JWT Secret`.
3. **Propagation**:
   - Update `SUPABASE_SERVICE_ROLE_KEY` in Netlify Environment Variables and GitHub Secrets.
   - Trigger immediate Netlify cache purge & redeploy.
4. **Audit**:
   - Query `audit_events` and PostgreSQL query logs for unauthorized service-role API operations.

---

### Scenario B: Compromised Proposal Bearer Token
1. **Alerted**: Technical Lead.
2. **Containment**:
   - Execute immediate token revocation:
     ```sql
     UPDATE proposals SET token = 'revoked_' || gen_random_uuid() WHERE id = '<AFFECTED_PROPOSAL_ID>';
     ```
3. **Client Mitigation**:
   - Generate a fresh, high-entropy proposal token and issue a secure re-authentication link directly to the verified client email address.
4. **Audit**:
   - Review all API access timestamps associated with the compromised token in `audit_events`.

---

### Scenario C: Unauthorized Admin Login Attempt / MFA Anomaly
1. **Alerted**: Lead Administrator.
2. **Containment**:
   - Account lockout automatically engages after 5 failed attempts (`src/lib/auth/lockout.ts`).
   - If compromised password suspected: revoke user session and trigger administrative password reset via `/api/auth/recovery/request`.
3. **MFA Verification**:
   - Ensure AAL2 status is enforced (`requireSuperAdmin()` in `src/lib/auth/admin-guard.ts`).
   - Force re-enrollment of TOTP factor if device loss reported.

---

### Scenario D: Payment Gateway / Webhook Compromise
1. **Alerted**: Lead Architect & Financial Admin.
2. **Containment**:
   - In **Razorpay Dashboard → Settings → Webhooks**, immediately rotate `RAZORPAY_WEBHOOK_SECRET`.
   - Update `RAZORPAY_WEBHOOK_SECRET` in Netlify and restart serverless runtime.
3. **Fraud Inspection**:
   - Reconcile all payments recorded in `payments` against live Razorpay Dashboard captures.
   - Mark fraudulent records as `CANCELLED` and initiate administrative refunds via `/api/admin/payments/refund` if necessary.

---

### Scenario E: Email Delivery (Resend) Credential Compromise
1. **Alerted**: Technical Operations.
2. **Containment**:
   - In **Resend Dashboard → API Keys**, revoke active key and issue a new restricted API key.
   - In **Resend Dashboard → Webhooks**, rotate `RESEND_WEBHOOK_SECRET`.
3. **Suppression Review**:
   - Inspect `email_suppressions` table to ensure legitimate client addresses were not maliciously added to the suppression list.

---

## 3. Incident Contact & Responsible Parties

| Role | Designee | Contact | Escalation SLA |
|---|---|---|---|
| **Incident Commander** | Jayant Olhyan | `jayantwebaisystems@gmail.com` | Immediate |
| **Technical Operations** | Lead Engineer | `hello@jayantolhyan.in` | < 15 mins |
| **Statutory & Legal** | Legal Counsel / CA | Contact on Record | < 24 hours |
| **CERT-In Helpdesk** | National CSIRT | `incident@cert-in.org.in` | < 6 hours (Severe) |
