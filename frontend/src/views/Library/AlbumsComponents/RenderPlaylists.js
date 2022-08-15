import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RenderPlaylistsPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>AAAAA</div>
  );

  const fillArea = () => {
    setArea(true);
    // setArea(!area);
  }

  return (
    <div className="category-span">Playlists
      <div id="playlists-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
        <Link to="/playlists">All Playlists</Link>
      </div>
    </div>
  )
};