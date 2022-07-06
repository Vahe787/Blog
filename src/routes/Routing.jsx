import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { SignUp } from "../components/header/signUp/SignUp";
import { SignIn } from "../components/header/signIn/SignIn";
import { AuthContextProvider } from "../context/AuthContext";
import { ProtectedRouteToAccount } from "../components/header/ProtectedRouteToAccount";
import { Account } from "../components/header/account/Account";

const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex font-mono p-2 text-2xl text-gray-400 pl-20 pr-20 ">
            <li>
              <Link to="/account">
                <h2 className="hover:text-gray-700">Home</h2>
              </Link>
            </li>
            <li className="ml-auto">
              <Link to="/signIn">
                <h2 className="hover:text-gray-700">SignIn</h2>
              </Link>
            </li>
            <li className="pl-4">
              <Link to="/">
                <h2 className="hover:text-gray-700">SignUp</h2>
              </Link>
            </li>
          </ul>
        </nav>
        <AuthContextProvider>
          <Fragment>
            <Routes>
              <Route path="/" element={<SignUp />}></Route>
              <Route path="/signIn" element={<SignIn />}></Route>
              <Route
                path="/account"
                element={
                  <ProtectedRouteToAccount>
                    <Account />
                  </ProtectedRouteToAccount>
                }
              ></Route>
            </Routes>
          </Fragment>
        </AuthContextProvider>
      </div>
    </Router>
  );
};

export { Routing };
