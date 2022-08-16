import React, { useState, useEffect } from 'react';
import './library.css';
import Playlists from './playlists';
import Songs from './songs';
import Albums from './albums';
import Artists from './artists';
import Genres from './genres';
import Podcasts from './podcasts';
import Footer from '../footer/Footer';
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// require('dotenv').config();
import { UseDataLayerValue } from '../../../src/DataLayer';

import { user } from 'pg/lib/defaults';
import { useForkRef } from '@mui/material';
import UserSongs from './PlaylistComponents/UserSongs';

export default function Library(props) {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [users, setUsers] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [userPlaylistSongs, setUserPlaylistSongs] = useState([]);

  const [userId, setUserId] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [userSongs, setUserSongs] = useState([]);
  const [userArtists, setUserArtists] = useState([]);
  const [userAlbums, setUsereAlbums] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userGenres, setUserGenres] = useState([]);
  const [isFirstRender, setIsFirstRender]=useState("A");
  const [userPlaylistId, setUserPlaylistId] = useState([]);

  
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();
  

 // console.log(userPlaylists);
 
  const name = user.display_name;
  let addRender = "";

  useEffect(() => {
   if(userPlaylists){
    fetchData();
    //setIsOneRender(False);
   }
    
    
    if(isFirstRender === "A"){
      
      const userId = user.id;
      // console.log(user);
      
      axios.get(`http://localhost:8080/playlistsongs/${user.id}`)
        .then(function(res) {
          setUserPlaylists([...res.data.rows])
          // let info = res.data;
          
      
          console.log(res.data.rows)
          
        });
        setIsFirstRender("B");
    }
   
        
      
  }, []);

  
   
  
  function fetchUserSongs(playlistid){
    console.log(allSongs);
    console.log(typeof(playlistid));
   // console.log(userId);
    
    if (allSongs.length > 0) {
      
     // console.log(allSongs);
      const filtered_userPlaylistSongs_table = allSongs.filter(playlistSong => {
        //console.log(user.spotify_name);
        console.log(playlistSong.playlist_id);
        return ( playlistSong.playlist_id === playlistid);
      })
      console.log(filtered_userPlaylistSongs_table);
      if (filtered_userPlaylistSongs_table.length === 0) {
        return;
      } 

    setUserPlaylistSongs(filtered_userPlaylistSongs_table);
    }
    console.log(userPlaylistSongs);
  }

 

  const fetchData = () => {
   
    //const usersApi = `http://localhost:8080/users`;
    //const playlistsApi = `http://localhost:8080/playlists`;
    const songsApi = `http://localhost:8080/playlistsongs`;
    //const getUsers = axios.get(usersApi);
    //const getPlaylists = axios.get(playlistsApi);
    const getSongs = axios.get(songsApi);
  
  
    axios.all([getSongs]).then(
      axios.spread((...allData) => {
       // const allUserData = allData[0].data;
       // const allPlaylistData = allData[1].data;
        const allSongsData = allData[0].data;      
       // console.log("all user data", allUserData);
       // console.log("allPlaylistData", allPlaylistData);
        console.log("all songs Data", allSongsData);
    
      //  setUsers([...allUserData]);
       // setPlaylists([...allPlaylistData]);
        setAllSongs([...allSongsData]);
       
      })
    ).catch(error => {
      console.log(error);
    })
  };
  function getSongs(playlist_id){
    //fetchData();
   // fetchUserId();
    //fetchUserPlaylist();
    console.log(playlist_id);
    fetchUserSongs(playlist_id);
    setUserPlaylistId(playlist_id);
    console.log(userPlaylistSongs);
    // if(userPlaylistSongs.length>0){
    //   console.log("Rendering");
    //   return(
       addRender = <UserSongs userPlaylistSongs={userPlaylistSongs}/>
    //   )
      
    // }

  }
 
  return (

    <div className="library-page">
      <header className="page-header">
        <h1 className="page-title">Reverb</h1>
        <h3 className="header-message">Good morning</h3>
      </header>
        <div className="page-components">
          <div className="nav-bar">

          </div>
          <div className="left-side">

            <div className="songs-components">
              <h5 className="songs-header">Songs</h5>
                <div className="songs-items">
                  {/* <SongsPreview /> */}
                  <Button className="all-songs-button">All Songs</Button>
                </div>
            </div>
            <div className="albums-components">
              <h5 className="albums-header">Albums</h5>
                <div className="albums-items">
                  {/* <AlbumsPreview /> */}
                  <Button className="all-albums-button">All Albums</Button>
                </div>
            </div>
            <div className="artists-components">
              <h5 className="artists-header">Artists</h5>
                <div className="artists-items">
                  {/* <ArtistsPreview /> */}
                  <Button className="all-artists-button">All Artists</Button>
                </div>
            </div>
          </div>

          <div className="right-side">

            <div className="playlists-components">
              <h5 className="playlists-header">Playlists</h5>
                <div className="playlists-items">
                  {/* < userPlaylists={userPlaylists} />  */}
                  {userPlaylists.map((playlist, index) => {
                    return (
                      <div key={index}>
                        <Button className="all-playlists-button" onClick={() => getSongs(playlist.id)}>{playlist.name}</Button>
                      </div>
                    )
                    })}
                  {/* <Button className="all-playlists-button" onClick={() => {}}>All Playlists</Button> */}
                </div>
            </div>
            <div className="genres-components">
              <h5 className="genres-header">Genres</h5>
                <div className="genres-items">
                  {/* <GenresPreview /> */}
                  <Button className="all-genres-button">All Genres</Button>
                </div>
            </div>
            <div className="podcasts-components">
              <h5 className="podcasts-header">Podcasts</h5>
                <div className="podcasts-items">
                  {/* <PodcastsPreview /> */}
                  <Button className="all-podcasts-button">All Podcasts</Button>
                </div>
            </div>

          </div>         
        </div>
        
      <Footer />
      {addRender}
      {userPlaylistSongs.map((playlist, index) => {
                    return (
                      <div key={index}>
                        <Button className="all-user-songs-button" >{playlist.name}</Button>
                      </div>
                    )
                    })}
          <div className="featured-songs">
          {userPlaylistSongs.map((features) => (
            <userSongs title={features.spotify_song_name} artist={features.spotify_song_id} />

          ))
          }
        </div>
    </div>
  );
}