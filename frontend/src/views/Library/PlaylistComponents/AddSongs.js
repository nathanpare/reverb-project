import React from "react";
import '../PlaylistComponents/AddSongs.css';
export default function AddSongsToPlaylists({ users, playlists }) {
  return (
    <div className="addsongs">
      <h2>I am adding Songs to Playlists</h2>
      <div className="song2">
        <div className="image">
          <img alt={""} src="https://i.scdn.co/image/ab67616d0000b273626745b3aa04899001a924ad"
            width="150" height="150" />
        </div>
        <p className="name">Low Life</p>
        <p className="artist">The Weekend</p>
        <button className="button_add_songs" >
          Add Song
        </button>
        <i className="fa-solid fa-play"></i>
      </div>
    </div>
  )
};