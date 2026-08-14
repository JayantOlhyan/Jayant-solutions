-- MIGRATION 00012: STORAGE & DATA PROTECTION (GDPR / INDIA DPDP ACT 2023 COMPLIANCE)
-- Project: Jayant Web & AI Systems
-- File: supabase/migrations/00012_storage_and_data_protection.sql

-- 1. Extend clients table with erasure and legal version tracking (13.3, 13.9)
ALTER TABLE clients ADD COLUMN IF NOT EXISTS is_erased BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS erased_at TIMESTAMPTZ;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS terms_version TEXT DEFAULT 'v2026.1';
ALTER TABLE clients ADD COLUMN IF NOT EXISTS privacy_version TEXT DEFAULT 'v2026.1';

-- 2. Extend agreements table with legal version tracking (13.9)
ALTER TABLE agreements ADD COLUMN IF NOT EXISTS terms_version TEXT DEFAULT 'v2026.1';
ALTER TABLE agreements ADD COLUMN IF NOT EXISTS privacy_version TEXT DEFAULT 'v2026.1';

-- 3. Structured Legal Consent Recording Table (13.1, 13.9)
CREATE TABLE IF NOT EXISTS client_consents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    proposal_id UUID REFERENCES proposals(id) ON DELETE SET NULL,
    consent_type TEXT NOT NULL CHECK (consent_type IN ('TERMS_OF_SERVICE', 'PRIVACY_POLICY', 'COMMERCIAL_AGREEMENT', 'DATA_PROCESSING', 'MARKETING')),
    document_name TEXT NOT NULL,
    document_version TEXT NOT NULL,
    accepted BOOLEAN NOT NULL DEFAULT true,
    ip_address TEXT,
    user_agent TEXT,
    context TEXT NOT NULL DEFAULT 'COMMERCIAL_SIGNING',
    accepted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    withdrawn_at TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_client_consents_client ON client_consents(client_id);
CREATE INDEX IF NOT EXISTS idx_client_consents_proposal ON client_consents(proposal_id);
CREATE INDEX IF NOT EXISTS idx_client_consents_type ON client_consents(consent_type);
CREATE INDEX IF NOT EXISTS idx_client_consents_accepted_at ON client_consents(accepted_at DESC);

-- Enable RLS: Service role only
ALTER TABLE client_consents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access to client_consents"
    ON client_consents
    FOR ALL
    USING (auth.role() = 'service_role');
