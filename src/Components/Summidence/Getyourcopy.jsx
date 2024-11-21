import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image_one from "../../assets/img/webp/Group-8 (1).webp";
import image_two from "../../assets/img/webp/image.webp";
import image_three from "../../assets/img/webp/image-4 (1).webp";

const Getyourcopy = () => {
  return (
    <>
      <Container className="space_get">
        <Row className=" d-flex justify-content-center justify-content-xl-start align-items-center align-items-xl-start">
          <Col md={6} lg={4} className="mt-3 mt-lg-0">
            <div className="common_card">
              <img
                className="w-100 h-50 card_img_rds "
                src={image_one}
                alt=""
              />
              <div className="p-4">
                <h2 className="ff_Jakarta fw-semibold fs_24 text-white lh_125 mb-0">
                  READ ONE OF JASON’S LATEST BOOKS
                </h2>
                <p className="ff_Poppins fw-medium fs_16 lh_132 text_clr_light_grey mt-3 mb-1">
                  Jason is an accomplished author whose books have captivated
                  readers with their depth and insight. Drawing from his own
                  l...
                </p>
                <button className="common_bttn ff_Poppins fw-light fs_16 lh_175 text-white mt-md-2">
                  Get your copy
                </button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-3 mt-lg-0">
            <div className="common_card">
              <img
                className="w-100 h-50 card_img_rds "
                src={image_two}
                alt=""
              />
              <div className="p-4">
                <h2 className="ff_Jakarta fw-semibold fs_24 text-white lh_125 mb-0">
                  READ ONE OF JASON’S LATEST BOOKS
                </h2>
                <p className="ff_Poppins fw-medium fs_16 lh_132 text_clr_light_grey mt-3 mb-1">
                  Jason is an accomplished author whose books have captivated
                  readers with their depth and insight. Drawing from his own
                  l...
                </p>
                <button className="common_bttn ff_Poppins fw-light fs_16 lh_175 text-white mt-md-2">
                  Get your copy
                </button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-3 mt-lg-0">
            <div className="common_card">
              <img
                className="w-100 h-100 card_img_rds "
                src={image_three}
                alt=""
              />
              <div className="p-4">
                <h2 className="ff_Jakarta fw-semibold fs_24 text-white lh_125 mb-0">
                  READ ONE OF JASON’S LATEST BOOKS
                </h2>
                <p className="ff_Poppins fw-medium fs_16 lh_132 text_clr_light_grey mt-3 mb-1">
                  Jason is an accomplished author whose books have captivated
                  readers with their depth and insight. Drawing from his own
                  l...
                </p>
                <button className="common_bttn ff_Poppins fw-light fs_16 lh_175 text-white mt-md-2">
                  Get your copy
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Getyourcopy;
