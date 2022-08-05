import React from 'react';
import './library';
import './library.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";


export default function Artists() {
  return (
    <div className="artists-page">
      <header className="page-header">
        <h5>Artists</h5>
      </header>
      <div className="sort-artists">Sort By:
        <Button></Button>
      </div>
      <div className="all-artists">All Artists
        <div>Artist</div>
        <div>Artist</div>
        <div>Artist</div>
      </div>
      <div className="nav-section">
        <Link to="/library">Library</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/genres">Genres</Link>
      </div>
    </div>
  );
}