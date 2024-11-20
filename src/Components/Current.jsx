import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img_one from "../assets/img/webp/1.png";
import img_two from "../assets/img/webp/2.png";
import img_three from "../assets/img/webp/3.png";
import img_four from "../assets/img/webp/4.png";
import img_five from "../assets/img/webp/5.png";
import img_six from "../assets/img/webp/6.png";
import img_seven from "../assets/img/webp/7.png";
import img_eight from "../assets/img/webp/8.png";
import img_nine from "../assets/img/webp/9.png";
import img_ten from "../assets/img/webp/10.png";

const Current = () => {
  return (
    <div className="bg_current space_current">
      <Container className="">
        <div className="text-center text-lg-start">
          <h2 className="ff_Poppins fw-semibold fs_48 lh_118 text-white">
            Current <span className="txt_clr_orange">Associations</span>
          </h2>
        </div>
      </Container>
      <Swiper
        className="space_slider d-flex justify-content-center align-items-center"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={80}
        slidesPerView={4.5}
        breakpoints={{
          // When the screen width is >= 320px
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          // When the screen width is >= 768px
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          // When the screen width is >= 1024px
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 60,
          },
          // When the screen width is >= 1440px
          1440: {
            slidesPerView: 4.5,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img className="w-75 h-50" src={img_one} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_two} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_three} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_four} alt="image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_five} alt="image5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_six} alt="image6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_seven} alt="image7" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_eight} alt="image8" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_nine} alt="image9" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-75 h-50" src={img_ten} alt="image10" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Current;
