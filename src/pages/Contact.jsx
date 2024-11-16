import React from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { MdWifiCalling } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[40vh]">
        <img
          src="/assets/contact/contact.jpg"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4">CONTACT US</h1>
        </div>
      </div>

      {/* Header Section with Contact Info */}
      <div className="bg-zinc-800 mt-8 text-white py-4 px-8 flex flex-col items-center space-y-4">
        <div className="flex justify-center items-center space-x-2">
          <span className="flex items-center font-bold space-x-1">
            <MdWifiCalling className="text-3xl text-pink-500" />
            <span>Phone:</span>
          </span>
          <span>+91 7991231430,</span>
          <span>+91 7860782769</span>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <span className="flex items-center font-bold space-x-1">
            <MdMarkEmailRead className="text-3xl text-pink-500" />
            <span>Email:</span>
          </span>
          <span>kkhomepaintingservice@gmail.com</span>
        </div>
        <div className="flex justify-center items-center space-x-2 text-center">
          <span className="flex items-center font-bold space-x-1">
            <FaMapLocationDot className="text-3xl text-pink-500" />
            <span>Address:</span>
          </span>
          <span>
            11th cross road, Munnekollal mein Rd, thubarahalli, munnekollal,
            Bengaluru, Karnataka 560037
          </span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-4 bg-gray-100 my-12">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/assets/contact/contact1.jpg" alt="Contact Visual" />
          </div>
          {/* Contact Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Mobile Number
                </label>
                <input
                  type="number"
                  placeholder="Your Number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-pink-500 hover:to-teal-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
        <div className="relative w-full">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194671844434!2d-122.4064171846818!3d37.78586647975748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c13a19a11%3A0xbfe5b8f1a0e75948!2sGitHub!5e0!3m2!1sen!2sus!4v1615458234278!5m2!1sen!2sus"
            width="100%"
            height="300"
            loading="lazy"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
