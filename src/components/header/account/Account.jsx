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
    <div className="font-mono font-bold text-gray-500">
      <div>
        <p className="text-2xl">{user && user.displayName}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export { Account };
