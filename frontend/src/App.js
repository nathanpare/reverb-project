//import React, {Component} from 'react';
import './App.css';
import LibraryPage from './views/Library/library';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Sidebar from './views/sidebar/Sidebar'

//import "bootstrap/dist/css/bootstrap.min.css";
import Login from './views/login/Login';
import "./views/login/Login.css"
import Search from './views/Search/Search';
import Home from './views/home/Home';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return (

   <>
    <Routes>
    <Route path="/" element={<Home />} exact />
    <Route path="login" element={<Login />} />
    <Route path="search" element={code ? <Search code={code} /> : <Login />} />
    <Route path="library" element={<LibraryPage />} />


    <Route path="sidebar" element={<Sidebar />} />
    <Route path="footer" element={<Footer />} />
    <Route element={Error} />

    </Routes>

    </>
  );
}


export default App;