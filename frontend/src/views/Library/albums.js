import React from 'react';
import './library';
import './library.css';

export default function RenderAlbumsPreview() {
  return (
    <div className="playlists-page">
      <header className="page-header">
        <h3>Albums</h3>
      </header>

      <div className="your-albums">
        <ul>
          <li>ALBUM</li>
          <li>ALBUM</li>
          <li>ALBUM</li>
          <li>ALBUM</li>
          <li>ALBUM</li>
        </ul>
      </div>
    </div>
  );
}