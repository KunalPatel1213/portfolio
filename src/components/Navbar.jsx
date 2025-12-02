import React from "react";
import portfolioPhoto from "./porfolio photo.jpg";

const Navbar = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br bg-black bg-black-900 to-slate-900 flex items-center justify-center p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 max-w-7xl w-full">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight">
            Kunal Patel
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-300 leading-relaxed font-light">
            Driven BCA student with a vision: empowering communities through 
            <span className="text-blue-400 font-semibold"> technology</span> and 
            <span className="text-purple-500 font-semibold"> collaboration</span>.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <img
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-8 border-gray-700 shadow-2xl hover:scale-105 hover:rotate-2 transition-all duration-500"
            src={portfolioPhoto}
            alt="Portfolio Photo"
          />
        </div>

      </div>
    </div>
  );
};

export default Navbar;