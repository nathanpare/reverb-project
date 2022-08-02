import React from 'react';
import './library.css';
import RenderSongs from './LibraryComponents/RenderSongs';
import RenderAlbums from './LibraryComponents/RenderAlbums';
import RenderPlaylists from './LibraryComponents/RenderPlaylists';
import RenderArtists from './LibraryComponents/RenderArtists';
import RenderPodcasts from './LibraryComponents/RenderPodcasts';

export default function Genres() {
  return (
    <div className="library-page">
      <header className="page-header">
        <h3>Genres</h3>
      </header>
      <div className="library-components">
        <RenderSongs />
        {/* <RenderHome /> */}
      </div>
    </div>
  );
}