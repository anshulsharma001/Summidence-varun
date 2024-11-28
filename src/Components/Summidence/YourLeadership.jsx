import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star_img from "../../assets/img/svg/Star.svg";

const YourLeadership = () => {
  return (
    <div className="mb-md-5 pb-md-5">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="ff_Poppins fw-bold fs_48 common_clr_blue lh_132">
            Your Leadership Evolution Begins Here
          </h2>
          <p className="ff_Jakarta fs_20 fw-medium lh_132 common_clr_black para_nuture">
            The most successful leaders all share one common trait: the ability
            to communicate their vision with clarity, confidence, and charisma.
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center mt-3">
          <div className="card_you_leadership w-100 h-100">
            <img src={star_img} alt="" />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
              Expert-led Workshops
            </p>
            <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
              Practical speaking skills developed through hands-on training with
              industry experts
            </p>
          </div>
          <div className="card_you_leadership w-100 h-100">
            <img src={star_img} alt="" />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
              Personalized Coaching
            </p>
            <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
              One-on-one sessions tailored to your specific goals and leadership
              style
            </p>
          </div>
          <div className="card_you_leadership w-100 h-100">
            <img src={star_img} alt="" />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
              Real-world Practice
            </p>
            <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
              Speaking opportunities in a supportive environment designed for
              growth
            </p>
          </div>
          <div className="card_you_leadership w-100 h-100">
            <img src={star_img} alt="" />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
              Advanced Techniques
            </p>
            <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
              Master the art of story telling and audience engagement through
              proven methodologies and contemporary techniques.
            </p>
          </div>
          <div className="card_you_leadership w-100 h-100">
            <img src={star_img} alt="" />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
              Confidence Building
            </p>
            <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
              Learn effective strategies for managing speaking anxiety and
              building lasting confidence in your communication abilities.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YourLeadership;
