import logo from './logo.svg';
import './App.css';
import Navbar from './components.js/navbar';
import Home from './page/home';
import Postbail from './page/postbail'
import Bailresources from './page/bailresources';
import Contact from './page/contactus';
import Togglebutton from './components.js/togglebutton';
import {BrowserRouter as Link, Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div id="main">
        <Navbar />
        <Togglebutton />
        <Home />
      </div>
    </div>
  );
}

export default App;
