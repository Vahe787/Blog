import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FacebookAuthProvider } from "firebase/auth";
import { UserAuth } from "../../../context/AuthContext";
import logo from "./fblogo.png";

const SignInWithFacebook = () => {
  const [error, setError] = useState("");
  const { signInWithWeb } = UserAuth();
  const navigate = useNavigate();
  const provider = new FacebookAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithWeb(provider);
      navigate("/account");
      console.log("You are siggned in!");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="font-bold p-2 shadow-xl rounded-xl transition hover:bg-blue-200 ml-3"
    >
      <img src={logo} className="w-10" />
    </button>
  );
};

export { SignInWithFacebook };
