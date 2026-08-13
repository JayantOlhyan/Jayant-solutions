-- Migration 00007: Onboarding Hardening, Revision Workflow & Security RLS
-- Project: Jayant Web & AI Systems

-- 1. Ensure proposal_id is UNIQUE on onboarding table for idempotency
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'onboarding_proposal_id_key'
    ) THEN
        ALTER TABLE onboarding ADD CONSTRAINT onboarding_proposal_id_key UNIQUE (proposal_id);
    END IF;
END $$;

-- 2. Update status check constraint to support REVISION_REQUESTED
ALTER TABLE onboarding DROP CONSTRAINT IF EXISTS onboarding_status_check;
ALTER TABLE onboarding ADD CONSTRAINT onboarding_status_check 
    CHECK (status IN ('NOT_STARTED', 'IN_PROGRESS', 'SUBMITTED', 'REVISION_REQUESTED', 'REVIEWED'));

-- 3. Add admin review tracking columns to onboarding table
ALTER TABLE onboarding ADD COLUMN IF NOT EXISTS reviewer_id UUID REFERENCES admin_users(id) ON DELETE SET NULL;
ALTER TABLE onboarding ADD COLUMN IF NOT EXISTS review_notes TEXT;
ALTER TABLE onboarding ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMPTZ;

-- 4. Enable Row Level Security on onboarding table
ALTER TABLE onboarding ENABLE ROW LEVEL SECURITY;

-- 5. Drop old RLS policies if existing
DROP POLICY IF EXISTS "Admin full access to onboarding" ON onboarding;
DROP POLICY IF EXISTS "Public proposal token access to onboarding" ON onboarding;

-- 6. Admin full access policy
CREATE POLICY "Admin full access to onboarding"
    ON onboarding
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM admin_users au
            WHERE au.id = auth.uid()
        )
    );
