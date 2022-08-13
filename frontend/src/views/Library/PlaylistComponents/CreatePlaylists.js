import React, { useState, useEffect, useInsertionEffect } from "react";
import '../PlaylistComponents/CreatePlaylists.css';
import axios from 'axios';
import PlaylistDetails from './playlistsdetails';
import Playlists from "../playlists";
//import { UseDataLayerValue } from '../../DataLayer'

  //const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();

  // const playlistObject ={
  //   name: 'name',
  //   id: 'id',
  //   email: 'email'
  // }
export default function CreatePlaylists(props) {

  console.log(props);
  console.log(props.user.display_name);
  console.log(props.user.id);
  //console.log(users);
 

  const [playlists, setPlaylists] = useState([]);
  const [spotify_name, setSpotifyName]= useState("");
 
  const [spotify_user_id, setSpotifyUserId] = useState("");

  const [playlist_name, setPlaylistName] = useState("");

  const[users, setUsers] =useState([]);
  const [user_id, setUserId] = useState(0);
  console.log(users);
  if(user_id === 0){
    setUserIdFunction()
  }

  const fetchData = () =>{
    const usersApi=`http://localhost:8080/users`;
    const playlistsApi=`http://localhost:8080/playlists`;
    const getUsers=axios.get(usersApi);
    const getPlaylists=axios.get(playlistsApi);

    axios.all([getUsers, getPlaylists]).then(
      axios.spread((...allData) => {
        const allUserData = allData[0].data;
        const allPlaylistData = allData[1].data;
        console.log(allUserData);
        console.log(allPlaylistData);
        setUsers([...allUserData]);
        setPlaylists([...allPlaylistData]);
      
      })
    ).catch(error =>{
      console.log(error);
    })    
  };

  useEffect(() => {
    // axios.get(`http://localhost:8080/playlists`)
    //   .then(function (res) {
    //     console.log(res.data);
    //     setPlaylists([...res.data])
    
    //   }).catch(error =>{
    //     console.log(error);
    //   })       
      fetchData();        

  }, []);

  // useEffect(() => {
  // addUser();
  // }, []);
  //include catch always
  
  // function handleClick(event) {
  //   event.preventDefault();
  //   const playlistsobj = {
  //     playlist_name,
  //     spotify_user_id

  //   }
  //   //addPlaylists(playlistObject);
  //  // resetForm();
  
  // }
  function addUser(){
    
    const spotify_name= props.user.display_name;
    const spotify_user_id = props.user.id;
    console.log(spotify_name);
    console.log(spotify_user_id);
    console.log(users);    
    console.log(playlists);
    const usersObject = {spotify_name: spotify_name, spotify_user_id: spotify_user_id};
    
    const filtered_user_table = users.filter(user =>{
      return user.spotify_name === props.user.display_name;
    })
    console.log(filtered_user_table);
    console.log(usersObject);
    if(filtered_user_table.length>0){
      console.log("two", filtered_user_table);
    return;
  }    
    return axios.post(`http://localhost:8080/users`, usersObject)
    .then((response) => {
      console.log("user added: ", usersObject);
      const newUser =response.data;
      setUsers([newUser, ...users]);
      console.log(users);
    }).catch(error =>{
      console.log(error.message);
    });      
    
    console.log("database added");
  }


  const addPlaylist= () =>{
    const spotify_name= props.user.display_name;
    const spotify_user_id = props.user.id;
    // console.log(spotify_name);
    // console.log(spotify_user_id);
    addUser();
   


    const filtered_playlists_table = playlists.find(playlist =>{
      return playlist.name === playlist_name;
    })
    console.log(filtered_playlists_table);
    if(filtered_playlists_table){
      console.log("playlistname already exists", filtered_playlists_table);
      return;
    }
          
    const playlistObject = { name: playlist_name, user_id: user_id, image_url:"xxxxx" };
   
    return axios.post(`http://localhost:8080/playlists`, playlistObject)
    .then((response) => {
      console.log("Playlist added: ", playlistObject);
      const newPlaylist =response.data;
      setPlaylists([newPlaylist, ...playlists]);
    });
  };

  function setUserIdFunction(){
    console.log(users);
    console.log(props.user.display_name);
    if(users.length>0){
      const filtered_user_table = users.filter(user =>{
        console.log(user.spotify_name);
        return user.spotify_name === props.user.display_name;
      })
      
      if (filtered_user_table.length === 0) {
        return;
      } 

      console.log(filtered_user_table[0].id);
      const user_id_tableUsers =filtered_user_table[0].id;
  
      setUserId(user_id_tableUsers);
    }
  }

  return (
    <div className="createplaylists">

      <div className="headerword">Create Playlists</div>
      <form onSubmit={e => e.preventDefault()}>
        <label className="addplaylistslabel">
          Playlist Name:
          <input className= "form-control" type="text" onChange={e =>setPlaylistName(e.target.value)} /> {"      "}
          <p></p>
          {/* <input type="email" /> {"      "} */}

        </label>
        {"      "}
        <input className="button_submit" type="submit" value="Submit" onClick={addPlaylist}></input>
      </form>
      <PlaylistDetails playlists={playlists} setPlaylists={setPlaylists} user_id={user_id} setUserId={setUserId}/>
    </div>
  )
}
