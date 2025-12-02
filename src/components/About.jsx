import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center px-6 py-16 md:px-12">
      <div className="max-w-5xl w-full space-y-8">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-green-400 to-gray-400 bg-clip-text text-transparent text-center md:text-left leading-tight">
          Who I am
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed font-light text-center md:text-left">
          I am <span className="text-white font-semibold">Kunal Patel</span>, a
          Bachelor of Computer Applications (BCA) student currently in my 3rd
          semester. Alongside my academic journey, I have developed strong
          skills as a{" "}
          <span className="text-green-400 font-semibold">
            Full Stack Developer
          </span>
          , with hands-on experience in both frontend and backend technologies.
          I thrive in{" "}
          <span className="text-gray-400 font-semibold">
            teamwork environments
          </span>
          , contributing effectively to collaborative projects and
          problem-solving initiatives.
        </p>
      </div>
    </div>
  );
};

export default About;
