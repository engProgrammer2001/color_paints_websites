import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";

// Import SwiperCore and register the modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Testimonial = () => {
  const testimonials = [
    {
      image: "assets/Testimonials/rohit.png",
      name: "Rohit Kumar",
      message:
        "The interior painting service transformed my home completely. The team was professional and the quality of work was excellent. Highly satisfied!",
      service: "Interior Painting Service",
    },
    {
      image: "assets/Testimonials/ashok.jpg",
      name: "Ashok Singh",
      message:
        "I am extremely impressed with the exterior painting service. My house looks brand new, and the attention to detail was superb. Great work!",
      service: "Exterior Painting Service",
    },
    {
      image: "assets/Testimonials/sushma.avif",
      name: "Sushma Singha",
      message:
        "We hired this team for our office building, and they did an outstanding job. The paintwork is flawless, and the workspace now feels more vibrant!",
      service: "Commercial Painting Service",
    },
    {
      image: "assets/Testimonials/sulochna.avif",
      name: "Sulochana Sharma",
      message:
        "Our home has never looked better. The residential painting team was fast, efficient, and made sure everything was perfect. Highly recommend!",
      service: "Residential Painting Service",
    },
    {
      image: "assets/Testimonials/krishna.avif",
      name: "Krishna Bansal",
      message:
        "The painting team did a fantastic job with our rental property. The place looks refreshed, and we’ve already received positive feedback from tenants!",
      service: "Rental Home Flats Painting Service",
    },
    {
      image: "assets/Testimonials/rohit.png",
      name: "Rohit Kumar",
      message:
        "I wanted to give my apartment a new look, and this painting service delivered beyond expectations. Professional service with outstanding results!",
      service: "Apartment Painting Service",
    },
    {
      image: "assets/Testimonials/ashok.jpg",
      name: "Ashok Singh",
      message:
        "The villa painting service completely revitalized our home. The team was punctual, and the painting quality is top-notch. Very happy with the results!",
      service: "Villa Painting Service",
    },
    {
      image: "assets/Testimonials/sushma.avif",
      name: "Sushma Singha",
      message:
        "Our bungalow looks stunning after the paintwork. The service was smooth, and the results are just breathtaking. Would definitely hire them again!",
      service: "Bunglow Painting Service",
    },
  ];
  return (
    <div className="testimonial-section py-16 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <h2 className="text-center text-4xl font-bold mb-8 text-shadow">
        What Our Clients Say
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }} // Autoplay configuration
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-lg text-gray-600 italic mb-4">
                {testimonial.message}
              </p>
              <span className="text-sm text-gray-500">
                Service: {testimonial.service}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
