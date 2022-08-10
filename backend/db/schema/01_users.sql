-- Drop and recreate table

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  spotify_name VARCHAR(255) NOT NULL,
  spotify_user_id VARCHAR(255) NOT NULL  
);