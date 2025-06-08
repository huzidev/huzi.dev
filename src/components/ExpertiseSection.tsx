'use client';

import React from 'react';

const ExpertiseSection: React.FC = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', level: 95, color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', category: 'Framework', level: 90, color: 'from-gray-300 to-gray-100' },
    { name: 'TypeScript', category: 'Language', level: 88, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js', category: 'Backend', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', category: 'Language', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'PostgreSQL', category: 'Database', level: 85, color: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', category: 'Database', level: 82, color: 'from-green-500 to-green-700' },
    { name: 'AWS', category: 'Cloud', level: 78, color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', category: 'DevOps', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'TailwindCSS', category: 'Styling', level: 92, color: 'from-teal-400 to-teal-600' },
  ];

  const frameworks = [
    'React', 'Next.js', 'Express.js', 'FastAPI', 'Django',
    'Tailwind CSS', 'Material-UI', 'Prisma', 'GraphQL', 'Redux'
  ];

  return (
    <section id="expertise" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills with progress bars */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                Core Technologies
              </h3>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-gray-400 text-sm">{tech.category}</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-gray-400 text-sm mt-1">{tech.level}%</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Frameworks and Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></span>
                Frameworks & Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.map((framework, index) => (
                  <div 
                    key={index}
                    className="group p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:animate-spin">
                        <span className="text-white font-bold text-lg">
                          {framework.charAt(0)}
                        </span>
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {framework}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-400/20">
                <h4 className="text-lg font-semibold text-indigo-300 mb-3">Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['Rust', 'Svelte', 'WebAssembly', 'Three.js'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
