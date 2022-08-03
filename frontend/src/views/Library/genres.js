import React from 'react';
import './library.css';
import RenderSongsPreview from './LibraryComponents/RenderSongs';
import RenderAlbumsPreview from './LibraryComponents/RenderAlbums';
import RenderPlaylistsPreview from './LibraryComponents/RenderPlaylists';
import RenderArtistsPreview from './LibraryComponents/RenderArtists';
import RenderPodcastsPreview from './LibraryComponents/RenderPodcasts';

export default function RenderGenresPreview() {  
  return (
    <div className="library-page">
      <header className="page-header">
        <h3>Genres</h3>
      </header>
      <div className="library-components">
        <RenderSongsPreview />
        
      </div>
    </div>
  )
};