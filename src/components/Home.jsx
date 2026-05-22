import React from 'react';
import profile from '../image/profile.png';

function Home() {
  return (
    <div className="home flex flex-col md:flex-row items-center justify-center pt-20 w-full bg-gradient-to-r from-cyan-800 to-blue-950 px-6 md:px-16 gap-10">
      
      <div className="flex flex-col justify-center items-start max-w-xl text-white">
        <p
          className="pt-20 text-base sm:text-lg md:text-xl font-semibold font-mono animate-pulse"
          style={{ animationIterationCount: 2 }}
        >
          <strong className="text-3xl sm:text-4xl md:text-5xl block mb-4">Hi,</strong>
          I’m Adeline Igiraneza, an IT Specialist with strong Web Development skills and a passion for creating clean, user friendly web applications. 
          With my background in IT systems and infrastructure, I build solutions that are not only functional but also secure, reliable, and practical for real world use. 
          I enjoy working with modern technologies to develop scalable applications and continuously improving my skills through learning and collaboration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
         
          <a
            href="https://drive.google.com/file/d/1jIigRI4LKQ6UhuIddY9_EzqMu8BoOjND/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center font-serif bg-slate-700 hover:bg-slate-800 transition-colors duration-300 text-white w-40 sm:w-48 md:w-56 py-3 rounded-full animate-bounce shadow-lg"
          >
            Resume
          </a>

          
          <a
            href="https://youtu.be/7zYOkFx_iaY?si=LyKPRIB9lwcR1jCs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center font-serif bg-red-800 hover:bg-red-700 transition-colors duration-300 text-white w-40 sm:w-48 md:w-56 py-3 rounded-full animate-bounce shadow-lg"
          >
            Intro Video
          </a>
        </div>
      </div>

      <div className="max-w-sm">
        <img
          src={profile}
          alt="Profile"
          className="w-full object-cover"
        />
      </div>

    </div>
  );
}

export default Home;
