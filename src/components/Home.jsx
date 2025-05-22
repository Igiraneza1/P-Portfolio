import React from 'react';
import profile from '../../src/images/profile.png';

function Home() {
  return (
    <div className="home flex flex-col md:flex-row items-center justify-center h-screen w-full bg-gradient-to-r from-cyan-800 to-blue-950 px-6 md:px-16 gap-10">
      
      <div className="flex flex-col justify-center items-start max-w-xl text-white">
        <p
          className="text-base sm:text-lg md:text-xl font-semibold font-mono animate-pulse"
          style={{ animationIterationCount: 2 }}
        >
          <strong className="text-3xl sm:text-4xl md:text-5xl block mb-4">Hi,</strong>
          I'm a Front-End developer who enjoys creating beautiful and functional user interfaces.
          I work hard and like working with others to build great projects.
          I'm always open to learning new tools and improving my skills to become better.
        </p>

        <a
        href="https://drive.google.com/file/d/1Iwcq3oZFEvegtvuHzy-is-RUOu3y3tdN/view?usp=drive_link"
        target="_blank"
        rel='noopener noreferrer'
        className="  text-center font-serif bg-slate-700 hover:bg-slate-800 transition-colors duration-300 text-white w-40 sm:w-48 md:w-56 py-3 rounded-full animate-bounce mt-8 shadow-lg"
        >
          CV
        </a>
      </div>

      
      <div className="max-w-sm">
        <img
          src={profile}
          alt="Profile"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

    </div>
  );
}

export default Home;
