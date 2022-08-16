import React, { useState } from 'react';
import './library.css';
import RenderSongsPreview from './LibraryComponents/RenderSongs';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Genres() {
  const [genres, newGenre] = useState(false);



  return (
    <body className={"genres-page"}>
      <header className={"page-header"}>
        <h3>Genres</h3>
      </header>
      <div className={"genres-containers"}>
        <div className={"genres-sort-by"}>Sort By:
          <Button className={"genres-sort"}>Recently Added</Button>
          <Button className={"genres-sort"}>Name</Button>
        </div>
      </div>
      <div className={"genres-container"}>
        <div className={"stock-genre"}>Genre</div>
        <div className={"stock-genre"}>Genre</div>
        <div className={"stock-genre"}>Genre</div>
        <div className={"stock-genre"}>Genre</div>
        <div className={"stock-genre"}>Genre</div>
      </div>
      {/* <div className="nav-elements">
        <Link to={"/library"} className={"nav-element"}>Library</Link>
        <Link to={"/songs"} className={"nav-element"}>Songs</Link>
        <Link to={"/albums"} className={"nav-element"}>Albums</Link>
        <Link to={"/artists"} className={"nav-element"}>Artists</Link>
        <Link to={"/playlists"} className={"nav-element"}>Playlists</Link>
        <Link to={"/genres"} className={"nav-element"}>Genres</Link>
        <Link to={"/podcasts"} className={"nav-element"}>Podcasts</Link>
      </div> */}
    </body>
  )
};
