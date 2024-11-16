import React from "react";

const Footer = () => {
  return (
    <>
      {/* Image Section */}
      <div className="w-full flex justify-center p-0">
        <img src="/assets/about/about2.png" alt="" />
      </div>
      <footer className="bg-gradient-to-r from-teal-500 to-pink-500 p-4 text-white py-8">
        <div className="container mx-auto px-4">
          {/* First Row with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-lg">
                Learn more about our company, our values, and our mission to
                deliver the best services to our clients.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Services</h3>
              <ul className="text-lg space-y-4">
                <li>Web Development</li>
                <li>Graphic Design</li>
                <li>Digital Marketing</li>
                <li>App Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-lg space-y-4">
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-lg">1234 Street Name, City, State, 12345</p>
              <p className="text-lg">Email: info@yourcompany.com</p>
              <p className="text-lg">Phone: +123 456 7890</p>
            </div>
          </div>

          {/* Second Row for Copyright */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
