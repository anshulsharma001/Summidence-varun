import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import video_one from "../../assets/img/video/0621 2MC Tail Wagging the Dog.mp4";

const Jason = () => {
  return (
    <>
      <Container className="space_jason">
        <Row>
          <Col lg={7} className="text-center text-lg-start">
            <div>
              <h2 className="ff_Poppins fw-semibold fs_48 lh_118 common_clr_blue mb-0">
                Jason’s{" "}
                <span className="d-block common_clr_black">
                  2 Minute Convictions
                </span>
              </h2>
              <p className="ff_Poppins fw-medium fs_16 lh_140 common_clr_black mb-0 mt-3">
                If you have a minute or two to spare each week, subscribe to
                Jason’s leadership insights: #2MinuteConvictions.
              </p>
              <button className="common_bttn ff_Poppins fw-light fs_16 lh_175 text-white mt-md-4">
                Full Playlist
              </button>
            </div>
          </Col>
          <Col lg={5} className="mt-4 mt-lg-0">
            <div className="text-center text-lg-start">
              <video
                autoPlay
                loop
                muted
                className="video h-100"
                src={video_one}
                controls
              ></video>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jason;
