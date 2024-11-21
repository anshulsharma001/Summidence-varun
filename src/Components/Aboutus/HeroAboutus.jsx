import React from "react";
import { Container } from "react-bootstrap";

const HeroAboutus = () => {
  return (
    <div className="bg_about_us">
      <Container className="space_aboutus">
        <div className=" text-center">
          <p className="ff_Poppins fw-light fs_16 lh_132 txt_clr_orange mb-0">
            About Us
          </p>
          <h1 className=" ff_Poppins fw-normal fs_72 lh_122 text-white mt-4 mb-0">
            Our vision is to make work
            <span className="d-lg-block">inspiring and fulfilling</span>
          </h1>
          <p className=" ff_Poppins fw-light fs_22 lh_118 text-white mb-0 mt-4">
            HRLInk is a cloud-based HR system designed to simplify and
            <span className="d-lg-block">
              streamline HR processes. Grove HR is a powerful tool that can help
            </span>
            <span className="d-lg-block">
              SMB businesses manage their HR operations with ease.
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroAboutus;
