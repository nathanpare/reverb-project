-- Drop and recreate likes table

DROP TABLE IF EXISTS likes CASCADE;
CREATE TABLE likes(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  spotify_song_id VARCHAR(255) NOT NULL

);