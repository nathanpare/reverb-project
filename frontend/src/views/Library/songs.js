import React, { useEffect } from 'react';
import './library.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// const superagent = require('superagent');
// const SpotifyWebApi = require('spotify-web-api-node');

export default function Songs() {
  const [tracks, setTracks] = useEffect(false);

  return (
    <div>
      <div className="track-sort">Sort By:
        <Button>Date Added</Button>
        <Button>Alphabetical</Button>
      </div>
      <div className="all-tracks">All Tracks
        <ul>
          <li>track</li>
          <li>track</li>
          <li>track</li>
          <li>track</li>
          <li>track</li>
        </ul>
      </div>
      <div className="nav-section">
        <Link to="/library">Library</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/genres">Genres</Link>
      </div>
    </div>
  )
}

// const spotifyApi = new SpotifyWebApi({
//   clientId: 'fcecfc72172e4cd267473117a17cbd4d',
//   clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
//   redirectUri: 'http://www.example.com/callback'
// });

// spotifyApi.setAccessToken('[token]');

// function FetchTopTracks() {
//   spotifyApi.getMyTopTracks()
//     .then(function(data) {
//       let topTracks = data.body.items;
//       console.log(topTracks);
//     }, function(err) {
//       console.log('Something went wrong!', err);
//     });
// }

// function FetchRecentlyPlayed() {
//   spotifyApi.getMyRecentlyPlayedTracks({
//     limit : 20
//   }).then(function(data) {
//       // Output items
//       console.log("Your 20 most recently played tracks are:");
//       data.body.items.forEach(item => console.log(item.track));
//     }, function(err) {
//       console.log('Something went wrong!', err);
//     });
// }

// function RemoveTracks(inp) {
//   spotifyApi.removeFromMySavedTracks([inp])
//     .then(function(data) {
//       console.log('Removed!');
//     }, function(err) {
//       console.log('Something went wrong!', err);
//     });
//   });
// }

// function FetchTopTracks() {

// }