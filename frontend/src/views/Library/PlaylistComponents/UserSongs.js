import React from 'react';

export default function UserSongs({ title, artist, img, setPlayingTrack, item }) {

  const handlePlay = () => {
    setPlayingTrack({ uri: item.spotify_song_id });
    console.log("TRACKKK", item);
  }

  return (
    <div>
      <div className="library-song-image" onClick={handlePlay}>
        <img className="library-song-image" alt={""} src={img}
          width="70" height="70" />
        <div className='playlist-song'>
          <p>{title}</p>
        </div>
        <div className='playlist-artist'>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}
