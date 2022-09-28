import logo from './logo.svg';
import './App.css';
import Navbar from './components.js/navbar';
import Home from './page/home';
import Postbail from './page/postbail'
import Bailresources from './page/bailresources';
import Contact from './page/contactus';
import Togglebutton from './components.js/togglebutton';
import {BrowserRouter as Switch, Link, Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <div className="App">
        <div id="main">
          <Navbar />
          <Togglebutton />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bailresources" element={<Bailresources />} />
            <Route path="postbail" element={<Postbail />} />
          </Routes>
        </div>
      </div>
    </Switch>
  );
}

export default App;
