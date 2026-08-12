-- Phase 3: Row Level Security (RLS) & Access Control Migration
-- Project: Jayant Web & AI Systems
-- File: supabase/migrations/00003_rls_policies.sql

-- 1. Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE package_selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE negotiations ENABLE ROW LEVEL SECURITY;
ALTER TABLE commercial_terms ENABLE ROW LEVEL SECURITY;
ALTER TABLE agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;

-- 2. Helper function to check if requesting user is an active admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN (
        auth.role() = 'authenticated' AND (
            EXISTS (
                SELECT 1 FROM admin_users 
                WHERE id = auth.uid()
            )
            OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
        )
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. RLS Policies: Packages Catalog (Public Read for active packages, Admin Full Access)
CREATE POLICY "Public Read Active Packages" ON packages
    FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Admin Full Access Packages" ON packages
    FOR ALL USING (is_admin());

-- 4. RLS Policies: Admin Users Table
CREATE POLICY "Admin Read Own Record" ON admin_users
    FOR SELECT USING (id = auth.uid() OR is_admin());

CREATE POLICY "Admin Full Access Admin Users" ON admin_users
    FOR ALL USING (is_admin());

-- 5. RLS Policies: Proposals (Public Read by Token, Admin Full Access)
CREATE POLICY "Public Read Proposal By Token" ON proposals
    FOR SELECT USING (token IS NOT NULL AND deleted_at IS NULL);

CREATE POLICY "Admin Full Access Proposals" ON proposals
    FOR ALL USING (is_admin());

-- 6. RLS Policies: Package Selections (Public Insert/Read by Proposal, Admin Full Access)
CREATE POLICY "Public Insert Package Selection" ON package_selections
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Public Read Package Selection" ON package_selections
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Admin Full Access Package Selections" ON package_selections
    FOR ALL USING (is_admin());

-- 7. RLS Policies: Negotiations (Public Insert/Read by Proposal, Admin Full Access)
CREATE POLICY "Public Insert Negotiation" ON negotiations
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Public Read Negotiation" ON negotiations
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Admin Full Access Negotiations" ON negotiations
    FOR ALL USING (is_admin());

-- 8. RLS Policies: Commercial Terms (Public Read by Proposal, Admin Full Access)
CREATE POLICY "Public Read Commercial Terms" ON commercial_terms
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Admin Full Access Commercial Terms" ON commercial_terms
    FOR ALL USING (is_admin());

-- 9. RLS Policies: Agreements (Public Read/Update Signature by Proposal, Admin Full Access)
CREATE POLICY "Public Read Agreement" ON agreements
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Public Update Agreement Signature" ON agreements
    FOR UPDATE USING (
        status IN ('DRAFT', 'SENT') AND
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Admin Full Access Agreements" ON agreements
    FOR ALL USING (is_admin());

-- 10. RLS Policies: Invoices (Public Read by Agreement/Proposal, Admin Full Access)
CREATE POLICY "Public Read Invoice" ON invoices
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM agreements a
            JOIN proposals p ON a.proposal_id = p.id
            WHERE a.id = agreement_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Admin Full Access Invoices" ON invoices
    FOR ALL USING (is_admin());

-- 11. RLS Policies: Payments (Public Read Paid Link, Admin Full Access)
CREATE POLICY "Public Read Payment Link" ON payments
    FOR SELECT USING (TRUE);

CREATE POLICY "Admin Full Access Payments" ON payments
    FOR ALL USING (is_admin());

-- 12. RLS Policies: Bookings & Onboarding
CREATE POLICY "Public Read/Write Onboarding" ON onboarding
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Public Read Bookings" ON bookings
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM proposals p 
            WHERE p.id = proposal_id AND p.deleted_at IS NULL
        )
    );

CREATE POLICY "Admin Full Access Bookings" ON bookings
    FOR ALL USING (is_admin());

CREATE POLICY "Admin Full Access Onboarding" ON onboarding
    FOR ALL USING (is_admin());

-- 13. RLS Policies: Clients, Notifications, Payment Events, Audit Events (Admin Only)
CREATE POLICY "Admin Full Access Clients" ON clients FOR ALL USING (is_admin());
CREATE POLICY "Admin Full Access Notifications" ON notifications FOR ALL USING (is_admin());
CREATE POLICY "Admin Full Access Payment Events" ON payment_events FOR ALL USING (is_admin());
CREATE POLICY "Admin Full Access Audit Events" ON audit_events FOR ALL USING (is_admin());
