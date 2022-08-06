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
<<<<<<< HEAD
import {
=======
import Button from 'react-bootstrap/Button';
import {
  Link,
>>>>>>> new-library-page-etc
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
<<<<<<< HEAD

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
=======
// https://github.com/thelinmichael/spotify-web-api-node


export default function Library() {
  const name = "User111";
  return (
>>>>>>> new-library-page-etc
    <div className="library-page">
      <header className="page-header">
        <h3>Good morning, {name}</h3>
      </header>
        <div className="library-components">
<<<<<<< HEAD
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
=======
          <div className="songs-components">
            <RenderSongsPreview />
          </div>
          <div className="albums-components">
            <RenderAlbumsPreview />
          </div>
          <div className="artists-components">
            <RenderArtistsPreview />
          </div>
          <div className="playlists-components">
            <RenderPlaylistsPreview />
          </div>
          <div className="genres-components">
            <RenderGenresPreview />
          </div>
          <div className="podcasts-components">
            <RenderPodcastsPreview />
          </div>
        </div>
    </div>
  )
};
>>>>>>> new-library-page-etc
