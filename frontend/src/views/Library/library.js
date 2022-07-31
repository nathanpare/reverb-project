import React from 'react';
import './library.css';
import RenderSongs from './LibraryComponents/RenderSongs';
import RenderAlbums from './LibraryComponents/RenderAlbums';
import RenderGenres from './LibraryComponents/RenderGenres';
import RenderPlaylists from './LibraryComponents/RenderPlaylists';
import RenderArtists from './LibraryComponents/RenderArtists';
import RenderPodcasts from './LibraryComponents/RenderPodcasts';



export default function Library() {

  const name = "User111";

  return (
    <div className="library-page">
      <h1>Good Morning, {name}</h1>
        <div className="library-components">
          <RenderSongs />
          <RenderAlbums />
          <RenderArtists />
          <RenderPlaylists />
          <RenderGenres />
          <RenderPodcasts />
        </div>
    </div>
  );
}