import React, { useState, useEffect } from 'react';
import './library.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// const superagent = require('superagent');
// const SpotifyWebApi = require('spotify-web-api-node');




export default function Songs() {
  const [track, setTrack] = useState(null);

  return (
      <body className={"songs-page"}>
        <header className={"page-header"}>
          <h3>Tracks</h3>
        </header>
        <div className={"songs-sort-by"}>Sort By:
          <Button className={"songs-sort"}>Recently Added</Button>
          <Button className={"songs-sort"}>Name</Button>
        </div>
        <div className={"songs-containers"}>
          <ul>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
          </ul>
        </div>
      </body>
  );
};