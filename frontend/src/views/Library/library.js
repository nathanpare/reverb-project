import React from 'react';
import './library.css';
import Playlists from './playlists';
import Songs from './songs';
import RenderSongsPreview from './LibraryComponents/RenderSongs';
import RenderAlbumsPreview from './LibraryComponents/RenderAlbums';
import RenderGenresPreview from './LibraryComponents/RenderGenres';
import RenderPlaylistsPreview from './LibraryComponents/RenderPlaylists';
import RenderArtistsPreview from './LibraryComponents/RenderArtists';
import RenderPodcastsPreview from './LibraryComponents/RenderPodcasts';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Library() {
  const name = "User111";
  return (
    // <BrowserRouter>
    //  <Routes>
    //   <Route path="/" element={<Library />} />
    //     <Route path="songs" element={<Songs />} />
    //     <Route path="playlists" element={<Playlists />} />
    //  </Routes>
    // </BrowserRouter>
    <div className="library-page">
      <header className="page-header">
        <h3>Good morning, {name}</h3>
      </header>
        <div className="library-components">
          <RenderSongsPreview />
          <RenderAlbumsPreview />
          <RenderArtistsPreview />
          <RenderPlaylistsPreview />
          <RenderGenresPreview />
          <RenderPodcastsPreview />
        </div>
    </div>
  )
};
