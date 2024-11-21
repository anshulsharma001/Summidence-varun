import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img from "../../assets/img/webp/image (1).webp";
import logo from "../../assets/img/webp/footer-logo.png";
import{ Link, NavLink} from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when the menu icon is clicked
    if (!isOpen) {
      document.body.classList.add("overflow-hidden"); // Prevent body scroll when menu is open
    } else {
      document.body.classList.remove("overflow-hidden"); // Allow body scroll when menu is closed
    }
  };

  return (
    <>
      <nav className="z-3 custom_container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center w-100 justify-content-between">
          {/* Logo */}
          <a href="/" className="d-flex align-items-center">
            <img className="w-25" src={logo} alt="Logo" />
          </a>

          {/* Navigation Links */}
          <ul
            className={`d-flex flex-lg-row flex-column align-items-center mb-0 p-0 ${
              isOpen ? "open" : ""
            } gap-3 gap-lg-5 w-100`}
          >
            <li className="mb-0">
              <a
                href="#About"
                className="ff_Raleway fs_16 fw_500 text-black position-relative headline"
              >
                Kids
              </a>
            </li>
            <li className="mb-0">
              <a
                href="/school"
                className="ff_Raleway fs_16 fw_500 text-black position-relative headline"
              >
                School
              </a>
            </li>
            <li className="mb-0">
              <a
                href="about-us"
                className="ff_Raleway fs_16 fw_500 text-black position-relative headline"
              >
                About us
              </a>
            </li>
            <li className="mb-0">
              <a
                href="#Team"
                className="ff_Raleway fs_16 fw_500 text-black position-relative headline"
              >
                Business
              </a>
            </li>
            <li>
              <button className="common_bttn color-1 ff_Raleway fw_500 fs_16">
                Let’s connect
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="open d-block d-lg-none navicon"
            onClick={toggleMenu}
          >
            <div className={`menuicon ${isOpen ? "cross" : ""}`}></div>
            <div className={`menuicon my-2 ${isOpen ? "cross" : ""}`}></div>
            <div className={`menuicon ${isOpen ? "cross" : ""}`}></div>
          </button>
        </div>
      </nav>
      <Container className="mt_90 p-xl-0">
        <Row className="p-xl-0 align-items-center text-center text-lg-start">
          <Col lg={6} className="p-xl-0">
            <div>
              <h1 className="ff_Poppins mb-1 fw-semibold fs_56 lh_151 common_clr_blue">
                Living and Leading with conviction
              </h1>
              <p className="mb-1 fw-light fs_16 ff_Jakarta common_clr_black mt-md-2">
                Jason inspires us to live and lead with conviction. To make
                choices that are intentional, strategic, passionate, and
                uncompromising in their purpose. To identify what is most
                important to you, and to do something about it.
              </p>
              <button className="common_bttn ff_Poppins fw-light fs_18 lh_175 text-white mt-2">
                Learn More
              </button>
            </div>
          </Col>
          <Col lg={6} className="p-xl-0 mt-2 mt-md-4 mt-lg-0">
            <img className="header_img w-100" src={header_img} alt="Header" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
