import React from "react";
import { useParams } from "react-router-dom";
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
        <div className=" mx-auto overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-84 object-cover lg:h-[600px]"
            />
          </div>
          {/* Text Content */}
          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600">{service.shortDescription}</p>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
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
