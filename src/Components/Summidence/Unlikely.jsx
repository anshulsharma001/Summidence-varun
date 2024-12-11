import React from "react";
import { Container } from "react-bootstrap";

const Unlikely = () => {
  return (
    <>
      <Container>
        <div className="space_unlikely text-center text-lg-start">
          <div className=" d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="ff_Jakarta fw-bolder fs_48 lh_122 common_clr_blue mb-md-4">
              Inspiring Words from Visionaries
            </h2>
            <p className="ff_Jakarta fw-bold para_unlikely fs_20 lh_132 common_clr_black mb-1">
              Aristotle:
              <em className="fw-normal">
                "The one who knows what to say can learn to say it well."
              </em>
            </p>
            <p className="ff_Jakarta fw-bold para_unlikely fs_20 lh_132 common_clr_black mb-1">
              Ralph Waldo Emerson:
              <em className="fw-normal">
                "All the great speakers were bad speakers at first."
              </em>
            </p>
            <p className="ff_Jakarta fw-bold para_unlikely fs_20 lh_132 common_clr_black mb-0">
              Dr. Seuss:
              <em className="fw-normal">
                "You have brains in your head. You have feet in your shoes. You
                can steer yourself any direction you choose."
              </em>
            </p>
            <p className="ff_Poppins fw-medium fs_18 common_clr_black lh_151 para_kids_tab me-md-5 mt-4">
              Embark on the journey to unlock your full confidence and unleash
              your leadership potential—it all begins with a single step. At
              Summidence, we’re here to guide and support you every step of the
              way to reach the pinnacle of your success. We have expert-led
              workshops, group or personal coaching, real-world speaking
              opportunities, and strategies to manage anxiety, to help you build
              confidence, and allow you to communicate your vision with clarity,
              confidence and charisma.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Unlikely;
