import React from 'react';
import './library';
import './library.css';
import RenderSongs from './LibraryComponents/RenderSongs';
import RenderAlbums from './LibraryComponents/RenderAlbums';
import RenderGenres from './LibraryComponents/RenderGenres';
import RenderArtists from './LibraryComponents/RenderArtists';
import RenderPodcasts from './LibraryComponents/RenderPodcasts';

export default function Albums() {
  return (
    <div className="playlists-page">
      <header className="page-header"></header>
    </div>
  );
}