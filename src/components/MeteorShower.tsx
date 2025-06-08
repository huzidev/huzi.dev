'use client';

import React from 'react';

const MeteorShower: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Slow moving stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Meteors with different speeds */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`meteor-${i}`}
          className="absolute w-1 h-20 meteor"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${1 + Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shooting-star-${i}`}
          className="absolute w-2 h-32 shooting-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-15%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${0.5 + Math.random() * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;
