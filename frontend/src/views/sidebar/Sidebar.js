import React from "react";
//import '../../App.css';
import '../sidebar/Sidebar.css';
import { SidebarData } from './SidebarData';

function Sidebar(){
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
    </div>
  )
}

export default Sidebar;
