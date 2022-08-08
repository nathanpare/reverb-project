<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import './library';
import './library.css';
import './playlists.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { 
  RandomPlaylist, 
  CreatePlaylist, 
  SavedPlaylists, 
  ThisPlaylist 
} from './LibraryComponents/RenderPlaylists';

import {Routes, Route, useNavigate} from 'react-router-dom';  


export default function PlaylistsAndGenres() {
  const navigate = useNavigate();

  const navigateToCreatePlaylist = () => {
    // 👇️ navigate to /contacts
    navigate('/createplaylists');
  };

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };
  const [playlist, setPlaylist] = useState(false);
=======

import React from 'react';
//import './library';
//import './library.css';


export default function Playlists() {
  return (
    <div className="playlists-page">
      <header className="page-header">
        <h3>Playlists</h3>
      </header>
        <div className="playlists-components">
          <div>Create Playlists</div>
          <div>Random Playlist</div>
        </div>
    </div>
  )
};
///
// import React, { useState, useEffect } from "react";
// import './library';
// import './library.css';
// import Button from 'react-bootstrap/esm/Button';
// import { Link } from "react-router-dom";
// import { 
//   RandomPlaylist, 
//   CreatePlaylist, 
//   SavedPlaylists, 
//   ThisPlaylist 
// } from './LibraryComponents/RenderPlaylists';

// export default function PlaylistsAndGenres() {
//   const [playlist, setPlaylist] = useState(false);
>>>>>>> 9437ca9ea25a30cd0523c47626f5295d6c7b8e36

//   // add playlist obj to fill out the addToPlaylist with actual data 

//   const addToPlaylist = (
//       <div>
//           <ul>
//               <li>Playlist item</li>
//               <li>Playlist item</li>
//               <li>Playlist item</li>
//               <li>Playlist item</li>
//               <li>Playlist item</li>
//           </ul>
//       </div>
//   );

//   const fillPlaylistArea = () => {
//       setPlaylist(true);
//   }

<<<<<<< HEAD
  return (
    <div class='playlists'>
      <header className={"page-header"}>
        <h3>Playlists</h3>
      </header>
    <div className='createplaylist'>
    <Button className="button1" onClick={navigateToCreatePlaylist}>Create Playlist</Button>{"   "}
      <Button className="button2">Delele Playlist</Button>{"    "}
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>

    
    </div>
      <div className={"playlists-sort-by"}>Sort By:
        <Button className={"playlists-sort"}>Recently Added</Button>
        <Button className={"playlists-sort"}>Name</Button>
      </div>
      <div className={"playlists-containers"}>
        <div className={"playlist-container"}>Playlist
            <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        </div>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
        <div className={"playlist-container"}>Playlist</div>
          <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
      </div>
      <div className={"nav-elements"}>
        <Link to={"/library"} className={"nav-element"}>Library</Link>
        <Link to={"/songs"} className={"nav-element"}>Songs</Link>
        <Link to={"/albums"} className={"nav-element"}>Albums</Link>
        <Link to={"/artists"} className={"nav-element"}>Artists</Link>
        {/*<Link to={"/playlists"} className={"nav-element"}>Playlists</Link>*/}
        <Link to={"/genres"} className={"nav-element"}>Genres</Link>
        <Link to={"/podcasts"} className={"nav-element"}>Podcasts</Link>
      </div>
    </div>
  );
};

=======
//   return (
//     <div>
//       <header className={"page-header"}>
//         <h3>Playlists</h3>
//       </header>
//       <div className={"playlists-sort-by"}>Sort By:
//         <Button className={"playlists-sort"}>Recently Added</Button>
//         <Button className={"playlists-sort"}>Name</Button>
//       </div>
//       <div className={"playlists-containers"}>
//         <div className={"playlist-container"}>Playlist
//             <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         </div>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//         <div className={"playlist-container"}>Playlist</div>
//           <Button onClick={() => fillPlaylistArea()}Expand>Expand</Button>
//       </div>
//       <div className={"nav-elements"}>
//         <Link to={"/library"} className={"nav-element"}>Library</Link>
//         <Link to={"/songs"} className={"nav-element"}>Songs</Link>
//         <Link to={"/albums"} className={"nav-element"}>Albums</Link>
//         <Link to={"/artists"} className={"nav-element"}>Artists</Link>
//         {/*<Link to={"/playlists"} className={"nav-element"}>Playlists</Link>*/}
//         <Link to={"/genres"} className={"nav-element"}>Genres</Link>
//         <Link to={"/podcasts"} className={"nav-element"}>Podcasts</Link>
//       </div>
//     </div>
//   );
// };

///new-library-page-etc
>>>>>>> 9437ca9ea25a30cd0523c47626f5295d6c7b8e36
