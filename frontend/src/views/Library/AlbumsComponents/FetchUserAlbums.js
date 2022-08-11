import React from "react";
import axios from 'axios';

export default function FetchUserAlbums() {
  const userID = "123";

  function getLibrary(usr) {
    return axios.get(`http://api.spotify.com/v1/${usr}/albums`);
  } 
  
  const albums = getLibrary(userID);
  console.log(userID);

  return (
    <div>
      <h1>ALBUMS:</h1>
      <div>
        {Object.values(albums).map(val => {
          return (
            <div className="">
              <div>{albums}</div>
              <div>{albums}</div>
              <div>{albums}</div>
              <div>{albums}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}