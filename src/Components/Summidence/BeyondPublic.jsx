import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BeyondPublic = () => {
  return (
    <div className="mb-5 pb-5">
      <Container>
        <h2 className="ff_Poppins fw-bold fs_48 lh_125 common_clr_blue text-center">
          Beyond Public Speaking
        </h2>
        <Row className="mt-md-5 pt-md-3 justify-content-center">
          <Col
            md={4}
            lg={3}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                65%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3 w-75">
              Feel more confident in leadership roles
            </p>
          </Col>
          <Col
            md={4}
            lg={3}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                47%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              see improvement in daily communications
            </p>
          </Col>
          <Col
            md={4}
            lg={3}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                53%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3 w-75">
              received new career opportunities
            </p>
          </Col>
          <Col
            md={4}
            lg={3}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-lg-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                72%
              </p>
            </div>
            <p className="ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3 w-75">
              report better team engagement
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeyondPublic;
