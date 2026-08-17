-- Alter packages table to add display_price and floor_price
ALTER TABLE packages ADD COLUMN IF NOT EXISTS display_price NUMERIC(12, 2) CHECK (display_price >= 0);
ALTER TABLE packages ADD COLUMN IF NOT EXISTS floor_price NUMERIC(12, 2) CHECK (floor_price >= 0);

-- Update packages seed data
UPDATE packages SET display_price = 79000.00, floor_price = 59000.00, standard_price = 69000.00 WHERE code = 'FOUNDATION';
UPDATE packages SET display_price = 159000.00, floor_price = 125000.00, standard_price = 145000.00 WHERE code = 'GROWTH';
UPDATE packages SET display_price = 249000.00, floor_price = 195000.00, standard_price = 225000.00 WHERE code = 'SCALE';
