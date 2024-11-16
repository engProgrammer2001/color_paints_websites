import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = "bg-white text-teal-500 font-bold px-3 py-2 rounded-md";

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-pink-500 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">KK Painting Company</h1>

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
              isActive ? activeStyle : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/plan-with-project"
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Plan with Project
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-6 justify-center items-center">
          <FaFacebook className="text-3xl text-white hover:text-gray-300 cursor-pointer" />
          <FaWhatsappSquare className="text-3xl text-white hover:text-gray-300 cursor-pointer" />
          <FaLinkedin className="text-3xl text-white hover:text-gray-300 cursor-pointer" />
          <NavLink
            to="#contact"
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
            className={({ isActive }) =>
              isActive ? activeStyle : "block text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : "block text-white hover:text-gray-300 px-3 py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeStyle : "block text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeStyle : "block text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/plan-with-project"
            className={({ isActive }) =>
              isActive ? activeStyle : "block text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Plans with Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyle : "block text-white hover:text-gray-300 px-3 py-2"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
