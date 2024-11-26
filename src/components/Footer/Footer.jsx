import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center p-0">
        <img src="/assets/about/about2.png" alt="Footer Banner" />
      </div>
      <footer className="bg-gradient-to-r from-teal-500 to-pink-500 p-4 text-white py-8 relative">
        <div className="container mx-auto px-4">
          {/* First Row with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <div>
                <img
                  src="/assets/logo/kkhomepaintinglogo.jpg"
                  alt=""
                  className="h-52 w-52 rounded-full"
                />
              </div>
              <p className="text-lg">
                We specialize in high-quality painting services, ensuring
                customer satisfaction with every project we undertake.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Services</h3>
              <ul className="text-lg space-y-4">
                <li>Interior Painting Service</li>
                <li>Exterior Painting Service</li>
                <li>Commercial Painting Service</li>
                <li>Residential Painting Service</li>
                <li>Rental Home Flats Painting Service</li>
                <li>Apartment Painting Service</li>
                <li>House Painting Service</li>
                <li>Interior Wall Painting Service</li>
                <li>Asian Paints Painting Service</li>
                <li>Enamel Painting Service</li>
                <li>Bungalow Painting Service</li>
                <li>Villa Painting Service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-lg space-y-4">
                <li>
                  <a href="/" className="hover:text-yellow-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-yellow-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-yellow-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-yellow-500">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/plan-with-project"
                    className="hover:text-yellow-500"
                  >
                    Plan with Project
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-lg">
                <span className="font-semibold text-yellow-500">Address :</span>
                11th cross road, munnekollal mein Rd, thubarahalli, munnekollal,
                Bengaluru, Karnataka 560037
              </p>
              <p className="text-lg">
                <span className="font-semibold text-yellow-500">Email :</span>
                info@paintingservice.com
              </p>
              <p className="text-lg">
                <span className="font-semibold text-yellow-500">Phone :</span>
                +91 7991231430
              </p>
              <p className="text-lg">
                <span className="font-semibold text-yellow-500">
                  Whatsapp :
                </span>
                +91 7860782769
              </p>
            </div>
          </div>
          {/* Second Row for Copyright */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Painting Service Company. All
              rights reserved.
            </p>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="absolute left-4 bottom-4">
          <a
            href="tel:7991231430"
            className="text-blue-700 p-3 rounded-full  transition"
            aria-label="Call Us"
          >
            <FaPhone size={50} />
          </a>
        </div>
        <div className="absolute right-8 bottom-4">
          <a
            href="https://wa.link/gs6gx7"
            className="text-green-400 p-3 rounded-full transition"
            aria-label="WhatsApp Us"
          >
            <FaWhatsapp size={54} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
