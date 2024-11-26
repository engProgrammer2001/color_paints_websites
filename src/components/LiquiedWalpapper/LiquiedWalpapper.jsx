import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../contactForm/ContactForm";

const LiquidWallpaper = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/liquite_img/Liquid Wallpaper5.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Liquid Wallpaper
          </h1>
        </div>
      </div>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="space-y-4">
            <img
              src="assets/liquite_img/Liquid Wallpaper1.jpg"
              alt="Liquid Wallpaper"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="assets/liquite_img/Liquid Wallpaper2.jpg"
              alt="Wallpaper close-up"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          {/* Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Premium Liquid Wallpaper for Stylish Spaces
            </h2>
            <p className="text-gray-600 mb-6">
              Liquid wallpapers provide a modern, eco-friendly alternative to
              traditional wallpapers and paint. Perfect for adding texture and
              style to your walls, liquid wallpapers are versatile and unique.
            </p>
            <p className="text-gray-600 mb-6">
              With an elegant finish and numerous design options, our liquid
              wallpapers are ideal for both residential and commercial spaces.
              Experience beauty, functionality, and easy application with this
              innovative wall decor solution.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Material:</span>
                <span className="text-gray-600">Natural fibers and cellulose</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Durability:</span>
                <span className="text-gray-600">3+ Years</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">
                  Applications:
                </span>
                <span className="text-gray-600">Living rooms, offices</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">
                  Available Colors:
                </span>
                <span className="text-gray-600">Wide range of shades</span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-6 space-x-4">
              <button className="px-6 py-3 bg-blue-200 text-gray-700 font-semibold rounded-md shadow-md hover:bg-blue-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="max-w-6xl mx-auto p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Liquid Wallpaper?
        </h3>
        <p className="text-gray-600 mb-6">
          Liquid wallpaper combines the aesthetics of traditional wall decor
          with the ease of application and maintenance. It adds texture and
          personality to walls while being eco-friendly and long-lasting.
        </p>
        <p className="text-gray-600 mb-6">
          Choose from a variety of patterns and colors to match your unique
          style. Our liquid wallpapers are crafted to ensure a premium finish
          and unmatched quality.
        </p>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {[
              {
                image: "/assets/liquite_img/Liquid Wallpaper3.jpg",
                title: "Modern Liquid Finish",
                des: "Enhance your interiors with modern liquid wallpapers, designed for elegance.",
              },
              {
                image: "/assets/liquite_img/Liquid Wallpaper4.jpg",
                title: "Textured Wall Coating",
                des: "Discover our textured wall coatings that combine beauty with durability.",
              },
              {
                image: "/assets/liquite_img/Liquid Wallpaper5.avif",
                title: "Eco-Friendly Wallpapers",
                des: "Transform your walls with eco-friendly liquid wallpapers for a natural look.",
              },
              {
                image: "/assets/liquite_img/Liquid Wallpaper6.webp",
                title: "Artistic Wall Covering",
                des: "Add creativity to your space with our artistic wall covering solutions.",
              },
            ].map((wallpaper, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={wallpaper.image}
                  alt={wallpaper.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {wallpaper.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{wallpaper.des}</p>
                  <Link
                    to={"/contact"}
                    className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500"
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

export default LiquidWallpaper;
