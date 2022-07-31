import React, { useState, useEffect } from "react";

const SongsList = [
  {
    id: "id1",
    title: "song1",
    artist: "artist1",
    album: "album1",
    genre: "Metal",
  },
  {
    id: "id2",
    title: "song2",
    artist: "artist2",
    album: "album2",
    genre: "Hip-Hop",
  },
  {
    id: "id3",
    title: "song3",
    artist: "artist3",
    album: "album3",
    genre: "Electronic",
  },
  {
    id: "id4",
    title: "song4",
    artist: "artist4",
    album: "album4",
    genre: "Country",
  }
]

function expandSongs(state) {
  const target = document.getElementById("songs-area");
  for (const song of SongsList) {
    let title = song.title;
    let artist = song.artist;
    let album = song.album;

    target.append(`${title}\n${artist}\n${album}\n`);
  }
}

export default function RenderSongs() {
  return (
    <div className="category-span">
      <div id="songs-area">Songs
        <button onClick={expandSongs}>Expand</button>
      </div>
    </div>
  )
};