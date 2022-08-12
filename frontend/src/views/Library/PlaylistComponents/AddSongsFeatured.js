import React from 'react'

export default function Featured({ title, artist, img, chooseTrack, features, addPlaylistSongs}) {
  return (
    <div className="song" >
      <div className="image">
        <img alt={""} src={img}
          width="120" height="120" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <button className="button_add_songs" onClick={addPlaylistSongs}  >
          Add Song
        </button>
    </div>
  )
}
