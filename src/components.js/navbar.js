import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';

import {
  BrowserRouter as Switch,
  Link,
  Router,
  Route,
  Routes,
} from "react-router-dom";
    


const Navbar = () =>{



    return (
      <div id="navbar">
        <ul>
          <span id="title">
            <span id="pink"> I Gotcha</span>
            <br /> Bail Bond
          </span>

          <span class="navlist">
            <li>
              <Link to="./home">Home</Link>
            </li>
            <li>
              <Link to="./bailresources">Bail Resources</Link>
            </li>
            <li>
              <Link to="./postbail">Post Bail Option</Link>
             
            </li>
            <li>
              <Link >About</Link>
            </li>
            <li>
              <Link to='./contact'>Contact</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
            {/* <button>
                    <FaTimes/>
                </button> */}
          </span>
        </ul>
      </div>
    );
}

export default Navbar