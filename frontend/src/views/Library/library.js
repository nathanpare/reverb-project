import React, { useState, useEffect } from 'react';
import './library.css';
import Playlists from './playlists';
import Albums from './albums';
import Artists from './artists';
import Genres from './genres';
import Podcasts from './podcasts';
import Footer from '../footer/Footer';
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// require('dotenv').config();
import { UseDataLayerValue } from '../../../src/DataLayer';

import { user } from 'pg/lib/defaults';
import { useForkRef } from '@mui/material';
import UserSongs from './PlaylistComponents/UserSongs';
import ExpandSongs from './ExpandSongs';
import ActualExpandedSongs from './ActualExpandedSongs';
// import AllSongs from './AllSongs';



export default function Library(props) {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [users, setUsers] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [userPlaylistSongs, setUserPlaylistSongs] = useState([]);
  const [SongList, SongListExpand] = useState(false);

  const [userId, setUserId] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [userSongs, setUserSongs] = useState([]);
  const [userArtists, setUserArtists] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userGenres, setUserGenres] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState("A");
  const [userPlaylistId, setUserPlaylistId] = useState([]);
  const [addRenderhtml, setAddRenderhtml] = useState("");
  const [view, setView] = useState("");


  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();

  const setPlayingTrack = (track) => {
    dispatch({
      type: "SET_PLAYING_TRACK",
      track: track,
    })
  }

  const [songsarea, setSongsarea] = useState(false);
  const PLAYLIST_VIEW = "playlists";
  const SONG_VIEW = "songs";
  const ALBUM_VIEW = "albums";

  // console.log(userPlaylists);

  const name = user.display_name;
  let addRender = "";

  useEffect(() => {
    if (userPlaylists) {
      fetchData();
      console.log(featured.tracks);
      //setIsOneRender(False);
    }

    if (isFirstRender === "A") {

      const userId = user.id;
      // console.log(user);

      axios.get(`http://localhost:8080/playlistsongs/${user.id}`)
        .then(function (res) {
          setUserPlaylists([...res.data.rows])
          // let info = res.data;
          console.log(res.data.rows)

        });
      setIsFirstRender("B");
    }
  }, []);

  function fetchUserSongs(playlistid) {
    console.log(allSongs);
    console.log(typeof (playlistid));
    // console.log(userId);

    if (allSongs.length > 0) {

      // console.log(allSongs);
      const filtered_userPlaylistSongs_table = allSongs.filter(playlistSong => {
        //console.log(user.spotify_name);
        console.log(playlistSong.playlist_id);
        return (playlistSong.playlist_id === playlistid);
      })
      console.log(filtered_userPlaylistSongs_table);
      if (filtered_userPlaylistSongs_table.length === 0) {
        return;
      }

      setUserPlaylistSongs(filtered_userPlaylistSongs_table);
    }
    console.log(userPlaylistSongs);
  }



  const fetchData = () => {


    const songsApi = `http://localhost:8080/playlistsongs`;

    const getSongs = axios.get(songsApi);


    axios.all([getSongs]).then(
      axios.spread((...allData) => {

        const allSongsData = allData[0].data;

        console.log("all songs Data", allSongsData);

        setAllSongs([...allSongsData]);

      })
    ).catch(error => {
      console.log(error);
    })
  };
  function getSongs(playlist_id) {

    console.log(playlist_id);
    fetchUserSongs(playlist_id);
    setUserPlaylistId(playlist_id);
    console.log(userPlaylistSongs);
    setAddRenderhtml(<UserSongs userPlaylistSongs={userPlaylistSongs} />);
  }

  console.log(featured.tracks);

  const addToSongsArea = (
    <div>
      <div className="expanded-songs-title">
        <h1>YOUR SONGS</h1>
      </div>
      <div className="expanded-songs-items">
        {featured.tracks.map((feature) => (
          <div className='playlist-song-item'>
            <ActualExpandedSongs
              name={feature.name}
              artist={feature.artists[0].name}
              album={feature.album.name}
              img={feature.album.images[0].url}
              setPlayingTrack={setPlayingTrack}
              feature={feature}
            />
          </div>
        ))}
      </div>
    </div>
  )


  const fillSongsArea = () => {
    // setSongsarea(true);
  }

  return (
    <div className="library-page">
      <header className="page-header">
        <h1 className="page-title">Reverb Library</h1>
      </header>
      <div className="page-components">
        <div className="nav-bar">

        </div>
        <div className="left-side">

          <div className="songs-components">
            <h5 className="songs-header">Songs</h5>
            <div className="songs-items">

              <Button className="all-songs-button" onClick={() => setView(SONG_VIEW)}>Expand</Button>

            </div>
          </div>
        </div>

        <div className="right-side">

          <div className="playlists-components">
            <h5 className="playlists-header">Playlists</h5>
            <div className="playlists-items">

              {userPlaylists.map((playlist, index) => {
                return (
                  <div key={index}>
                    <Button
                      className="all-playlists-button" onClick={() => {
                        setView(PLAYLIST_VIEW);
                        getSongs(playlist.id)
                      }}>{playlist.name}</Button>
                  </div>
                )
              })}
              {/* <Button className="all-playlists-button" onClick={() => {}}>All Playlists</Button> */}
            </div>
          </div>
        </div>
      </div>


      {/* {addRender}
      {userPlaylistSongs.map((playlist, index) => {
                    return (
                      <div key={index}>
                        <Button className="all-user-songs-button" >{playlist.spotify_song_name}</Button>
                      </div>
                    )
                    })} */}

      {view === PLAYLIST_VIEW
        && userPlaylistSongs.length > 0 &&
        <div className="expanded-songs-items">
          {userPlaylistSongs.map((playlist, index) => {

            return (
              <div className='playlist-song-item' key={index}>
                <UserSongs
                  title={playlist.title}
                  artist={playlist.artist}
                  img={playlist.img}
                  id={playlist.id}
                  item={playlist}
                  setPlayingTrack={setPlayingTrack} />

              </div>
            )
          }
          )
          }

        </div>}
      {view === SONG_VIEW &&
        <div className="songs-render">
          {addToSongsArea}
        </div>}
      <Footer />
    </div>
  );
}