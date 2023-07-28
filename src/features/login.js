import React from 'react';
import { NavLink } from 'react-router-dom';
import WebTab from './webtab';

function Login() {
  return (
    <div>
      <WebTab></WebTab>
      <div className="w-full h-screen max-w-xs m-auto py-10 sm:pt-32 xs:pt-40 lg:pt-56 ">
        <form
          required
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="on"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex-none items-center justify-between">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
          </div>
        </form>
        <NavLink to="/create-account">
          <span className=" bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-purple-500">
            Don't have an account? Create an account now.
          </span>
        </NavLink>

        <p class="copyright">Cozzi's Handmade Treats © 2023</p>
      </div>
    </div>
  );
}

export default Login;
