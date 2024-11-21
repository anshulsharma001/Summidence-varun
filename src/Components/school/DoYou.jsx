import single_girl from "../../assets/img/webp/single-girl.png";
import happy_children from "../../assets/img/webp/happy-children.png";
import baby_boy from "../../assets/img/webp/baby-boy.png";
import drawing_children from "../../assets/img/webp/drawing-children.png";
import { Man_logo } from "../common/Icon";
const DoYou = () => {
  return (
    <div className="bg-common_clr_blue py-do-you">
      <div className="custom_container container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <p className="fs_24 lh_140 fw-normal ff_Jakarta text-white mb-0">
              Do you need any help
            </p>
            <h2 className=" ff_Poppins fs_56 lh_151 fw-semibold text-white mb-0">
              A better learning Journey Future Start Here
            </h2>
            <div className="d-flex align-items-center gap_padding_btn_do_you">
              <button className="do_you_bttn  ff_Poppins fw-medium fs_18 text-white border-0">
                Get started
              </button>
              <button className="do_you_dashed_btn bg-transparent  ff_Poppins fw-medium fs_18 text-white">
                Why us?
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-sm-5 mt-4 mt-lg-0">
            <div className="max_w_590 mx-auto mx-lg-0 d-flex align-items-center gap_do_you_image position-relative">
              <div className="image_box position-absolute">
                <span className="d-flex justify-content-center">
                  <Man_logo />
                </span>
                <p className="ff_Poppins fw-bold fs_24 lh_140 color_green text-center mt-sm-2 mt-1">
                  3468
                </p>
                <p className=" ff_Poppins fw-normal fs_18 lh_151 text-black text-center mt-sm-2 mt-1">
                  Total students
                </p>
                <button className=" ff_Poppins fw-normal fs_14 lh_140 text-white get_started_button border-0">
                  Get started
                </button>
              </div>
              <div className="d-flex flex-column gap-md-5 gap-4">
                <img
                  src={single_girl}
                  alt="single_girl"
                  className="single_girl w-100 object-fit-cover"
                />
                <img
                  src={happy_children}
                  alt="single_girl"
                  className="happy_children w-100 object-fit-cover"
                />
              </div>
              <div className="d-flex flex-column gap-md-3 gap-2">
                <img
                  src={baby_boy}
                  alt="single_girl"
                  className="baby_boy w-100 object-fit-cover ms-auto"
                />
                <img
                  src={drawing_children}
                  alt="single_girl"
                  className="drawing_children w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYou;
