import React, { useState, useEffect } from "react";

const AlbumsList = [
  {
    id: "id1",
    // title: "song1",
    artist: "artist1",
    title: "album1",
    genre: "Metal",
  },
  {
    id: "id2",
    // title: "song2",
    artist: "artist2",
    album: "album2",
    genre: "Hip-Hop",
  },
  {
    id: "id3",
    // title: "song3",
    artist: "artist3",
    title: "album3",
    genre: "Electronic",
  },
  {
    id: "id4",
    // title: "song4",
    artist: "artist4",
    title: "album4",
    genre: "Country",
  }
]

function expandAlbums() {
   
}

export default function RenderAlbums() {

  return (
    <div>Albums
      <button onClick={expandAlbums}>Expand</button>
    </div>
  )
}