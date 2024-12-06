import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const News = () => {
  const newsItems = [
    {
      id: 1,
      headline: "Office Building Transformation",
      image: "assets/news/wallArt.jpg",
      text: "KK Painting Company recently transformed a local office building with modern colors, creating a welcoming environment that matches the company’s brand, improving appearance and ambiance of the workspace.",
    },
    {
      id: 2,
      headline: "City Center Home Makeover",
      image: "assets/news/City Center Home Makeover.jpg",
      text: "We helped homeowners in the city center choose warm colors to make their home cozy. Our team carefully painted the space, focusing on smooth, clean lines for a beautiful makeover.",
    },
    {
      id: 3,
      headline: "Eco-Friendly School Revamp",
      image: "assets/news/Eco-Friendly School Revamp.jpg",
      text: "We used eco-friendly paints to renovate a local school, improving classrooms and hallways while ensuring better indoor air quality for students and staff by using low-VOC paints.",
    },
    {
      id: 4,
      headline: "Hotel Lobby Makeover",
      image: "assets/news/Hotel Lobby Makeover.jpg",
      text: "Our team gave a hotel lobby a sophisticated makeover with elegant colors that matched the hotel’s theme. We focused on precision for a luxurious, flawless finish.",
    },
    {
      id: 5,
      headline: "Café Custom Accent Wall",
      image: "assets/news/Café Custom Accent Wall.webp",
      text: "We created a custom accent wall for a local café, choosing a rich color and unique patterns to enhance the café’s cozy atmosphere and attract more customers.",
    },
    {
      id: 6,
      headline: "Residential Exterior Refresh",
      image: "assets/news/Residential Exterior Refresh.jpg",
      text: "We refreshed a residential property’s exterior with a new color scheme, using weather-resistant paints for lasting results. Our skilled painters worked carefully to improve the home’s curb appeal.",
    },
  ];

  return (
    <div>
      {/* Fixed Icons */}
      <div className="fixed left-4 bottom-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition animate-bounce z-50">
        <a href="tel:7991231430" aria-label="Call Us">
          <FaPhone size={40} />
        </a>
      </div>
      <div className="fixed right-4 bottom-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition animate-bounce z-50">
        <a href="https://wa.link/hp0obv" aria-label="WhatsApp Us">
          <FaWhatsapp size={40} />
        </a>
      </div>

      {/* News Section */}
      <div className="news-section p-4 my-12">
        <h1 className="text-center text-3xl font-semibold mb-2">Latest News</h1>
        <p className="text-center mb-6">
          Check out our latest news and updates
        </p>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {newsItems.map((news) => (
            <SwiperSlide key={news.id}>
              <div className="card bg-gray-100 p-4 rounded shadow-md">
                <img
                  src={news.image}
                  alt={news.text}
                  className="w-full h-[280px] object-cover"
                />
                <h2 className="text-center text-xl font-semibold mb-2">
                  {news.headline}
                </h2>
                <p className="text-center font-medium">{news.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
