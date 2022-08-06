import React, { useState, useEffect } from "react";
import './library';
import './library.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { 
  RandomPlaylist, 
  CreatePlaylist, 
  SavedPlaylists, 
  ThisPlaylist 
} from './LibraryComponents/RenderPlaylists';

export default function PlaylistsAndGenres() {
  const [playlist, setPlaylist] = useState(false);
  
  return (
    <div>
        <h1>AAAA</h1>
    </div>
  )
};

