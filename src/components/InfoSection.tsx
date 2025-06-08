'use client';

import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Your Name
          </h1>
          <h2 className="text-2xl md:text-4xl text-blue-300 mb-6 font-light">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies. 
            Transforming ideas into elegant, scalable solutions that make a difference.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
