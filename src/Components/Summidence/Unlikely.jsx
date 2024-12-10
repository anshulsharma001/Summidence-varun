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
        {/* <Row className="mt-lg-5 text-center text-lg-start align-items-center align-self-lg-start justify-content-center justify-content-lg-start">
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
                Embark on the journey to unlock your full confidence and unleash
                your leadership potential—it all begins with a single step. At
                Summidence, we’re here to guide and support you every step of
                the way to reach the pinnacle of your success. We have
                expert-led workshops, group or personal coaching, real-world
                speaking opportunities, and strategies to manage anxiety, to
                help you build confidence, and allow you to communicate your
                vision with clarity, confidence and charisma.
              </p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Unlikely;
