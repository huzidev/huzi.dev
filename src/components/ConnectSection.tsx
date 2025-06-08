'use client';

import React from 'react';

const ConnectSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:from-gray-500 hover:to-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦',
      color: 'from-sky-500 to-sky-700',
      hoverColor: 'hover:from-sky-400 hover:to-sky-600'
    },
    {
      name: 'Portfolio',
      url: 'https://yourportfolio.com',
      icon: '🌐',
      color: 'from-purple-600 to-purple-800',
      hoverColor: 'hover:from-purple-500 hover:to-purple-700'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: '📸',
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'hover:from-pink-400 hover:to-rose-500'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@yourusername',
      icon: '📺',
      color: 'from-red-600 to-red-800',
      hoverColor: 'hover:from-red-500 hover:to-red-700'
    },
  ];

  return (
    <section id="connect" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let&apos;s create something amazing together. 
            I&apos;m always excited to discuss new opportunities and innovative ideas.
          </p>
          
          {/* Email Contact */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-2xl group-hover:animate-bounce">
                ✉️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email Me</h3>
                <a href="mailto:your.email@example.com" className="text-indigo-300 hover:text-indigo-200 transition-colors">
                  your.email@example.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 bg-gradient-to-br ${link.color} rounded-xl border border-white/10 ${link.hoverColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:animate-pulse">
                    {link.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{link.name}</h3>
                </div>
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Available for Freelance Projects
            </h3>
            <p className="text-gray-300 mb-6">
              Currently accepting new projects and collaborations
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available Now</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
