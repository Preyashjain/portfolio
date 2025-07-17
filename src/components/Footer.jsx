import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/preyashmogs?igsh=ZXdsc25zb3p2cHA2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://x.com/PreyashJain?t=AAc0iIKihGQeyekqeFrAUA&s=09" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/preyash-jain-91baa8230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;