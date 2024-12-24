import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch, FiMusic, FiUsers, FiClock, FiStar, FiSettings, FiLogOut, FiPlus } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar pt-10 bg-neutral-800 w-64 h-full font-vazirmatn border-r-2 border-pink-700">
      <div className="mx-12">
        {/* Brand Logo */}
        <div>
          <Link to="/">
            <h2 className="bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-200% to-sky-500 bg-clip-text text-transparent font-bold text-4xl">
              Melodies
            </h2>
          </Link>
        </div>

        {/* Menu */}
        <div className="menu mt-8">
          <p className="text-pink-700 pb-4 text-lg">Menu</p>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiHome className="mr-3 text-xl" /> Home
              </Link>
            </li>
            <li>
              <Link to="/discover" className="flex items-center text-white hover:text-pink-500">
                <FiSearch className="mr-3 text-xl" /> Discover
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiMusic className="mr-3 text-xl" /> Albums
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiUsers className="mr-3 text-xl" /> Artists
              </Link>
            </li>
          </ul>
        </div>

        {/* Library */}
        <div className="library mt-8">
          <p className="text-pink-700 pb-4 text-lg">Library</p>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiClock className="mr-3 text-xl" /> Recently Added
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiStar className="mr-3 text-xl" /> Most Played
              </Link>
            </li>
          </ul>
        </div>

        {/* Playlist and Favorites */}
        <div className="playlist mt-8">
          <p className="text-pink-700 pb-4 text-lg">Playlist</p>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiStar className="mr-3 text-xl" /> Your Favorites
              </Link>
            </li>
            <li>
              <Link to="/play" className="flex items-center text-white hover:text-pink-500">
                <FiMusic className="mr-3 text-xl" /> Your Playlist
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center text-sky-600 hover:text-sky-400">
                <FiPlus className="mr-3 text-xl" /> Add Playlist
              </Link>
            </li>
          </ul>
        </div>

        {/* General */}
        <div className="general mt-8">
          <p className="text-pink-700 pb-4 text-lg">General</p>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-white hover:text-pink-500">
                <FiSettings className="mr-3 text-xl" /> Settings
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center text-pink-500 hover:text-pink-300">
                <FiLogOut className="mr-3 text-xl" /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
