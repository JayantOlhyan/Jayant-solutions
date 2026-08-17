-- Phase 2: Core Database Schema Migration
-- Project: Jayant Web & AI Systems
-- File: supabase/migrations/00002_schema_design.sql

-- 1. Helper function for automated updated_at timestamp triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 2. Admin Users Table (linked to Supabase auth.users)
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_admin_users_updated_at
    BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 3. Clients Table (with selective soft delete)
CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    company_name TEXT,
    phone TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ DEFAULT NULL
);

CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_deleted_at ON clients(deleted_at) WHERE deleted_at IS NULL;

CREATE TRIGGER update_clients_updated_at
    BEFORE UPDATE ON clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 4. Packages Catalog Table (Authoritative Standard Packages)
CREATE TABLE IF NOT EXISTS packages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT NOT NULL UNIQUE CHECK (code IN ('FOUNDATION', 'GROWTH', 'SCALE')),
    name TEXT NOT NULL,
    tagline TEXT NOT NULL,
    standard_price NUMERIC(12, 2) NOT NULL CHECK (standard_price >= 0),
    display_price NUMERIC(12, 2) NOT NULL CHECK (display_price >= 0),
    floor_price NUMERIC(12, 2) NOT NULL CHECK (floor_price >= 0),
    period TEXT NOT NULL DEFAULT '90-day engagement',
    summary TEXT NOT NULL,
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed authoritative packages
INSERT INTO packages (code, name, tagline, standard_price, display_price, floor_price, period, summary, features)
VALUES 
(
    'FOUNDATION', 
    'FOUNDATION', 
    'Build the Presence', 
    69000.00, 
    79000.00,
    59000.00,
    '90-day engagement', 
    'For businesses that want a professional digital presence and content foundation while keeping day-to-day business development in-house.',
    '["Personal-brand positioning", "Instagram profile setup & optimisation", "Content strategy", "8 short-form videos per month", "Captions and publishing guidance", "Basic content calendar", "Basic enquiry pathway", "Monthly performance review"]'::jsonb
),
(
    'GROWTH', 
    'GROWTH', 
    'Build the Presence + Business Development', 
    145000.00, 
    159000.00,
    125000.00,
    '90-day engagement', 
    'For businesses that want a complete 90-day digital presence and business-development program — from positioning to qualified conversations and meetings.',
    '["Everything in Foundation", "Full outreach workflow architecture", "150+ targeted ICP leads / month", "Personalized LinkedIn & Email sequence copy", "Active outreach execution", "Lead qualification & response handling", "Bi-weekly strategy & performance calls", "CRM setup & lead tracking dashboard"]'::jsonb
),
(
    'SCALE', 
    'SCALE', 
    'Full Digital Growth Partnership', 
    225000.00, 
    249000.00,
    195000.00,
    '90-day engagement', 
    'For businesses that want a higher-touch digital growth partnership with greater content volume, broader distribution and intensive business-development support.',
    '["Everything in Growth", "16 short-form videos per month", "Multi-channel distribution (LinkedIn, YouTube Shorts, X)", "300+ targeted ICP leads / month", "High-touch personalized account-based outreach", "Dedicated custom landing page for campaign", "Weekly strategy sync & pipeline review", "Priority 1-on-1 support"]'::jsonb
)
ON CONFLICT (code) DO UPDATE SET 
    standard_price = EXCLUDED.standard_price,
    display_price = EXCLUDED.display_price,
    floor_price = EXCLUDED.floor_price,
    tagline = EXCLUDED.tagline,
    summary = EXCLUDED.summary,
    features = EXCLUDED.features;

-- 5. Proposals Table
CREATE TABLE IF NOT EXISTS proposals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
    token TEXT NOT NULL UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
    title TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'SENT', 'VIEWED', 'ACCEPTED', 'EXPIRED')),
    valid_until TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ DEFAULT NULL
);

CREATE INDEX IF NOT EXISTS idx_proposals_client_id ON proposals(client_id);
CREATE INDEX IF NOT EXISTS idx_proposals_token ON proposals(token);

CREATE TRIGGER update_proposals_updated_at
    BEFORE UPDATE ON proposals
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 6. Package Selections Table (Immutable price snapshotting)
CREATE TABLE IF NOT EXISTS package_selections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposal_id UUID NOT NULL REFERENCES proposals(id) ON DELETE RESTRICT,
    package_id UUID NOT NULL REFERENCES packages(id) ON DELETE RESTRICT,
    price_snapshot NUMERIC(12, 2) NOT NULL CHECK (price_snapshot >= 0),
    client_notes TEXT,
    selected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_package_selections_proposal_id ON package_selections(proposal_id);

