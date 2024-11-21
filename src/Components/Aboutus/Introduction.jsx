import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_one from "../../assets/img/Aboutus/Png/Rectangle 2.png";
import img_two from "../../assets/img/Aboutus/Png/Rectangle 1.png";

const Introduction = () => {
  return (
    <div className="space_introduction">
      <Container className="position-relative">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xl={6} className="text-center  text-xl-start">
            <div>
              <p className="ff_Poppins fw-semibold fs_18 lh_122">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-2 mt-md-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-2 mt-md-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-2 mt-md-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-2 mt-md-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-2 mt-md-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </Col>
          <Col xl={6} className="text-center text-xl-start">
            <div className="d-md-flex justify-content-between d-xl-none">
              <div className="Card_intro_two">
                <img className="img_card" src={img_two} alt="" />
                <h2 className="ff_Poppins fs_22 fw-semibold lh_122 mb-0 common_clr_black">
                  Darrell Steward
                </h2>
                <p className="ff_Poppins fs_18 lh_118 mb-0 common_clr_black mt-2">
                  Co-Founder
                </p>
              </div>
              <div className="Card_intro mt-3 mt-md-0">
                <img className="img_card" src={img_one} alt="" />
                <h2 className="ff_Poppins fs_22 fw-semibold lh_122 mb-0 common_clr_black">
                  Ronald Richards
                </h2>
                <p className="ff_Poppins fs_18 lh_118 mb-0 common_clr_black mt-2">
                  Founder
                </p>
              </div>
            </div>
            <div className="d-none d-xl-block">
              <div className="Card_intro_two position-absolute">
                <img className="img_card" src={img_two} alt="" />
                <h2 className="ff_Poppins fs_22 fw-semibold lh_122 mb-0 common_clr_black">
                  Darrell Steward
                </h2>
                <p className="ff_Poppins fs_18 lh_118 mb-0 common_clr_black mt-2">
                  Co-Founder
                </p>
              </div>
              <div className="Card_intro position-absolute">
                <img className="img_card" src={img_one} alt="" />
                <h2 className="ff_Poppins fs_22 fw-semibold lh_122 mb-0 common_clr_black">
                  Ronald Richards
                </h2>
                <p className="ff_Poppins fs_18 lh_118 mb-0 common_clr_black mt-2">
                  Founder
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
