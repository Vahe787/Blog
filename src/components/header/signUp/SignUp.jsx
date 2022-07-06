import { Input } from "./Input";
import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl mt-10 mb-10">
        <div className="flex flex-col md:flex-row font-mono ">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-2xl font-mono text-center text-gray-400">
                Sign up
              </h1>
              <Input
                handleValue={(e) => setName(e.target.value)}
                text="Name"
                type="text"
                placeholder="Name"
                value={name}
              />
              <Input
                handleValue={(e) => setSurName(e.target.value)}
                text="Surname"
                type="text"
                placeholder="Surname"
                value={surName}
              />
              <Input
                handleValue={(e) => setEmail(e.target.value)}
                text="Email"
                type="email"
                placeholder="Email Address"
                value={email}
              />
              <Input
                handleValue={(e) => setPassword(e.target.value)}
                text="Password"
                type="password"
                placeholder="Password"
                value={password}
              />

              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-bold leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#"
              >
                Sign up
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm font-bold">
                  Don't have an account yet?
                  <a href="#" className="text-blue-600 hover:underline">
                    Sign up.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
