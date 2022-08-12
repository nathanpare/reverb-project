import React, { useState } from "react";
import '../PlaylistComponents/AddSongs.css';
import axios from 'axios';
import { UseDataLayerValue } from '../../../DataLayer';
export default function AddSongsToPlaylists({ user_id, setUserId, playlist_id, setPlaylistId }) {
  // const [playlistSongs, setPlaylistSongs]= useState([]);
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();
  console.log("tops", tops);
  console.log("user_id", user_id);
  console.log("playlist_id", playlist_id);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  console.log(playlistSongs);

  
  const addPlaylistSongs = () => {

    const playlistSongObject = { playlist_id: playlist_id, user_id: user_id, spotify_song_id:"test id", spotify_song_name: "testsongname" };

    return axios.post(`http://localhost:8080/playlistsongs`, playlistSongObject)
      .then((response) => {
        const newPlaylistSongs = response.data;
        setPlaylistSongs([newPlaylistSongs, ...playlistSongs]);
      });
  };

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
        <button className="button_add_songs" onClick={addPlaylistSongs} >
          Add Song
        </button>
        <i className="fa-solid fa-play" ></i>
      </div>
    </div>
  )
};