import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { UserAuth } from "../../../context/AuthContext";

const SignInWithGmail = () => {
  const [error, setError] = useState("");
  const { signInWithWeb } = UserAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

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
      className="w-12 font-bold p-2 shadow-xl rounded-xl transition hover:bg-blue-200"
    >
      <img src="https://freesvg.org/img/1534129544.png" className="w-8" />
    </button>
  );
};

export { SignInWithGmail };
