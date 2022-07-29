DROP TABLE IF EXISTS playlist_songs CASCADE;

CREATE TABLE playlist_songs(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  spotify_song_id VARCHAR(255),
  spotify_song_name VARCHAR(255)
);