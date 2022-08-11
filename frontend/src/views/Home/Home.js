import React, { useState } from 'react';
import { UseDataLayerValue } from '../../DataLayer'
import "../Home/Home.css"
import Dashboard from '../Dashboard/Dashboard';
import Player from '../Dashboard/Player';
import "../sidebar/Sidebar.css"
import "../Dashboard/Dashboard.css";
import "../Nav/Nav.css";

function Home() {

  return (
    <div className='home'>
      <div className='home-body' style={{display: "flex"}}>
        <Dashboard  />
      </div>
      <div className='player-body'>
        <Player />
      </div>
    </div>
  )
}

export default Home