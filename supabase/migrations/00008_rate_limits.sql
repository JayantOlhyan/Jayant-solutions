-- MIGRATION 00008: RATE LIMITING ENGINE SCHEMA
-- Create rate_limits table for persistent cross-invocation serverless rate limiting

CREATE TABLE IF NOT EXISTS rate_limits (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 1,
  reset_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for high-performance reset_at queries and cleanup
CREATE INDEX IF NOT EXISTS idx_rate_limits_reset_at ON rate_limits(reset_at);

-- RLS Policy: Only service role can access rate limits
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access to rate_limits"
  ON rate_limits
  FOR ALL
  USING (auth.role() = 'service_role');

-- ATOMIC STORED PROCEDURE: Single-query atomic increment and window reset to prevent read-modify-write races
CREATE OR REPLACE FUNCTION check_and_increment_rate_limit(
  p_key TEXT,
  p_window_seconds INT
)
RETURNS TABLE (
  current_count INT,
  reset_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_now TIMESTAMPTZ := NOW();
  v_new_reset TIMESTAMPTZ := NOW() + (p_window_seconds || ' seconds')::INTERVAL;
BEGIN
  RETURN QUERY
  INSERT INTO rate_limits (key, count, reset_at, created_at)
  VALUES (p_key, 1, v_new_reset, v_now)
  ON CONFLICT (key) DO UPDATE
  SET
    count = CASE 
      WHEN rate_limits.reset_at > v_now THEN rate_limits.count + 1 
      ELSE 1 
    END,
    reset_at = CASE 
      WHEN rate_limits.reset_at > v_now THEN rate_limits.reset_at 
      ELSE v_new_reset 
    END
  RETURNING rate_limits.count AS current_count, rate_limits.reset_at;
END;
$$;
