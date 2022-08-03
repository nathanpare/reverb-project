//import React, {Component} from 'react';
import './App.css';
import LibraryPage from './views/Library/library';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Sidebar from './views/sidebar/Sidebar'

//import "bootstrap/dist/css/bootstrap.min.css";
import Login from './views/Login/Login';
import "./views/Login/Login.css"
import Search from './views/Search/Search';
import Home from './views/Home/Home';

import Songs from "./views/Library/songs";
import Playlists from './views/Library/playlists';
import Albums from './views/Library/albums';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return (

   <>
    <Routes>
    <Route path="/" element={<Home />} exact />
    <Route path="login" element={<Login />} />
    <Route path="search" element={code ? <Search code={code} /> : <Login />} />
    <Route path="sidebar" element={<Sidebar />} />
    <Route path="footer" element={<Footer />} />
    <Route element={Error} />
    <Route path="library" element={<LibraryPage />}></Route>
    <Route path="songs" element={<Songs />} />
    <Route path="playlists" element={<Playlists />} />
    {/* <Route path="albums" element={<Albums />} /> */}
    {/* <Route path="artists" element={<Artists />} /> */}
    {/* <Route path="genres" element={<Genres />} /> */}
    {/* <Route path="podcasts" element={<Podcasts />} /> */}
    </Routes>

    </>
  );
}


export default App;