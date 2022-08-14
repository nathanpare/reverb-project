import React, { useEffect, useState } from "react";
import '../PlaylistComponents/AddSongs.css';
import axios from 'axios';
import { UseDataLayerValue } from '../../../DataLayer';
import Featured from './AddSongsFeatured';
export default function AddSongsToPlaylists({ user_id, playlist_id, playlists }) {
  // const [playlistSongs, setPlaylistSongs]= useState([]);
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();
  //console.log("tops", tops);
  console.log("user_id", user_id);
  console.log("playlist_id", playlist_id);
  const [playlistName, setPlaylistName] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);//1
  const [newPlaylistSongs, setNewPlaylistSongs] = useState([]);//1
 
  //const [spotifySongId, setSpotifySongId] = useState("");
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {

    axios.get(`http://localhost:8080/playlistsongs`)
      .then(function (res) {
        setPlaylistSongs([...res.data]);
       // console.log(res.data);
      })
    if (firstRender === false) {
      setPlaylistNameItem();
      setFirstRender(true);
    }

  }, []);

  //function to check if the song already exists
  function checkPlaylistSong_Spotify_id(input_song_id ) {
   // console.log(playlist_id);
   // console.log(user_id);
   //console.log(typeof(input_song_id));

    if (playlistSongs.length > 0) {
      const filtered_playlist_song = playlistSongs.filter(playlistsong => {
       
        return ( playlistsong.user_id===user_id && playlistsong.playlist_id===playlist_id);
      })
     // console.log(filtered_playlist_song)
      const filtered_playlist_particular_song = filtered_playlist_song.filter(playlistsongpart =>{
       // console.log(typeof(playlistsongpart.spotify_song_id));
        console.log(`ID: ${playlistsongpart.spotify_song_id.trim()} is not equal to ${input_song_id.trim()}`)
        return ( playlistsongpart.spotify_song_id.trim() === input_song_id.trim());

      })

      //console.log(filtered_playlist_particular_song);

      if (filtered_playlist_particular_song.length > 0) {
        console.log("duplicate exists", input_song_id);
        return true;
      } else {
        console.log("No duplicate")
        return false;
      }
    }

  }
  function addMultiFunctionPlaylistSongs(song_id, song_name, disable) {
    if (checkPlaylistSong_Spotify_id(song_id)) {
      return;
    };

    addPlaylistSongs(song_id, song_name);

  }


  function addPlaylistSongs(song_id, song_name) {

    //setSpotifySongId(song_id);

    const playlistSongObject = { playlist_id: playlist_id, user_id: user_id, spotify_song_id: song_id, spotify_song_name: song_name };

    return axios.post(`http://localhost:8080/playlistsongs`, playlistSongObject)
      .then((response) => {
        const newPlaylistSongsRes = response.data;
        setNewPlaylistSongs([newPlaylistSongsRes, ...playlistSongs]);
       // console.log(newPlaylistSongs);

      });

  };



  function setPlaylistNameItem() {
    //console.log(playlists);
    //console.log(playlist_id);
    if (playlists.length > 0) {
      const filtered_playlist_table = playlists.filter(playlist => {

        return playlist.id === playlist_id;
      })
      if (filtered_playlist_table.length === 0) {
        
        return;
      }
      // console.log(filtered_user_table[0].name);
      const user_id_table_name = filtered_playlist_table[0].name;
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
            <Featured title={features.name} artist={features.artists[0].name} img={features.album.images[0].url} key={features.uri} addMultiFunctionPlaylistSongs={addMultiFunctionPlaylistSongs} song_id={features.uri} song_name={features.name} playlists={playlists} />

          ))
          }
        </div>
      </div>
    </div>
  )
};