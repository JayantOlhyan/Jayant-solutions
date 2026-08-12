-- Migration 00004: Seed Initial Admin User
-- Link Auth User ID (jayantwebaisystems@gmail.com) to admin_users table

INSERT INTO admin_users (id, email, role)
VALUES (
    '4bcbf709-bc70-4da1-856b-655d297a7bbb', 
    'jayantwebaisystems@gmail.com', 
    'admin'
)
ON CONFLICT (id) DO UPDATE SET 
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    updated_at = NOW();
