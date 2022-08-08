//import React, {Component} from 'react';
import './App.css';
import LibraryPage from './views/Library/library';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-node";
import Footer from './components/footer/Footer';
import Sidebar from './views/sidebar/Sidebar';

//import "bootstrap/dist/css/bootstrap.min.css";

import Home from './views/Home/Home';

import Login from './views/Login/Login';
// import "./views/Login/Login.css"
import Search from './views/Search/Search';

import Songs from "./views/Library/songs";
import Playlists from './views/Library/playlists';
import Albums from './views/Library/albums';
import Artists from './views/Library/artists'
import Podcasts from './views/Library/podcasts';
import Genres from './views/Library/genres';
import Trackclicks from './likeexample/trackexample/trackclick';
import CreatePlaylists from './views/Library/PlaylistComponents/CreatePlaylists';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [song, setSong] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);

      spotify.setAccessToken(token);
      spotify.getMe()
        .then(function (data) {
          console.log('USER DATA',data);
          setUser(data.body);
        }, function (err) {
          console.log('Something went wrong!', err);
        });

        spotify.searchTracks('Over Now')
        .then(function(data) {
          console.log(data.body.tracks)
          setSong({
          title: data.body.tracks.items[0].name,
          artist: data.body.tracks.items[0].artists[0].name
          })
        }, function(err) {
          console.error(err);
        });
    }

  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token")
  }
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home song={song} user={user} logout={logout} token={token} />} exact />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<LibraryPage />} />


          <Route path="sidebar" element={<Sidebar />} />
          <Route path="footer" element={<Footer />} />
          <Route element={Error} />
          <Route path="/" element={<App />} />
          <Route path="/library"></Route>
          <Route path="/songs" element={<Songs />} />
          <Route path="/playlists" element={<Playlists exact />} />
          <Route path="/createplaylists" element={<CreatePlaylists user={user} exact/>} />
          {/* <Route path="/albums" element={<Albums />} /> */}
          {/* <Route path="/artists" element={<Artists />} /> */}
          {/* <Route path="/genres" element={<Genres />} /> */}
          {/* <Route path="/podcasts" element={<Podcasts />} /> */}
          {/* <Route path="like" element={<LikeButton />} /> */}
          <Route path="trackclicks" element={<Trackclicks />} />
        </Routes>

      </div>
    </>
  );
}       


export default App;