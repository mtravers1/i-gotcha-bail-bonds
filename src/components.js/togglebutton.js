import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Togglebutton = () => {
  const [togglenav, setTogglenav] = useState(false);

  const toggle = () => {
    setTogglenav(!togglenav);
  };

  return (
    <div id="tnavbar">
      <span id="ttitle">
        <span id="pink"> I Gotcha</span>
         Bail Bond
      </span>
      <button onClick={toggle} class="togglebutton">
        <FaBars />
      </button>
      <ul>
        <div id="tog">
          {togglenav && (
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
          )}
        </div>
      </ul>
    </div>
  );
};

export default Togglebutton;
