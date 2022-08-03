import React from 'react';
import './library';
import './library.css';


export default function Playlists() {
  return (
    <div className="playlists-page">
      <header className="page-header">
        <h3>Playlists</h3>
      </header>
        <div className="playlists-components">
          <div>Create Playlists</div>
          <div>Random Playlist</div>
        </div>
    </div>
  )
};