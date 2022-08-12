import React, { useState } from "react";
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddSongs from './AddSongs';
export default function PlaylistNames({ playlists, setPlaylists, user_id, setUserId }) {
  const [songAddState, setSongAddState] = useState(false);
  const [playlist_id, setPlaylistId] = useState(0);
  //console.log(props);
  //console.log(props[1]);
  // const [playlists, setPlaylists] = useState([]);
  //  const navigate = useNavigate();
  //  function navigateToAddSongs(){

  //   navigate('/AddSongsToPlaylists');
  //  }
  function deletePlaylist(id) {
    console.log(id);
    return axios.delete(`http://localhost:8080/deleteplaylists/${id}`)
      .then(res => {
        setPlaylists(playlists.filter(playlist => playlist.id !== id))
        console.log("Playlist deleted id:", id);
      })
  }
  let addRender="";
  

  function AddSongsPage(id) {
    console.log(id);
    setPlaylistId(id);
    console.log("Add Songs Clicked.");
    setSongAddState(true);
    // console.log(buttonClicked);
    //renderOrNotSongs(songAddState);
    // buttonClicked = false;
    console.log(songAddState);
  }
  // function renderOrNotSongs(buttonClicked){
  //   if(buttonClicked===true){
  //     addRender = <AddSongs />;
  //   } else {
  //     addRender = <h1>hi</h1>;
  //     buttonClicked =false;
  //   }
  // }
  if(songAddState===true){
    addRender = <AddSongs user_id={user_id} setUserId={setUserId} playlist_id={playlist_id} setPlaylistId={setPlaylistId} />;
  } else {
    addRender = <h1>Add songs above to your desired playlist</h1>;
    
  }
 
  
  return (
    <>
      <div>
        List of Playlists</div>
      <table className="playlists-table">
        <thead>
          <tr>

            <th>TableName</th>

          </tr>
        </thead>
        <tbody>
          {playlists.map((playlist, index) => {
            //   console.log(playlist.id);
            //   console.log(playlist.name);
            return (
              <tr key={index}>
                {/* //<td>{playlist.id}</td> */}
                <td>{playlist.name}</td>
                {/* <td>{playlist.user_id}</td>
                <td>{playlist.image_url}</td> */}

                <td>
                  <button className="button_delete" onClick={() => deletePlaylist(playlist.id)}                 >
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