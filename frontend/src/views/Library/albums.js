import React from 'react';
// import './library';
import './library.css';
import { Link } from "react-router-dom";
// import AlbumsData from './MusicData/AlbumsData';



export default function RenderAlbumsPreview() {
  return (
    <div className="playlists-page">
      <header className="page-header">
        <h3>Albums</h3>
      </header>
      
      <div className="your-albums">Your Albums
        <ul>
          <li>album</li>
          <li>album</li>
          <li>album</li>
          <li>album</li>
          <li>album</li>
        </ul>
      </div>
      <div className="search-albums">Search Albums
      </div>
    </div>
  );
}