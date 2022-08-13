import React, { useState, useEffect } from 'react';
import './library.css';
import Playlists from './playlists';
import Songs from './songs';
import Albums from './albums';
import Artists from './artists';
import Genres from './genres';
import Podcasts from './podcasts';
import Footer from '../footer/Footer';
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// require('dotenv').config();
import { UseDataLayerValue } from '../../DataLayer';
import { user } from 'pg/lib/defaults';

function SongsPreview() {
  return (
    <div className="songs-components">
      {/* <RenderSongsPreview /> */}
      {/* <Button onClick={Songs}>All Songs</Button> */}
      <h1>AA</h1>
    </div>
  );
}

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
 
export default function Library(props) {
  const [songs, setSongs] = useState(false);
  const [artists, setArtists] = useState(false);
  const [albums, setAlbums] = useState(false);
  const [playlists, setPlaylists] = useState(false);
  const [genres, setGenres] = useState();

  const [{ albums, playlists, }, dispatch] = UseDataLayerValue();

  const fetchData = () => {
    const usersApi = `https://localhost:8080/users`;
    const playlistsApi = `http://localhost:8080/playlists`;
    const artistsApi = `http://localhost:8080/artists`;
    const albumsApi = `http"//localhost:8080/albums`;
    const tracksApi = `http://localhost:8080/tracks`;
    const genresApi = `http://localhost:8080/genres`;

    const getUsers = `http://localhost:8080/`;
    const getPlaylists = `http://localhost:8080/`;
    const getArtists = `http://localhost:8080/`;
    const getAlbums = `http://localhost:8080/`;
    const getTracks = `http://localhost:8080/`;
    const getGenres = `http://localhost:8080/`;
    
    axios.all([fetchArtists, fetchAlbums, fetchPlaylists, fetchTracks, fetchGenres]).then(
      axios.spread((...allData) => {
        // yoink the data you need and save to variables
      })
    ).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchUser() {
    const user_name = props.user.display_name;
    const spotify_user_id = props.user.id;
    const usersObject = {
      usrName: spotify_name, 
      usrId: spotify_user_id
    }
    const userLibObj = {
      libAlbums: user.albumsData,
      libTracks: user.trackData,
      libPlaylists: user.playlistData,
      libArtists: user.artistData,
      libGenres: user.genresData,
    }
    return axios.post(`http://localhost:8080/users`)
  }
  
  // axios.all([
  //   axios.post(`/my-url`, {
  //     myVar: 'myValue'
  //   }), 
  //   axios.post(`/my-url2`, {
  //     myVar: 'myValue'
  //   })
  // ])
  // .then(axios.spread((data1, data2) => {
  //   // output of req.
  //   console.log('data1', data1, 'data2', data2)
  // }));

  // line 106 of create playlists

  // const fillSongs = () => {
  //   // get div id and then clear
  //   // store info in state
  //   setSongs(true);
  // } 

  // const fillLibrary = () => {
  //   setLibrary(true);
  // }

  // const fillArtists = () => {
  //   setArtists(true);
  // }

  // const fillPlaylists = () => {
  //   setPlaylists(true);
  // }

  // const fillGenres = () => {
  //   setGenres(true);
  // }

  // const fillPodcasts = () => {
  //   setPodcasts(true);
  // }

  const name= "User111";

  return (
    
    <div className="library-page">
      <header className="page-header">
        <h1>TESTTEST</h1>
        <h3>Good morning, {name}</h3>
      </header>
      <div className="songs-components">
        <h5>Songs</h5>
        <Button>
          <SongsPreview />
        </Button>
      </div>
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
  );
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
// </div>