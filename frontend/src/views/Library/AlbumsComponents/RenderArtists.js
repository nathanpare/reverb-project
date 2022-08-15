import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RenderArtistsPreview() {
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

  const fillArtistArea = () => {
    setArea(true);
  }

  return (
    <div className="category-span">Artists
      <div id="artists-area">
        <button onClick={() => fillArtistArea()}>Expand</button>
        {area && addToArea}
        {/* <RenderArtistsPage /> */}
      </div>
    </div>
  );
}