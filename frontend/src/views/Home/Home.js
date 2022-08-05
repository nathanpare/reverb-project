import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Nav from "../Nav/Nav"
import "../Dashboard/Dashboard.css";
import "../Nav/Nav.css";

function Home({token, logout, song, user}) {
  return (
    <div>
      <Nav  token={token} logout={logout} />
      <Dashboard user={user} song={song} />
    </div>
  )
}

export default Home