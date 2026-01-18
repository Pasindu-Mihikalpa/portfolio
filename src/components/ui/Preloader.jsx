import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Start the counter
    const interval = setInterval(() => {
      setCount((prev) => {
        // 2. If we reach 100, stop and signal completion
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200); // Small delay before unmounting
          return 100;
        }
        return prev + 1; // Increment count
      });
    }, 20); // ⚡ ADJUST SPEED: Lower number = Faster loading

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050A15] text-white">
      
      {/* Percentage Text */}
      <div className="mb-2 font-mono text-6xl font-black md:text-8xl text-cyan-400 animate-pulse">
        {count}%
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-2 overflow-hidden bg-gray-900 border border-gray-800 rounded-full md:w-96">
        {/* Moving Bar */}
        <div 
          className="h-full transition-all duration-75 ease-out bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
          style={{ width: `${count}%` }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
        Loading Resources
      </p>
    </div>
  );
};

Preloader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Preloader;