import React, { useEffect, useState } from "react";
import '../PlaylistComponents/AddSongs.css';
import axios from 'axios';
import { UseDataLayerValue } from '../../../DataLayer';
import Featured from './AddSongsFeatured';
export default function AddSongsToPlaylists({ user_id, playlist_id, playlists }) {
  // const [playlistSongs, setPlaylistSongs]= useState([]);
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();
  console.log("tops", tops);
  console.log("user_id", user_id);
  console.log("playlist_id", playlist_id);
  const [playlistName, setPlaylistName] = useState([]);
  // const [disable, setDisable] = React.useState(false);

  useEffect(() =>{
    setPlaylistNameItem();
  }, []);

  function addPlaylistSongs (song_id, song_name) {

    const playlistSongObject = { playlist_id: playlist_id, user_id: user_id, spotify_song_id:song_id, spotify_song_name: song_name };
    console.log(playlistSongObject);

    return axios.post(`http://localhost:8080/playlistsongs`, playlistSongObject)
      .then((response) => {
        const newPlaylistSongs = response.data;
        //setPlaylistSongs([newPlaylistSongs, ...playlistSongs]);
      });

  };



  function setPlaylistNameItem(){
    console.log(playlists);
    console.log(playlist_id);
    if(playlists.length>0){
      const filtered_playlist_table = playlists.filter(playlist =>{

        return playlist.id === playlist_id;
      })
      if(filtered_playlist_table.length===0){
        return;
      }
      // console.log(filtered_user_table[0].name);
      const user_id_table_name =filtered_playlist_table[0].name;
      setPlaylistName(user_id_table_name);

    }

  }


  return (
    <div className="addsongs">
      <div className="addsongtitle">Add Songs to Playlist: {playlistName} </div>

      <div className="featured">
        <div className="title">
        </div>
        <div className="featured-songs">
          {featured?.tracks?.map((features) => (
            <Featured title={features.name} artist={features.artists[0].name} img={features.album.images[0].url}  key={features.uri} addPlaylistSongs={addPlaylistSongs} song_id ={features.uri} song_name= {features.name} playlists={playlists} />

          ))
          }
        </div>
      </div>
    </div>
  )
};