-- 7. Negotiations Table
CREATE TABLE IF NOT EXISTS negotiations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposal_id UUID NOT NULL REFERENCES proposals(id) ON DELETE RESTRICT,
    requested_changes TEXT NOT NULL,
    client_proposed_price NUMERIC(12, 2) CHECK (client_proposed_price >= 0),
    status TEXT NOT NULL DEFAULT 'SUBMITTED' CHECK (status IN ('SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_negotiations_proposal_id ON negotiations(proposal_id);

CREATE TRIGGER update_negotiations_updated_at
    BEFORE UPDATE ON negotiations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 8. Commercial Terms Table (Final agreed price & binding scope version)
CREATE TABLE IF NOT EXISTS commercial_terms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposal_id UUID NOT NULL REFERENCES proposals(id) ON DELETE RESTRICT,
    negotiation_id UUID REFERENCES negotiations(id) ON DELETE SET NULL,
    final_agreed_price NUMERIC(12, 2) NOT NULL CHECK (final_agreed_price >= 0),
    scope_version INTEGER NOT NULL DEFAULT 1 CHECK (scope_version >= 1),
    scope_summary TEXT NOT NULL,
    approved_by UUID REFERENCES admin_users(id) ON DELETE RESTRICT,
    approved_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_commercial_terms_proposal_id ON commercial_terms(proposal_id);

-- 9. Agreements Table
CREATE TABLE IF NOT EXISTS agreements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposal_id UUID NOT NULL REFERENCES proposals(id) ON DELETE RESTRICT,
    commercial_terms_id UUID NOT NULL REFERENCES commercial_terms(id) ON DELETE RESTRICT,
    status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'SENT', 'SIGNED', 'DECLINED')),
    contract_html TEXT,
    signature_text TEXT,
    signer_ip TEXT,
    signer_user_agent TEXT,
    signed_at TIMESTAMPTZ,
    declined_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_agreements_proposal_id ON agreements(proposal_id);

CREATE TRIGGER update_agreements_updated_at
    BEFORE UPDATE ON agreements
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 10. Invoices Table
CREATE SEQUENCE IF NOT EXISTS seq_invoice_number START WITH 1001 INCREMENT BY 1;

CREATE TABLE IF NOT EXISTS invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agreement_id UUID NOT NULL REFERENCES agreements(id) ON DELETE RESTRICT,
    invoice_number TEXT NOT NULL UNIQUE DEFAULT ('INV-' || TO_CHAR(NOW(), 'YYYY') || '-' || NEXTVAL('seq_invoice_number')),
    subtotal NUMERIC(12, 2) NOT NULL CHECK (subtotal >= 0),
    tax_amount NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (tax_amount >= 0),
    total_amount NUMERIC(12, 2) NOT NULL CHECK (total_amount >= 0),
    status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'ISSUED', 'PAID', 'OVERDUE', 'CANCELLED')),
    due_date TIMESTAMPTZ,
    paid_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_invoices_agreement_id ON invoices(agreement_id);
CREATE INDEX IF NOT EXISTS idx_invoices_status ON invoices(status);

CREATE TRIGGER update_invoices_updated_at
    BEFORE UPDATE ON invoices
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 11. Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE RESTRICT,
    razorpay_link_id TEXT UNIQUE,
    razorpay_payment_id TEXT UNIQUE,
    amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
    currency TEXT NOT NULL DEFAULT 'INR',
    status TEXT NOT NULL DEFAULT 'CREATED' CHECK (status IN ('CREATED', 'ISSUED', 'PAID', 'FAILED', 'EXPIRED')),
    payment_url TEXT,
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_invoice_id ON payments(invoice_id);
CREATE INDEX IF NOT EXISTS idx_payments_rzp_link ON payments(razorpay_link_id);

CREATE TRIGGER update_payments_updated_at
    BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 12. Payment Events Table (Razorpay Webhook Idempotency Log)
CREATE TABLE IF NOT EXISTS payment_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id UUID REFERENCES payments(id) ON DELETE CASCADE,
    event_id TEXT NOT NULL UNIQUE,
    event_type TEXT NOT NULL,
    raw_payload JSONB NOT NULL,
    processed BOOLEAN NOT NULL DEFAULT FALSE,
    processed_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payment_events_event_id ON payment_events(event_id);

-- 13. Bookings Table (Cal.com Kickoff Scheduling)
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposal_id UUID NOT NULL REFERENCES proposals(id) ON DELETE RESTRICT,
    cal_booking_id TEXT UNIQUE,
    status TEXT NOT NULL DEFAULT 'BOOKED' CHECK (status IN ('BOOKED', 'RESCHEDULED', 'CANCELLED', 'COMPLETED')),
    event_title TEXT NOT NULL DEFAULT 'Project Kickoff & Strategy Session',
    event_time TIMESTAMPTZ NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    meeting_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bookings_proposal_id ON bookings(proposal_id);

CREATE TRIGGER update_bookings_updated_at
    BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 14. Onboarding Table (Client Business Intake Questionnaire)
CREATE TABLE IF NOT EXISTS onboarding (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposal_id UUID NOT NULL REFERENCES proposals(id) ON DELETE RESTRICT,
    responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    status TEXT NOT NULL DEFAULT 'NOT_STARTED' CHECK (status IN ('NOT_STARTED', 'IN_PROGRESS', 'SUBMITTED', 'REVIEWED')),
    submitted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_onboarding_proposal_id ON onboarding(proposal_id);

CREATE TRIGGER update_onboarding_updated_at
    BEFORE UPDATE ON onboarding
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 15. Notifications Log Table
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipient_email TEXT NOT NULL,
    template_key TEXT NOT NULL,
    subject TEXT NOT NULL,
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'SENT', 'FAILED')),
    error_message TEXT,
    sent_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 16. Audit Events Table (System & Admin Audit Log)
CREATE TABLE IF NOT EXISTS audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_type TEXT NOT NULL CHECK (actor_type IN ('ADMIN', 'CLIENT', 'SYSTEM')),
    actor_id TEXT,
    action TEXT NOT NULL,
    target_entity TEXT NOT NULL,
    target_id UUID,
    metadata JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_events_target ON audit_events(target_entity, target_id);
