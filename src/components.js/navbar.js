import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Bail Resources</a>
            </li>
            <li>
              <a href="#">Post Bail Option</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Reviews</a>
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