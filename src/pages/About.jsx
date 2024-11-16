import React from "react";
import { Link } from "react-router-dom";
import { IoMdCloudDone } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaHandHoldingHand } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[40vh]">
        <img
          src="/assets/about/about.jpg"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4">ABOUT US</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section (Text) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-700">
              At KK Home Painting Service, we are committed to providing the
              best painting solutions for both homes and businesses. Whether you
              need interior or exterior painting, our skilled team specializes
              in transforming your space with high-quality finishes. We use
              premium Asian Paints products to ensure a beautiful, durable
              result that lasts for years. Our expertise covers residential
              properties such as flats, apartments, and rental homes, as well as
              commercial spaces like offices, malls, and hotels. We offer
              affordable painting services without compromising on quality,
              tailoring each job to meet your specific needs.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              With over 15 years of experience in the painting industry, KK Home
              Painting Service has earned a reputation for excellent service and
              superior workmanship. As trusted manufacturers and suppliers of
              texture paints, metallic paints, and wall putty, we serve a wide
              range of clients, including construction companies, hotels, and
              institutes. Our texture paints add a unique and elegant look to
              any space, and we are proud to be among the leading applicators in
              the market. Whether it's for your home or business, we are
              dedicated to offering top-notch painting services at competitive
              prices. Let KK Home Painting Service bring your vision to life
              with our expert painting solutions and impeccable quality!
            </p>
          </div>

          {/* Right Section (Images) */}
          <div className="">
            <img
              src="/assets/about/about1.jpg"
              alt="Customer interaction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* card section  */}
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-56">
            <div class="flex items-center justify-center text-6xl mb-4">
              <FaUsers />
            </div>
            <h3 class="text-2xl font-semibold text-center">Happy Clients</h3>
            <h1 class="text-4xl font-bold text-center mt-4">150+</h1>
          </div>
          <div class="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-56">
            <div class="flex items-center justify-center text-6xl mb-4">
              <IoMdCloudDone />
            </div>
            <h3 class="text-2xl font-semibold text-center">Projects Done</h3>
            <h1 class="text-4xl font-bold text-center mt-4">230+</h1>
          </div>
          <div class="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-56">
            <div class="flex items-center justify-center text-6xl mb-4">
              <FaMedal />
            </div>
            <h3 class="text-2xl font-semibold text-center">Experience</h3>
            <h1 class="text-4xl font-bold text-center mt-4">8+ Years</h1>
          </div>
          <div class="bg-gradient-to-r from-teal-400 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-56">
            <div class="flex items-center justify-center text-6xl mb-4">
              <FaHandHoldingHand />
            </div>
            <h3 class="text-2xl font-semibold text-center">Partners</h3>
            <h1 class="text-4xl font-bold text-center mt-4">50+</h1>
          </div>
        </div>
      </div>

      {/* our mission and vision  */}
      <div className="my-12">
        <div class="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center my-14">
              OUR MISSION AND VISION
            </h2>
          </div>
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-1 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-600 transition-transform duration-300">
              <h2 class="text-2xl font-bold mb-4 text-center">Our Mission</h2>
              <p class="text-lg text-center">
                We aim to make life better for everyone by creating simple and
                useful solutions. We want to help people and make the world a
                better place. Our mission is to provide high-quality services
                that bring comfort, joy, and value to our customers' lives. We
                believe in delivering exceptional experiences by combining
                innovative solutions with a personal touch. Our goal is to
                ensure that every interaction with us leaves a positive and
                lasting impact. We are committed to fostering trust and building
                long-term relationships with our customers, employees, and
                partners. By staying focused on integrity, professionalism, and
                customer satisfaction, we strive to make every project a step
                toward a better tomorrow.
              </p>
            </div>

            <div class="flex-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 hover:from-purple-500 hover:to-pink-600 transition-transform duration-300">
              <h2 class="text-2xl font-bold mb-4 text-center">Our Vision</h2>
              <p class="text-lg text-center">
                Our vision is to build a future where everyone has equal
                opportunities. We dream of a world filled with hope, growth, and
                happiness for all. We dream of being a company that not only
                fulfills needs but also inspires people to dream bigger. By
                leveraging cutting-edge technology, skilled professionals, and a
                deep understanding of our customers, we aim to shape a brighter
                and more inclusive tomorrow. Our vision is to grow alongside our
                customers, partners, and employees, creating opportunities for
                all and leaving a positive mark on society. Together, we aspire
                to build a future where happiness, success, and progress are
                accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
