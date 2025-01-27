import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }} // Ensure pagination is added
      >
        <SwiperSlide>
          <img src="/images/swiper.png" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper.png" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper.png" alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper.png" alt="slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
