"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-bold text-lightColor">HappyDuckCoder</h2>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-xl transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 text-xl transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-xl transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HappyDuckCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} HappyDuckCoder. Thanks for visiting!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
