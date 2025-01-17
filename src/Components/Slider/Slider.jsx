import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mbank from "../../Assets/letter_mbank.jpg";
import mbank2 from "../../Assets/letter_mbank02.jpg";
import idlo from "../../Assets/(b)idlo.jpg";
import abank from "../../Assets/aiyl-bank.jpg";
import kicb from "../../Assets/KICB-rekomend.jpg";
import beeline from "../../Assets/beeline.jpg";
import bp from "../../Assets/bp.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mbank} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mbank2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={idlo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
