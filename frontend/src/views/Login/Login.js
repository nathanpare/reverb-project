import React, { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';

const CLIENT = "ea696b669de04879856700d07e3f9ac0";
const REDIRECT = "http://localhost:3000/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT}&redirect_uri=${REDIRECT}&response_type=${RESPONSE_TYPE}&show_dialog=true`;


export default function Login() {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
  
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }


  },[]);

const logout = () => {
  setToken("");
  window.localStorage.removeItem("token")
}
  return (
    <div className='login'>
    <Container className='d-flex justify-content-center align-items-center'
    style={{minHeight: "100vh"}}
    >
      {!token?
        <a className='btn btn-primary btn-lg' href={AUTH_URL}>Login with Reverb</a>
        : <button className='btn btn-primary btn-lg' onClick={logout}>Logout</button>
      }
    </Container>
    </div>
  )
}
