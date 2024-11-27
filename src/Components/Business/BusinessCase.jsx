import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BusinessCase = () => {
  return (
    <div className="my-5 pt-md-5">
      <Container className="mt-5">
        <h2 className="ff_Poppins fw-bold fs_48 lh_122 common_clr_blue text-center">
          The Business Case for Public Speaking Excellence
        </h2>
        <Row className="mt-md-5 pt-3">
          <Col
           md={4} lg={3} xl={2}
            className="text-center d-flex flex-column justify-content-center align-items-center"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                65%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Improvement in client presentation success rates
            </p>
          </Col>
          <Col
           md={4} lg={3} xl={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                47%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Increase in employee engagement
            </p>
          </Col>
          <Col
           md={4} lg={3} xl={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                53%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Faster project approvals
            </p>
          </Col>
          <Col
           md={4} lg={3} xl={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-lg-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                72%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Enhanced team collaboration
            </p>
          </Col>
          <Col
           md={4} lg={3} xl={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                38%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Reduction in meeting time
            </p>
          </Col>
          <Col
           md={4} lg={3} xl={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                82%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Better customer satisfaction scores
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessCase;
