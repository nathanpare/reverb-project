import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RenderAlbums() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div className="albums-add">
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
      <p className="stock-album">ALBUM</p>
    </div>
  );

  const fillArea = () => {
    setArea(true);
  }

  return (
    <div className="category-span">Albums
      <div id="albums-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
        <Link to="/albums">All Albums</Link>
      </div>
    </div>
  )
};