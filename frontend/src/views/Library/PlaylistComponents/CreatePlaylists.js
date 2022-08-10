import React, { useState, useEffect } from "react";
import '../PlaylistComponents/CreatePlaylists.css';
import axios from 'axios';
import PlaylistDetails from './playlistsdetails';
import Playlists from "../playlists";
//import e from "express";
//import { reset } from "nodemon";
// class CreatePlaylists extends Component {
//   render() {
  const playlistObject ={
    name: 'name',
    id: 'id',
    email: 'email'
  }
export default function CreatePlaylists(props) {
  // const name = props.user.display_name;
  // const name = user.display_name;
  console.log(props);
  console.log(props.user.display_name);
  console.log(props.user.id);
  //console.log(props.user.email); email not found
  const [playlists, setPlaylists] = useState([]);
  const [spotify_name, setSpotifyName]= useState("");
  //const [spotify_email, setSpotifyEmail] = useState("");
  const [spotify_user_id, setSpotifyUserId] = useState("");

  const [playlist_name, setPlaylistName] = useState("");
  //const [playlist_image_url, setPlaylistImageUrl]= useState("");

  // const [playlistObject, setPlaylistObject] = userState({})

  useEffect(() => {
    axios.get(`http://localhost:8080/playlists`)
      .then(function (res) {
        console.log(res.data);
        setPlaylists([...res.data])
        //console.log(playlists);
      }).catch(error =>{
        console.log(error);
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
  const addPlaylist= () =>{
    //e.preventDefault();
    const playlistObject = { name: playlist_name, user_id: props.user.id, image_url:"xxxxx" };
    console.log("Playlist added: ", playlistObject);
    return axios.post(`http://localhost:8080/playlists`, playlistObject)
    .then((response) => {
      const newPlaylist =response.data;
      setPlaylists([newPlaylist, ...playlists]);
    });
  };

  return (
    <div className="createplaylists">

      <h1>Create Playlists</h1>
      <form onSubmit={e => e.preventDefault()}>
        <label className="addplaylistslabel">
          Playlist Name:
          <input className= "form-control" type="text" onChange={e =>setPlaylistName(e.target.value)} /> {"      "}
          <p></p>
          {/* <input type="email" /> {"      "} */}

        </label>
        {"      "}
        <input className="button_submit" type="submit" value="submit" onClick={addPlaylist}></input>
      </form>
      <PlaylistDetails playlists={playlists} />
    </div>
  )
}
