import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teacher_img from "../../assets/img/School/Png/Teacher.png";

const Teacher = () => {
  return (
    <div>
      <Container>
        <Row className=" align-items-center text-center text-md-start">
          <Col md={6}>
            <h3 className=" ff_Poppins fw-semibold fs_48 common_clr_blue lh_132">
              Teacher Development
            </h3>
            <p className=" ff_Poppins fw-medium fs_24 lh_132 common_clr_black">
              We empower your faculty with comprehensive support, including
              professional development workshops, invaluable teaching resources
              and materials, ongoing coaching support, effective assessment
              tools and rubrics, and regular progress reports to enhance
              educational excellence and foster continuous growth.
            </p>
          </Col>
          <Col md={6}>
            <img className="w-100 h-100 teacher_img" src={teacher_img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Teacher;
