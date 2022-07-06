import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { SignUp } from "../components/header/SignUp";

const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex font-mono p-2 text-2xl text-gray-400 pl-20 hover:text-gray-700">
            <li>
              <Link to="/">
                <h2>Sign Up</h2>
              </Link>
            </li>
          </ul>
        </nav>

        <Fragment>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
          </Routes>
        </Fragment>
      </div>
    </Router>
  );
};

export { Routing };
