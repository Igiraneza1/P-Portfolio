import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-black text-gray-200 p-5 fixed top-0 w-full z-10">
      <a href="/" className="text-md lg:text-xl font-bold">
        Adeline IGIRANEZA
      </a>

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="text-gray-200 w-6 h-6" />
          ) : (
            <Menu className="text-gray-200 w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`lg:flex gap-10 ${
          isMenuOpen ? "block" : "hidden"
        } absolute lg:static top-16 left-0 w-full bg-black lg:bg-transparent lg:top-auto lg:left-auto lg:w-auto lg:p-0 p-5`}
      >
        <a href="#home" className="block lg:inline hover:underline">
          HOME
        </a>
        <a href="#about" className="block lg:inline hover:underline">
          ABOUT
        </a>
        <a href="#skills" className="block lg:inline hover:underline">
          SKILLS
        </a>
        <a href="#projects" className="block lg:inline hover:underline">
          PROJECTS
        </a>
        <a href="#experience" className="block lg:inline hover:underline">
          EXPERIENCE
        </a>
        <a href="#contact" className="block lg:inline hover:underline">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Navbar;
