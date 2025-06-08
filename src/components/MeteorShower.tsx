'use client';

import React from 'react';

const MeteorShower: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Intense Pulsating Stars */}
      {[...Array(60)].map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 4 + 1;
        const animationDelay = Math.random() * 5;
        const animationDuration = 1.5 + Math.random() * 2;
        
        return (
          <div
            key={`intense-star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `intensePulse ${animationDuration}s ease-in-out infinite`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}

      {/* Super Twinkling Stars */}
      {[...Array(40)].map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const animationDelay = Math.random() * 6;
        const animationDuration = 2 + Math.random() * 3;
        
        return (
          <div
            key={`super-twinkle-${i}`}
            className="absolute rounded-full bg-blue-200"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `superTwinkle ${animationDuration}s ease-in-out infinite, gentleFloat ${animationDuration * 2}s ease-in-out infinite`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}

      {/* Floating Larger Pulsating Stars */}
      {[...Array(25)].map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 5 + 2;
        const animationDelay = Math.random() * 7;
        const animationDuration = 2.5 + Math.random() * 3;
        
        return (
          <div
            key={`floating-pulse-star-${i}`}
            className="absolute rounded-full bg-purple-200"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `intensePulse ${animationDuration}s ease-in-out infinite, gentleFloat ${animationDuration * 1.8}s ease-in-out infinite`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}
      
      {/* Meteors from different directions with tails */}
      {[...Array(8)].map((_, i) => {
        const meteorTypes = ['meteor-diagonal', 'meteor-vertical', 'meteor-horizontal', 'meteor-reverse'];
        const meteorType = meteorTypes[Math.floor(Math.random() * meteorTypes.length)];
        const width = Math.random() * 3 + 2;
        const height = Math.random() * 60 + 40;
        
        return (
          <div
            key={`meteor-${i}`}
            className={`absolute meteor ${meteorType}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${width}px`,
              height: `${height}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        );
      })}
      
      {/* Slow moving shooting stars in background */}
      {[...Array(15)].map((_, i) => {
        const width = Math.random() * 30 + 20;
        const height = Math.random() * 2 + 1;
        
        return (
          <div
            key={`shooting-star-slow-${i}`}
            className="absolute shooting-star-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${width}px`,
              height: `${height}px`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default MeteorShower;
