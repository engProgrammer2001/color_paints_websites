import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/contactForm/ContactForm";

const Project = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[40vh]">
        <img
          src="/assets/projects/projects.jpg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4">OUR PROJECTS</h1>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section (Text) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Interior, Exterior and Commercial Painting Service
            </h2>
            <p className="text-lg">
              I am pleased to announce the successful completion of my Interior
              Painting Service project. This project involved transforming the
              interiors of a residential space, where I applied professional
              painting techniques to enhance the overall aesthetic appeal. From
              selecting the perfect color palette to ensuring a flawless finish,
              I meticulously worked on every detail to create a vibrant and
              welcoming environment. The project included surface preparation,
              patching holes, sanding, and applying high-quality paint that not
              only beautifies the space but also ensures long-lasting
              durability.
            </p>
            <img
              src="assets/projects/Interior Painting Service.jpg"
              alt="A visual representation of our projects"
              className="mt-6 rounded-lg"
            />
          </div>
          {/* Right Section (Project Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="assets/projects/Exterior Painting Service.webp"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Exterior Painting Service
              </h3>
              <p className="text-gray-600 mb-4">
                I am pleased to announce the successful completion of my
                Exterior Painting Service project. This project involved
                revitalizing the exterior of a home with a durable and
                weather-resistant paint finish that enhances both its curb
                appeal and protection. I carefully selected high-quality paints
                designed to withstand the elements, ensuring the home’s exterior
                looks beautiful while being shielded from harsh weather
                conditions. From surface preparation to the final coat, every
                detail was handled with precision and care.
              </p>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="assets/projects/Commercial Painting Service .jpeg"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Commercial Painting Service
              </h3>
              <p className="text-gray-600 mb-4">
                I am excited to announce the successful completion of my
                Commercial Painting Service project. This project involved
                transforming the exterior and interior spaces of a commercial
                property with a high-quality paint finish that enhances the
                building’s appearance and ensures long-lasting durability. I
                worked closely with the client to choose colors and finishes
                that align with their brand identity and business environment.
                From prepping the walls to applying protective coatings, every
                step was executed with precision to ensure a smooth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Projects Card */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="assets/projects/Residential Painting Service.avif"
              alt="Card 1"
              className="w-full h-64 object-cover" // Set fixed height here
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Residential Painting Service
              </h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="assets/projects/Villa Painting Service.jpg"
              alt="Card 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Villa Painting Service
              </h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="assets/projects/Interior Wall Painting Service.jpg"
              alt="Card 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Interior Wall Painting Service
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* second row of cards */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="assets/projects/Enamal Painting Service.jpg"
              alt="Card 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Enamal Painting Service
              </h3>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="assets/projects/Asian Paints Painting Service.jpg"
              alt="Card 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Asian Paints Painting Service
              </h3>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="assets/projects/Rental Home Flats Painting Service.jpg"
              alt="Card 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Rental Home Flats Painting Service
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* contact us  */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Project;
