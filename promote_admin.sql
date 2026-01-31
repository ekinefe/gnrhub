-- Promote user 'gnr-admin' to 'ADMIN'
UPDATE users SET role = 'ADMIN' WHERE username = 'gnr-admin';

-- Verify the change (optional, for output)
SELECT id, username, role FROM users WHERE username = 'gnr-admin';
