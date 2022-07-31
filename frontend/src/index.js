import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Library from './views/Library/library';

// ReactDOM.render(<Library />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Library />
)