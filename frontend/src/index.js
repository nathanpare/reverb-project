import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
import Library from './views/Library/library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataLayer
    initialState={initialState} reducer={reducer} >
    {/* <App /> */}
    <Library />
  </DataLayer>
);