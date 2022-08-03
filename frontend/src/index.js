import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Songs from "./views/Library/songs";
import Playlists from './views/Library/playlists';
import Albums from './views/Library/albums';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/library"></Route>
      <Route path="/songs" element={<Songs />} />
      <Route path="/playlists" element={<Playlists />} />
      {/* <Route path="/"></Route> */}
    </Routes>
  </BrowserRouter>
);