import React from 'react';
// import './library';
import './library.css';
import { Link } from "react-router-dom";

const AlbumsList = {
  1: {
    id: "id1",
    title: "song1",
    artist: "artist1",
    title: "album1",
    genre: "Metal",
  },
  2: {
    id: "id2",
    title: "song2",
    artist: "artist2",
    album: "album2",
    genre: "Hip-Hop",
  },
  3: {
    id: "id3",
    title: "song3",
    artist: "artist3",
    title: "album3",
    genre: "Electronic",
  },
  4: {
    id: "id4",
    title: "song4",
    artist: "artist4",
    title: "album4",
    genre: "Country",
  }
}

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