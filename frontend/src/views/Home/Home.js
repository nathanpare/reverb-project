import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Nav from "../Nav/Nav"
import "../Dashboard/Dashboard.css";
import "../Nav/Nav.css";

function Home() {
  return (
    <div>
      <Nav />
      <Dashboard />
    </div>
  )
}

export default Home