import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthenticationNavbar from './AuthenticatedNavbar';
import WebTab from './webtab';

function Authentication() {
  return (
    <div className="md:h-full xs:h-full lg:h-full">
      <div className="d-flex flex-column justify-content-center  align-items-center">
        <AuthenticationNavbar />
        <div className="w-full max-w-xs m-auto  pt-10 sm:pt-32 xs:pt-40 lg:pt-56 ">
          <div className="mb-4">
            <form
              required
              className="bg-white shadow-md pointer-events-auto  rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  placeholder="Jeremy"
                  type="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  placeholder="Jeremy"
                  type="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  placeholder="Ongko"
                  type="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
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
                  placeholder="jeremyongko123"
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
                  Create an Account.
                </button>
              </div>
            </form>
            <div className="">
              <NavLink to="/login">
                <p className="bg-gradient-to-r bg-clip-text text-center text-transparent from-indigo-500 to-purple-500">
                  Already Have an account? Login now.
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <p class="copyright">Cozzi's Handmade Treats © 2023</p>
    </div>
  );
}

export default Authentication;
