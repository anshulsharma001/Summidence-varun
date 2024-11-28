import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import video_one from "../../assets/img/video/0621 2MC Tail Wagging the Dog.mp4";

const Jason = () => {
  return (
    <>
      <Container className="space_jason">
        <Row>
          <Col lg={6} className="text-center text-lg-start">
            <div>
              <h2 className="ff_Poppins fw-semibold fs_48 lh_118 common_clr_blue mb-0">
                Ready to Transform
                <span className="d-block common_clr_black">
                  Your Leadership Journey?
                </span>
              </h2>
              <p className="ff_Poppins fw-medium para_jason fs_16 lh_140 common_clr_black mt-3 mb-md-5">
                Join the ranks of successful leaders who have unlocked their
                true potential through Summidence. Our comprehensive program is
                designed to take you from where you are to where you never
                thought you could be.
              </p>
              <a
                href="https://www.youtube.com/watch?v=APgXnD--XTM&list=PL6QLrxQa57fUSMcrrFjTwme7NbnbWvdMJ"
                className="text-decoration-none common_bttn ff_Poppins fw-light fs_16 lh_100 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Playlist
              </a>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <div className="text-center text-lg-start">
              <video
                autoPlay
                loop
                muted
                className="jason_video h-100"
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
