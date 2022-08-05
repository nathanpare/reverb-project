import React, { useState, useEffect } from "react";
import './library';
import './library.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { 
  RandomPlaylist, 
  CreatePlaylist, 
  SavedPlaylists, 
  ThisPlaylist 
} from './LibraryComponents/RenderPlaylists';

export default function PlaylistsAndGenres() {
  const [playlist, setPlaylist] = useState(false);
  
  return (
    <div className="playlists-page">
      <header className="page-header">
        <h5>Playlists</h5>
      </header>
      <div className="playlists-components">
      </div>

      <nav className="nav-section">
        <Link to="/library">Library</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/genres">Genres</Link>
      </nav>
    </div>
  )
};

// function FetchFeaturedPlaylists() {
//   spotifyApi.getFeaturedPlaylists({ limit : 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp:'2014-10-23T09:00:00' })
//   .then(function(data) {
//     console.log(data.body);
//   }, function(err) {
//     console.log("Something went wrong!", err);
//   });
// }

// function FetchNewReleases() {
//   spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
//   .then(function(data) {
//     console.log(data.body);
//       done();
//     }, function(err) {
//        console.log("Something went wrong!", err);
//     });
//   });
// }

// function UnfollowPlaylist() {
//   spotifyApi.unfollowPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
//   .then(function(data) {
//      console.log('Playlist successfully unfollowed!');
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });

// }

// function FetchPlaylistsForCategory() {
//   spotifyApi.getPlaylistsForCategory('party', {
//       country: 'BR',
//       limit : 2,
//       offset : 0
//     })
//   .then(function(data) {
//     console.log(data.body);
//   }, function(err) {
//     console.log("Something went wrong!", err);
//   });
// }