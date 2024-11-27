import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="absolute w-full">
      <nav className="bg-transparent w-full">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-neutral-800 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a7 7 0 110 14 7 7 0 010-14zm10 10-4.35-4.35"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <ul className="flex-grow flex justify-center space-x-8 text-white font-medium">
            <li>
              <Link
                to="#"
                className="hover:text-pink-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-pink-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-pink-500 transition-colors"
              >
                Premium
              </Link>
            </li>
          </ul>

          {/* Login and Signup */ }
          <div className="flex space-x-4">
            <button
              className="text-pink-500 hover:bg-pink-700 border border-pink-500 hover:text-white px-12 py-2 rounded-md transition-all"
            >
              Login
            </button>
            <button
className="text-pink-500 hover:bg-pink-700 border border-pink-500 hover:text-white px-12 py-2 rounded-md transition-all"            >
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
