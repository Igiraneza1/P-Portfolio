import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black text-gray-200 p-5 fixed top-0 w-full z-10">
      <a href="/" className='text-sm'>Adeline<br/>IGIRANEZA</a>
      <div className="flex gap-10">
        <a href="#home" className="hover:text-white">HOME</a>
        <a href="#about" className="hover:text-white">ABOUT</a>
        <a href="#skills" className="hover:text-white">SKILLS</a>
        <a href="#experience" className="hover:text-white">EXPERIENCE</a>
        <a href="#contact" className="hover:text-white">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
