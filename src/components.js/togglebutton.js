import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import{  BrowserRouter as Switch,
  Link,
  Router,
  Route,
  Routes,
} from "react-router-dom";

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
                <Link to="./home">Home</Link>
              </li>
              <li>
                <Link to="./bailresources">Bail Resources</Link>
              </li>
              <li>
                <Link to="./postbail">Post Bail Option</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link to="./contact">Contact</Link>
              </li>
              <li>
                <Link>Reviews</Link>
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
