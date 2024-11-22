import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img from "../../assets/img/webp/image (1).webp";

const Header = () => {
  return (
    <>
      <Container className="mt_90 p-xl-0">
        <Row className="p-xl-0 align-items-center text-center text-lg-start">
          <Col lg={6} className="p-xl-0">
            <div>
              <h1 className="ff_Poppins mb-1 fw-semibold fs_56 lh_151 common_clr_blue">
                Living and Leading with conviction
              </h1>
              <p className="mb-1 fw-light fs_16 ff_Jakarta common_clr_black mt-md-2">
                Jason inspires us to live and lead with conviction. To make
                choices that are intentional, strategic, passionate, and
                uncompromising in their purpose. To identify what is most
                important to you, and to do something about it.
              </p>
              <button className="common_bttn ff_Poppins fw-light fs_18 lh_175 text-white mt-2">
                Learn More
              </button>
            </div>
          </Col>
          <Col lg={6} className="p-xl-0 mt-2 mt-md-4 mt-lg-0">
            <img className="header_img w-100" src={header_img} alt="Header" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
