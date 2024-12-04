import { FaInstagram, FaDiscord } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container grid justify-items-center gap-5 border border-t-2 bg-gray-100 py-10 md:grid-cols-3 md:gap-0">
        <p>
          Developed by{" "}
          <span className="cursor-pointer text-purple-400 underline">
            Bhupendra Jogi
          </span>
        </p>
        <p>&copy; 2024 Hackmandufest</p>
        <div className="contact-section flex gap-5">
          <FaInstagram className="cursor-pointer text-2xl transition-transform hover:scale-125 hover:text-red-400" />
          <FaDiscord className="cursor-pointer text-2xl transition-transform hover:scale-125 hover:text-blue-800" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
