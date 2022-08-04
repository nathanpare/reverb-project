import React from 'react';
import './library.css';
import RenderSongsPreview from './LibraryComponents/RenderSongs';
import { Link } from "react-router-dom";

export default function Genres() {  
  return (
    <div className="library-page">
      <header className="page-header">
        <h3>Genres</h3>
      </header>
      <div className="library-components">
        <RenderSongsPreview />
      </div>
    </div>
  )
};