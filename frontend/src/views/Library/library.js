import React from 'react';
import './library.css';

const LibraryPage = () => {
  return (
    <div className="page-content">
      <Body />
      {/* <RenderSongs />
      <RenderArtists /> */}
    </div>
  );
 };

const RenderSongs = () => {
  return (
    <div className="songs-list">Filler tracks
      <div className="stock-track">Filler track</div>
      <div className="stock-track">Filler track</div>
      <div className="stock-track">Filler track</div>
      <div className="stock-track">Filler track</div>
      <div className="stock-track">Filler track</div>
      <div className="stock-track">Filler track</div>
      <div className="stock-track">Filler track</div>
    </div>
  )
};

const RenderArtists = () => {
  return (
    <div className="artists-list">
      <div className="stock-artist">Filler artist</div>
      <div className="stock-artist">Filler artist</div>
      <div className="stock-artist">Filler artist</div>
      <div className="stock-artist">Filler artist</div>
      <div className="stock-artist">Filler artist</div>
      <div className="stock-artist">Filler artist</div>
      <div className="stock-artist">Filler artist</div>
    </div>
  );
}

const RenderAlbums = () => {
  return (
    <div className="albums-list">
      <div className="stock-albums"></div>
    </div>
  );
}

const RenderPodcasts = () => {
  return (
    <div className="podcasts-list">
      <div className=""></div>
    </div>
  );
}

const RenderPlaylists = () => {
  return (
    <div className="playlists-list"></div>
  );
}

const RenderGenres = () => {
  return (
    <div className="genres-list"></div>
  );
}

//  const Header = () => {
//   return (
//     <div className="Page-header">
//       <h1>Reverb</h1>
//     </div>
//   );
//  };
 
const Body = () => {
  let user = "TempUser111";
  // let rndSongs = renderSongs();

  return (
    <div className="Center-content">
      <h4>Good Morning, {user}</h4>
        <button onClick={RenderSongs}>Songs</button>
        <button onClick={<RenderArtists />}>Artists</button>
        <button onClick={<RenderAlbums />}>Albums</button>
        <button onClick={<RenderPodcasts />}>Podcasts</button>
        <button onClick={<RenderPlaylists />}>Playlists</button>
        <button onClick={<RenderGenres />}>Genres</button>
    </div>
  )
};

 // const GenreList = () => {
 //   const mainGenreList = {
 //     "Pop": ["artist1", "artist2"],
 //     "Rock": [],
 //     "Hip Hop": [],
 //     "Country": [],
 //     "Classical": [],
 //     "Jazz": [],
 //     "Electronic": [],
 //     "Heavy Metal": [],
 //   };
 //   return (
 //     <MainGenreList />
 //   );
 // }
 
export default LibraryPage;