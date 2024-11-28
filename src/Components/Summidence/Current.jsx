import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img_one from "../../assets/img/webp/1.png";
import img_two from "../../assets/img/webp/2.png";
import img_three from "../../assets/img/webp/3.png";
import img_four from "../../assets/img/webp/4.png";
import img_five from "../../assets/img/webp/5.png";
import img_six from "../../assets/img/webp/6.png";
import img_seven from "../../assets/img/webp/7.png";
import img_eight from "../../assets/img/webp/8.png";
import img_nine from "../../assets/img/webp/9.png";
import img_ten from "../../assets/img/webp/10.png";

const Current = () => {
  return (
    <div className="bg_current space_current">
      <Container>
        <div className="text-center text-md-start">
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
        spaceBetween={5}
        slidesPerView={4.5}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 60,
          },
          1440: {
            slidesPerView: 4.5,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_one} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_two} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_three} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_four} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_five} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_six} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_seven} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_eight} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_nine} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img-wrapper">
            <img className="slider-img" src={img_ten} alt="image1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Current;
