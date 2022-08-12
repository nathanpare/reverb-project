import React, { useState, useEffect } from 'react';
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
import Albums from './albums';
import Artists from './artists';
import Genres from './genres';
import Podcasts from './podcasts';
import Footer from '../footer/Footer';
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';


// export default function Library() {
//   let name = "User111";
import Footer from '../footer/Footer';
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
// function SongsPreview() {
//   return (
//     <div className="songs-components">
//       <RenderSongsPreview />
//       <Button onClick={Songs}>All Songs</Button>
//     </div>
//   );
// }

function ArtistsPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>
      <ul>
        <li>Artist</li>
        <li>Artist</li>
        <li>Artist</li>
      </ul>
    </div>
  );

  const fillArtistArea = () => {
    setArea(true);
  }

  return (
    <div className="category-span">Artists
      <div id="artists-area">
        <button onClick={() => fillArtistArea()}>Expand</button>
        {area && addToArea}
        {/* <RenderArtistsPage /> */}
      </div>
    </div>
  );
}

function PlaylistsPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>AAAAA</div>
  );

  const fillArea = () => {
    setArea(true);
    // setArea(!area);
  }

  return (
    <div className="category-span">Playlists
      <div id="playlists-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}

      </div>
    </div>
  )
};

function AlbumsPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div className="albums-add">
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
    </div>
  )

  return (
    <div className="categ">
      {/* <RenderAlbumsPreview /> */}
      {/* <Button onClick={() => {}}>AAAAA</Button> */}
    </div>
  )
};


function RenderGenresPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>
      <h5>Genres</h5>
      <ul>
        <li>Genre</li>
        <li>Genre</li>
        <li>Genre</li>
        <li>Genre</li>
        <li>Genre</li>
      </ul>
    </div>
  );

  const fillArea = () => {
    setArea(true);
    // setArea(!area);
  }

  return (
    <div className="category-span">Genres
      <div id="genres-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
        {/* <RenderGenresPage /> */}
      </div>
    </div>
  )
};
 
export default function Library() {
  const [songs, setSongs] = useState(false); 
  const [albums, setLibrary] = useState(false);
  const [artists, setArtists] = useState(false);
  const [playlists, setPlaylists] = useState(false);
  const [genresprev, setGenres] = useState(false);
  const [podcastsprev, setPodcasts] = useState(false);

  const fullSongs = (
    <div>
      <ul>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
      </ul>
    </div>
  )

  const fillSongs = () => {
    // get div id and then clear
    // store info in state
    setSongs(true);
  } 

  const fillLibrary = () => {
    setLibrary(true);
  }

  const fillArtists = () => {
    setArtists(true);
  }

  const fillPlaylists = () => {
    setPlaylists(true);
  }

  const fillGenres = () => {
    setGenres(true);
  }

  const fillPodcasts = () => {
    setPodcasts(true);
  }

  const name= "User111";

  return (
    
    <div className="library-page">
      <header className="page-header">
        <h1>TESTTEST</h1>
        <h3>Good morning, {name}</h3>
      </header>
      {/* <div className="songs-components">
        <h5>Songs</h5>
        <Button>
          <SongsPreview />
        </Button>
      </div> */}
      <div className="albums-components">
        <h5>Albums</h5>
        <Button>
          <AlbumsPreview />
        </Button>
      </div>
      <div className="artists-components">
        <h5>Artists</h5>
        <Button>
          <ArtistsPreview />
        </Button>
      </div>
      <Footer />
    </div>
  )
}



// function () {
//   const [] = useState(false);

//   return (
//     <div>
//       <h4>TEST</h4>
//     </div>
//   );
// }


// <div className={"songs-components"}>
// <RenderSongsPreview />
// </div>
// <div className="albums-components">
// <RenderAlbumsPreview />
// </div>
// <div className="artists-components">
// {/* <RenderArtistsPreview /> */}
// </div>
// <div className="playlists-components">
// {/* <RenderPlaylistsPreview /> */}
// </div>
// <div className="genres-components">
// {/* <RenderGenresPreview /> */}
// </div>
// <div className={"podcasts-components"}>
// {/* <RenderPodcastsPreview /> */}
