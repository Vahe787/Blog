import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ProtectedRouteToAccount, SignIn, SignUp } from "../components/header";
import { Account } from "../components/menu/account/Account";
import { AuthContextProvider } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Routing = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  });

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
            {isSignIn ? (
              <></>
            ) : (
              <div className="flex ml-auto">
                <li>
                  <Link to="/signIn">
                    <h2 className="hover:text-gray-700">SignIn</h2>
                  </Link>
                </li>
                <li className="pl-4">
                  <Link to="/">
                    <h2 className="hover:text-gray-700">SignUp</h2>
                  </Link>
                </li>
              </div>
            )}
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
