-- MIGRATION 00009: AUTHENTICATION HARDENING & LOCKOUT SCHEMA
-- Project: Jayant Web & AI Systems
-- File: supabase/migrations/00009_auth_hardening.sql

-- 1. ATOMIC FUNCTION: Clear/reset rate limit or lockout key upon successful authentication
CREATE OR REPLACE FUNCTION reset_rate_limit(p_key TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM rate_limits WHERE key = p_key;
END;
$$;

-- 2. Ensure indexes on audit_events for security queries
CREATE INDEX IF NOT EXISTS idx_audit_events_action ON audit_events(action);
CREATE INDEX IF NOT EXISTS idx_audit_events_created_at ON audit_events(created_at DESC);
