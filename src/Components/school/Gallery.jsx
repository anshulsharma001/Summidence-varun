import React from "react";
import { Container } from "react-bootstrap";
import img_one from "../../assets/img/School/Png/1.png";
import img_two from "../../assets/img/School/Png/2.png";
import img_three from "../../assets/img/School/Png/3.png";
import img_four from "../../assets/img/School/Png/4.png";
import img_five from "../../assets/img/School/Png/5.png";
import img_six from "../../assets/img/School/Png/6.png";

const Gallery = () => {
  return (
    <div>
      <Container className="p-lg-0 space_gallery">
        <div className="text-center">
          <h2 className=" ff_Poppins fs_56 fw-bold lh_125 common_clr_blue mb-0">
            Gallery
          </h2>
          <div className="space_img_gallery mb-md-3">
            <div className="d-md-flex justify-content-between mb-2">
              <img
                className="w-100 h-100 img_gallery mt-3 mt-md-0"
                src={img_one}
                alt=""
              />
              <img
                className="w-100 h-100 img_gallery mt-3 mt-md-0"
                src={img_two}
                alt=""
              />
              <img
                className="w-100 h-100 img_gallery mt-3 mt-md-0"
                src={img_three}
                alt=""
              />
            </div>
            <div className="d-md-flex justify-content-between mt-md-3">
              <img
                className="w-100 h-100 img_gallery mt-3 mt-md-0"
                src={img_four}
                alt=""
              />
              <img
                className="w-100 h-100 img_gallery mt-3 mt-md-0"
                src={img_five}
                alt=""
              />
              <img
                className="w-100 h-100 img_gallery mt-3 mt-md-0"
                src={img_six}
                alt=""
              />
            </div>
          </div>
          <button className="do_you_bttn ff_Poppins fw-medium fs_18 text-white lh_118 border-0 mt-4">
            See More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
