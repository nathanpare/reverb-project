import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//const CLIENT = "ea696b669de04879856700d07e3f9ac0";
const CLIENT = "418c1699153843ba9f0709a131bd3074";
const REDIRECT = "http://localhost:3000/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT}&redirect_uri=${REDIRECT}&scope=${scopes.join(
  "%20"
)}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

export default function Nav(props) {
  return (
    <div className='nav'>
      <nav>
        <div className='logo'>
    <p>Reverb</p>
    </div>
    <div className="right">
    <div className='login'>
    <Container>
      {localStorage.getItem("token") ?
        <button className='btn btn-primary btn-lg' onClick={props.logout}>Logout</button>
        : <a className='btn btn-primary btn-lg' href={AUTH_URL}>Login with Reverb</a>
      }
    </Container>
    </div>
      <div className="account">
        <p>Account</p>
      </div>
      <div className="about">
        <p>About</p>
      </div>
    </div>
  </nav>
    </div>
  )
}
