import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import video_one from "../../assets/img/video/0621 2MC Tail Wagging the Dog.mp4";

const Jason = () => {
  return (
    <>
      <Container className="space_jason">
        <div>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <h2 className="ff_Poppins fw-semibold fs_36 lh_118 common_clr_blue mb-0">
              Ready to elevate your confidence
              <span className="d-block common_clr_black">
                in communication and leadership journey?
              </span>
            </h2>
            <p className="ff_Poppins fw-medium para_jason fs_16 lh_140 common_clr_black mt-3 mb-md-5">
              Ready to unlock your true potential and master the art of speaking
              with confidence? Don’t wait any longer—take the first step today!
              Click now to sign up or contact us to learn more about our
              transformative speaking programs and how it can help you achieve
              your goals. Your journey to success starts here!
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
        </div>
      </Container>
    </>
  );
};

export default Jason;
