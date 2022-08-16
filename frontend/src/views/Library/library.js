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
  const [usrsongs, setUsrSongs] = useState(false);
  const [usrartists, setUsrArtists] = useState(false);
  const [usralbums, setUsrAlbums] = useState(false);
  const [usrplaylists, setUsrPlaylists] = useState(false);
  const [usrgenres, setUsrGenres] = useState(false);
  const [users, setUsers] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();

  const name= "User111";

  // useEffect(() => {

    // axios.get(`http://localhost:8080/playlists`)
    //   .then(function(res) {
    //     setUsrPlaylists([...res.data])
    //     // let info = res.data;

    //     console.log(res.data)
    //   })
  //   fetchData();      

  // }, []);
//   (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 13, name: 'anotherone'}
// 1: {id: 3, name: 'hereyougo'}
// 2: {id: 9, name: 'NEWEST'}
// 3: {id: 10, name: 'NEWEST1'}
// 4: {id: 11, name: 'NEWEST12'}
// 5: {id: 12, name: 'NEWEST123'}
// 6: {id: 2, name: 'onealways'}
// 7: {id: 4, name: 'TORQUE'}
// length: 8

// 0: {id: 1, spotify_name: '12345', spotify_user_id: '12'}
// 1:
// id: 2
// spotify_name: "abcde"
// spotify_user_id: "13"
// [[Prototype]]: Object
// 2: {id: 3, spotify_name: 'pqrst', spotify_user_id: '15'}
// 3: {id: 4, spotify_name: 'rkellyyabish', spotify_user_id: 'rkellyyabish'}

  const sampleID = 4;

  // console.log(playlists);
  // console.log(users);
  // console.log(users);
  users.forEach(user => {
    console.log(user);
  })
   
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

  return (

    <div className="library-page">
      <header className="page-header">
        <h1 className="page-title">Reverb</h1>
        <h3 className="header-message">Good morning, {name}</h3>
      </header>
        <body className="page-components">
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
                  {/* <PlaylistsPreview /> */}
                  <Button className="all-playlists-button">All Playlists</Button>
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
        </body>
      <Footer />
    </div>
  );
}