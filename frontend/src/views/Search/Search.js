import React, { useState } from 'react';
import TrackSearchItem from './TrackSearchItem';
import { UseDataLayerValue } from '../../DataLayer';

function Search({ searchResult, setSearchResult, spotify }) {
  const [{  }, dispatch] = UseDataLayerValue();
  const [tracks, setTracks] = useState([]);

  const handleSearch = () => {
    spotify.searchTracks(searchResult).then(res => {
      console.log("TRACKS", res.tracks);
      setTracks(res.tracks.items)
    })
  }

  const setPlayingTrack = (track) => {
    dispatch({
      type: "SET_PLAYING_TRACK",
      track: track,
    })
  }

  return (
    <div className='search'>
      <div className='search-field'>
        <form onSubmit={e => e.preventDefault()} >
          <input
            type="text"
            placeholder='Search a song'
            onChange={e => setSearchResult(e.target.value)}
          ></input>
          <button className='btn btn-primary' type={"submit"} onClick={handleSearch} >Search</button>
        </form>
      </div>
      <div className='results'>
        {tracks.map((track) => (
          <TrackSearchItem key={track.id} track={track} setPlayingTrack={setPlayingTrack} />))}
      </div>
    </div>
  )
}

export default Search