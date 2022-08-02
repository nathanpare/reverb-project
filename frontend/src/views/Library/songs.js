import React from 'react';
import './library.css';
import RenderAlbums from './LibraryComponents/RenderAlbums';
import RenderGenres from './LibraryComponents/RenderGenres';
import RenderPlaylists from './LibraryComponents/RenderPlaylists';
import RenderArtists from './LibraryComponents/RenderArtists';
import RenderPodcasts from './LibraryComponents/RenderPodcasts';

export default function Songs() {
  return (
    <div className="songs-page">
      <header>
        <h3>Songs</h3>
      </header>
      <div className="library-components">
        <RenderAlbums />
        <RenderArtists />
        <RenderPlaylists />
        <RenderGenres />
        <RenderPodcasts />
      </div>
    </div>
  )
};