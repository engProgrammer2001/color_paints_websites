import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../contactForm/ContactForm";

const ExteriorTexture = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/exterior_img/exterior.webp')`, // Updated image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Elegant Exterior Texture
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="space-y-4">
            <img
              src="assets/exterior_img/exterior.webp" // Updated image
              alt="Exterior Texture"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="assets/exterior_img/exterior6.webp" // Updated image
              alt="Texture close-up"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          {/* Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Premium Exterior Texture for Modern Spaces
            </h2>
            <p className="text-gray-600 mb-6">
              Our exterior textures are designed to provide an elegant yet
              durable finish to your exteriors. Whether you're renovating a home
              or designing a commercial space, these textures add a unique
              character to any outdoor environment.
            </p>
            <p className="text-gray-600 mb-6">
              With a focus on both aesthetics and functionality, our textures
              are made from the finest materials to ensure durability and
              easy maintenance. Say goodbye to ordinary exteriors and welcome
              the beauty of modern textures.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Material:</span>
                <span className="text-gray-600">High-quality plaster</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Durability:</span>
                <span className="text-gray-600">1+ Year</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Applications:</span>
                <span className="text-gray-600">Walls, facades</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Available Colors:</span>
                <span className="text-gray-600">Multiple shades</span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-6 space-x-4">
              <button className="px-6 py-3 bg-pink-200 text-gray-700 font-semibold rounded-md shadow-md hover:bg-pink-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="max-w-6xl mx-auto p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Our Textures?
        </h3>
        <p className="text-gray-600 mb-6">
          Our textures are crafted with precision to enhance the overall
          ambiance of your space. With an emphasis on both beauty and strength,
          we ensure that our textures not only look great but also stand the
          test of time.
        </p>
        <p className="text-gray-600 mb-6">
          From minimalist designs to intricate patterns, our range of textures
          caters to diverse preferences. Each product is tested for quality and
          durability, ensuring you receive the best.
        </p>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Related Textures
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {[
              {
                image: "/assets/exterior_img/exterior.webp", // Updated image
                title: "Elegant Exterior Finish",
                des: "Explore our exquisite collection of exterior textures, carefully designed to elevate your outdoor spaces.",
              },
              {
                image: "/assets/exterior_img/exterior6.webp", // Updated image
                title: "Modern Texture Design",
                des: "Discover the charm of modern texture design, crafted to add sophistication and style to your exterior.",
              },
              {
                image: "/assets/exterior_img/exterior4.jpg", // Updated image
                title: "Artistic Wall Texture",
                des: "Unleash creativity with our artistic wall textures, designed to transform your exteriors into captivating masterpieces.",
              },
              {
                image: "/assets/exterior_img/exterior5.jpg", // Updated image
                title: "Classic Exterior Style",
                des: "Embrace timeless elegance with our classic exterior style textures, crafted to bring a sense of sophistication and warmth to any building.",
              },
            ].map((texture, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={texture.image}
                  alt={texture.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {texture.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{texture.des}</p>
                  <Link
                    to={"/contact"}
                    className="mt-4 w-full px-4 py-2 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-500"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ExteriorTexture;
