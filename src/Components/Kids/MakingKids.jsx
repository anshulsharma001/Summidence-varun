import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import standing_kid from "../../assets/img/kids/png/header-kid.png";
const MakingKids = () => {
  return (
    <div className="py-lg-5 py-md-4 py-sm-3 py-2 bg-common_clr_blue">
      <Container className="py-5">
        <Row className="align-items-center text-center text-md-start">
          <Col lg={6}>
            <h1 className="ff_Poppins fw-semibold fs_54 text-white lh_122 mb-0">
              Empower Your Child's Voice Shaping Tomorrow's Leaders.
            </h1>
            <p className="ff_Poppins fw-medium mt-2 fs_16 lh_151 opacity-75 text-white mb-0 me-5">
              Every parent dreams of nurturing a confident and successful child.
              At Summidence Kids, we empower young minds by transforming their
              natural expressiveness into lifelong communication skills.
              Together, we build tomorrow’s leaders, today.
            </p>
            <button className="book_free_btn w-100 ff_Poppins fw-semibold fs_18 lh_151 text-white d-flex justify-content-center text-center mt-3">
              Book a free live class
            </button>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <img
              src={standing_kid}
              alt="child girl"
              className="w-100 child_girl"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakingKids;
