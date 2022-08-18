import React from 'react';
import './library.css';

export default function ActualExpandedSongs({ name, artist, img, setPlayingTrack, feature }) {
  
  const handlePlay = () => {
    setPlayingTrack(feature);
    console.log("TRACKKK", feature);
  }

  return (
    <div>
      <div className="library-song-image" onClick={handlePlay}>
        <img className="library-song-image" alt={""} src={img}
          width="70" height="70" />
        <div className='playlist-song'>
          <p>{name}</p>
        </div>
        <div className='playlist-artist'>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};