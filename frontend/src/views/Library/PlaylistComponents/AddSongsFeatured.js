import React from 'react'

export default function Featured({ title, artist, img, chooseTrack, features, addMultiFunctionPlaylistSongs, song_id, song_name, newPlaylistSongs, playlist_id, user_id}) {

  //console.log(newPlaylistSongs);
  const disable=newPlaylistSongs.some(playlistSong => playlistSong.spotify_song_name === song_name && playlistSong.playlist_id ===playlist_id && playlistSong.user_id===user_id);
  //console.log(disable);

  return (
    <div className="song" >
      <div className="image">
        <img alt={""} src={img}
          width="150" height="150" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <button className="button_add_songs"  disabled={disable}onClick={() => addMultiFunctionPlaylistSongs(song_id, song_name)}  >
          Add Song
        </button>
    </div>
  )
}
