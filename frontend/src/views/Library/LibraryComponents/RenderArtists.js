import React, { useState, useEffect } from "react";

// const ArtistsList = [
//   {
//     id: "id1",
//     title: "song1",
//     artist: "artist1",
//     album: "album1",
//     genre: "Metal",
//   },
//   {
//     id: "id2",
//     title: "song2",
//     artist: "artist2",
//     album: "album2",
//     genre: "Hip-Hop",
//   },
//   {
//     id: "id3",
//     title: "song3",
//     artist: "artist3",
//     album: "album3",
//     genre: "Electronic",
//   },
//   {
//     id: "id4",
//     title: "song4",
//     artist: "artist4",
//     album: "album4",
//     genre: "Country",
//   }
// ]

export default function RenderArtists() {
  return (
    <div className="render-artists">Artists
      <button>Expand</button>
      {/* <button onClick={renderArtists}>Expand</button> */}
    </div>
  )
}