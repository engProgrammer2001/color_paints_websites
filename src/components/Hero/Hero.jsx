import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
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
            src="https://images.pexels.com/photos/5641429/pexels-photo-5641429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/17303409/pexels-photo-17303409/free-photo-of-woman-posing-with-paint-on-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://supertouch.in/admin/image/banner/banner%201%20website.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
