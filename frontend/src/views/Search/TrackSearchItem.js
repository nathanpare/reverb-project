import React from 'react'

export default function TrackSearchItem({ setPlayingTrack, track }) {
  const handlePlay = () => {
    setPlayingTrack(track);
    console.log("TRACKKK", track);
  }
  return (
    <div className='search-item' onClick={handlePlay} >
      <div className="search-image">
        <img alt={""} src={track.album.images[0].url}
          width="60" height="60" />
      </div>
      <div className='search-text'>
        <div className='search-title'>
          <p>{track.name}</p>
        </div>
        <div className='search-artist'>
          <p>{track.artists[0].name}</p>
        </div>
      </div>
    </div>
  )
}
