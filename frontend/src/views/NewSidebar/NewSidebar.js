import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./NewSidebar.css"

export default function NewSidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-items'>
      <div className='sidebar-item'>
      <div className='sidebar-icon'>
        <HomeIcon />
        </div>
        <p>Home</p>
        </div>
      <div className='sidebar-item'>
        <div className='sidebar-icon'>
        <SearchIcon />
        </div>
        <p>Search</p>
        </div>
      <div className='sidebar-item'>
      <div className='sidebar-icon'>
        <LibraryMusicIcon />
        </div>
        <p>Your Library</p>
        </div>
      <div className='sidebar-item'>
      <div className='sidebar-icon'>
        <PlaylistAddIcon />
        </div>
        <p>Create Playlist</p>
        </div>
      <div className='sidebar-item'>
      <div className='sidebar-icon'>
        <FavoriteIcon />
        </div>
        <p>Liked Songs</p>
      </div>
      </div>
    </div>
  )
}
