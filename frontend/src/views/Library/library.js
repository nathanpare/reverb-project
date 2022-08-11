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
import Footer from '../footer/Footer';

// import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// export default function Library() {
//   let name = "User111";

//   return (
//     <div className={"library-page"}>
//       <header className={"page-header"}>
//         <h3>Hello, ${name}</h3>
//       </header>
//       <footer className="footer">Footer</footer>
//     </div>
//   )
// }
 
export default function Library() {
  let name = "User111";

  return (
    <div className="library-page">
      <header className="page-header">
        <h1>TESTTEST</h1>
        <h3>Good morning, {name}</h3>
      </header>
      <div className={"songs-components"}>
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
      <div className={"podcasts-components"}>
        <RenderPodcastsPreview />
      </div>

      <Footer />
    </div>
  )
}
 
// export default function Library() {
//   const name= "User111";
//
//   return (
//     <div className="library-page">
//       <header className="page-header">
//         <h3>Good morning, {name}</h3>
//       </header>
//       <div className={"songs-components"}>
//         <RenderSongsPreview />
//       </div>
//       <div className="albums-components">
//         <RenderAlbumsPreview />
//       </div>
//       <div className="artists-components">
//         <RenderArtistsPreview />
//       </div>
//       <div className="playlists-components">
//         <RenderPlaylistsPreview />
//       </div>
//       <div className="genres-components">
//         <RenderGenresPreview />
//       </div>
//       <div className={"podcasts-components"}>
//         <RenderPodcastsPreview />
//       </div>
//     </div>
//   );
// }
