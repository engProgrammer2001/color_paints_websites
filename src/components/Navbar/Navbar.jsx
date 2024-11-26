import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "bg-white text-teal-500 font-bold px-3 py-2 rounded-md";

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-pink-500 p-2 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src="assets/logo/kkhomepaintinglogo.jpg"
              alt="KK Home Painting"
              className="h-20 rounded-full cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/plan-with-project"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Plan with Project
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Contact Us
          </NavLink>
        </div>
        {/* Social Media Links */}
        <div className="hidden md:flex space-x-6 justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61568687594067"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl text-white hover:text-gray-300 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/kk_home_painting_service/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl text-white hover:text-gray-300 cursor-pointer" />
          </a>
          <FaYoutube className="text-3xl text-white hover:text-gray-300 cursor-pointer" />
          <NavLink
            to="tel:7991231430"
            className="bg-gray-400 px-5 py-3 rounded-lg text-white hover:text-gray-300"
          >
            Get Quote
          </NavLink>
        </div>
      </div>
      {/* Toggle Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/plan-with-project"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
            }
          >
            Plans with Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="tel:7991231430"
            onClick={handleLinkClick}
            className="bg-gray-700 px-5 py-3 rounded-lg text-white hover:text-gray-300 w-full block text-center"
          >
            Get Quote
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
