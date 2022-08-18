import React from 'react';
//import axios from 'axios';

export default function UserSongs({title, artist, img, setPlayingTrack, item}) {
console.log(title);
console.log(artist);

const handlePlay = () => {
  setPlayingTrack({uri: item.spotify_song_id});
  console.log("TRACKKK", item);
}

  return (
    <div>
      <div className="library-song-image" onClick={handlePlay}>
        <img className="library-song-image" alt={""} src={img}
          width="70" height="70" />
        <p>{title}</p>
        <p>{artist}</p>
     
      </div>

    </div>
  )
}
