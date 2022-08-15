import React, { useState } from 'react';
// import './library';
import './library.css';
import './albums.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
// import FetchUserAlbums from "AlbumsComponents/FetchUserAlbums";
import axios from 'axios';

function addAlbum(library) {
  // const [albums, albumsPlusPlus] = useState(false);

  return (
    <div>
      <h3>ADD</h3>
    </div>
  );
}

function removeAlbum(library) {
  // const [albums, albumsMinusMinus] = useState(false);

  return (
    <div>
      <h3>AAAA</h3>
    </div>
  );
}

function fetchAlbums(library) {
  return (
    <div>
      <h3>TEST</h3>
    </div>
  )
}

export default function Albums() {
  // const [album, expandAlbum] = useState(false);
  // const [albums, albumsAdd] = useState(false);

 

  return (
    <div className="albums-page">
      <header className="page-header">
        <h1 className="page-title">Albums</h1>
        {/* <h3 className="header-message">Albums</h3> */}
      </header>
      <body className="albums-page-components">
        <div className="albums-sort-by">
          <h5>Sort By: </h5>
          <Button>Recently Added</Button>
          <Button>Name</Button>
        </div>
        <div className="albums-page-items">
          <ul>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
            <li className="albums-page-item">ALBUM</li>
          </ul>
        </div>
      </body>
    </div>
  )
}

 // function getUserAlbums(id) {
      // let sortedAlbumsData = {};
  //     return axios.get(`http://localhost:8080/useralbums${id}`) 
  //     .then((data) => {
  //       data.albums.forEach(alb => {
  //         sortedAlbumsData[alb.id] = {
  //           albumName: album.name,
  //           id: alb.id,
  //           cover: alb.images[1].url,
  //           artistName: alb.artists[0].name,
  //           trackLength: alb.tracks.items.length,
  //           tracks: alb.tracks.items
  //         }
  //       })
  //     })
  // }




  // const albumData = {
