import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { user, logout } = UserAuth;
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      console.log(user);
      console.log("You are logged out!");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <button
      className="absolute top-0 right-0 font-mono p-2 text-2xl text-gray-400 pl-20 pr-20 "
      onClick={handleLogout}
    ></button>
  );
};

export { LogOut };
