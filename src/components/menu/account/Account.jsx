import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { CreateUserImg } from "../CreateUserImg";

const Account = () => {
  const { user, logout } = UserAuth();
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
    <div>
      <div>
        <p className="text-2xl font-mono font-bold text-gray-500">
          {user && user.displayName}
        </p>
        <CreateUserImg />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export { Account };
