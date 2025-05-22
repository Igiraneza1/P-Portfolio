import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-black text-gray-400 fixed bottom-0 w-full text-base-content py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">Adeline IGIRANEZA</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

       
        <div className="flex space-x-5 text-lg pr-10">
          <a href="mailto:igiranezaadeline@gmail.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-transform hover:scale-110">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/250782766241" target="_blank" rel="noreferrer" className="hover:text-primary transition-transform hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/Igiraneza1" target="_blank" rel="noreferrer" className="hover:text-primary transition-transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/adeline-igiraneza/" target="_blank" rel="noreferrer" className="hover:text-primary transition-transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://x.com/AdlnIg?t=7qHlk6inqKvZ2PODVCHdiQ&s=09" target="_blank" rel="noreferrer" className="hover:text-primary transition-transform hover:scale-110">
            <FaTwitter />
          </a>
          

        </div>

      </div>
    </footer>
  );
}

export default Footer;
