import React, { useState, useEffect } from "react";
import './CreatePlaylists.css';
import axios from 'axios';
// class CreatePlaylists extends Component {
//   render() {
  const playlistObject ={
    name: 'name',
    id: 'id',
    email: 'email'
  }
  
function CreatePlaylists(props) {
  // const name = props.user.display_name;
  // const name = user.display_name;
  console.log(props);
  const[playlists, setPlaylists]=useState(playlistObject.name);
 // const [playlistObject, setPlaylistObject] = userState({})

  useEffect(() => {
    axios.get(`http://localhost:8080/playlists`)
    .then(function (res) {
      console.log(res.data);
      setPlaylists([...res.data])
      //console.log(playlists);
    })

  }, []);

  function handleInput(event){
    const obj = {
      [event.target.name]: event.target.value
    }

    
  }

  return (
    <div className="createplaylists">

    <h1>Create Playlists</h1>
      <form >
        <label>
          Playlist Name:
          <input type="text" onChange={() => handleInput()} /> {"      "}
          <input type="email"   /> {"      "}
        
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
export default CreatePlaylists;