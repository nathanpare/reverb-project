import React, { useState, useEffect } from "react";
import './CreatePlaylists.css';
import axios from 'axios';
import { reset } from "nodemon";
// class CreatePlaylists extends Component {
//   render() {
const playlistObject = {
  name: 'name',
  id: 'id',
  email: 'email'
}

function CreatePlaylists(props) {
  // const name = props.user.display_name;
  // const name = user.display_name;
  console.log(props);
  console.log(props.user.display_name);
  console.log(props.user.id);
  //console.log(props.user.email); email not found
  const [playlists, setPlaylists] = useState(playlistObject.name);
  const [spotify_name, setSpotifyName]= useState("");
  const [spotify_email, setSpotifyEmail] = useState("");
  const [spotify_user_id, setSpotifyUserId] = useState("");

  const [playlist_name, setPlaylistName] = useState("");
  const [playlist_image_url, setPlaylistImageUrl]= useState("");

  // const [playlistObject, setPlaylistObject] = userState({})

  useEffect(() => {
    axios.get(`http://localhost:8080/playlists`)
      .then(function (res) {
        console.log(res.data);
        setPlaylists([...res.data])
        //console.log(playlists);
      })

  }, []);
  //include catch always
  // function handleInput(event) {
  //   const obj = {
  //     [event.target.name]: event.target.value
  //   }
  
  // }
  function handleClick(event) {
    event.preventDefault();
    const playlistsobj = {
      playlist_name,
      spotify_user_id

    }
    //addPlaylists(playlistObject);
   // resetForm();
  
  }
  function addUser(userData){
    const spotify_name= props.user.display_name;

  }
  function addPlaylist(playlist){
    console.log("Playlist added: ", playlist);
    return axios.post(`http://localhost:8080/playlists`, playlist)
    .then((response) => {
      const newPlaylist =response.data;
      
    })
  }

  return (
    <div className="createplaylists">

      <h1>Create Playlists</h1>
      <form >
        <label className="addplaylistslabel">
          Playlist Name:
          <input className= "form-control" type="text" onChange={e =>setPlaylistName(e.target.value)} /> {"      "}
          <p></p>
          {/* <input type="email" /> {"      "} */}

        </label>
        {"      "}
        <input className="button_submit" type="submit" value="submit" onClick={handleClick}></input>
      </form>
    </div>
  )
}
export default CreatePlaylists;