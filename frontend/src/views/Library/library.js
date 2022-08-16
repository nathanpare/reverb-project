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

export default function Library(props) {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [userSongs, setUserSongs] = useState([]);
  const [userArtists, setUserArtists] = useState([]);
  const [userAlbums, setUsereAlbums] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userGenres, setUserGenres] = useState([]);
  const [users, setUsers] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();
  
  // console.log(user);

  useEffect(() => {
    const userId = user.id;
    // console.log(user);
    
    axios.get(`http://localhost:8080/playlistsongs/${user.id}`)
      .then(function(res) {
        setUserPlaylists([...res.data.rows])
        // let info = res.data;
        
    
        console.log(res.data.rows)
      })
    // axios.get(`http://localhost:8080/playlistsongs/`)
    // .then(function(res) {
    //   console.log(res)
    //   // setPlaylistSongs([...res.data.rows]);
    //   // let info = res.data;
    //   console.log(res.data.rows)
    // })
    // .catch(error => {
    //   console.log("setPlaylistSongs failed")
    // });
      
  }, []);

  
   
  function fetchUserId(userList) {
    let idsArr = [];
    userList.forEach(userItem => {
      // console.log(userItem);
      idsArr.push(userItem.spotify_user_id);
    })
    return idsArr;
  }

  function fetchUserName(userList) {
    let namesArr = [];
    userList.forEach(userItem => {
      namesArr.push(userItem.spotify_name);
    })
    return namesArr;
  }

  function getSongs(playlist_id) {
    // let songsArr = []l
    console.log(playlistSongs);
    if (playlistSongs.length > 0) {
      const filteredPlaylistSongs = playlistSongs.filter(playlistSong => {
        return (playlistSong.playlist_id === playlist_id)
      })
    }
  }

  // console.log(users);
  

  const fetchData = () => {
    const usersApi = `http://localhost:8080/users`;
    const playlistsApi = `http://localhost:8080/playlists`;
    const getUsers = axios.get(usersApi);
    const getPlaylists = axios.get(playlistsApi);
  
    axios.all([getUsers, getPlaylists]).then(
      axios.spread((...allData) => {
        const allUserData = allData[0].data;
        const allPlaylistData = allData[1].data;
        setUsers([...allUserData]);
        setPlaylists([...allPlaylistData]);
  
      })
    ).catch(error => {
      console.log(error);
    })
  };
  

  // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  //   0:
  //   id: 13
  //   name: "anotherone"
  //   [[Prototype]]: Object
  //   1:
  //   id: 3
  //   name: "hereyougo"
  //   [[Prototype]]: Object
  //   2: {id: 9, name: 'NEWEST'}
  //   3: {id: 10, name: 'NEWEST1'}
  //   4: {id: 11, name: 'NEWEST12'}
  //   5: {id: 12, name: 'NEWEST123'}
  //   6: {id: 2, name: 'onealways'}
  //   7: {id: 4, name: 'TORQUE'}
  //   length: 8
  //   [[Prototype]]: Array(0)

  // {country: 'CA', display_name: 'rkellyyabish', email: 'rkellyyabish@gmail.com', explicit_content: {…}, external_urls: {…}, …}
  //   country: "CA"
  //   display_name: "rkellyyabish"
  //   email: "rkellyyabish@gmail.com"
  //   explicit_content: {filter_enabled: false, filter_locked: false}
  //   external_urls: {spotify: 'https://open.spotify.com/user/rkellyyabish'}
  //   followers: {href: null, total: 1}
  //   href: "https://api.spotify.com/v1/users/rkellyyabish"
  //   id: "rkellyyabish"
  //   images: []
  //   product: "premium"
  //   type: "user"
  //   uri: "spotify:user:rkellyyabish"
  //   [[Prototype]]: Object
  console.log(playlists)
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
                        <Button className="all-playlists-button" onClick={getSongs(playlist.id)}>{playlist.name}</Button>
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
    </div>
  );
}