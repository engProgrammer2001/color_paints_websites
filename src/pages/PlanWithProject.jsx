import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import Testimonial from "../components/Testimonial/Tesimonial";
import { useNavigate } from "react-router-dom";

const PlanWithProject = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="relative text-black h-[40vh] flex items-center justify-center">
        <img
          src="/assets/plan/plan-image.jpg"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>
      {/* Pricing Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-2 text-gray-800">
            Our Service Packages
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Choose the package that best suits your needs. All packages include
            high-quality painting services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Basic Painting Package
              </h3>
              <p className="text-white/80 mb-4">
                Ideal for rental homes and apartments.
              </p>
              <p className="text-4xl font-bold mb-4">₹4,999</p>
              <ul className="space-y-2 mb-6">
                <li>✔ Rental Home Flats Painting Service</li>
                <li>✔ Apartment Painting Service</li>
                <li>✔ Basic Interior Wall Painting</li>
              </ul>
              <button
                onClick={handleClick}
                className="w-full py-2 px-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Choose Package
              </button>
            </div>
            {/* Standard Package */}
            <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Standard Painting Package
              </h3>
              <p className="text-white/80 mb-4">
                Perfect for residential properties and small businesses.
              </p>
              <p className="text-4xl font-bold mb-4">₹9,999</p>
              <ul className="space-y-2 mb-6">
                <li>✔ Residential Painting Service</li>
                <li>✔ Interior & Exterior Painting</li>
                <li>✔ Asian Paints Painting Service</li>
              </ul>
              <button
                onClick={handleClick}
                className="w-full py-2 px-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Choose Package
              </button>
            </div>
            {/* Premium Package */}
            <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Premium Painting Package
              </h3>
              <p className="text-white/80 mb-4">
                Ideal for large bungalows, villas, and commercial spaces.
              </p>
              <p className="text-4xl font-bold mb-4">₹19,999</p>
              <ul className="space-y-2 mb-6">
                <li>✔ Bunglow Painting Service</li>
                <li>✔ Villa Painting Service</li>
                <li>✔ Commercial Painting Service</li>
              </ul>
              <button
                onClick={handleClick}
                className="w-full py-2 px-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Choose Package
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-8">FAQs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">
                What is included in the Basic Plan?
              </h3>
              <p className="text-gray-700">
                The Basic Plan provides access to 10 projects, basic support,
                and access to the community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-700">
                Yes, you can upgrade your plan at any time from your account
                settings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-700">
                We offer a 7-day money-back guarantee for all our plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                What payment methods are accepted?
              </h3>
              <p className="text-gray-700">
                We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div>
        <Testimonial />
      </div>
      {/* contact us form  */}
      <div>
        <div>
          <h2 className="text-3xl font-semibold text-center my-8">
            Book Your Plane Today
          </h2>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default PlanWithProject;
