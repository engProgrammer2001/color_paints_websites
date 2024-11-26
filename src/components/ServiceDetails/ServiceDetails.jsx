import React from "react";
import { useParams, Link } from "react-router-dom";
import Testimonial from "../Testimonial/Tesimonial.jsx";
import ContactForm from "../contactForm/ContactForm";

const ServiceDetails = ({ services }) => {
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));

  // Early return in case service is not found
  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">
          Service not found!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 py-8 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
            {/* Left Section */}
            <div className="lg:col-span-7">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-84 object-cover lg:h-[600px] rounded-lg"
                />
              </div>
              {/* Text Content */}
              <div className="p-6 space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600">
                  {service.shortDescription}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:col-span-3 lg:block">
              <div className="px-6 space-y-4 lg:mt-0 mt-8">
                <h2 className="bg-pink-200 p-2 rounded-lg text-xl font-semibold text-gray-800">
                  Our Services
                </h2>
                <ul className="space-y-2 mt-8">
                  {services.map((service) => (
                    <li key={service.id} className="mt-4">
                      <Link
                        to={`/servicedetails/${service.id}`}
                        className="text-gray-700 hover:text-gray-800"
                      >
                        ✅ {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <ContactForm />
      </div>

      <div>
        <Testimonial />
      </div>
    </>
  );
};

export default ServiceDetails;
