import React from 'react'

export default function Featured({ title, artist, img, chooseTrack, features}) {
   const handlePlay = () => {
    chooseTrack(features);
    console.log("TRACKKK", features);
  }
  return (
    <div className="song" onClick={handlePlay}>
      <div className="image">
        <img alt={""} src={img}
          width="120" height="120" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
    </div>
  )
}
