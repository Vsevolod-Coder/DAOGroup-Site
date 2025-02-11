import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mbank from "../../../Assets/letter_mbank.jpg";
import mbank2 from "../../../Assets/letter_mbank02.jpg";
import idlo from "../../../Assets/(b)idlo.jpg";
import abank from "../../../Assets/aiyl-bank.jpg";
import kicb from "../../../Assets/KICB-rekomend.jpg";
import beeline from "../../../Assets/beeline.jpg";
import bp from "../../../Assets/bp.jpg";
import aris from "../../../Assets/letter_aris.jpg";
import bpc from "../../../Assets/bpc.jpg";
import btb from "../../../Assets/btb.jpg";
import db from "../../../Assets/db2.jpg";
import dcb from "../../../Assets/dcb.jpg";
import deloitte from "../../../Assets/deloitte.jpg";
import deloitte2 from "../../../Assets/deloitte02.jpg";
import fcb from "../../../Assets/fcb.jpg";
import gts from "../../../Assets/gts.jpg";
import ipc from "../../../Assets/ipc.jpg";
import apparat from "../../../Assets/letter_apparat.jpg";
import demir from "../../../Assets/letter_dbank.jpg";
import mountain from "../../../Assets/letter_mountain.jpg";
import ukc from "../../../Assets/letter_ukc.jpg";
import mega from "../../../Assets/mega.jpg";
import meria_osh from "../../../Assets/meria-osh.jpg";
import nuts from "../../../Assets/nutsleasing.jpg";
import nurtel from "../../../Assets/oshka.jpg";
import pepsico from "../../../Assets/pepsico.jpg";
import rsk from "../../../Assets/rsk.jpg";
import sgs from "../../../Assets/sgs.jpg";
import skynet from "../../../Assets/skynet.jpg";
import tamozhnya from "../../../Assets/tamozhnya.jpg";
import giz from "../../../Assets/giz.jpeg";
import electro from "../../../Assets/osh-electro.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { LuVegan } from "react-icons/lu";

const Slider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      };
  return (
    <section className="slider-container">
        <div className="top-slicer"></div>
        <Swiper
            loop="true"
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            speed={5000}
            pagination={pagination}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
      >
            <SwiperSlide className="element">
                <img src={mbank} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={mbank2} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={idlo} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={abank} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={kicb} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={beeline} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={bp} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={aris} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={btb} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={bpc}  className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={db} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={dcb} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={deloitte} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={deloitte2} className="slide-image" />
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={fcb} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={gts} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={ipc} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={apparat} className="slide-image" />
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={demir} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={mountain} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={ukc} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={mega} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={meria_osh} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={nuts} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={nurtel} className="slide-image" />
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={pepsico} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={rsk} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={sgs} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={skynet} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={tamozhnya} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={giz} className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide className="element">
                <img src={electro} className="slide-image"/>
            </SwiperSlide>
        </Swiper>
    <div className="bottom-slicer"></div>
    </section>
  );
};

export default Slider;
