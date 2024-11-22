import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Peoples, Secure } from "../common/Icon";
import man_img from "../../assets/img/Business/Img/Png/about-us.png";
import card_img from "../../assets/img/Business/Img/Png/card-img-about-us.png";

const AboutUsBusiness = () => {
  return (
    <div className="space_about_us">
      <Container>
        <Row className=" align-items-lg-center">
          <Col md={6}>
            <h2 className="ff_Poppins fw-bold fs_48 lh_125 common_clr_blue mb-0">
              About us
            </h2>
            <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-2">
              No wonder that promotion strategy is one of the most
              <span className="d-lg-block">
                important processes in marketing.In fact, it supports your
              </span>
              <span className="d-lg-block">
                marketing voices to reach your target audience, creates
              </span>
              <span className="d-lg-block">
                interest, and helps you to engage with them.
              </span>
            </p>
            <div className=" mt-5">
              <div className=" d-flex gap-4">
                <Secure />
                <div>
                  <p className="ff_Poppins fw-medium fs_20 lh_118 common_clr_blue mb-0">
                    Safe and secured
                  </p>
                  <p className="ff_Poppins fw-normal fs_16 text_clr_grey lh_118 mb-0 mt-2">
                    Safe and secured promotion strategy is one of the
                    <span className="d-lg-block">
                      most important processes in marketing.
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4 mt-4 pt-3">
                <Peoples />
                <div>
                  <p className="ff_Poppins fw-medium fs_20 lh_118 common_clr_blue mb-0">
                    Highly expert team
                  </p>
                  <p className="ff_Poppins fw-normal fs_16 text_clr_grey lh_118 mb-0 mt-2">
                    We supports your marketing voices to reach your
                    <span className="d-lg-block">
                      target audience, creates interest.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="position-relative">
              <img
                className="w-100 h-100 "
                src={man_img}
                alt=""
              />
              <img
                className="w-75 h-75 position-absolute card_img_about_us z-3"
                src={card_img}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsBusiness;
