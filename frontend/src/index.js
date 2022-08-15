import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
import Library from './views/Library/library';
import Albums from './views/Library/albums';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataLayer
    initialState={initialState} reducer={reducer} >
    <App />
    {/* <Library /> */}
    {/* <Albums /> */}
    {/* <Artists /> */}
    {/* <Genres /> */}
    {/* <Podcasts /> */}
  </DataLayer>
);