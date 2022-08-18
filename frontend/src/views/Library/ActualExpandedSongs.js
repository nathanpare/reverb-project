import React, { useState, useEffect } from 'react';
import './library.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// const superagent = require('superagent');
// const SpotifyWebApi = require('spotify-web-api-node');

export default function ActualExpandedSongs({ name, artist, album, img }) {

  return (
    <div>
      <div>{name}</div>
      <div>{artist}</div>
      <div>{album}</div>
        <div className="library-song-image">
        <img alt={""} src={img}
          width="70" height="70" />
      </div>
    </div>
  );
};

{/* <div className="songs-render">
  {songsarea && addToSongsArea}
  <button className="sample-button">AAAA</button>
</div> */}