import React, {useEffect} from 'react';
import axios from 'axios';

export default function Featured({ title, artist, img, chooseTrack, features, addMultiFunctionPlaylistSongs, song_id, song_name, newPlaylistSongs, playlist_id, user_id}) {

  //console.log(newPlaylistSongs);
  const disable=newPlaylistSongs.some(playlistSong => playlistSong.spotify_song_name === song_name && playlistSong.playlist_id ===playlist_id && playlistSong.user_id===user_id);
  //console.log(disable);
  useEffect(() => {
    console.log(user_id);
    axios.get(`http://localhost:8080/playlistfullsongs/31qjn5zf443uoc67iblmiwvccmqu`)
      .then(function (res) {
       // setPlaylistSongs([...res.data]);
        console.log(res.data.rows);
      })
   
  }, []);

  return (
    <div className="song" >
      <div className="image">
        <img alt={""} src={img}
          width="150" height="150" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <button className="button_add_songs"  disabled={disable}onClick={() => addMultiFunctionPlaylistSongs(song_id, song_name)}  >
          Add Song
        </button>
    </div>
  )
}
