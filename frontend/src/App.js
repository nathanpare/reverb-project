import './App.css';
import LibraryPage from './views/Library/library';
//import {BrowserRouter as Router, Switch, Route} from 'react-dom';
//import Footer from './components/footer/Footer';
//import Sidebar from './views/sidebar/Sidebar'

import "bootstrap/dist/css/bootstrap.min.css";
import Login from './views/Login/Login';
import "./views/Login/Login.css"
import Search from './views/Search/Search';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return (
    <div className='app'>{code ? <Search code={code} /> : <Login />}</div>
  );
}


export default App;

// TEST COMMENT FOR GIT