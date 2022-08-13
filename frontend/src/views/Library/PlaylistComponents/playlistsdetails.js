import React, { useState } from "react";
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddSongs from './AddSongs';
import './playlistsdetails.css';

export default function PlaylistNames({ playlists, setPlaylists, user_id, setUserId }) {
  const [songAddState, setSongAddState] = useState(false);
  const [playlist_id, setPlaylistId] = useState(0);

  function deletePlaylist(id) {
    console.log(id);
    return axios.delete(`http://localhost:8080/deleteplaylists/${id}`)
      .then(res => {
        setPlaylists(playlists.filter(playlist => playlist.id !== id))
        console.log("Playlist deleted id:", id);
      })
  }
  let addRender = "";


  function AddSongsPage(id) {
    console.log(id);
    setPlaylistId(id);
    console.log("Add Songs Clicked.");
    setSongAddState(true);
 
  }

  if (songAddState === true) {
    addRender = <AddSongs user_id={user_id}  playlist_id={playlist_id} playlists={playlists}/>;
  } else {
    addRender = <div className="playlistmessage">Add songs to your desired playlist</div>;

  }

  return (
    <>
      <div className="tableinfo">
        List of Playlists</div>
      <table className="playlists-table">
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {playlists.map((playlist, index) => {
            return (
              <tr key={index}>
                <td className="playlistname">***{playlist.name}***</td>
                <td>
                  <button className="button_delete" onClick={() => deletePlaylist(playlist.id)}  >
                    Delete
                  </button>
                </td>
                <td>---</td>
                <td>
                  <button className="button_add_songs" onClick={() => AddSongsPage(playlist.id)}>
                    Add Songs
                  </button>
                </td>
              </tr>);
          })}

        </tbody>
      </table>
  
      {addRender}
    </>
  )
}