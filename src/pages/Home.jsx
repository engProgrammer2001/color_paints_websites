import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import img1 from "../assets/room_wall_paint3.webp";
import img2 from "../assets/wall_paint1.jpg";
import img3 from "../assets/wall_paint2.jpg";
import {
  FaCheckCircle,
  FaHome,
  FaPaintBrush,
  FaTools,
  FaTruck,
  FaUserShield,
} from "react-icons/fa";
import Gallery from "../components/Gallery/Gallery";
import News from "../components/News/News";
import Testimonial from "../components/Testimonial/Tesimonial.jsx";
import ContactForm from "../components/contactForm/ContactForm.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <div className="flex flex-wrap justify-center gap-4 mt-32">
          {/* Interior Texture Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs rounded-lg overflow-hidden shadow-lg bg-card">
            <Link to="/paint-details?type=interior">
              <img
                src={img1}
                alt="Interior Texture"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-primary">
                  INTERIOR TEXTURE
                </h2>
              </div>
            </Link>
          </div>

          {/* Exterior Texture Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs rounded-lg overflow-hidden shadow-lg bg-card">
            <Link to="/paint-details?type=exterior">
              <img
                src={img2}
                alt="Exterior Texture"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-primary">
                  EXTERIOR TEXTURE
                </h2>
              </div>
            </Link>
          </div>

          {/* Liquid Wallpaper Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs rounded-lg overflow-hidden shadow-lg bg-card">
            <Link to="/paint-details?type=liquid">
              <img
                src={img3}
                alt="Liquid Wallpaper"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-primary">
                  LIQUID WALLPAPER
                </h2>
              </div>
            </Link>
          </div>
        </div>

        {/* request for quote section  */}
        <div className="w-full p-4 lg:px-32 lg:pt-24 items-center">
          <h1 className="text-3xl font-bold text-center mt-12">
            We offer Residential & Commercial Painting services
          </h1>
          <p className="text-lg text-center mt-8 ">
            Whether you need a fresh coat of paint for your home to enhance its
            curb appeal or a complete makeover for your commercial building to
            create a welcoming environment, we have the expertise to deliver
            exceptional results. Our use of high-quality materials and attention
            to detail guarantees a long-lasting and beautiful finish.
          </p>
          <div>
            <p className="text-2xl text-center mt-8">
              Quality Finish &nbsp; &nbsp; / &nbsp; &nbsp;Quality Materials
              &nbsp; &nbsp;/ &nbsp; &nbsp; Best Support &nbsp; &nbsp; / &nbsp;
              &nbsp; Better Price
            </p>
          </div>
          <div className="flex justify-center items-center mt-14">
            <Link
              to="/contact"
              className="p-6 bg-gradient-to-r from-teal-500 to-pink-500 text-white font-semibold text-2xl rounded-lg hover:from-pink-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 inline-flex items-center"
            >
              Request for a Quote
            </Link>
          </div>
        </div>
        {/* why choose us section  */}
        <div>
          <div className="w-full p-4 lg:p-28 items-center">
            <h3 className="text-6xl text-center lg:mt-14">
              ✨Why Choose Us?✨
            </h3>
            <p className="text-lg text-center mt-8">
              As a paint company, we do not outsource our work to third-party
              contractors. We have our own team of skilled professionals who
              provide painting services to our customers. We believe in
              connecting with our customers directly to ensure a better
              understanding of their requirements and provide personalized
              services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <FaPaintBrush className="text-8xl text-teal-500 mb-4" />
                <h4 className="text-xl text-white font-semibold">
                  Expert Painting
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  We provide expert painting services with precision and quality
                  finishes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <FaTools className="text-8xl text-teal-500 mb-4" />
                <h4 className="text-xl text-white font-semibold">
                  Skilled Professionals
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  Our team of skilled professionals ensures that your painting
                  needs are met with excellence.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <FaUserShield className="text-8xl text-teal-500 mb-4" />
                <h4 className="text-xl text-white font-semibold">
                  Trustworthy Service
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  We prioritize trust, providing reliable and honest services
                  every time.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <FaCheckCircle className="text-8xl text-teal-500 mb-4" />
                <h4 className="text-xl text-white font-semibold">
                  Quality Assurance
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  We guarantee the best quality with a detailed focus on every
                  project.
                </p>
              </div>
              {/* Card 5 */}
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <FaTruck className="text-8xl text-teal-500 mb-4" />
                <h4 className="text-xl text-white font-semibold">
                  On-Time Delivery
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  We ensure timely completion and delivery of every painting
                  project.
                </p>
              </div>
              {/* Card 6 */}
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <FaHome className="text-8xl text-teal-500 mb-4" />
                <h4 className="text-xl text-white font-semibold">
                  Residential & Commercial
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  We provide both residential and commercial painting services
                  with outstanding results.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* gallery section  */}
        <div>
          <Gallery />
        </div>
        {/* news section  */}
        <div>
          <News />
        </div>
        {/* Testimonial section  */}
        <div>
          <Testimonial />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
