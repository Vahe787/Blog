import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl mt-10 mb-10">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign up
              </h1>
              <div>
                <label className="block text-sm">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Name"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="block mt-4 text-sm">Password</label>
                <input
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#"
              >
                Sign up
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm">
                  Don't have an account yet?{" "}
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
