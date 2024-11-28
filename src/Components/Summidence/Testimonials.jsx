import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import man_img from "../../assets/img/webp/slider-1.png";
import comma_img from "../../assets/img/webp/comma.png";

const Testimonials = () => {
  return (
    <>
      <Container className="space_testimonials">
        <h2 className="ff_Poppins fw-semibold fs_48 lh_118 common_clr_black text-center pb-3">
          What Our Graduates Say
        </h2>
        {/* <Swiper
          loop={true}
          spaceBetween={5}
          slidesPerView={1.9}
          centeredSlides={true}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 60,
            },
            1320: {
              slidesPerView: 2.5,
              spaceBetween: 60,
            },
            1440: {
              slidesPerView: 1.8,
              spaceBetween: 80,
            },
          }}
          className="mySwiper space_slider_testimonials "
        >
          <SwiperSlide className="mb-5 mt-5 swiper-slide-2">
            <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Rev Dr Brain Birket
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-2 mb-0">
                Mangaging Director
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                “Jason’s clarity, focus and relaxed speaking style all connect
                superbly with audiences. He engages where people sit, inspiring
                them behind themselves. I had many participants genuinely
                challenged and purposefully focussed through Jason’s
                presentation. One of the best comments as a result of Jason’s
                presentation was: “When can we do this again?”. …Jason’s
                generosity and maturity speaking from life experience all
                contribute to a depth of wisdom that is both refreshing and
                informative. If you can arrange it, be sure to book him to speak
                for your next function.“
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5 mt-5 swiper-slide-2">
            <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Rev Dr Brain Birket
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-2 mb-0">
                Mangaging Director
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                “Jason’s clarity, focus and relaxed speaking style all connect
                superbly with audiences. He engages where people sit, inspiring
                them behind themselves. I had many participants genuinely
                challenged and purposefully focussed through Jason’s
                presentation. One of the best comments as a result of Jason’s
                presentation was: “When can we do this again?”. …Jason’s
                generosity and maturity speaking from life experience all
                contribute to a depth of wisdom that is both refreshing and
                informative. If you can arrange it, be sure to book him to speak
                for your next function.“
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5 mt-5 swiper-slide-2">
            <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Rev Dr Brain Birket
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-2 mb-0">
                Mangaging Director
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                “Jason’s clarity, focus and relaxed speaking style all connect
                superbly with audiences. He engages where people sit, inspiring
                them behind themselves. I had many participants genuinely
                challenged and purposefully focussed through Jason’s
                presentation. One of the best comments as a result of Jason’s
                presentation was: “When can we do this again?”. …Jason’s
                generosity and maturity speaking from life experience all
                contribute to a depth of wisdom that is both refreshing and
                informative. If you can arrange it, be sure to book him to speak
                for your next function.“
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5 mt-5 swiper-slide-2">
            <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Rev Dr Brain Birket
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-2 mb-0">
                Mangaging Director
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                “Jason’s clarity, focus and relaxed speaking style all connect
                superbly with audiences. He engages where people sit, inspiring
                them behind themselves. I had many participants genuinely
                challenged and purposefully focussed through Jason’s
                presentation. One of the best comments as a result of Jason’s
                presentation was: “When can we do this again?”. …Jason’s
                generosity and maturity speaking from life experience all
                contribute to a depth of wisdom that is both refreshing and
                informative. If you can arrange it, be sure to book him to speak
                for your next function.“
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-5 mt-5 swiper-slide-2">
            <div className="card_slider d-flex flex-column justify-content-center align-items-center position-relative">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Rev Dr Brain Birket
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-2 mb-0">
                Mangaging Director
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                “Jason’s clarity, focus and relaxed speaking style all connect
                superbly with audiences. He engages where people sit, inspiring
                them behind themselves. I had many participants genuinely
                challenged and purposefully focussed through Jason’s
                presentation. One of the best comments as a result of Jason’s
                presentation was: “When can we do this again?”. …Jason’s
                generosity and maturity speaking from life experience all
                contribute to a depth of wisdom that is both refreshing and
                informative. If you can arrange it, be sure to book him to speak
                for your next function.“
              </p>
            </div>
          </SwiperSlide>
        </Swiper> */}
        <div className=" d-flex justify-content-center gap-5 mt-5 pt-5">
          <div className="position-relative">
            <div className="d-flex gap-5 align-items-center position-absolute man_img_slider">
              <img className=" w-100 h-100 slider_img" src={man_img} alt="" />
              <img className=" w-100 h-100 comma_img" src={comma_img} alt="" />
            </div>
            <div className="card_slider w-100 h1 d-flex flex-column justify-content-center align-items-center">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Nathan B
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-3 mb-0">
                Marketing Officer
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                "Summidence didn’t just make me a better speaker—it transformed
                how I see myself as a leader. The confidence I gained has opened
                doors I never thought possible."
              </p>
            </div>
          </div>
          <div className="position-relative">
            <div className="d-flex gap-5 align-items-center position-absolute man_img_slider">
              <img className=" w-100 h-100 slider_img" src={man_img} alt="" />
              <img className=" w-100 h-100 comma_img" src={comma_img} alt="" />
            </div>
            <div className="card_slider w-100 h1 d-flex flex-column justify-content-center align-items-center">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Joshua N
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-3 mb-0">
                Senior Director of Operations
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-4">
                "The personal growth I experienced through Summidence went far
                beyond public speaking. It changed how I approach challenges,
                lead my team, and envision my future."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimonials;
