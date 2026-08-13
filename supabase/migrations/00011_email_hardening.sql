-- MIGRATION 00011: EMAIL DELIVERABILITY, BOUNCE/COMPLAINT SUPPRESSION & DELIVERY TRACKING
-- Project: Jayant Web & AI Systems
-- File: supabase/migrations/00011_email_hardening.sql

-- 1. Extend notifications table with provider_email_id and updated status check
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS provider_email_id TEXT;
CREATE INDEX IF NOT EXISTS idx_notifications_provider_email_id ON notifications(provider_email_id);

-- Update status check constraint to include DELIVERED, BOUNCED, COMPLAINED
ALTER TABLE notifications DROP CONSTRAINT IF EXISTS notifications_status_check;
ALTER TABLE notifications ADD CONSTRAINT notifications_status_check 
    CHECK (status IN ('PENDING', 'SIMULATED', 'SENT', 'DELIVERED', 'BOUNCED', 'COMPLAINED', 'FAILED', 'RETRYING'));

-- 2. Email Suppression Table (Hard Bounces & Spam Complaints)
CREATE TABLE IF NOT EXISTS email_suppressions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    reason TEXT NOT NULL CHECK (reason IN ('BOUNCE', 'COMPLAINT', 'MANUAL')),
    source_event_id TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_suppressions_email ON email_suppressions(email);

-- Enable RLS: Service role only
ALTER TABLE email_suppressions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access to email_suppressions"
    ON email_suppressions
    FOR ALL
    USING (auth.role() = 'service_role');

-- 3. Email Delivery Events Table (Full Webhook Tracking & Idempotency)
CREATE TABLE IF NOT EXISTS email_delivery_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    notification_id UUID REFERENCES notifications(id) ON DELETE SET NULL,
    provider_event_id TEXT UNIQUE NOT NULL,
    event_type TEXT NOT NULL CHECK (event_type IN ('sent', 'delivered', 'delivery_delayed', 'bounced', 'complained', 'opened', 'clicked')),
    recipient_email TEXT NOT NULL,
    provider TEXT NOT NULL DEFAULT 'RESEND',
    provider_email_id TEXT,
    payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_delivery_events_recipient ON email_delivery_events(recipient_email);
CREATE INDEX IF NOT EXISTS idx_email_delivery_events_provider_email ON email_delivery_events(provider_email_id);
CREATE INDEX IF NOT EXISTS idx_email_delivery_events_type ON email_delivery_events(event_type);
CREATE INDEX IF NOT EXISTS idx_email_delivery_events_created_at ON email_delivery_events(created_at DESC);

-- Enable RLS: Service role only
ALTER TABLE email_delivery_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access to email_delivery_events"
    ON email_delivery_events
    FOR ALL
    USING (auth.role() = 'service_role');
