import React, { useState } from 'react';
import './library';
import './library.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";


export default function Artists() {
  const [userArtists, newUserArtists] = useState(false);
  let sortedArtistsData = {};



  return (
    <body className="artists-page">
      <header className="page-header">
        <h3>Artists</h3>
      </header>
      <div className="sort-artists">
          <div className={"artists-sort-by"}>Sort By:
            <Button className={"artists-sort"}>Recently Added</Button>
            <Button className={"artists-sort"}>Alphabetical</Button>
            <Button className={"artists-sort"}>Most Listened</Button>
          </div>
      </div>
      <div className="artists-containers">
        {Object.values(sortedArtistsData).map((artist) => {
          return (
            <div className={"artist-container"}>
              <div className={"artist-name"}></div>
              <div className={"artist-albums"}></div>
            </>
          );
        })}
          <div className={"artists-container"}>
            <div className={"stock-artist"}>Artist</div>
            <div className={"stock-artist"}>Artist</div>
            <div className={"stock-artist"}>Artist</div>
          </div>
          <div className={"artists-container"}>
              <div className={"stock-artist"}>Artist</div>
              <div className={"stock-artist"}>Artist</div>
              <div className={"stock-artist"}>Artist</div>
          </div>
          <div className={"artists-container"}>
              <div className={"stock-artist"}>Artist</div>
              <div className={"stock-artist"}>Artist</div>
              <div className={"stock-artist"}>Artist</div>
          </div>
      </div>
      <div className="nav-elements">
         <Link to={"/library"} className={"nav-element"}>Library</Link>
         <Link to={"/songs"} className={"nav-element"}>Songs</Link>
         <Link to={"/albums"} className={"nav-element"}>Albums</Link>
         {/*<Link to={"/artists"} className={"nav-element"}>Artists</Link>*/}
         <Link to={"/playlists"} className={"nav-element"}>Playlists</Link>
         <Link to={"/genres"} className={"nav-element"}>Genres</Link>
         <Link to={"/podcasts"} className={"nav-element"}>Podcasts</Link>
      </div>
    </body>
  );
}