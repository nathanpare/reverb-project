import React from 'react'
import { UseDataLayerValue } from '../../DataLayer'
import Featured from './Featured';
import RecentSongs from './RecentSongs';
import SummerSongs from './SummerSongs';
import Releases from './Releases';

export default function Dashboard() {
  const [{ user, featured, summers, recents, releases }, dispatch] = UseDataLayerValue();

  const setPlayingTrack = (track) => {
    dispatch({
      type: "SET_PLAYING_TRACK",
      track: track,
    })
  }

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
          {featured?.tracks?.map((item) => (
            <Featured
              title={item.name}
              artist={item.artists[0].name}
              img={item.album.images[0].url}
              setPlayingTrack={setPlayingTrack}
              item={item}
              onPlay={setPlayingTrack} />
          ))}
        </div>

        <div className="title">
          <p>Songs of the Summer</p>
        </div>
        <div className="summer-songs">
          {summers?.tracks?.map((item) => (
            <SummerSongs
              title={item.name}
              artist={item.artists[0].name}
              img={item.album.images[0].url}
              setPlayingTrack={setPlayingTrack}
              item={item}
              onPlay={setPlayingTrack} />
          ))}
        </div>

        <div className="title">
          <p>Recently Played</p>
        </div>
        <div className="recent-songs">
          {recents?.items?.map((item) => (
            <RecentSongs
              title={item.track.name}
              artist={item.track.artists[0].name}
              img={item.track.album.images[0].url}
              setPlayingTrack={setPlayingTrack}
              item={item}
              onPlay={setPlayingTrack} />
          ))}
        </div>

        <div className="title">
          <p>New Releases</p>
        </div>
        <div className="releases-songs">
          {releases?.albums?.items.map((item) => (
            <Releases
              title={item.name}
              artist={item.artists[0].name}
              img={item.images[0].url}
              setPlayingTrack={setPlayingTrack}
              item={item}
              onPlay={setPlayingTrack} />
          ))}
        </div>
      </div>
    </div>
  )
}