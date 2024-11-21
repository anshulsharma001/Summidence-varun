import React from "react";
import { Right_logo } from "../common/Icon";
const coreValues = [
  { text: "Licensed Child Care" },
  { text: "High Quality Learning" },
  { text: "Super Talented Staff" },
];
const OurCoreValue = () => {
  return (
    <div className="py-5 my-lg-5 my-md-3 my-sm-2">
      <div className=" custom_container container">
        <h3 className="text-center ff_Poppins fw-bold fs_48 lh_151 common_clr_blue mb-0">
          Our Core Values
        </h3>
        <p className="ff_poppins fw-normal fs_18 lh_140 mt-sm-3 mt-2 text-center opacity_60 mb-md-3 mb-0 pb-1">
          We offer high quality Daycare Services for your kids, contact us or
          visit us today for <span className="d-block"> more information </span>
        </p>
        <div className="d-flex align-items-center gap_btn_core_value pt-4 justify-content-center flex-wrap">
          {coreValues.map((value) => (
            <button className="core_value_btn border-0 d-flex align-items-center gap-2">
              <span>
                <Right_logo />
              </span>
              <p className="ps-1 ff_Poppins fw-normal text-start fs_24 lh_140 common_clr_blue mb-0">
                {value.text}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoreValue;
