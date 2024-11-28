import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img from "../../assets/img/webp/Hero-img.png";

const Header = () => {
  return (
    <>
      <Container className="mt_90 p-xl-0">
        <Row className="p-xl-0 align-items-center text-center text-lg-start">
          <Col lg={7} className="p-xl-0">
            <div>
              <h1 className="ff_Poppins mb-1 fw-semibold fs_56 lh_151 common_clr_blue">
                Unleash Your Leadership Potential Through the Power of Public
                Speaking
              </h1>
              <p className="mb-2 fw-light fs_16 ff_Jakarta lh_215 para_summidence common_clr_black mt-md-1">
                Transform your presence, elevate your impact, and discover
                leadership abilities you never knew you had. At Summidence, we
                believe that mastering public speaking is the key that unlocks
                both personal growth and professional success.
              </p>
              <button className="common_bttn ff_Poppins fw-light fs_18 lh_175 text-white mt-2">
                Learn More
              </button>
            </div>
          </Col>
          <Col lg={5} className="p-xl-0 mt-2 mt-md-4 mt-lg-0">
            <img
              className="header_img w-100 h-100"
              src={header_img}
              alt="Header"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
