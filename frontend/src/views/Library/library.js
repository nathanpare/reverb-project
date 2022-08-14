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



// function ExamplePreview() {
//   const [area, setArea] = useState(false);

//   const addToArea = (
//     <div>
//       <ul>
//         <li>Artist</li>
//         <li>Artist</li>
//         <li>Artist</li>
//       </ul>
//     </div>
//   );

//   const fillExampleArea = () => {
//     setArea(true);
//   }

//   return (
//     <div className="category-span">Artists
//       <div id="artists-area">
//         <button onClick={() => fillExampleArea()}>Expand</button>
//         {area && addToArea}
//         {/* <RenderArtistsPage /> */}
//       </div>
//     </div>
//   );
// }

function SongsPreview() {
  return (
    <ul className="songs-items">
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
      <li className="songs-item">Track: Artist: Album: </li>
    </ul>
  )
}

function AlbumsPreview() {
  return (
    <ul className="albums-items">
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
      <li className="albums-item">AlbumName: Artist: </li>
    </ul>
  );
  
}

function PlaylistsPreview() {
  return (
    <ul className="playlists-items">
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
      <li className="playlists-item">Playlist</li>
    </ul>
  )
}

function ArtistsPreview() {
  return (
    <ul className="artists-items">
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
      <li className="artists-item">Artist</li>
    </ul>
  )
}

function GenresPreview() {
  return (
    <ul className="genres-items">
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
      <li className="genres-item">Genre</li>
    </ul>
  )
}

function PodcastsPreview() {
  return (
    <ul className="podcasts-items">
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
      <li className="podcasts-item">Podcast</li>
    </ul>
  )
}
 
export default function Library(props) {
  const [usrsongs, setUsrSongs] = useState(false);
  const [usrartists, setUsrArtists] = useState(false);
  const [usralbums, setUsrAlbums] = useState(false);
  const [usrplaylists, setUsrPlaylists] = useState(false);
  const [usrgenres, setUsrGenres] = useState();

  // const [{ user, albums, playlists }, dispatch] = UseDataLayerValue();

  // const fetchData = () => {
  //   const usersApi = `https://localhost:8080/users`;
  //   const playlistsApi = `http://localhost:8080/playlists`;
  //   const artistsApi = `http://localhost:8080/artists`;
  //   const albumsApi = `http"//localhost:8080/albums`;
  //   const tracksApi = `http://localhost:8080/tracks`;
  //   const genresApi = `http://localhost:8080/genres`;

  //   const getUsers = `http://localhost:8080/`;
  //   const getPlaylists = `http://localhost:8080/`;
  //   const getArtists = `http://localhost:8080/`;
  //   const getAlbums = `http://localhost:8080/`;
  //   const getTracks = `http://localhost:8080/`;
  //   const getGenres = `http://localhost:8080/`;
    
  //   //  API .display name

  //   axios.all([fetchArtists, fetchAlbums, fetchPlaylists, fetchTracks, fetchGenres]).then(
  //     axios.spread((...allData) => {
  //       // yoink the data you need and save to variables
  //     })
  //   ).catch(error => {
  //     console.log(error);
  //   })
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function fetchUser() {
  //   // const user_name = 
  //   // const spotify_user_id =
  //   //  ^^^ get user name and id somehow  
  //   const usrObject = {
  //     usrName: spotify_name, 
  //     usrId: spotify_user_id
  //   }
  //   const usrLibObj = {
  //     libAlbums: user.albumsData,
  //     libTracks: user.trackData,
  //     libPlaylists: user.playlistData,
  //     libArtists: user.artistData,
  //     libGenres: user.genresData,
  //   }
  //   return axios.post(`http://localhost:8080/users`, usrObject, usrLibObj).then((response) => {
  //     console.log("data added");
  //   })
  // }
  
  

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
        <h1 className="page-title">Reverb</h1>
        <h3 className="header-message">Good morning, {name}</h3>
      </header>
        <body className="page-components">

          <div className="left-side">

            <div className="songs-components">
              <h5 className="songs-header">Songs</h5>
                <div className="songs-items">
                  <SongsPreview />
                  <Button className="all-songs-button">All Songs</Button>
                </div>
            </div>
            <div className="albums-components">
              <h5 className="albums-header">Albums</h5>
                <div className="albums-items">
                  <AlbumsPreview />
                  <Button className="all-albums-button">All Albums</Button>
                </div>
            </div>
            <div className="artists-components">
              <h5 className="artists-header">Artists</h5>
                <div className="artists-items">
                  <ArtistsPreview />
                  <Button className="all-artists-button">All Artists</Button>
                </div>
            </div>
          </div>

          <div className="right-side">

            <div className="playlists-components">
              <h5 className="playlists-header">Playlists</h5>
                <div className="playlists-items">
                  <PlaylistsPreview />
                  <Button className="all-playlists-button">All Playlists</Button>
                </div>
            </div>
            <div className="genres-components">
              <h5 className="genres-header">Genres</h5>
                <div className="genres-items">
                  <GenresPreview />
                  <Button className="all-genres-button">All Genres</Button>
                </div>
            </div>
            <div className="podcasts-components">
              <h5 className="podcasts-header">Podcasts</h5>
                <div className="podcasts-items">
                  <PodcastsPreview />
                  <Button className="all-podcasts-button">All Podcasts</Button>
                </div>
            </div>

          </div>         
        </body>
      <Footer />
    </div>
  );
}
