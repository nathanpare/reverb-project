import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RenderGenresPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>AAAAA</div>
  );

  const fillArea = () => {
    setArea(true);
    // setArea(!area);
  }

  return (
    <div className="category-span">Genres
      <div id="genres-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
        {/* <Link to="/genres">All Genres</Link> */}
      </div>
    </div>
  )
};