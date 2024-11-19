import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import slider_one from "../assets/img/webp/slider-1.png";

const Testimonials = () => {
  return (
    <>
      <Container className="space_testimonials">
        <div className="text-center text-lg-start">
          <h2 className="ff_Poppins fw-semibold fs_64 lh_118 common_clr_black">
            Testimonials
          </h2>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={1.7}
            centeredSlides={true}
            //   autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
            pagination={{
              clickable: true, // Dots will still work
            }}
            breakpoints={{
              // When the screen width is >= 320px
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              // When the screen width is >= 768px
              768: {
                slidesPerView: 1.6,
                spaceBetween: 40,
              },
              // When the screen width is >= 1024px
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 60,
              },
              // When the screen width is >= 1440px
              1440: {
                slidesPerView: 1.8,
                spaceBetween: 80,
              },
            }}
            //   modules={[Autoplay, Pagination]} // Removed Navigation
            className="mySwiper space_slider_testimonials"
          >
            <SwiperSlide className="mb-5 mt-5 pt-5">
              <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
                <img
                  className="slider_image img_pstn_slider position-absolute"
                  src={slider_one}
                  alt=""
                />
                <h2 className="ff_Jakarta fw-semibold fs_36 common_clr_black lh_77 mb-0 mt-5 pt-md-5">
                  Rev Dr Brain Birket
                </h2>
                <p className="ff_Jakarta fw-medium fs_28 lh_100 common_clr_black mt-2 mb-0">
                  Mangaging Director
                </p>
                <p className="ff_Jakarta fw-medium fs_22 txt_clr_grey lh_122 text-center mb-0 mt-4">
                  “Jason’s clarity, focus and relaxed speaking style all connect
                  superbly with audiences. He engages where people sit,
                  inspiring them behind themselves. I had many participants
                  genuinely challenged and purposefully focussed through Jason’s
                  presentation. One of the best comments as a result of Jason’s
                  presentation was: “When can we do this again?”. …Jason’s
                  generosity and maturity speaking from life experience all
                  contribute to a depth of wisdom that is both refreshing and
                  informative. If you can arrange it, be sure to book him to
                  speak for your next function.“
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5 mt-5 pt-5">
              <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
                <img
                  className="slider_image img_pstn_slider position-absolute"
                  src={slider_one}
                  alt=""
                />
                <h2 className="ff_Jakarta fw-semibold fs_36 common_clr_black lh_77 mb-0 mt-5 pt-md-5">
                  Rev Dr Brain Birket
                </h2>
                <p className="ff_Jakarta fw-medium fs_28 lh_100 common_clr_black mt-2 mb-0">
                  Mangaging Director
                </p>
                <p className="ff_Jakarta fw-medium fs_22 txt_clr_grey lh_122 text-center mb-0 mt-4">
                  “Jason’s clarity, focus and relaxed speaking style all connect
                  superbly with audiences. He engages where people sit,
                  inspiring them behind themselves. I had many participants
                  genuinely challenged and purposefully focussed through Jason’s
                  presentation. One of the best comments as a result of Jason’s
                  presentation was: “When can we do this again?”. …Jason’s
                  generosity and maturity speaking from life experience all
                  contribute to a depth of wisdom that is both refreshing and
                  informative. If you can arrange it, be sure to book him to
                  speak for your next function.“
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5 mt-5 pt-5">
              <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
                <img
                  className="slider_image img_pstn_slider position-absolute"
                  src={slider_one}
                  alt=""
                />
                <h2 className="ff_Jakarta fw-semibold fs_36 common_clr_black lh_77 mb-0 mt-5 pt-md-5">
                  Rev Dr Brain Birket
                </h2>
                <p className="ff_Jakarta fw-medium fs_28 lh_100 common_clr_black mt-2 mb-0">
                  Mangaging Director
                </p>
                <p className="ff_Jakarta fw-medium fs_22 txt_clr_grey lh_122 text-center mb-0 mt-4">
                  “Jason’s clarity, focus and relaxed speaking style all connect
                  superbly with audiences. He engages where people sit,
                  inspiring them behind themselves. I had many participants
                  genuinely challenged and purposefully focussed through Jason’s
                  presentation. One of the best comments as a result of Jason’s
                  presentation was: “When can we do this again?”. …Jason’s
                  generosity and maturity speaking from life experience all
                  contribute to a depth of wisdom that is both refreshing and
                  informative. If you can arrange it, be sure to book him to
                  speak for your next function.“
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5 mt-5 pt-5">
              <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
                <img
                  className="slider_image img_pstn_slider position-absolute"
                  src={slider_one}
                  alt=""
                />
                <h2 className="ff_Jakarta fw-semibold fs_36 common_clr_black lh_77 mb-0 mt-5 pt-md-5">
                  Rev Dr Brain Birket
                </h2>
                <p className="ff_Jakarta fw-medium fs_28 lh_100 common_clr_black mt-2 mb-0">
                  Mangaging Director
                </p>
                <p className="ff_Jakarta fw-medium fs_22 txt_clr_grey lh_122 text-center mb-0 mt-4">
                  “Jason’s clarity, focus and relaxed speaking style all connect
                  superbly with audiences. He engages where people sit,
                  inspiring them behind themselves. I had many participants
                  genuinely challenged and purposefully focussed through Jason’s
                  presentation. One of the best comments as a result of Jason’s
                  presentation was: “When can we do this again?”. …Jason’s
                  generosity and maturity speaking from life experience all
                  contribute to a depth of wisdom that is both refreshing and
                  informative. If you can arrange it, be sure to book him to
                  speak for your next function.“
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-5 mt-5 pt-5">
              <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
                <img
                  className="slider_image img_pstn_slider position-absolute"
                  src={slider_one}
                  alt=""
                />
                <h2 className="ff_Jakarta fw-semibold fs_36 common_clr_black lh_77 mb-0 mt-5 pt-md-5">
                  Rev Dr Brain Birket
                </h2>
                <p className="ff_Jakarta fw-medium fs_28 lh_100 common_clr_black mt-2 mb-0">
                  Mangaging Director
                </p>
                <p className="ff_Jakarta fw-medium fs_22 txt_clr_grey lh_122 text-center mb-0 mt-4">
                  “Jason’s clarity, focus and relaxed speaking style all connect
                  superbly with audiences. He engages where people sit,
                  inspiring them behind themselves. I had many participants
                  genuinely challenged and purposefully focussed through Jason’s
                  presentation. One of the best comments as a result of Jason’s
                  presentation was: “When can we do this again?”. …Jason’s
                  generosity and maturity speaking from life experience all
                  contribute to a depth of wisdom that is both refreshing and
                  informative. If you can arrange it, be sure to book him to
                  speak for your next function.“
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default Testimonials;
