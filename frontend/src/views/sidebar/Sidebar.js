import React from "react";
//import '../../App.css';
import '../sidebar/Sidebar.css';
import { SidebarData } from './SidebarData';
import { UseDataLayerValue } from "../../DataLayer";
import SidebarOption from "./SidebarOption";

export default function Sidebar(){
  const [{ recents }, dispatch] = UseDataLayerValue();
  return (
    <div className="Sidebar">
   <ul className= "SidebarList">
    {SidebarData.map((value, key) =>{
      return (
        <li key={key} className="rowdata" onClick={() => {window.location.pathname=value.link;}}>
        
          <div id="sidebaricon"> {value.icons}</div>
          <div id="sidebartitle">
            {value.title}
          </div>
        </li>
      )
    })}
    </ul>

  

  <br />
  <strong className="playlist-title">PLAYLISTS</strong>
  <hr />

    {recents?.items?.map((recents) => (
      <SidebarOption title={recents.track.name}/>
    ))}

    </div>
  )
}
