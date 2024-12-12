import React, { useState } from "react";
import logo from "../../assets/img/webp/footer-logo.png";
const Navbar = () => {
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
    <nav className="z-3 py-md-4 py-3">
      <div className="container custom_container">
        <div className="d-flex align-items-center w-100  justify-content-between">
          {/* Logo */}
          <a href="/">
            <img className="navbar_logo" src={logo} alt="Logo" />
          </a>
          {/* Navigation Links */}
          <ul
            className={`d-flex flex-lg-row flex-column align-items-center mb-0 p-0 ${
              isOpen ? "open" : ""
            } gap-3 gap-lg-5 `}
          >
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/"
                className=" ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                Home
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/Business"
                className=" ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                Business
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/school"
                className=" ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                School
              </a>
              
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/kids"
                className=" ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                Students
              </a>
            </li>

            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="about-us"
                className=" ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                About us
              </a>
            </li>

            <li className=" list-unstyled">
              <button
                className="common_bttn text-white ff_Poppins fw-normal fs_16"
                onClick={toggleMenu}
              >
                Contact'Us
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
      </div>
    </nav>
  );
};

export default Navbar;
