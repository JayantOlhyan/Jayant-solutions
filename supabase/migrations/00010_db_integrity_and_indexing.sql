-- MIGRATION 00010: DATABASE INTEGRITY, FOREIGN KEY INDEXES & DISASTER RECOVERY OPTIMIZATION
-- Project: Jayant Web & AI Systems
-- File: supabase/migrations/00010_db_integrity_and_indexing.sql

-- ==============================================================================
-- 1. FOREIGN KEY INDEXES (Checklist Item 2A.6)
-- Prevents sequential scans on parent delete/update and optimizes relational JOINs.
-- ==============================================================================

-- Index on package_selections(package_id) -> references packages(id)
CREATE INDEX IF NOT EXISTS idx_package_selections_package_id 
    ON package_selections(package_id);

-- Index on commercial_terms(negotiation_id) -> references negotiations(id)
CREATE INDEX IF NOT EXISTS idx_commercial_terms_negotiation_id 
    ON commercial_terms(negotiation_id);

-- Index on commercial_terms(approved_by) -> references admin_users(id)
CREATE INDEX IF NOT EXISTS idx_commercial_terms_approved_by 
    ON commercial_terms(approved_by);

-- Index on agreements(commercial_terms_id) -> references commercial_terms(id)
CREATE INDEX IF NOT EXISTS idx_agreements_commercial_terms_id 
    ON agreements(commercial_terms_id);

-- Index on payment_events(payment_id) -> references payments(id)
CREATE INDEX IF NOT EXISTS idx_payment_events_payment_id 
    ON payment_events(payment_id);

-- Index on onboarding(reviewer_id) -> references admin_users(id)
CREATE INDEX IF NOT EXISTS idx_onboarding_reviewer_id 
    ON onboarding(reviewer_id);


-- ==============================================================================
-- 2. QUERY FILTER INDEXES (Checklist Item 2A.7)
-- Optimizes high-frequency WHERE clause filters used in admin dashboard and APIs.
-- ==============================================================================

-- Status filter on agreements (e.g., .eq('status', 'SIGNED'), .eq('status', 'SENT'))
CREATE INDEX IF NOT EXISTS idx_agreements_status 
    ON agreements(status);

-- Status filter on negotiations (e.g., .eq('status', 'SUBMITTED'))
CREATE INDEX IF NOT EXISTS idx_negotiations_status 
    ON negotiations(status);

-- Status filter on onboarding (e.g., .eq('status', 'SUBMITTED'), .eq('status', 'REVISION_REQUESTED'))
CREATE INDEX IF NOT EXISTS idx_onboarding_status 
    ON onboarding(status);

-- Status filter on bookings (e.g., .eq('status', 'BOOKED'))
CREATE INDEX IF NOT EXISTS idx_bookings_status 
    ON bookings(status);

-- Status filter on payments (e.g., .eq('status', 'PAID'))
CREATE INDEX IF NOT EXISTS idx_payments_status 
    ON payments(status);

-- Status and recipient filters on notifications log
CREATE INDEX IF NOT EXISTS idx_notifications_status 
    ON notifications(status);

CREATE INDEX IF NOT EXISTS idx_notifications_recipient_email 
    ON notifications(recipient_email);


-- ==============================================================================
-- 3. COMPOSITE INDEXES FOR COMMON QUERY PATTERNS (Checklist Item 2A.8)
-- Optimizes multi-column filtering and sorting operations.
-- ==============================================================================

-- Proposals listing filtered by status and sorted by recency
CREATE INDEX IF NOT EXISTS idx_proposals_status_created_at 
    ON proposals(status, created_at DESC);

-- Audit log pagination filtered by actor and ordered chronologically
CREATE INDEX IF NOT EXISTS idx_audit_events_actor_created 
    ON audit_events(actor_type, actor_id, created_at DESC);

-- Agreement lookup by proposal_id and status
CREATE INDEX IF NOT EXISTS idx_agreements_proposal_status 
    ON agreements(proposal_id, status);


-- ==============================================================================
-- 4. TIMESTAMP CONSISTENCY & AUTOMATED UPDATED_AT TRIGGERS (Checklist Item 2A.3)
-- Ensures updated_at timestamps are tracked automatically by PostgreSQL.
-- ==============================================================================

-- Add updated_at to notifications table with trigger
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'update_notifications_updated_at'
    ) THEN
        CREATE TRIGGER update_notifications_updated_at
            BEFORE UPDATE ON notifications
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Add updated_at to commercial_terms table with trigger
ALTER TABLE commercial_terms ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'update_commercial_terms_updated_at'
    ) THEN
        CREATE TRIGGER update_commercial_terms_updated_at
            BEFORE UPDATE ON commercial_terms
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Add updated_at to package_selections table with trigger
ALTER TABLE package_selections ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'update_package_selections_updated_at'
    ) THEN
        CREATE TRIGGER update_package_selections_updated_at
            BEFORE UPDATE ON package_selections
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;
