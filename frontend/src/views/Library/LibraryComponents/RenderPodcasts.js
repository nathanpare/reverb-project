import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RenderPodcastsPreview() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>AAAAA</div>
  )

  const fillArea = () => {
    setArea(true);
  };

  return (
    <div className="category-span">Podcasts
      <div id="podcasts-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
        {/* <Link to="/podcasts">All Podcasts</Link> */}
      </div>
    </div>
  )
};