import React from 'react'

export default function Featured({ title, artist, img, chooseTrack, features, addPlaylistSongs, song_id, song_name}) {

  return (
    <div className="song" >
      <div className="image">
        <img alt={""} src={img}
          width="150" height="150" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <button className="button_add_songs" onClick={() => addPlaylistSongs(song_id, song_name)}  >
          Add Song
        </button>
    </div>
  )
}
