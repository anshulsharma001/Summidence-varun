import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_one from "../../assets/img/Aboutus/Png/Rectangle 2.png";

const Introduction = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <p className="ff_Poppins fw-semibold fs_18 lh_122">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="ff_Poppins fw-semibold fs_18 lh_122 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img className="img_card" src={img_one} alt="" />
              <h2 className="ff_Poppins fs_22 fw-semibold lh_122 mb-0 common_clr_black">Ronald Richards</h2>
              <p className="ff_Poppins fs_18 lh_118 mb-0 common_clr_black mt-2">Founder</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Introduction;
