import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      console.log("You are logged out!");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <h3>User Email:{user && user.name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export { Account };
