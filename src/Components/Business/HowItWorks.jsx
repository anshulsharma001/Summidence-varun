import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card_Box, Card_calendar, Card_graph } from "../common/Icon";

const HowItWorks = () => {
  return (
    <div className="sapce_how_business">
      <Container>
        <div className="text-center">
          <h2 className="ff_Poppins fw-semibold fs_48 lh_132 common_clr_blue mb-0">
            How it works
          </h2>
          <p className="ff_Poppins fw-normal fs_16 lh_118 text_clr_grey mb-0 mt-2">
            Businesses generally promote their brand, products, and
            <span className="d-lg-block">
              services by identifying audience.
            </span>
          </p>
        </div>
        <Row className="justify-content-center justify-content-lg-between mt-lg-5 pt-4">
          <Col md={6} lg={4} className="p-lg-0 d-flex justify-content-lg-center">
            <div className="card_how w-100 h-100">
              <Card_Box />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-0 mt-5">
                Choose packages
              </p>
              <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-3">
                Businesses generally promote their brand,
                <span className="d-lg-block">
                  products, and services by identifying
                </span>
                <span className="d-lg-block">audience or users.</span>
              </p>
            </div>
          </Col>
          <Col md={6} lg={4} className="p-lg-0 d-flex justify-content-lg-center mt-3 mt-md-0">
            <div className="card_how w-100 h-100">
              <Card_calendar />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-0 mt-5">
                Schedule appointment
              </p>
              <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-3">
                When you have important information to
                <span className="d-lg-block">
                  pass onto your people, text messaging
                </span>
                <span className="d-lg-block">can be a great way to do it.</span>
              </p>
            </div>
          </Col>
          <Col md={6} lg={4} className="p-lg-0 d-flex justify-content-lg-center mt-3 mt-lg-0">
            <div className="card_how w-100 h-100">
              <Card_graph />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-0 mt-5">
                Grow together
              </p>
              <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-3">
                Texting can sometimes come across as an
                <span className="d-lg-block">
                  impersonal way to communicate, it
                </span>
                <span className="d-lg-block"> can be highly beneficial.</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;
