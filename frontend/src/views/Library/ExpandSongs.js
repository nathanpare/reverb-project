import React, { useEffect, useState } from 'react';

export default function ExpandSongs({ title, artist, img, setPlayingTrack, item }) {
  
  const handlePlay = () => {
    setPlayingTrack(item);
    console.log("TRACK", item);
  }
  return (
    <div className="song" >
      <div className="image">
        <img alt={""} src={img}
          width="150" height="150" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <div className='player-icon' onClick={handlePlay}>
        {/* <PlayCircleOutlineIcon fontSize='large' className='play-icon' /> */}
      </div>
    </div>
  )
}
