'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over <span className="text-cyan-400 font-semibold">5+ years</span> of experience in software development, I specialize in creating robust, scalable applications that deliver exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey began with a curiosity for technology and has evolved into a passion for solving complex problems through elegant code. I believe in continuous learning and staying at the forefront of technological innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30">
                  <span className="text-blue-300 font-medium">Problem Solver</span>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30">
                  <span className="text-purple-300 font-medium">Team Player</span>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full border border-green-400/30">
                  <span className="text-green-300 font-medium">Innovation-Driven</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-xl border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