//   "albums": [
//     {
//       "album_type": "album",
//       "artists": [
//         {
//           "external_urls": {
//             "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//           },
//           "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//           "id": "4tZwfgrHOc3mvqYlEYSvVi",
//           "name": "Daft Punk",
//           "type": "artist",
//           "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//         }
//       ],
//       "copyrights": [
//         {
//           "text": "© 2011 Disney",
//           "type": "C"
//         },
//         {
//           "text": "℗ 2011 Walt Disney Records",
//           "type": "P"
//         }
//       ],
//       "external_ids": {
//         "upc": "00050087239633"
//       },
//       "external_urls": {
//         "spotify": "https://open.spotify.com/album/382ObEPsp2rxGrnsizN5TX"
//       },
//       "genres": [],
//       "href": "https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX",
//       "id": "382ObEPsp2rxGrnsizN5TX",
//       "images": [
//         {
//           "height": 640,
//           "url": "https://i.scdn.co/image/ab67616d0000b27326597c053b38c9cf93f8f3a9",
//           "width": 640
//         },
//         {
//           "height": 300,
//           "url": "https://i.scdn.co/image/ab67616d00001e0226597c053b38c9cf93f8f3a9",
//           "width": 300
//         },
//         {
//           "height": 64,
//           "url": "https://i.scdn.co/image/ab67616d0000485126597c053b38c9cf93f8f3a9",
//           "width": 64
//         }
//       ],
//       "label": "Walt Disney Records",
//       "name": "TRON: Legacy Reconfigured",
//       "popularity": 44,
//       "release_date": "2011-01-01",
//       "release_date_precision": "day",
//       "total_tracks": 15,
//       "tracks": {
//         "href": "https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX/tracks?offset=0&limit=50&market=ES&locale=en-US,en;q=0.9",
//         "items": [
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/3a9qv6NLHnsVxJUtKOMHvD"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3a9qv6NLHnsVxJUtKOMHvD",
//                 "id": "3a9qv6NLHnsVxJUtKOMHvD",
//                 "name": "The Glitch Mob",
//                 "type": "artist",
//                 "uri": "spotify:artist:3a9qv6NLHnsVxJUtKOMHvD"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 262240,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/4lteJuSjb9Jt9W1W7PIU2U"
//             },
//             "href": "https://api.spotify.com/v1/tracks/4lteJuSjb9Jt9W1W7PIU2U",
//             "id": "4lteJuSjb9Jt9W1W7PIU2U",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Derezzed - Remixed by The Glitch Mob",
//             "preview_url": "https://p.scdn.co/mp3-preview/18ade41309087540e4085801d85ea3cd7f611b0f?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 1,
//             "type": "track",
//             "uri": "spotify:track:4lteJuSjb9Jt9W1W7PIU2U"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4CecgT3PfTiMzdO3pFCDNP"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4CecgT3PfTiMzdO3pFCDNP",
//                 "id": "4CecgT3PfTiMzdO3pFCDNP",
//                 "name": "M83 VS Big Black Delta",
//                 "type": "artist",
//                 "uri": "spotify:artist:4CecgT3PfTiMzdO3pFCDNP"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/63MQldklfxkjYDoUE4Tppz"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/63MQldklfxkjYDoUE4Tppz",
//                 "id": "63MQldklfxkjYDoUE4Tppz",
//                 "name": "M83",
//                 "type": "artist",
//                 "uri": "spotify:artist:63MQldklfxkjYDoUE4Tppz"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/2TXpVEw5FbzDh93tLoDm0i"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/2TXpVEw5FbzDh93tLoDm0i",
//                 "id": "2TXpVEw5FbzDh93tLoDm0i",
//                 "name": "Big Black Delta",
//                 "type": "artist",
//                 "uri": "spotify:artist:2TXpVEw5FbzDh93tLoDm0i"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 234986,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/66uVqkmHAc0MBUzoPhIypN"
//             },
//             "href": "https://api.spotify.com/v1/tracks/66uVqkmHAc0MBUzoPhIypN",
//             "id": "66uVqkmHAc0MBUzoPhIypN",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Fall - Remixed by M83 VS Big Black Delta",
//             "preview_url": "https://p.scdn.co/mp3-preview/6398b626122319cb17079dc44d77c51f62f1188a?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 2,
//             "type": "track",
//             "uri": "spotify:track:66uVqkmHAc0MBUzoPhIypN"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/5eKLa1xyHLq8ERWmT1CRHj"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/5eKLa1xyHLq8ERWmT1CRHj",
//                 "id": "5eKLa1xyHLq8ERWmT1CRHj",
//                 "name": "The Crystal Method",
//                 "type": "artist",
//                 "uri": "spotify:artist:5eKLa1xyHLq8ERWmT1CRHj"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 267786,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/4OEnpg5ubhg6OQ4M2ZjtsL"
//             },
//             "href": "https://api.spotify.com/v1/tracks/4OEnpg5ubhg6OQ4M2ZjtsL",
//             "id": "4OEnpg5ubhg6OQ4M2ZjtsL",
//             "is_local": false,
//             "is_playable": true,
//             "name": "The Grid - Remixed by The Crystal Method",
//             "preview_url": "https://p.scdn.co/mp3-preview/13dd270a2aa4deff724682c5f1d81c5cf53be0fe?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 3,
//             "type": "track",
//             "uri": "spotify:track:4OEnpg5ubhg6OQ4M2ZjtsL"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/3gqv1kgivAc92KnUm4elKv"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3gqv1kgivAc92KnUm4elKv",
//                 "id": "3gqv1kgivAc92KnUm4elKv",
//                 "name": "Teddybears",
//                 "type": "artist",
//                 "uri": "spotify:artist:3gqv1kgivAc92KnUm4elKv"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 334346,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/2EyK6JBWqftJlxAuqd0Dsq"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2EyK6JBWqftJlxAuqd0Dsq",
//             "id": "2EyK6JBWqftJlxAuqd0Dsq",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Adagio for TRON - Remixed by Teddybears",
//             "preview_url": "https://p.scdn.co/mp3-preview/31314ada2672b9402b7de6738752446b3d39d849?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 4,
//             "type": "track",
//             "uri": "spotify:track:2EyK6JBWqftJlxAuqd0Dsq"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/1mB4aweE1XGdjbFVFC8i5m"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/1mB4aweE1XGdjbFVFC8i5m",
//                 "id": "1mB4aweE1XGdjbFVFC8i5m",
//                 "name": "Ki:Theory",
//                 "type": "artist",
//                 "uri": "spotify:artist:1mB4aweE1XGdjbFVFC8i5m"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 291506,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/1TT6gRprLQ5vSWgoWpyKfR"
//             },
//             "href": "https://api.spotify.com/v1/tracks/1TT6gRprLQ5vSWgoWpyKfR",
//             "id": "1TT6gRprLQ5vSWgoWpyKfR",
//             "is_local": false,
//             "is_playable": true,
//             "name": "The Son of Flynn - Remixed by Ki:Theory",
//             "preview_url": "https://p.scdn.co/mp3-preview/c8bb47ea45ba35ee0ede649aaf24e44dc03d1357?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 5,
//             "type": "track",
//             "uri": "spotify:track:1TT6gRprLQ5vSWgoWpyKfR"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/5MO2kbaGGA2a8kL4c9qqHq"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/5MO2kbaGGA2a8kL4c9qqHq",
//                 "id": "5MO2kbaGGA2a8kL4c9qqHq",
//                 "name": "Paul Oakenfold",
//                 "type": "artist",
//                 "uri": "spotify:artist:5MO2kbaGGA2a8kL4c9qqHq"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 275266,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/6hEvTmmvby9ZTkSdfmPW3m"
//             },
//             "href": "https://api.spotify.com/v1/tracks/6hEvTmmvby9ZTkSdfmPW3m",
//             "id": "6hEvTmmvby9ZTkSdfmPW3m",
//             "is_local": false,
//             "is_playable": true,
//             "name": "C.L.U. - Remixed by Paul Oakenfold",
//             "preview_url": "https://p.scdn.co/mp3-preview/a33884953d1f8d1b2bda1a6aa8c0830f8040ff47?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 6,
//             "type": "track",
//             "uri": "spotify:track:6hEvTmmvby9ZTkSdfmPW3m"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/3OsRAKCvk37zwYcnzRf5XF"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3OsRAKCvk37zwYcnzRf5XF",
//                 "id": "3OsRAKCvk37zwYcnzRf5XF",
//                 "name": "Moby",
//                 "type": "artist",
//                 "uri": "spotify:artist:3OsRAKCvk37zwYcnzRf5XF"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 392293,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/03uOJUuuTgaFFI1Efal1no"
//             },
//             "href": "https://api.spotify.com/v1/tracks/03uOJUuuTgaFFI1Efal1no",
//             "id": "03uOJUuuTgaFFI1Efal1no",
//             "is_local": false,
//             "is_playable": true,
//             "name": "The Son of Flynn - Remixed by Moby",
//             "preview_url": "https://p.scdn.co/mp3-preview/e21b5375c70401e70e0a784601f475ccc32b3936?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 7,
//             "type": "track",
//             "uri": "spotify:track:03uOJUuuTgaFFI1Efal1no"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/62k5LKMhymqlDNo2DWOvvv"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/62k5LKMhymqlDNo2DWOvvv",
//                 "id": "62k5LKMhymqlDNo2DWOvvv",
//                 "name": "Boys Noize",
//                 "type": "artist",
//                 "uri": "spotify:artist:62k5LKMhymqlDNo2DWOvvv"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 340186,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/3YYnfKM02WkygOwg6ozfrL"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3YYnfKM02WkygOwg6ozfrL",
//             "id": "3YYnfKM02WkygOwg6ozfrL",
//             "is_local": false,
//             "is_playable": true,
//             "name": "End of Line - Remixed by Boys Noize",
//             "preview_url": "https://p.scdn.co/mp3-preview/8f26ea991a05dc7720d0a84b1dab27e6b9bae504?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 8,
//             "type": "track",
//             "uri": "spotify:track:3YYnfKM02WkygOwg6ozfrL"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/6TQj5BFPooTa08A7pk8AQ1"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/6TQj5BFPooTa08A7pk8AQ1",
//                 "id": "6TQj5BFPooTa08A7pk8AQ1",
//                 "name": "Kaskade",
//                 "type": "artist",
//                 "uri": "spotify:artist:6TQj5BFPooTa08A7pk8AQ1"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 412440,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/2jFLd9OdNcLsblpv4fDTRn"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2jFLd9OdNcLsblpv4fDTRn",
//             "id": "2jFLd9OdNcLsblpv4fDTRn",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Rinzler - Remixed by Kaskade",
//             "preview_url": "https://p.scdn.co/mp3-preview/e354113c96bb3177529688e2dffe1e1f240f66da?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 9,
//             "type": "track",
//             "uri": "spotify:track:2jFLd9OdNcLsblpv4fDTRn"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/2wouN3QXejYa5tKetYdcVX"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/2wouN3QXejYa5tKetYdcVX",
//                 "id": "2wouN3QXejYa5tKetYdcVX",
//                 "name": "Com Truise",
//                 "type": "artist",
//                 "uri": "spotify:artist:2wouN3QXejYa5tKetYdcVX"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 292093,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/3SL3UavpjRKNMM9UVlE9Bx"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3SL3UavpjRKNMM9UVlE9Bx",
//             "id": "3SL3UavpjRKNMM9UVlE9Bx",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Encom Part 2 - Remixed by Com Truise",
//             "preview_url": "https://p.scdn.co/mp3-preview/75f0085228ef22a20c54bb79931d25a048d7ff12?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 10,
//             "type": "track",
//             "uri": "spotify:track:3SL3UavpjRKNMM9UVlE9Bx"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/3hXDMlrPegHRO0zUvBsRSI"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3hXDMlrPegHRO0zUvBsRSI",
//                 "id": "3hXDMlrPegHRO0zUvBsRSI",
//                 "name": "Photek",
//                 "type": "artist",
//                 "uri": "spotify:artist:3hXDMlrPegHRO0zUvBsRSI"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 318720,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/2UBYw2qf9PkvoKQ610ocft"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2UBYw2qf9PkvoKQ610ocft",
//             "id": "2UBYw2qf9PkvoKQ610ocft",
//             "is_local": false,
//             "is_playable": true,
//             "name": "End of Line - Remixed by Photek",
//             "preview_url": "https://p.scdn.co/mp3-preview/2443dfa2872e8aa4b06cc6bc84046c5f45387422?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 11,
//             "type": "track",
//             "uri": "spotify:track:2UBYw2qf9PkvoKQ610ocft"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/5F8v5xSIGtfukNxq0Jqgwh"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/5F8v5xSIGtfukNxq0Jqgwh",
//                 "id": "5F8v5xSIGtfukNxq0Jqgwh",
//                 "name": "The Japanese Popstars",
//                 "type": "artist",
//                 "uri": "spotify:artist:5F8v5xSIGtfukNxq0Jqgwh"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 367720,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/7irNlzUSPNgCDtEyQuS3lm"
//             },
//             "href": "https://api.spotify.com/v1/tracks/7irNlzUSPNgCDtEyQuS3lm",
//             "id": "7irNlzUSPNgCDtEyQuS3lm",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Arena - Remixed by The Japanese Popstars",
//             "preview_url": "https://p.scdn.co/mp3-preview/8b064e92d8d60e74b373fbf7ad0daf77d68bf71d?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 12,
//             "type": "track",
//             "uri": "spotify:track:7irNlzUSPNgCDtEyQuS3lm"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
//                 "id": "1vCWHaC5f2uS3yhpwWbIA6",
//                 "name": "Avicii",
//                 "type": "artist",
//                 "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 303946,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/1rn6JIHBuBZiwvA57jeoOB"
//             },
//             "href": "https://api.spotify.com/v1/tracks/1rn6JIHBuBZiwvA57jeoOB",
//             "id": "1rn6JIHBuBZiwvA57jeoOB",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Derezzed - Remixed by Avicii",
//             "preview_url": "https://p.scdn.co/mp3-preview/5d85512e1a3eeaa067a0a0f0c5cda558a46748b8?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 13,
//             "type": "track",
//             "uri": "spotify:track:1rn6JIHBuBZiwvA57jeoOB"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4iVhFmG8YCCEHANGeUUS9q"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4iVhFmG8YCCEHANGeUUS9q",
//                 "id": "4iVhFmG8YCCEHANGeUUS9q",
//                 "name": "Pretty Lights",
//                 "type": "artist",
//                 "uri": "spotify:artist:4iVhFmG8YCCEHANGeUUS9q"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 272853,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/4OgB6TRmIGBRT4NoFxxIQd"
//             },
//             "href": "https://api.spotify.com/v1/tracks/4OgB6TRmIGBRT4NoFxxIQd",
//             "id": "4OgB6TRmIGBRT4NoFxxIQd",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Solar Sailer - Remixed by Pretty Lights",
//             "preview_url": "https://p.scdn.co/mp3-preview/f52b59cd4847b6527e14994ba750e52850773a65?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 14,
//             "type": "track",
//             "uri": "spotify:track:4OgB6TRmIGBRT4NoFxxIQd"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               },
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/3CfH3WZPzbk5mNDWXpGIy6"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3CfH3WZPzbk5mNDWXpGIy6",
//                 "id": "3CfH3WZPzbk5mNDWXpGIy6",
//                 "name": "Sander Kleinenberg",
//                 "type": "artist",
//                 "uri": "spotify:artist:3CfH3WZPzbk5mNDWXpGIy6"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 304466,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/1Nv1h7ANN9E4rAjLP4OfgA"
//             },
//             "href": "https://api.spotify.com/v1/tracks/1Nv1h7ANN9E4rAjLP4OfgA",
//             "id": "1Nv1h7ANN9E4rAjLP4OfgA",
//             "is_local": false,
//             "is_playable": true,
//             "name": "TRON Legacy (End Titles) - Remixed by Sander Kleinenberg",
//             "preview_url": "https://p.scdn.co/mp3-preview/10f3d0e90bfb0bdc465a855e8391e7b7763b676e?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 15,
//             "type": "track",
//             "uri": "spotify:track:1Nv1h7ANN9E4rAjLP4OfgA"
//           }
//         ],
//         "limit": 50,
//         "next": null,
//         "offset": 0,
//         "previous": null,
//         "total": 15
//       },
//       "type": "album",
//       "uri": "spotify:album:382ObEPsp2rxGrnsizN5TX"
//     },
//     {
//       "album_type": "album",
//       "artists": [
//         {
//           "external_urls": {
//             "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//           },
//           "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//           "id": "4tZwfgrHOc3mvqYlEYSvVi",
//           "name": "Daft Punk",
//           "type": "artist",
//           "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//         }
//       ],
//       "copyrights": [
//         {
//           "text": "Distributed exclusively by Warner Music France / ADA France, © 2005 Daft Life Ltd.",
//           "type": "C"
//         },
//         {
//           "text": "Distributed exclusively by Warner Music France / ADA France, ℗ 2005 Daft Life Ltd.",
//           "type": "P"
//         }
//       ],
//       "external_ids": {
//         "upc": "0724386091956"
//       },
//       "external_urls": {
//         "spotify": "https://open.spotify.com/album/1A2GTWGtFfWp7KSQTwWOyo"
//       },
//       "genres": [],
//       "href": "https://api.spotify.com/v1/albums/1A2GTWGtFfWp7KSQTwWOyo",
//       "id": "1A2GTWGtFfWp7KSQTwWOyo",
//       "images": [
//         {
//           "height": 640,
//           "url": "https://i.scdn.co/image/ab67616d0000b273d8601e15fa1b4351fe1fc6ae",
//           "width": 640
//         },
//         {
//           "height": 300,
//           "url": "https://i.scdn.co/image/ab67616d00001e02d8601e15fa1b4351fe1fc6ae",
//           "width": 300
//         },
//         {
//           "height": 64,
//           "url": "https://i.scdn.co/image/ab67616d00004851d8601e15fa1b4351fe1fc6ae",
//           "width": 64
//         }
//       ],
//       "label": "Daft Life Ltd./ADA France",
//       "name": "Human After All",
//       "popularity": 46,
//       "release_date": "2005-03-14",
//       "release_date_precision": "day",
//       "total_tracks": 10,
//       "tracks": {
//         "href": "https://api.spotify.com/v1/albums/1A2GTWGtFfWp7KSQTwWOyo/tracks?offset=0&limit=50&market=ES&locale=en-US,en;q=0.9",
//         "items": [
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 319879,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/3aCKAkMx3yfaj3AO5Gz47e"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3aCKAkMx3yfaj3AO5Gz47e",
//             "id": "3aCKAkMx3yfaj3AO5Gz47e",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/3aByRUC2BVL6Fs1zI723sd"
//               },
//               "href": "https://api.spotify.com/v1/tracks/3aByRUC2BVL6Fs1zI723sd",
//               "id": "3aByRUC2BVL6Fs1zI723sd",
//               "type": "track",
//               "uri": "spotify:track:3aByRUC2BVL6Fs1zI723sd"
//             },
//             "name": "Human After All",
//             "preview_url": "https://p.scdn.co/mp3-preview/c918bd5900f610655df410315a8bcfdab9726fc3?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 1,
//             "type": "track",
//             "uri": "spotify:track:3aCKAkMx3yfaj3AO5Gz47e"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 263240,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/0UZRFYMoz9xmeE2AQUhTDl"
//             },
//             "href": "https://api.spotify.com/v1/tracks/0UZRFYMoz9xmeE2AQUhTDl",
//             "id": "0UZRFYMoz9xmeE2AQUhTDl",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/2ABpuao3ZbTjP2cSiX9KZc"
//               },
//               "href": "https://api.spotify.com/v1/tracks/2ABpuao3ZbTjP2cSiX9KZc",
//               "id": "2ABpuao3ZbTjP2cSiX9KZc",
//               "type": "track",
//               "uri": "spotify:track:2ABpuao3ZbTjP2cSiX9KZc"
//             },
//             "name": "The Prime Time of Your Life",
//             "preview_url": "https://p.scdn.co/mp3-preview/7ccd2a2508f029382903944180ce769e58186aa7?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 2,
//             "type": "track",
//             "uri": "spotify:track:0UZRFYMoz9xmeE2AQUhTDl"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 287720,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/7LL40F6YdZgeiQ6en1c7Lk"
//             },
//             "href": "https://api.spotify.com/v1/tracks/7LL40F6YdZgeiQ6en1c7Lk",
//             "id": "7LL40F6YdZgeiQ6en1c7Lk",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/4zu9wo2FXoBSsKjO6tRB3R"
//               },
//               "href": "https://api.spotify.com/v1/tracks/4zu9wo2FXoBSsKjO6tRB3R",
//               "id": "4zu9wo2FXoBSsKjO6tRB3R",
//               "type": "track",
//               "uri": "spotify:track:4zu9wo2FXoBSsKjO6tRB3R"
//             },
//             "name": "Robot Rock",
//             "preview_url": "https://p.scdn.co/mp3-preview/038ab1a19a7bbb5d9a3f565f7144f8d1339cea94?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 3,
//             "type": "track",
//             "uri": "spotify:track:7LL40F6YdZgeiQ6en1c7Lk"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 321186,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/60HSQkYSlJVtdRdHgzRsXz"
//             },
//             "href": "https://api.spotify.com/v1/tracks/60HSQkYSlJVtdRdHgzRsXz",
//             "id": "60HSQkYSlJVtdRdHgzRsXz",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/07KtTNn0wZndtN5NOYdBWR"
//               },
//               "href": "https://api.spotify.com/v1/tracks/07KtTNn0wZndtN5NOYdBWR",
//               "id": "07KtTNn0wZndtN5NOYdBWR",
//               "type": "track",
//               "uri": "spotify:track:07KtTNn0wZndtN5NOYdBWR"
//             },
//             "name": "Steam Machine",
//             "preview_url": "https://p.scdn.co/mp3-preview/d42708865fceef806e38cc38f5a39db6612eb371?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 4,
//             "type": "track",
//             "uri": "spotify:track:60HSQkYSlJVtdRdHgzRsXz"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 289680,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/4ABWPP59ItFKykdaDF09K5"
//             },
//             "href": "https://api.spotify.com/v1/tracks/4ABWPP59ItFKykdaDF09K5",
//             "id": "4ABWPP59ItFKykdaDF09K5",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/1WnXCfO6oIxG0TbJj29MqR"
//               },
//               "href": "https://api.spotify.com/v1/tracks/1WnXCfO6oIxG0TbJj29MqR",
//               "id": "1WnXCfO6oIxG0TbJj29MqR",
//               "type": "track",
//               "uri": "spotify:track:1WnXCfO6oIxG0TbJj29MqR"
//             },
//             "name": "Make Love",
//             "preview_url": "https://p.scdn.co/mp3-preview/9adc7040bb7f364d00e7768001045ddae42978a5?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 5,
//             "type": "track",
//             "uri": "spotify:track:4ABWPP59ItFKykdaDF09K5"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 248400,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/73MAeHX5sqLYfuYclsrvHc"
//             },
//             "href": "https://api.spotify.com/v1/tracks/73MAeHX5sqLYfuYclsrvHc",
//             "id": "73MAeHX5sqLYfuYclsrvHc",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/61qwHnU8dyMqPemGzopDcp"
//               },
//               "href": "https://api.spotify.com/v1/tracks/61qwHnU8dyMqPemGzopDcp",
//               "id": "61qwHnU8dyMqPemGzopDcp",
//               "type": "track",
//               "uri": "spotify:track:61qwHnU8dyMqPemGzopDcp"
//             },
//             "name": "The Brainwasher",
//             "preview_url": "https://p.scdn.co/mp3-preview/b7d55c765e6dd9799d1e6a8414ede393b7c1c42e?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 6,
//             "type": "track",
//             "uri": "spotify:track:73MAeHX5sqLYfuYclsrvHc"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 19200,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/3dWxT7lAv6lmXEW2AEZyPQ"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3dWxT7lAv6lmXEW2AEZyPQ",
//             "id": "3dWxT7lAv6lmXEW2AEZyPQ",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/0cV1dl2k19YoGbxTKDb0rH"
//               },
//               "href": "https://api.spotify.com/v1/tracks/0cV1dl2k19YoGbxTKDb0rH",
//               "id": "0cV1dl2k19YoGbxTKDb0rH",
//               "type": "track",
//               "uri": "spotify:track:0cV1dl2k19YoGbxTKDb0rH"
//             },
//             "name": "On / Off",
//             "preview_url": null,
//             "track_number": 7,
//             "type": "track",
//             "uri": "spotify:track:3dWxT7lAv6lmXEW2AEZyPQ"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 287840,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/37M8nuFfSrlKfTR0AAp7gK"
//             },
//             "href": "https://api.spotify.com/v1/tracks/37M8nuFfSrlKfTR0AAp7gK",
//             "id": "37M8nuFfSrlKfTR0AAp7gK",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/73mTIDCNKGfUF4MiFfR3b5"
//               },
//               "href": "https://api.spotify.com/v1/tracks/73mTIDCNKGfUF4MiFfR3b5",
//               "id": "73mTIDCNKGfUF4MiFfR3b5",
//               "type": "track",
//               "uri": "spotify:track:73mTIDCNKGfUF4MiFfR3b5"
//             },
//             "name": "Television Rules the Nation",
//             "preview_url": "https://p.scdn.co/mp3-preview/bdad9fadd29460df5956846b8e8dbce765b69b36?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 8,
//             "type": "track",
//             "uri": "spotify:track:37M8nuFfSrlKfTR0AAp7gK"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 284280,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/1iNeZGJsoC0D7ZyJTdIbDS"
//             },
//             "href": "https://api.spotify.com/v1/tracks/1iNeZGJsoC0D7ZyJTdIbDS",
//             "id": "1iNeZGJsoC0D7ZyJTdIbDS",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/0LSLM0zuWRkEYemF7JcfEE"
//               },
//               "href": "https://api.spotify.com/v1/tracks/0LSLM0zuWRkEYemF7JcfEE",
//               "id": "0LSLM0zuWRkEYemF7JcfEE",
//               "type": "track",
//               "uri": "spotify:track:0LSLM0zuWRkEYemF7JcfEE"
//             },
//             "name": "Technologic",
//             "preview_url": "https://p.scdn.co/mp3-preview/c81174ed0dd45528cee94bebb5def13972c1d20b?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 9,
//             "type": "track",
//             "uri": "spotify:track:1iNeZGJsoC0D7ZyJTdIbDS"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 417320,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/0Dezmoeb373GNcYBjLVAMH"
//             },
//             "href": "https://api.spotify.com/v1/tracks/0Dezmoeb373GNcYBjLVAMH",
//             "id": "0Dezmoeb373GNcYBjLVAMH",
//             "is_local": false,
//             "is_playable": true,
//             "linked_from": {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/track/3PsJ6zisndTa3F9eOjBfCc"
//               },
//               "href": "https://api.spotify.com/v1/tracks/3PsJ6zisndTa3F9eOjBfCc",
//               "id": "3PsJ6zisndTa3F9eOjBfCc",
//               "type": "track",
//               "uri": "spotify:track:3PsJ6zisndTa3F9eOjBfCc"
//             },
//             "name": "Emotion",
//             "preview_url": "https://p.scdn.co/mp3-preview/6f6fb80b6fd319011a66a807a7cacd9ef358d29e?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 10,
//             "type": "track",
//             "uri": "spotify:track:0Dezmoeb373GNcYBjLVAMH"
//           }
//         ],
//         "limit": 50,
//         "next": null,
//         "offset": 0,
//         "previous": null,
//         "total": 10
//       },
//       "type": "album",
//       "uri": "spotify:album:1A2GTWGtFfWp7KSQTwWOyo"
//     },
//     {
//       "album_type": "album",
//       "artists": [
//         {
//           "external_urls": {
//             "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//           },
//           "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//           "id": "4tZwfgrHOc3mvqYlEYSvVi",
//           "name": "Daft Punk",
//           "type": "artist",
//           "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//         }
//       ],
//       "copyrights": [
//         {
//           "text": "Distributed exclusively by Warner Music France / ADA France, © 2001 Daft Life Ltd.",
//           "type": "C"
//         },
//         {
//           "text": "Distributed exclusively by Warner Music France / ADA France, ℗ 2001 Daft Life Ltd.",
//           "type": "P"
//         }
//       ],
//       "external_ids": {
//         "upc": "0724384960650"
//       },
//       "external_urls": {
//         "spotify": "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc"
//       },
//       "genres": [],
//       "href": "https://api.spotify.com/v1/albums/2noRn2Aes5aoNVsU6iWThc",
//       "id": "2noRn2Aes5aoNVsU6iWThc",
//       "images": [
//         {
//           "height": 640,
//           "url": "https://i.scdn.co/image/ab67616d0000b273b33d46dfa2635a47eebf63b2",
//           "width": 640
//         },
//         {
//           "height": 300,
//           "url": "https://i.scdn.co/image/ab67616d00001e02b33d46dfa2635a47eebf63b2",
//           "width": 300
//         },
//         {
//           "height": 64,
//           "url": "https://i.scdn.co/image/ab67616d00004851b33d46dfa2635a47eebf63b2",
//           "width": 64
//         }
//       ],
//       "label": "Daft Life Ltd./ADA France",
//       "name": "Discovery",
//       "popularity": 70,
//       "release_date": "2001-03-12",
//       "release_date_precision": "day",
//       "total_tracks": 14,
//       "tracks": {
//         "href": "https://api.spotify.com/v1/albums/2noRn2Aes5aoNVsU6iWThc/tracks?offset=0&limit=50&market=ES&locale=en-US,en;q=0.9",
//         "items": [
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 320357,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/0DiWol3AO6WpXZgp0goxAV"
//             },
//             "href": "https://api.spotify.com/v1/tracks/0DiWol3AO6WpXZgp0goxAV",
//             "id": "0DiWol3AO6WpXZgp0goxAV",
//             "is_local": false,
//             "is_playable": true,
//             "name": "One More Time",
//             "preview_url": "https://p.scdn.co/mp3-preview/18781de52205d9ade22904945510161feab085ce?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 1,
//             "type": "track",
//             "uri": "spotify:track:0DiWol3AO6WpXZgp0goxAV"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 212546,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/3H3cOQ6LBLSvmcaV7QkZEu"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3H3cOQ6LBLSvmcaV7QkZEu",
//             "id": "3H3cOQ6LBLSvmcaV7QkZEu",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Aerodynamic",
//             "preview_url": "https://p.scdn.co/mp3-preview/6a1242dcb93790ebe95205ebd755d76cb0e14177?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 2,
//             "type": "track",
//             "uri": "spotify:track:3H3cOQ6LBLSvmcaV7QkZEu"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 301373,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/2VEZx7NWsZ1D0eJ4uv5Fym"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2VEZx7NWsZ1D0eJ4uv5Fym",
//             "id": "2VEZx7NWsZ1D0eJ4uv5Fym",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Digital Love",
//             "preview_url": "https://p.scdn.co/mp3-preview/a63206eb2d593af1687374517d51915b1a84e10e?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 3,
//             "type": "track",
//             "uri": "spotify:track:2VEZx7NWsZ1D0eJ4uv5Fym"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 224693,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/5W3cjX2J3tjhG8zb6u0qHn"
//             },
//             "href": "https://api.spotify.com/v1/tracks/5W3cjX2J3tjhG8zb6u0qHn",
//             "id": "5W3cjX2J3tjhG8zb6u0qHn",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Harder, Better, Faster, Stronger",
//             "preview_url": "https://p.scdn.co/mp3-preview/8abf49e209adb09d264ad184157d761c6af20c9a?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 4,
//             "type": "track",
//             "uri": "spotify:track:5W3cjX2J3tjhG8zb6u0qHn"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 211640,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/6vuPZX9fWESg5js2JFTQRJ"
//             },
//             "href": "https://api.spotify.com/v1/tracks/6vuPZX9fWESg5js2JFTQRJ",
//             "id": "6vuPZX9fWESg5js2JFTQRJ",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Crescendolls",
//             "preview_url": "https://p.scdn.co/mp3-preview/fa63330a31adf36e467b72ce68bb43b7e915cfb3?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 5,
//             "type": "track",
//             "uri": "spotify:track:6vuPZX9fWESg5js2JFTQRJ"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 104466,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/63JXZZRbmzooashakb0zbu"
//             },
//             "href": "https://api.spotify.com/v1/tracks/63JXZZRbmzooashakb0zbu",
//             "id": "63JXZZRbmzooashakb0zbu",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Nightvision",
//             "preview_url": "https://p.scdn.co/mp3-preview/f34d8548d7cbbd5aaf4b0e1abbfd41e435712f0b?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 6,
//             "type": "track",
//             "uri": "spotify:track:63JXZZRbmzooashakb0zbu"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 237800,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/186hvCTyrni4KT9nwIQ7zS"
//             },
//             "href": "https://api.spotify.com/v1/tracks/186hvCTyrni4KT9nwIQ7zS",
//             "id": "186hvCTyrni4KT9nwIQ7zS",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Superheroes",
//             "preview_url": "https://p.scdn.co/mp3-preview/3344d3876ca5a87a00988c85845d9eb01a097428?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 7,
//             "type": "track",
//             "uri": "spotify:track:186hvCTyrni4KT9nwIQ7zS"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 201800,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/098ttCNmncrO4YvqWUNMvn"
//             },
//             "href": "https://api.spotify.com/v1/tracks/098ttCNmncrO4YvqWUNMvn",
//             "id": "098ttCNmncrO4YvqWUNMvn",
//             "is_local": false,
//             "is_playable": true,
//             "name": "High Life",
//             "preview_url": "https://p.scdn.co/mp3-preview/64de0035d909feff5e99481f4cec66dca4f75102?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 8,
//             "type": "track",
//             "uri": "spotify:track:098ttCNmncrO4YvqWUNMvn"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 232666,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/1NeLwFETswx8Fzxl2AFl91"
//             },
//             "href": "https://api.spotify.com/v1/tracks/1NeLwFETswx8Fzxl2AFl91",
//             "id": "1NeLwFETswx8Fzxl2AFl91",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Something About Us",
//             "preview_url": "https://p.scdn.co/mp3-preview/bbf5835ee13dd053ed34a2c529da6b4d49627cea?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 9,
//             "type": "track",
//             "uri": "spotify:track:1NeLwFETswx8Fzxl2AFl91"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 227866,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/7cMFjxhbXBpOlais7KMF3j"
//             },
//             "href": "https://api.spotify.com/v1/tracks/7cMFjxhbXBpOlais7KMF3j",
//             "id": "7cMFjxhbXBpOlais7KMF3j",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Voyager",
//             "preview_url": "https://p.scdn.co/mp3-preview/950420bfa8b9036c5e70c4dbc6088e31cad1718a?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 10,
//             "type": "track",
//             "uri": "spotify:track:7cMFjxhbXBpOlais7KMF3j"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 345186,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/2LD2gT7gwAurzdQDQtILds"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2LD2gT7gwAurzdQDQtILds",
//             "id": "2LD2gT7gwAurzdQDQtILds",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Veridis Quo",
//             "preview_url": "https://p.scdn.co/mp3-preview/6eca9543a05607263bfc48413ff16f5f9aae7d40?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 11,
//             "type": "track",
//             "uri": "spotify:track:2LD2gT7gwAurzdQDQtILds"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 206866,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/4npMbTuxrUA3Wd7edACZ2L"
//             },
//             "href": "https://api.spotify.com/v1/tracks/4npMbTuxrUA3Wd7edACZ2L",
//             "id": "4npMbTuxrUA3Wd7edACZ2L",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Short Circuit",
//             "preview_url": "https://p.scdn.co/mp3-preview/d180a3a9d7ed6fa8e5ae01bc439562b00aa53bd3?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 12,
//             "type": "track",
//             "uri": "spotify:track:4npMbTuxrUA3Wd7edACZ2L"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 240173,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/7v9Q0dAb9t7h8gJOkcJHay"
//             },
//             "href": "https://api.spotify.com/v1/tracks/7v9Q0dAb9t7h8gJOkcJHay",
//             "id": "7v9Q0dAb9t7h8gJOkcJHay",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Face to Face",
//             "preview_url": "https://p.scdn.co/mp3-preview/3b04609388d0f5c26e01899acc1951cb971a491c?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 13,
//             "type": "track",
//             "uri": "spotify:track:7v9Q0dAb9t7h8gJOkcJHay"
//           },
//           {
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
//                 "id": "4tZwfgrHOc3mvqYlEYSvVi",
//                 "name": "Daft Punk",
//                 "type": "artist",
//                 "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
//               }
//             ],
//             "disc_number": 1,
//             "duration_ms": 600293,
//             "explicit": false,
//             "external_urls": {
//               "spotify": "https://open.spotify.com/track/3zMvotMEQK3xvH01vA9wAP"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3zMvotMEQK3xvH01vA9wAP",
//             "id": "3zMvotMEQK3xvH01vA9wAP",
//             "is_local": false,
//             "is_playable": true,
//             "name": "Too Long",
//             "preview_url": "https://p.scdn.co/mp3-preview/2034e34e5e55024e8ed9da556ad49138d0015ac3?cid=774b29d4f13844c495f206cafdad9c86",
//             "track_number": 14,
//             "type": "track",
//             "uri": "spotify:track:3zMvotMEQK3xvH01vA9wAP"
//           }
//         ],
//         "limit": 50,
//         "next": null,
//         "offset": 0,
//         "previous": null,
//         "total": 14
//       },
//       "type": "album",
//       "uri": "spotify:album:2noRn2Aes5aoNVsU6iWThc"
//     }
//   ]
// }
