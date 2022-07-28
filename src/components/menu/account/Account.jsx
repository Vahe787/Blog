import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { CreateUserImg } from "../CreateUserImg";

const Account = () => {
  const { user, logout } = UserAuth();
  const [editProfile, setEditProfile] = useState(false);

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

  const handleClick = () => {
    setEditProfile((prev) => !prev);
  };

  useEffect(() => {
    if (editProfile) {
      navigate("/editProfile");
    }
  }, [editProfile]);

  return (
    <div className="ml-10">
      <button
        className="absolute top-0 right-0 font-mono p-2 text-2xl text-gray-400 pl-20 pr-20 "
        onClick={handleLogout}
      >
        <h2 className="hover:text-gray-700">LogOut</h2>
      </button>
      <div className="w-60 pt-10">
        <CreateUserImg />

        <p className="flex justify-center text-2xl font-mono font-bold text-gray-500 mt-2">
          {user && user.displayName}
        </p>
        <div className="flex justify-center mt-2 border rounded-xl p-1 bg-gray-200 hover:bg-gray-100 ">
          <button onClick={handleClick} className="w-full font-medium">
            Edit profile
          </button>
        </div>
      </div>
    </div>
  );
};

export { Account };
