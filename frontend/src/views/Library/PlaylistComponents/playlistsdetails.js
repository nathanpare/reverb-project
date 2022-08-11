import React, { useState } from "react";
import axios from 'axios';
export default function PlaylistNames({playlists, setPlaylists}) {
  //console.log(props);
  //console.log(props[1]);
 // const [playlists, setPlaylists] = useState([]);
  function deletePlaylist(id) {
    console.log(id);
    return axios.delete(`http://localhost:8080/deleteplaylists/${id}`)
   .then(res => {
       setPlaylists(playlists.filter(playlist => playlist.id !==id ))
      console.log("Playlist deleted id:", id);
   })
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
                  <button className="button_delete" onClick={() =>deletePlaylist(playlist.id)}                 >
                    Delete
                  </button>
                </td>
                <td>---</td>
                <td>
                  <button className="button_add_songs" >
                    Add Songs
                  </button>
                </td>
              </tr>);
          })}

        </tbody>
      </table>
    </>
  )
}