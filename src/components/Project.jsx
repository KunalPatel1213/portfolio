import React from "react";

const Resume = () => {
  return (
    <div className="transform translate-y[100vh] min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-6xl md:text-7xl font-bold text-white mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span
              className="text-blue-400"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Some Work
            </span>
          </h1>
        </div>

        {/* Video Container 1 */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-500 transition duration-300 mb-8 transform translate-x-0 md:translate-x-20">
          <video
            width="480"
            height="270"
            controls
            autoPlay
            muted
            className="w-full h-auto bg-black"
          >
            <source src="/pd1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Video Container 2 */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-500 transition duration-300 mb-12 transform translate-x-0 md:-translate-x-20">
          <video
            width="600"
            height="270"
            controls
            autoPlay
            muted
            className="w-full h-auto bg-black"
          >
            <source src="/pd2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* LinkedIn Links */}
        <div className="text-center">
          <h2
            style={{ fontFamily: "Georgia, serif" }}
            className="text-2xl md:text-3xl font-bold mb-4 transform translate-x-0 md:translate-x-40"
          >
            <a
              href="https://linkedin.com/in/kunal-patel-b1bb0431a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition inline-block"
            >
              More work on LinkedIn
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="https://linkedin.com/in/kunal-patel-b1bb0431a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition inline-block font-bold"
            >
              Click Here
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Resume;