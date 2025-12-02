import React from 'react';
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // PDF download karega
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = '/resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/resume.pdf');
  };

  return (
    <div className="min-h-[80px] bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 flex items-center sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          {/* Name Section - Left */}
          <div className="text-center sm:text-left py-2">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Kunal<span className="text-cyan-400 ml-2">Patel</span>
            </h1>
          </div>

          {/* Buttons - Right */}
          <div className="flex items-center gap-2 sm:gap-3 pb-2">
            {/* View Button */}
            <button
              onClick={handleView}
              className="group relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 active:scale-95 border border-gray-600"
            >
              <FaExternalLinkAlt className="text-xs sm:text-sm" />
              <span>View Resume</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="group relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95"
            >
              <FaFilePdf className="text-xs sm:text-sm" />
              <span>Download</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;