import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiDjango, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500', bg: 'from-orange-900/30 to-orange-900/10', border: 'border-orange-700' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-400', bg: 'from-blue-900/30 to-blue-900/10', border: 'border-blue-600' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-300', bg: 'from-yellow-900/30 to-yellow-900/10', border: 'border-yellow-600' },
    { name: 'React.JS', icon: <FaReact />, color: 'text-cyan-300', bg: 'from-cyan-900/30 to-cyan-900/10', border: 'border-cyan-600' },
    { name: 'Python', icon: <FaPython />, color: 'text-green-400', bg: 'from-green-900/30 to-green-900/10', border: 'border-green-600' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-500', bg: 'from-green-900/30 to-green-900/10', border: 'border-green-700' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-300', bg: 'from-blue-900/30 to-blue-900/10', border: 'border-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12 mt-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Things I'm <span className="text-cyan-400">good at</span>
          </h1>
        </div>

        {/* Development Section */}
        <div className="mb-8 md:mb-12 flex flex-col items-center">
          <div className="relative inline-flex items-center mb-6 md:mb-8">
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <h2 className="mx-4 text-xl md:text-3xl font-semibold text-cyan-300 uppercase tracking-wider">
              development
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          {/* Skills Grid - Responsive */}
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`
                    relative group bg-gradient-to-br ${skill.bg} 
                    ${skill.border} border rounded-2xl p-4 md:p-6 
                    flex flex-col items-center justify-center 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-2xl 
                    hover:shadow-cyan-500/20
                    min-h-[140px] md:min-h-[160px]
                  `}
                >
                  {/* Icon */}
                  <div className={`${skill.color} text-4xl md:text-5xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <p className="text-lg md:text-xl font-bold text-white text-center">
                    {skill.name}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;