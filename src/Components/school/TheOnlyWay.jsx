import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import steve_jobs from "../../assets/img/School/Png/steve-jobs.png";
import brain from "../../assets/img/svg/brain.svg";
import bulb from "../../assets/img/svg/bulb.svg";

const TheOnlyWay = () => {
  const [quotes, setQuotes] = useState([
    {
      text: '"The only way to do great work is LOVE what you do"',
      author: "STEVE JOBS",
      role: "Former CEO of Apple Inc.",
    },
    {
      text: '"The only way to do great work is LOVE what you do"',
      author: "STEVE JOBS",
      role: "Former CEO of Apple Inc.",
    },
    {
      text: '"The only way to do great work is LOVE what you do"',
      author: "STEVE JOBS",
      role: "Former CEO of Apple Inc.",
    },
  ]);

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-common_clr_blue pt-lg-5 pt-4">
      <Container className="custom_container pt-4">
        <Row>
          <Col md={6} className="pt-lg-5 mt-2 position-relative">
            <img
              src={bulb}
              alt="bulb"
              className=" position-absolute bulb_big d-none d-sm-block"
            />
            <img
              src={bulb}
              alt="bulb"
              className=" position-absolute bulb_small d-none d-sm-block"
            />
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              className="mySwiper"
              onSlideChange={(swiper) =>
                setActiveQuoteIndex(swiper.activeIndex)
              }
            >
              {quotes.map((quote, index) => (
                <SwiperSlide key={index}>
                  <div className="quote-card">
                    <div className="">
                      <p className="text-white ff_Poppins fw-normal fs_32 lh_151 mb-4 max_w_630">
                        {quote.text}
                      </p>
                      <h5 className="text-white ff_Poppins fw-bold fs_16 lh_151 mb-2">
                        {quote.author}
                      </h5>
                      <p className="text-white mb-0 ff_Poppins fw-normal fs_14">
                        {quote.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>


          
          <Col md={6} className="mt-4 mt-md-0 position-relative">
            <img src={brain} alt="brain" className="position-absolute brain" />
            <img
              src={steve_jobs}
              alt="steve jobs"
              className="steve_jobs w-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TheOnlyWay;
