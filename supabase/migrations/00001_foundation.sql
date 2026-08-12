-- Supabase Foundation Migration Blueprint
-- Project: Jayant Web & AI Systems
-- Version: 00001_foundation.sql

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- System Notice / Verification Marker
COMMENT ON DATABASE postgres IS 'Jayant Web & AI Systems — Production Database';
