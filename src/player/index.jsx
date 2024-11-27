import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiVolume2, FiVolumeX } from 'react-icons/fi';

const MusicPlayerPage = () => {
  // Sample songs data
  const songs = [
    { title: 'Song 1', artist: 'Artist 1', albumCover: 'https://via.placeholder.com/100', audioSrc: '/path/to/song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', albumCover: 'https://via.placeholder.com/100', audioSrc: '/path/to/song2.mp3' },
  ];

  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track current song
  const [progress, setProgress] = useState(0); // Track song progress
  const [volume, setVolume] = useState(0.5); // Track volume (0 to 1)
  const [isMute, setisMute] = useState(true);
  const audioRef = useRef(null); // Reference to the audio element

  // Handle play/pause button
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle next song
  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // Automatically play the next song
  };

  // Handle previous song
  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true); // Automatically play the previous song
  };

  // Handle progress bar update
  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    if (isMute && newVolume > 0) {
      setisMute(false); // Unmute if volume is increased from 0
    } else{
      setisMute(true)
    }
    if( newVolume == 0){
      setisMute(true)
    }else{
      setisMute(false)
    }
    setVolume(newVolume);
  };

  // Handle mute/unmute toggle
  const handleMute = () => {
    if (isMute) {
      setisMute(false); // Unmute and restore the volume
      setVolume(0.5)
    } else {
      setisMute(true); // Mute and set volume to 0
      setVolume(0);
    }
  };


  // Update progress bar based on audio currentTime
  useEffect(() => {
    if (audioRef.current) {
      const interval = setInterval(() => {
        if (audioRef.current) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSongIndex]);

  return (
    <div className="flex justify-center w-auto m-auto items-center bg-neutral-800 shadow-2xl text-white font-vazirmatn min-h-screen">
      <div className="flex flex-col justify-center items-center bg-neutral-800 rounded-lg p-6 w-full max-w-3xl shadow-lg">
        {/* Header */}
        <header className="w-full m-auto mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Music Player</h1>
        </header>

        {/* Now Playing Section */}
        <div className="bg-neutral-900 rounded-lg p-6 mb-6 w-full flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src={songs[currentSongIndex].albumCover}
              alt="Album Cover"
              className="w-24 h-24 rounded-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{songs[currentSongIndex].title}</h2>
            <p className="text-gray-400">{songs[currentSongIndex].artist}</p>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <button
              className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-500"
              
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button className="border border-pink-700 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
              Add to Playlist
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-6">
          <input
            type="range"
            className="w-full accent-pink-700"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
          />
          <div className="flex justify-between text-gray-400 text-sm mt-2">
            <span>00:10</span>
            <span>3:45</span>
          </div>
        </div>

        {/* Footer Player */}
        <footer className="w-full bg-neutral-900 p-6 flex justify-between items-center rounded-lg shadow-inner">
          <div className="flex items-center space-x-4">
           
            <div>
              <h4 className="font-bold pr-7">Faded</h4>
              <p className="text-gray-400 text-sm pr-7">Alan Walker</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={prevSong}>
              <FiSkipBack className="w-6 h-6 text-pink-500" />
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <FiPause className="w-6 h-6 text-pink-500" />
              ) : (
                <FiPlay className="w-6 h-6 text-pink-500" />
              )}
            </button>
            <button onClick={nextSong}>
              <FiSkipForward className="w-6 h-6 text-pink-500" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              className="w-24 accent-pink-700"
              min="0"
              max="100"
              value={volume * 100}
              onChange={handleVolumeChange}
            />
            <button onClick={handleMute}>
              { isMute ? (
                <FiVolumeX className="w-6 h-6 text-pink-500"/>
              ) : (
                <FiVolume2 className="w-6 h-6 text-pink-500"/>
                )}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MusicPlayerPage;
