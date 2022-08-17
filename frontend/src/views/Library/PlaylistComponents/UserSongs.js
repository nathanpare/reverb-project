import React, {useEffect} from 'react';
//import axios from 'axios';

export default function UserSongs({title, artist, img}) {
console.log(title);
console.log(artist);
  return (
    <div className="song" >
      <div className="image">
        <img alt={""} src={img}
          width="150" height="150" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
     
    </div>
  )
}
