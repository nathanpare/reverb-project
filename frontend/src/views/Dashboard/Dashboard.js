import React from 'react'
import { UseDataLayerValue } from '../../DataLayer'
import Featured from './Featured';
import RecentSongs from './RecentSongs';
import SummerSongs from './SummerSongs';
import TopTracks from './TopTracks';
import { useState } from 'react';
import Player from './Player';

export default function Dashboard() {
  const [playingTrack, setPlayingTrack] = useState();
  const [{ user, featured, summers, recents, tops, token }, dispatch] = UseDataLayerValue();
  const chooseTrack = (features) => {
    setPlayingTrack(features);
  };
  return (
    
    <div className='dashboard'>
      <div className="message">
        <p>Welcome {user?.display_name}</p>
      </div>
      <div className="featured">
        <div className="title">
          <p>Featured</p>
        </div>
        <div className="featured-songs">
      {featured?.tracks?.map((features) => (
      <Featured title={features.name} artist={features.artists[0].name} img={features.album.images[0].url} chooseTrack={chooseTrack} features={features} key={features.uri} />
    ))}
    </div>

    <div className="title">
          <p>Songs of the Summer</p>
        </div>
        <div className="summer-songs">
      {summers?.tracks?.map((summer) => (
      <SummerSongs title={summer.name} artist={summer.artists[0].name} img={summer.album.images[0].url}/>
    ))}
    </div>

    <div className="title">
          <p>Recently Played</p>
        </div>
        <div className="recent-songs">
      {recents?.items?.map((recent) => (
      <RecentSongs title={recent.track.name} artist={recent.track.artists[0].name} img={recent.track.album.images[0].url}/>
    ))}
    </div>

    <div className="title">
          <p>Your favourite artist's top tracks</p>
        </div>
        <div className="top-songs">
      {tops?.tracks?.map((top) => (
      <TopTracks title={top.name} artist={top.artists[0].name} img={top.album.images[0].url}/>
    ))}
    </div>
    <div className='player-div'>
    <Player token={token} trackUri={playingTrack?.uri} />
    </div>
    </div>
    </div>
  )
}