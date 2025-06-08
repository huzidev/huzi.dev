'use client';

import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('info');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'info', label: 'Info', icon: '👋' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'expertise', label: 'Skills', icon: '🚀' },
    { id: 'connect', label: 'Connect', icon: '📫' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Show/hide navigation based on scroll
      setIsVisible(window.scrollY > 100);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-1/2 right-8 transform -translate-y-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/20 p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group flex items-center w-full p-3 mb-2 last:mb-0 rounded-xl transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/30'
                : 'hover:bg-white/10'
            }`}
            title={item.label}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <span 
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
