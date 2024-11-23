import React from "react";
import about_our_school from "../../assets/img/webp/about-our-school.png";
const AboutOurSchool = () => {
  return (
    <div className="py-5 my-lg-5 my-md-3 my-sm-2">
      <div className="container custom_container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-12">
            <img
              src={about_our_school}
              alt="about our school"
              className="about_our_school_img d-flex mx-auto w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-xl-8 col-12 mt-4 text-center text-xl-start justify-content-center d-flex">
            <div className="ps-xl-4 max_w_810">
              <h3 className="ff_Poppins fw-bold fs_48 lh_151 common_clr_blue mb-3">
                About Our School
              </h3>
              <p className=" ff_Poppins fw-semibold fs_16 lh_151 text-black pt-xl-4 mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <p className=" ff_Poppins fw-normal fs_16 lh_151 text-black pt-3 mb-xl-3 mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <div className="d-flex justify-content-between align-items-center gap_about_student flex-sm-nowrap flex-wrap pt-4 ">
                <p className=" ff_Poppins fw-semibold fs_48 lh_151 mb-0 text-black max_w_130">
                  <span className="position-relative bottom_line">2100+</span>
                  <span className=" fs_32 d-block">Students</span>
                </p>
                <p className=" ff_Poppins fw-semibold fs_48 lh_151 mb-0 text-black max_w_130">
                  <span className="position-relative bottom_line">2100+</span>
                  <span className=" fs_32 d-block">Students</span>
                </p>
                <p className=" ff_Poppins fw-semibold fs_48 lh_151 mb-0 text-black max_w_130">
                  <span className="position-relative bottom_line">2100+</span>
                  <span className=" fs_32 d-block">Students</span>
                </p>
                <p className=" ff_Poppins fw-semibold fs_48 lh_151 mb-0 text-black max_w_130">
                  <span className="position-relative bottom_line">2100+</span>
                  <span className=" fs_32 d-block">Students</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurSchool;
