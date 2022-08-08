
import "../Player/Player.css"
import * as React from 'react';

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


function Player() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='player'>
      <div className='player__left'>
        <div className="album__pic">
        <img src="https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635.jpg" alt={""} width="50" height="50"/>
        </div>
        <div className="song__info">
        <h5>Over Now</h5>
        <p>Post Malone</p>
        </div>
      </div>

      <div className='player__center'>
        <PlayCircleOutlineIcon fontSize='large' className='play-icon'/>
      </div>

      <div className='player__right'>
      <Box sx={{ width: 200 }}>
      <Stack spacing={0} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
    
      </div>
    </div>
  )
}

export default Player