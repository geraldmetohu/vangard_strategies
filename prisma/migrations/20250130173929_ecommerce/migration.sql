-- Enums

-- Users
CREATE TABLE users (
  id             TEXT           PRIMARY KEY,
  email          TEXT           NOT NULL UNIQUE,
  first_name     TEXT           NOT NULL,
  last_name      TEXT           NOT NULL,
  profile_image  TEXT           NOT NULL,
  created_at     TIMESTAMP(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Companies
CREATE TABLE companies (
  id             TEXT           PRIMARY KEY,
  name           TEXT           NOT NULL,
  address        TEXT,
  is_client      BOOLEAN        NOT NULL DEFAULT FALSE,
  user_id        TEXT           REFERENCES users(id) ON DELETE SET NULL,
  created_at     TIMESTAMP(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for faster lookups
CREATE INDEX idx_companies_user_id          ON companies(user_id);
