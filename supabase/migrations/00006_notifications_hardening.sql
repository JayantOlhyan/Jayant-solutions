-- Migration 00006: Hardening notifications table for idempotency, retry counting, and delivery status
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS idempotency_key TEXT UNIQUE;
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS attempt_count INTEGER NOT NULL DEFAULT 1;
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS text_body TEXT;

-- Drop old check constraint if present and apply updated status check
ALTER TABLE notifications DROP CONSTRAINT IF EXISTS notifications_status_check;
ALTER TABLE notifications ADD CONSTRAINT notifications_status_check 
    CHECK (status IN ('PENDING', 'SIMULATED', 'SENT', 'FAILED', 'RETRYING'));
