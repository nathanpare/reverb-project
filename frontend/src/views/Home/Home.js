import React from 'react';
import "../Home/Home.css"
import Dashboard from '../Dashboard/Dashboard';
import Player from '../Player/Player';
import "../sidebar/Sidebar.css"
import "../Dashboard/Dashboard.css";
import "../Nav/Nav.css";

function Home({ spotify, releases }) {
  return (
    <div className='home'>
      <div className='home-body' style={{display: "flex"}}>
        <Dashboard spotify={spotify} releases={releases}/>
      </div>
      <div className='player-body'>
        <Player />
      </div>
    </div>
  )
}

export default Home