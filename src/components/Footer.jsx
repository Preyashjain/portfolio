import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/preyashmogs"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram size={24} className="hover:text-pink-500 transition" />
      </a>
      <a 
        href="https://twitter.com/PreyashJain" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Twitter"
      >
        <FaXTwitter size={24} className="hover:text-blue-400 transition" />
      </a>
      <a
        href="https://www.linkedin.com/in/preyash-jain-91baa8230"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin size={24} className="hover:text-blue-600 transition" />
      </a>
    </footer>
  );
};

export default Footer;