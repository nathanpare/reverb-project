import React, { useState, useEffect } from "react";


export default function RenderPodcasts() {
  const [area, setArea] = useState(false);

  const addToArea = (
    <div>AAAAA</div>
  );

  const fillArea = () => {
    setArea(true);
    // setArea(!area);
  }

  return (
    <div className="category-span">Podcasts
      <div id="podcasts-area">
        <button onClick={() => fillArea()}>Expand</button>
        {area && addToArea}
      </div>
    </div>
  )
};