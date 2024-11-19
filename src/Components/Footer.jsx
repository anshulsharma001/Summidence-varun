import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_img from "../assets/img/webp/footer-logo.png";
import Icon, { Materials } from "./Icon";

const Footer = () => {
  return (
    <>
      <Container>
        <Row className="space_row">
          <Col md={4}>
            <div>
              <img className="w-50 h-50" src={footer_img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
