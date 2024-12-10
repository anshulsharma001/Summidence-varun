import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BeyondPublic = () => {
  const sectionRef = useRef(null);
  const counters = [
    { id: 1, value: 65, text: "Feel more confident in leadership roles" },
    { id: 2, value: 47, text: "See improvement in daily communications" },
    { id: 3, value: 53, text: "Received new career opportunities" },
    { id: 4, value: 72, text: "Report better team engagement" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all counters
    const counters = sectionRef.current.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const targetValue = +counter.dataset.value;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            counter.innerText = `${Math.round(counter.innerText)}%`;
          },
        }
      );
    });
  }, []);

  return (
    <div className="mb-5 pb-5" ref={sectionRef}>
      <Container>
        <h2 className="ff_Poppins fw-bold fs_48 lh_125 common_clr_blue text-center">
          Beyond Public Speaking
        </h2>
        <Row className="mt-md-5 pt-md-3 justify-content-center">
          {counters.map((counter) => (
            <Col
              md={4}
              lg={3}
              key={counter.id}
              className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
            >
              <div className="box_business_case d-flex justify-content-center align-items-center">
                <p
                  className="counter ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0"
                  data-value={counter.value}
                >
                  0%
                </p>
              </div>
              <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3 w-75">
                {counter.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BeyondPublic;
