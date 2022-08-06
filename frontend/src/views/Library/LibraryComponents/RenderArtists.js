import React, { useState, useEffect } from "react";
<<<<<<< HEAD

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
=======
import { Link } from "react-router-dom";
>>>>>>> new-library-page-etc

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

<<<<<<< HEAD
  const fillArea = () => {
=======
  const fillArtistArea = () => {
>>>>>>> new-library-page-etc
    setArea(true);
  }

  return (
    <div className="category-span">Artists
      <div id="artists-area">
<<<<<<< HEAD
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
=======
        <button onClick={() => fillArtistArea()}>Expand</button>
        {area && addToArea}
        <Link to="/artists">All Artists</Link>
>>>>>>> new-library-page-etc
      </div>
    </div>
  );
}