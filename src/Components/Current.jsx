import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Essential for styling
import img_one from "../assets/img/webp/7.webp";
import { Autoplay } from "swiper";


const Current = () => {
  return (
    <div className='bg_current'>
        <Container className='space_current'>
            <div>
                <h2 className='ff_Poppins fw-semibold fs_64 lh_118 text-white'>Current <span className='txt_clr_orange'>Associations</span></h2>
                <Swiper
                  loop={true}
                  autoplay={true}
                  spaceBetween={80}
                  slidesPerView={4.5}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                 
                >
                  <SwiperSlide><img className='w-100 h100' src={img_one} alt="image1" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 h100' src={img_one} alt="image2" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 h100' src={img_one} alt="image3" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 h100' src={img_one} alt="image4" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 h100' src={img_one} alt="image5" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 h100' src={img_one} alt="image6" /></SwiperSlide>
                </Swiper>
            </div>
        </Container>
    </div>
  )
}

export default Current