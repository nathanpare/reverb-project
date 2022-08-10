import React from "react";
export default function PlaylistNames(props){
  console.log(props);
  //console.log(props[1]);
  return (
    <>
    <div>
      List of Playlists</div>
      <table className="playlists-table">
        <thead>
          <tr>
       
            <th>TableName</th>
            <th>UserId</th>
            <th>imageURL</th>
            </tr>
        </thead>
        <tbody>
          {props.playlists.map((playlist, index) => {
            return(
            <tr key={index}>
            <td>{playlist.id}</td>
              <td>{playlist.name}</td>
              <td>{playlist.user_id}</td>
              <td>{playlist.image_url}</td>
           
          <td>Delete Button</td>
          <td>Edit Button</td>
          </tr>);})}
         
        </tbody>
      </table>
      </>
  )
}