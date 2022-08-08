//import React, {Component} from 'react';
import './App.css';
// import LibraryPage from './views/Library/library';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
// import Footer from './components/footer/Footer';
// import Sidebar from './views/sidebar/Sidebar'
import { getTokenFromResponse } from "./views/Nav/spotify";
import { UseDataLayerValue } from './DataLayer';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "bootstrap/dist/css/bootstrap.min.css";
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import "./views/Search/Search.css";
import Library from './views/Library/library';
import "./views/Library/library.css"
import "./views/NewSidebar/NewSidebar.css"
import Login from './views/Login/Login';
import "./views/Login/Login.css"
import Sidebar from './views/sidebar/Sidebar';

const spotify = new SpotifyWebApi();

function App() {
  const [view, setView] = useState("Home");
  const [{ user, releases, recents, playlists, token }, dispatch] = UseDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe()
        .then((user) => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getNewReleases({ limit: 5, offset: 0, country: 'SE' })
        .then((releases) => {
          dispatch({
            type: "SET_RELEASES",
            releases: releases,
          })
        })

      spotify.getTracks(["ndn9e3nc394i","nreouvnberov"])
        .then((featured) => {
          dispatch({
            type: "SET_FEATURED",
            featured: featured,
          })
        })

        spotify.getMyRecentlyPlayedTracks({
          limit : 10
        })
        .then((recents) => {
          dispatch({
            type: "SET_RECENTS",
            recents: recents,
          })
        })

    }

  }, []);

  console.log("token", token);
  console.log("RELEASES", releases);
  console.log("playlists", playlists);
  console.log("RECENTS", recents);
  return (
    <div className='app'>
    {token ? 
<div className='reverb'>
      <div className='sidebar'>
        <div className='sidebar-items'>
          <div className='sidebar-home' onClick={() => setView("Home")}>
            <div className='sidebar-icon'>
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
          <div className='sidebar-search' onClick={() => setView("Search")}>
            <div className='sidebar-icon'>
              <SearchIcon />
            </div>
            <p>Search</p>
          </div>
          <div className='sidebar-library' onClick={() => setView("Library")}>
            <div className='sidebar-icon'>
              <LibraryMusicIcon />
            </div>
            <p>Your Library</p>
          </div>
          <div className='sidebar-playlist'>
            <div className='sidebar-icon'>
              <PlaylistAddIcon />
            </div>
            <p>Create Playlist</p>
          </div>
          <div className='sidebar-liked'>
            <div className='sidebar-icon'>
              <FavoriteIcon />
            </div>
            <p>Liked Songs</p>
          </div>
        </div>

      </div>
      <div className='view'>
        {view === "Home" && <Home spotify={spotify} user={user} />}
        {view === "Library" && <Library />}
        {view === "Search" && <Sidebar releases={releases}/>}
      </div>
    </div>

: <Login/>
}
</div>
  );
}


export default App;