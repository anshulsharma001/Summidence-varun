import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_img from "../assets/img/webp/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container className="">
        <Row className="space_row d-flex justify-content-between">
          <Col md={3}>
            <div>
              <img className="w-100 h-50" src={footer_img} alt="" />
            </div>
          </Col>
          <Col md={2} className="p-0">
            <ul className="p-0 m-0">
              <li className="mb-0">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Jason’s Story
                </a>
              </li>
              <li className="mt-3">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Speaking
                </a>
              </li>
              <li className="mt-3">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Books
                </a>
              </li>
              <li className="mt-3">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Books
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="p-0">
            <ul className="m-0 p-0">
              <li className="m-0 p-0">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Mentorship
                </a>
              </li>
              <li className="m-0 p-0 mt-3">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Media
                </a>
              </li>
              <li className="m-0 p-0 mt-3">
                <a
                  href=""
                  className="ff_Poppins fw-medium fs_24 common_clr_black lh_140"
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={5} className="p-0">
            <h2 className="ff_Poppins fw-semibold fs_28 lh_132">
              How can I empower you to live with conviction?
            </h2>
            <p className="ff_Poppins fw-medium fs_24 lh_132">
              Ask me a question, tell me your story, or share your feedback.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
