import React from 'react';
import Footer from '../../layout/footer';
import Header from '../../layout/header';
import Image from '../assets/image.png';

const Landing = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden mt-4 rounded-md">
        {/* Background Image */}
        <img
          src={Image}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <Header />
        {/* Content */}
        <div className="absolute z-10 top-2/3 transform -translate-y-1/2 left-7 text-white">
          <h2 className="text-4xl font-bold leading-normal">
            All the <span className="text-pink-700">Best Songs</span>
            <br /> in one place
          </h2>
          <p className="tracking-wide mt-12 mb-8">
            On our website, you can access an amazing collection of
            <br /> popular and new songs. Stream your favorite tracks in high
            <br /> quality and enjoy without interruptions. Whatever your taste
            <br /> in music, we have it all for you!
          </p>
          <div className="btns">
            <button
              type="button"
              className="text-blue-600 font-bold hover:text-white border border-blue-700 hover:bg-pink-700 rounded-md text-sm px-5 py-2.5 me-3 mb-2 transition-all"
            >
              Discover Now
            </button>
            <button
              type="button"
              className="text-blue-600 font-bold hover:text-white border border-blue-700 hover:bg-pink-700 rounded-md text-sm px-5 py-2.5 me-3 mb-2 transition-all"
            >
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
