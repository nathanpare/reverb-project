import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AUTH_URL } from './spotify';

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
        {/* <button className='btn btn-primary btn-lg' onClick={props.logout}>Logout</button> */}
        <a className='btn btn-primary btn-lg' href={AUTH_URL}>Login with Reverb</a>
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
