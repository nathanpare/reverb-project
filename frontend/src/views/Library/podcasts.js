import React from 'react';
import './library.css';
import RenderSongsPreview from './LibraryComponents/RenderSongs';
import RenderAlbumsPreview from './LibraryComponents/RenderAlbums';
import RenderGenresPreview from './LibraryComponents/RenderGenres';
import RenderPlaylistsPreview from './LibraryComponents/RenderPlaylists';
import RenderArtistsPreview from './LibraryComponents/RenderArtists';

export default function Podcasts() {
  return (
    <div className="podcasts-page">
      <header className="page-header">
        <h3>Podcasts</h3>
      </header>
        <div
        className="library-components">
          <RenderSongsPreview />
          <RenderAlbumsPreview />
          <RenderArtistsPreview />
          <RenderPlaylistsPreview />
          <RenderGenresPreview />
          {/* <RenderHome /> */}
        </div>
    </div>
  )
}
