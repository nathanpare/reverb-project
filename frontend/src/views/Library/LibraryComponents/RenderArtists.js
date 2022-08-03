import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function RenderArtistsPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>
      <ul>
        <li>Artist</li>
        <li>Artist</li>
        <li>Artist</li>
      </ul>
    </div>
  );

  const fillArea = () => {
    setArea(true);
  }

  return (
    <div className="category-span">Artists
      <div id="artists-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
        <Link to="/artists">All Artists</Link>
      </div>
    </div>
  );
}