import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
import Songs from "./views/Library/songs";
import Playlists from './views/Library/playlists';
import Albums from './views/Library/albums';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataLayer
    initialState={initialState} reducer={reducer} >
    <App />
  </DataLayer>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/library"></Route>
//       <Route path="/songs" element={<Songs />} />
//       <Route path="/playlists" element={<Playlists />} />
//       {/* <Route path="/albums" element={<Albums />} /> */}
//       {/* <Route path="/artists" element={<Artists />} />
//        */}
//        {/* <Route path="/genres" element={<Genres />} /> */}
//        {/* <Route path="/podcasts" element={<Genres />} /> */}
//     </Routes>
//   </BrowserRouter>
// );