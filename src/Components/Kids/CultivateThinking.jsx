import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Down_arrow } from "../common/Icon";
import boy from "../../assets/img/kids/png/boy.png";
import three from "../../assets/img/svg/3.svg";
import geomatry from "../../assets/img/svg/geomatry.svg";
import logic_and_pattern from "../../assets/img/svg/logic-and-pattern.png";
import problem from "../../assets/img/svg/problem-solving.svg";
const CultivateThinking = () => {
  const [activeTab, setActiveTab] = useState("S2"); // Default active tab

  const tabs = [
    {
      id: "S2",
      label: "S2",
      description: "3-4 Years Old",
      className: "s2_tab border_rIght",
    },
    {
      id: "S3",
      label: "S3",
      description: "5 Years Old",
      className: "border_rIght",
    },
    { id: "S4", label: "S4", description: "6 Years Old", className: "s4_tab" },
  ];
  return (
    <div className="py-5 my-xl-5">
      <Container className="pt-md-5 mt-xl-5 custom_container">
        <h3 className="ff_Poppins fw-bold text-center fs_48 lh_151 common_clr_blue mb-3">
          Cultivate thinking skills from all aspects
        </h3>
        <p className="text-center ff_Poppins fw-normal fs_16 lh_151 color_light_black mb-0">
          Our expert advisors can help you find the right workplace solution for
          you and your team
        </p>
        <div className="nav_tab mx-auto row">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`col_4 d-flex align-items-center justify-content-center flex-column cursor-pointer position-relative ${
                tab.className
              } ${activeTab === tab.id ? "activetab" : ""}`}
              onClick={() => setActiveTab(tab.id)} // Set active tab on click
            >
              <span
                className={`position-absolute down_arrow ${
                  activeTab === tab.id ? "" : "d-none"
                }`}
              >
                <Down_arrow />
              </span>
              <p
                className={`txt_clr_orange ff_Poppins fw-semibold fs_18 lh_140 mb-0 ${
                  activeTab === tab.id ? "active" : ""
                } `}
              >
                {tab.label}
              </p>
              <p
                className={`ff_Poppins fw-medium fs_15 lh_140 mb-0 txt_clr_orange ${
                  activeTab === tab.id ? "active" : ""
                }`}
              >
                {tab.description}
              </p>
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane ${
                activeTab === tab.id ? "active" : "d-none"
              }`}
            >
              {activeTab === "S2" && (
                <Row>
                  <Col lg={6}>
                    <img
                      src={boy}
                      alt="boy"
                      className="boy w-100 object-fit-cover"
                    />
                  </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <div className="d-md-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={three} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column mt-4 mt-md-0">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Number Sense{" "}
                          <span className=" d-block"> and Operations </span>
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Fluently compose and decompose numbers within 10{" "}
                          <span className="d-block">
                            Understand addition and subtraction within 10{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-md-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={geomatry} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column mt-4 mt-md-0">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Geometry
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Recognize 2D and 3D shapes
                          <span className="d-block">
                            Identify defining attributes of shapes (edges,{" "}
                          </span>{" "}
                          vertices, cross sections, nets, etc.)
                        </p>
                      </div>
                    </div>
                    <div className="d-md-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={logic_and_pattern} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column mt-4 mt-md-0">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Logic and Patterns
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Use analogical reasoning to solve Sudoku puzzles{" "}
                          <span className="d-block">
                            and understand the concept of cycles{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-md-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={problem} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column mt-4 mt-md-0">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Problem Solving
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Learn tangram puzzles and practice creating
                          <span className="d-block">
                            shapes using tangram pieces{" "}
                          </span>
                          Measure by iterating length units{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {activeTab === "S3" && (
                <Row>
                  <Col lg={6}>
                    <img
                      src={boy}
                      alt="boy"
                      className="boy w-100 object-fit-cover"
                    />
                  </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={logic_and_pattern} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Logic and Patterns
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Use analogical reasoning to solve Sudoku puzzles{" "}
                          <span className="d-block">
                            and understand the concept of cycles{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={problem} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Problem Solving
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Learn tangram puzzles and practice creating
                          <span className="d-block">
                            shapes using tangram pieces{" "}
                          </span>
                          Measure by iterating length units{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={three} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Number Sense{" "}
                          <span className=" d-block"> and Operations </span>
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Fluently compose and decompose numbers within 10{" "}
                          <span className="d-block">
                            Understand addition and subtraction within 10{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={geomatry} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Geometry
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Recognize 2D and 3D shapes
                          <span className="d-block">
                            Identify defining attributes of shapes (edges,{" "}
                          </span>{" "}
                          vertices, cross sections, nets, etc.)
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {activeTab === "S4" && (
                <Row>
                  <Col lg={6}>
                    <img
                      src={boy}
                      alt="boy"
                      className="boy w-100 object-fit-cover"
                    />
                  </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={problem} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Problem Solving
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Learn tangram puzzles and practice creating
                          <span className="d-block">
                            shapes using tangram pieces{" "}
                          </span>
                          Measure by iterating length units{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={three} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Number Sense{" "}
                          <span className=" d-block"> and Operations </span>
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Fluently compose and decompose numbers within 10{" "}
                          <span className="d-block">
                            Understand addition and subtraction within 10{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={logic_and_pattern} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Logic and Patterns
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Use analogical reasoning to solve Sudoku puzzles{" "}
                          <span className="d-block">
                            and understand the concept of cycles{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 mb-4 pb-2">
                      <span>
                        <img src={geomatry} alt="three" />
                      </span>
                      <div className="max_w_360 d-flex flex-column">
                        <p className=" ff_Poppins fw-medium fs_20 lh_140 text-black mb-0">
                          Geometry
                        </p>
                        <p className=" ff_Poppins fw-medium fs_14 lh_132 opacity-75 text-black mb-0 mt-1">
                          Recognize 2D and 3D shapes
                          <span className="d-block">
                            Identify defining attributes of shapes (edges,{" "}
                          </span>{" "}
                          vertices, cross sections, nets, etc.)
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CultivateThinking;
