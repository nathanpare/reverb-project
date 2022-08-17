import React, {useEffect} from 'react';
//import axios from 'axios';

export default function UserSongs({title, artist, img}) {
console.log(title);
console.log(artist);
  return (
    <div>
      <div className="library-song-image">
        <img className="library-song-image" alt={""} src={img}
          width="70" height="70" />
        <p>{title}</p>
        <p>{artist}</p>
     
      </div>

    </div>
  )
}
