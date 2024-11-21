import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import video_one from "../../assets/img/video/0621 2MC Tail Wagging the Dog.mp4";

const Belajar = () => {
  return (
    <div>
      <Container className="space_belajar">
        <Row className=" align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="ff_Poppins fw-normal fs_24 lh_118 txt_clr_orange mb-0">
              Video
            </p>
            <h2 className=" ff_Poppins fw-bold fs_36 lh_122 common_clr_blue mb-0 mt-1">
              SMK Mangcoding belajar
            </h2>
            <p className="ff_Poppins fw-normal fs_20 lh_118 common_clr_black mb-0 mt-3">
              Video detail SMK Mangcoding Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </Col>
          <Col md={6} className="mt-3">
            <video
              autoPlay
              loop
              muted
              className="video h-100"
              src={video_one}
              controls
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Belajar;
