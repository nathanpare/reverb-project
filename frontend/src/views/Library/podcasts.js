import React, { useState } from 'react';
import './library';
import './library.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function Podcasts() {
  const [podcasts, setPodcasts] = useState(false);

  return (
    <body className="podcasts-page">
      <header className={"page-header"}>
        <h3>Podcasts</h3>
      </header>
      <div className={"podcasts-containers"}>
        <div>
          <div className={"podcasts-sort-by"}>
            <h3 id={"sort-by-tag"}>Sort By:</h3>
            <Button className={"podcasts-sort"}>Recently Added</Button>
            <Button className={"podcasts-sort"}>Name</Button>
          </div>
          <div className={"podcasts-add-section"}>
            <Button className={"podcasts-add"}>Add Podcast</Button>
          </div>
          <div className={"podcasts-container"}>
          {/*  Add map() */}
          </div>
          <div className={"render-podcasts"}></div>
        </div>
      </div>
      {/* <div className={"nav-elements"}>
        <Link to={"/library"} className={"nav-element"}>Library</Link>
        <Link to={"/songs"} className={"nav-element"}>Songs</Link>
        <Link to={"/albums"} className={"nav-element"}>Albums</Link>
        <Link to={"/artists"} className={"nav-element"}>Artists</Link>
        <Link to={"/genres"} className={"nav-element"}>Genres</Link>
      </div> */}
    </body>
  )
}
