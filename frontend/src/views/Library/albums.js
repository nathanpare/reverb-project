import React, { useState } from 'react';
// import './library';
import './library.css';
import './albums.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
// import FetchUserAlbums from "AlbumsComponents/FetchUserAlbums";
import axios from 'axios';

function addAlbum(library) {
  // const [albums, albumsPlusPlus] = useState(false);

  return (
    <div>
      <h3>ADD</h3>
    </div>
  );
}

function removeAlbum(library) {
  // const [albums, albumsMinusMinus] = useState(false);

  return (
    <div>
      <h3>AAAA</h3>
    </div>
  );
}

function fetchAlbums(library) {
  return (
    <div>
      <h3>TEST</h3>
    </div>
  )
}

export default function Albums() {
  // const [album, expandAlbum] = useState(false);
  // const [albums, albumsAdd] = useState(false);

 

  return (
    <div className="albums-page">
      <header className="page-header">
        <h1 className="page-title">Albums</h1>
        {/* <h3 className="header-message">Albums</h3> */}
      </header>
      <body className="albums-page-components">
        <div className="albums-sort-by">
          <h5>Sort By: </h5>
          <Button>Recently Added</Button>
          <Button>Name</Button>
        </div>
        <div className="albums-page-items">
          <ul>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
          </ul>
        </div>
      </body>
    </div>
  )
}