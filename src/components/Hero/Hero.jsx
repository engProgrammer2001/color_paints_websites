import React, { useState } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import "./Hero.css";
// Enable Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow]);

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    pincode: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "33842416-bccc-402b-b9b7-645278634f9d",
        ...formData,
      }),
    });

    if (response.ok) {
      setSuccessMessage("Your form was successfully submitted!");
      setFormData({
        name: "",
        number: "",
        date: "",
      });
    } else {
      setErrorMessage(
        "There was an error submitting your form. Please try again."
      );
    }
  };

  return (
    <div className="relative w-full h-[25vh] md:h-[40vh] sm:h-[30vh] lg:h-[90vh] overflow-hidden">
      {/* Contact Us Button */}
      <button
        onClick={handleOpenForm}
        className="fixed top-96 right-[-57px] z-10 px-4 py-2 bg-gradient-to-r from-teal-500 to-pink-500 text-slate-800 text-lg font-semibold rounded transform transition-transform duration-300 origin-bottom rotate-90"
      >
        Free re-visite Book
      </button>

      {/* Contact Us Form Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl text-teal-500 font-semibold mb-4 text-center">
              Free Service Book for Revisite
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode
                </label>
                <input
                  type="number"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-pink-500 text-white font-semibold rounded hover:from-pink-500 hover:to-teal-500"
              >
                Submit
              </button>
              {successMessage && (
                <p className="mt-4 text-green-500">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="mt-4 text-red-500">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Swiper Component */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="assets/slider/slider6.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover lg:object-cover lg:h-[90vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/slider/slider7.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover lg:object-cover lg:h-[90vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/slider/slider8.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover lg:object-cover lg:h-[90vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/slider/slider6.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover lg:object-cover lg:h-[90vh]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
