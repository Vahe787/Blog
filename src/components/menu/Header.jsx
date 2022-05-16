import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Header = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex font-mono p-5 text-3xl text-gray-500 ml-20">
            <li>
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </li>
            <li className="ml-10">
              <Link to="/about">
                <h2>About</h2>
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Fragment>
      </div>
    </Router>
  );
};

export default Header;
