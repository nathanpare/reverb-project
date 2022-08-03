import React from 'react';
import './library.css';
import RenderAlbumsPreview from './LibraryComponents/RenderAlbums';
import RenderGenresPreview from './LibraryComponents/RenderGenres';
import RenderPlaylistsPreview from './LibraryComponents/RenderPlaylists';
import RenderArtistsPreview from './LibraryComponents/RenderArtists';
import RenderPodcastsPreview from './LibraryComponents/RenderPodcasts';
// import { Library } from './library';

export default function Songs() {
  return (
    <div>
      <h1>SONGS TEST TEST</h1>
    </div>
  );
}

// export default function Songs() {
//   return (
//     <div className="songs-page">
//       <header>
//         <h3>Songs</h3>
//       </header>
//       <div className="library-components">
//         <RenderAlbumsPreview />
//         <RenderArtistsPreview />
//         <RenderPlaylistsPreview />
//         <RenderGenresPreview />
//         <RenderPodcastsPreview />
//       </div>
//     </div>
//   )
// };