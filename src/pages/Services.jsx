import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial/Tesimonial";

const Services = () => {
  // Sample data for services
  const services = [
    {
      id: 1,
      image: "/assets/service/Interior Painting Service.jpg",
      title: "Interior Painting Service",
      description:
        "We provide high-quality interior painting services to enhance the beauty and ambiance of your spaces. Perfect for homes, offices, and other interiors.",
      shortDescription: "Professional interior painting to refresh your space.",
    },
    {
      id: 2,
      image: "/assets/service/Exterior Painting Service.webp",
      title: "Exterior Painting Service",
      description:
        "Our exterior painting services offer durable, weather-resistant solutions to protect and beautify your property. Long-lasting protection guaranteed.",
      shortDescription: "Durable, weather-resistant exterior painting.",
    },
    {
      id: 3,
      image: "/assets/service/Commercial Painting Service.jpeg",
      title: "Commercial Painting Service",
      description:
        "Expert painting services for commercial spaces, ensuring a professional look that reflects your brand and business values.",
      shortDescription: "Enhance your commercial space professionally.",
    },
    {
      id: 4,
      image: "/assets/service/Residential Painting Service .jpg",
      title: "Residential Painting Service",
      description:
        "Top-notch residential painting services tailored to meet your style and preferences, making your home feel more vibrant and welcoming.",
      shortDescription: "Personalized residential painting solutions.",
    },
    {
      id: 5,
      image: "/assets/service/Rental Home Flats Painting Service.webp",
      title: "Rental Home Flats Painting Service",
      description:
        "Affordable painting solutions for rental properties to refresh and prepare your flats for new tenants or lease agreements.",
      shortDescription: "Affordable painting for rental properties.",
    },
    {
      id: 6,
      image: "/assets/service/Apartment Painting Service.jpeg",
      title: "Apartment Painting Service",
      description:
        "Specialized painting for apartments with a focus on aesthetics and durability, suitable for both landlords and homeowners.",
      shortDescription: "Tailored painting for apartments.",
    },
    {
      id: 7,
      image: "/assets/service/Villa Painting Service.jpeg",
      title: "Villa Painting Service",
      description:
        "Exclusive villa painting services to match your luxurious lifestyle. High-quality materials and professional finishes guaranteed.",
      shortDescription: "Luxurious villa painting services.",
    },
    {
      id: 8,
      image: "/assets/service/Bunglow Painting Service.webp",
      title: "Bunglow Painting Service",
      description:
        "Premium painting services for bungalows to enhance their grandeur. Ideal for large and unique properties.",
      shortDescription: "Grand painting for bungalows.",
    },
    {
      id: 9,
      image: "/assets/service/Enamal Painting Service.png",
      title: "Enamel Painting Service",
      description:
        "Expert enamel painting services for a smooth, glossy, and durable finish on metal and wood surfaces.",
      shortDescription: "Smooth and glossy enamel painting.",
    },
    {
      id: 10,
      image: "/assets/service/Asian Paints Painting Service.webp",
      title: "Asian Paints Painting Service",
      description:
        "Authorized Asian Paints service providers ensuring superior quality and vibrant color choices for your spaces.",
      shortDescription: "Official Asian Paints service.",
    },
    {
      id: 11,
      image: "/assets/service/Interior Wall Painting Service.jpg",
      title: "Interior Wall Painting Service",
      description:
        "Transform your walls with our premium interior wall painting service. Perfect shades and finishes for every room.",
      shortDescription: "Transform your walls with perfect finishes.",
    },
    {
      id: 12,
      image: "/assets/service/House Painting Service.jpg",
      title: "House Painting Service",
      description:
        "Comprehensive house painting solutions for interior and exterior surfaces, tailored to suit your preferences and budget.",
      shortDescription: "Complete house painting solutions.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[40vh]">
        <img
          src="/assets/service/service.png"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4">Our Services</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mt-4">Our Services</h1>
        <p className="mt-4 px-4 sm:px-24">
          Our services are professional, reliable, and tailored to meet the
          unique needs of each client. We offer innovative and creative
          solutions that are both efficient and affordable. With a team of
          skilled experts, we provide high-quality and comprehensive support to
          ensure timely and effective results.
        </p>
      </div>

      {/* Our Services Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/servicedetails/${service.id}`} // Link to the details page
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.shortDescription}</p>
              <button>
                <Link
                  to={`/servicedetails/${service.id}`} // Link to the details page
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                >
                  View Details
                </Link>
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* testimonial section  */}
      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Services;
