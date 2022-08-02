import React from 'react';
import './library.css';
import RenderSongs from './LibraryComponents/RenderSongs';
import RenderAlbums from './LibraryComponents/RenderAlbums';
import RenderGenres from './LibraryComponents/RenderGenres';
import RenderPlaylists from './LibraryComponents/RenderPlaylists';
import RenderArtists from './LibraryComponents/RenderArtists';

export default function Podcasts() {
  return (
    <div className="podcasts-page">
      <header className="page-header">
        <h3>Podcasts</h3>
      </header>
        <div
        className="library-components">
          <RenderSongs />
          <RenderAlbums />
          <RenderArtists />
          <RenderPlaylists />
          <RenderGenres />
          {/* <RenderHome /> */}
        </div>
    </div>
  )
}