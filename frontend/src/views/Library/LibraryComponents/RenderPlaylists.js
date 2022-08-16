import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UseDataLayerValue } from "../../../DataLayer";

export default function RenderPlaylistsPreview() {
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();

  return (
    <div>
      <h1>TEST TEST</h1>
    </div>
  )

};

  // const [area, setArea] = useState(false);

  // // const userID = user.data.id;
  // console.log(user);
  // // useEffect(() => {
  // //   axios.get(`http://localhost:8080/playlists/${userID}`)
  // //     .then(function(res) {
  // //       console.log(res);
  // //     })
  // // })

  // const addToArea = (
  //   <div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // );

  // const fillArea = () => {
  //   setArea(true);
  //   // setArea(!area);
  // }

  // return (
  //   <div className="category-span">Playlists
  //     <div id="playlists-area">
  //       <button onClick={() => fillArea()}>Expand</button>
  //       {area && addToArea}
  //     </div>
  //   </div>
  // )