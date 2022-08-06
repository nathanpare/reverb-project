import React from 'react';
import './library.css';
import RenderSongsPreview from './LibraryComponents/RenderSongs';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Genres() {  
  return (
    <div>
        <header className={"page-header"}>
            <h3>Genres</h3>
        </header>
        <div className={"genres-sort-by"}>
            <Button className={"genre-sort"}>Recently Added</Button>
            <Button className={"genre-sort"}>Name</Button>
            <Button className={"genre-sort"}>Genre</Button>
            <Button className={"genre-sort"}>Genre</Button>
            <Button className={"genre-sort"}>Genre</Button>
            <Button className={"genre-sort"}>Genre</Button>
            <Button className={"genre-sort"}>Genre</Button>
        </div>
        <div className={"genres-containers"}>
            <div>AAAAA</div>
        </div>
        <div className={"nav-elements"}>
            <Link to={"/library"} className={"nav-element"}>Library</Link>
            <Link to={"/songs"} className={"nav-element"}>Songs</Link>
            <Link to={"/albums"} className={"nav-element"}>Albums</Link>
            <Link to={"/artists"} className={"nav-element"}>Artists</Link>
            <Link to={"/playlists"} className={"nav-element"}>Playlists</Link>
            <Link to={"/genres"} className={"nav-element"}>Genres</Link>
            <Link to={"/podcasts"} className={"nav-element"}>Podcasts</Link>
        </div>
    </div>
  )
};

