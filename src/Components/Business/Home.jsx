import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hero_img from "../../assets/img/Business/Img/Png/hero.png";

const Home = () => {
  return (
    <div className="bg_about_us space_home">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col
            lg={5}
            className="d-flex justify-content-lg-end align-content-lg-end"
          >
            <div>
              <h1 className="ff_Poppins fw-bold fs_56 lh_125 text-white mb-0">
                Lorem Ipsum
              </h1>
              <p className="ff_Poppins fw-semibold fs_16 lh_122 text-white mb-0 mt-2 mt-lg-4">
                Lorem ipsum dolor sit amet, consectetuer
                <span className="d-lg-block">
                  adipiscing elit. Aenean commodo ligula
                </span>
                <span className="d-lg-block">
                  eget dolor. Aenean massa. Cum sociis
                </span>
                <span className="d-lg-block">natoque penatibus et</span>
              </p>
              <button className="ff_Poppins fw-semibold fs_18 lh_118 text-white Book_btn mt-3 mt-lg-5">
                Book a free live class
              </button>
            </div>
          </Col>
          <Col lg={7}>
            <img className="w-100 h-100" src={hero_img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
