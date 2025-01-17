import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mbank from "../../Assets/letter_mbank.jpg";
import mbank2 from "../../Assets/letter_mbank02.jpg";
import idlo from "../../Assets/(b)idlo.jpg";
import abank from "../../Assets/aiyl-bank.jpg";
import kicb from "../../Assets/KICB-rekomend.jpg";
import beeline from "../../Assets/beeline.jpg";
import bp from "../../Assets/bp.jpg";
import aris from "../../Assets/letter_aris.jpg";
import bpc from "../../Assets/bpc.jpg";
import btb from "../../Assets/btb.jpg";
import db from "../../Assets/db2.jpg";
import dcb from "../../Assets/dcb.jpg";
import deloitte from "../../Assets/deloitte.jpg";
import deloitte2 from "../../Assets/deloitte02.jpg";
import fcb from "../../Assets/fcb.jpg";
import gts from "../../Assets/gts.jpg";
import ipc from "../../Assets/ipc.jpg";
import apparat from "../../Assets/letter_apparat.jpg";
import demir from "../../Assets/letter_dbank.jpg";
import mountain from "../../Assets/letter_mountain.jpg";
import ukc from "../../Assets/letter_ukc.jpg";
import mega from "../../Assets/mega.jpg";
import meria_osh from "../../Assets/meria-osh.jpg";
import nuts from "../../Assets/nutsleasing.jpg";
import nurtel from "../../Assets/oshka.jpg";
import pepsico from "../../Assets/pepsico.jpg";
import rsk from "../../Assets/rsk.jpg";
import sgs from "../../Assets/sgs.jpg";
import skynet from "../../Assets/skynet.jpg";
import tamozhnya from "../../Assets/tamozhnya.jpg";
import giz from "../../Assets/giz.jpeg";
import electro from "../../Assets/osh-electro.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { LuVegan } from "react-icons/lu";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop="true"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
        modules={[Autoplay, EffectCoverflow, Pagination]}
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
          <img src={abank} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kicb} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={beeline} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aris} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={btb} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bpc} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={db} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dcb} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deloitte} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deloitte2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fcb} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gts} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ipc} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apparat} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demir} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mountain} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ukc} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mega} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={meria_osh} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nuts} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nurtel} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsico} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rsk} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sgs} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={skynet} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tamozhnya} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={giz} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={electro} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
