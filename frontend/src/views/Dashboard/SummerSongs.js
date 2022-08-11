import React from 'react'

export default function SummerSongs({ title, artist, img }) {
  return (
    <div className="song">
      <div className="image">
        <img alt={""} src={img}
          width="120" height="120" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <i className="fa-solid fa-play"></i>
    </div>
  )
}