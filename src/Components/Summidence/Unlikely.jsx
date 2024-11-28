import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Unlikely_img from "../../assets/img/webp/image-2 (1).webp";

const Unlikely = () => {
  return (
    <>
      <Container>
        <div className="space_unlikely text-center text-lg-start">
          <div className=" d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="ff_Jakarta fw-bolder fs_48 lh_122 common_clr_blue mb-md-4">
              Your Journey to Extraordinary Leadership
            </h2>
            <p className="ff_Jakarta fw-normal para_unlikely fs_20 lh_132 common_clr_black mb-0">
              Every great leader has a voice that inspires, motivates, and
              drives change. Whether you're speaking to a boardroom of
              executives or leading your team through a crucial presentation,
              your ability to communicate effectively shapes how others perceive
              and respond to your leadership.
            </p>
          </div>
        </div>
        <Row className="mt-lg-5 text-center text-lg-start align-items-center align-self-lg-start justify-content-center justify-content-lg-start">
          <Col lg={5}>
            <img
              className="w-100 h-100 img_unlikely"
              src={Unlikely_img}
              alt=""
            />
          </Col>
          <Col lg={7} className="">
            <div>
              <p className="ff_Poppins fw-medium fs_18 common_clr_black lh_151 para_unlikely me-md-5">
                Your Leadership Evolution Begins Here: At Summidence, we empower
                you with expert-led workshops, personalized coaching, real-world
                speaking opportunities, advanced storytelling techniques, and
                strategies to manage anxiety and build confidence, helping you
                communicate your vision with clarity, confidence, and charisma.
              </p>
              <p className="ff_Poppins fw-medium fs_18 common_clr_black lh_175 mt-5">
                <span className="common_clr_blue fw-semibold fs_24">
                  Beyond Public Speaking
                </span>
                <span className="d-block fw-semibold mt-2">
                  Graduates of our program report benefits that extend well
                  beyond the podium.
                </span>
                <span className="d-block">
                  84% feeling more confident in leadership roles
                </span>
                <span className="d-block">
                  92% improvement in daily communications
                </span>
                <span className="d-block">
                  76% gaining new career opportunities within six months
                </span>
                <span className="d-block">
                  89% better team engagement and motivation skills
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Unlikely;
