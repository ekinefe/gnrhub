-- Run these commands in your Cloudflare D1 Console or via Wrangler
-- Command: npx wrangler d1 execute gnrhub-db --file=./db_schema_update.sql

ALTER TABLE users ADD COLUMN reset_token TEXT;
ALTER TABLE users ADD COLUMN reset_expires INTEGER;
