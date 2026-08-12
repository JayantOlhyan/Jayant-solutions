-- Migration 00005: Add pdf_storage_path to invoices table
ALTER TABLE invoices ADD COLUMN IF NOT EXISTS pdf_storage_path TEXT;
