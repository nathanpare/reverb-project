import React from 'react'
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function SummerSongs({ title, artist, img, chooseTrackSummer, summer }) {
  const handlePlay = () => {
    chooseTrackSummer(summer);
    console.log("TRACKKK", summer);
  }
  return (
    <div className="song" onClick={handlePlay} >
      <div className="image">
        <img alt={""} src={img}
          width="150" height="150" />
      </div>
      <p className="name">{title}</p>
      <p className="artist">{artist}</p>
      <i className="fa-solid fa-play"></i>
      <div className='player-icon' onClick={handlePlay}>
      <PlayCircleOutlineIcon fontSize='large' className='play-icon'/>
      </div>
    </div>
  )
}