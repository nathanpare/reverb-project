import React from "react";
import {FaHome, FaSearch} from "react-icons/fa";
import {ImLibrary} from "react-icons/im";
import {BsPlusSquare,BsFillHeartFill} from "react-icons/bs";
export const SidebarData = [
  {
    title: "Home",
    icons: <FaHome />,
    link: "/home"

  },
  {
    title: "Search",
    icons: <FaSearch />,
    link: "/Search"

  },
  {
    title: "Your Library",
    icons: <ImLibrary />,
    link: "/library"

  },
  {
    title: "Create Playlist",
    icons: <BsPlusSquare />,
    link: "/createplaylist"

  },
  {
    title: "Liked Songs",
    icons: <BsFillHeartFill />,
    link: "/likedsongs"

  }
]