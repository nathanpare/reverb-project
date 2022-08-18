import React from 'react';
import { AUTH_URL } from './spotify';
import { Container } from 'react-bootstrap';

export default function Login() {
  return (
    <div className='login'>
      <Container className='d-flex justify-content-center align-items-center'
        style={{ minHeight: "100vh" }}
      >
        <a className='btn btn-primary btn-lg' href={AUTH_URL}>Login with Reverb</a>
      </Container>
    </div>
  )
}