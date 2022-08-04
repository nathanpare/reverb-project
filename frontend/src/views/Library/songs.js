import React from 'react';
import './library.css';
import RenderAlbumsPreview from './LibraryComponents/RenderAlbums';
import RenderGenresPreview from './LibraryComponents/RenderGenres';
import RenderPlaylistsPreview from './LibraryComponents/RenderPlaylists';
import RenderArtistsPreview from './LibraryComponents/RenderArtists';
import RenderPodcastsPreview from './LibraryComponents/RenderPodcasts';

const exampleSongData = {
  song1: {
    id: "id1",
    title: "title1",
    artist: "artist1",
    album: "album1",
    numPlays: 500
  },
  song2: {
    id: "id2",
    title: "title2",
    artist: "artist2",
    album: "album2",
    numPlays: 10
  },
  song3: {
    id: "id3",
    title: "title3",
    artist: "artist3",
    album: "album3",
    numPlays: 10
  },
  song4: {
    id: "id4",
    title: "title4",
    artist: "artist4",
    album: "album4",
    numPlays: 10
  },
  song5: {
    id: "id5",
    title: "title5",
    artist: "artist5",
    album: "album5",
    numPlays: 10
  },
  song6: {
    id: "id6",
    title: "title6",
    artist: "artist6",
    album: "album6",
    numPlays: 10
  },
  song7: {
    id: "id7",
    title: "title7",
    artist: "artist7",
    album: "album7",
    numPlays: 10
  },
  song8: {
    id: "id8",
    title: "title8",
    artist: "artist8",
    album: "album8",
    numPlays: 10
  },
  song9: {
    id: "id9",
    title: "title9",
    artist: "artist9",
    album: "album9",
    numPlays: 10
  },
  song10: {
    id: "id10",
    title: "title10",
    artist: "artist10",
    album: "album10",
    numPlays: 10
  },
};

export default function Songs() {
  // eslint-disable-next-line no-undef
  const renderList = songList.map((song) =>
    <div>
      <li>Title: {song.title},
      artist: {song.artist}, 
      album: {song.album}</li>
    </div>
  )
  return (
    <div className="songs-page">
      <header>
        <h3>Songs</h3>
      </header>
      <div>
        <div className="stock-song">Song</div>
        <ul>{renderList}</ul>
        {/* <div>Song</div>
        <div>Song</div>
        <div>Song</div>
        <div>Song</div>
        <div>Song</div>
        <div>Song</div>
        <div>Song</div>
        <div>Song</div>
        <div>Song</div> */}
      </div>
    </div>
  )
};