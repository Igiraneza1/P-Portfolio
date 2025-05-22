import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope,FaWhatsapp }from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Whether you have an idea, opportunity, or just want to say hello<br/> I’d love to hear from you.
          </p>

          <form 
            action="https://formspree.io/f/mpwdedov" 
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input input-bordered w-full border-b border-gray-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="input input-bordered w-full border-b border-gray-500 focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered w-full border-b border-gray-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="textarea textarea-bordered w-full focus:outline-none"
            ></textarea>
            <button type="submit" className="btn btn-primary pb-10 w-full">
              Send Message
            </button>
          </form>
        </div>

        
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold text-accent mb-6">Connect with Me</h3>
          <p className="text-gray-700 mb-8 max-w-md">
            You can also reach me through these platforms. Let’s build something meaningful together!
          </p>
          <div className="flex space-x-6 text-4xl text-primary">
            <a
              href="igiranezaadeline@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
            href="https://wa.me/250782766241"  
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
            ><FaWhatsapp />
            </a>
            <a
              href="https://github.com/Igiraneza1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/adeline-igiraneza/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/AdlnIg?t=7qHlk6inqKvZ2PODVCHdiQ&s=09"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
