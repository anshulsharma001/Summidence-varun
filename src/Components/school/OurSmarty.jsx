import React from 'react'
import pre_school from "../../assets/img/School/Png/pre-school.png";
import Kindergarten from "../../assets/img/School/Png/kindergarten.png";
import pre_k from "../../assets/img/School/Png/pre-k.png";
import { Col, Row } from 'react-bootstrap';
const preschoolData = [
    {
        image: pre_school,
        alt: "pre school",
        text: "Preschool (2 – 3 years)"
    },
    {
        image: Kindergarten,
        alt: "pre school",
        text: "Kindergarten (3 – 5 years)"
    },
    {
        image: pre_k,
        alt: "pre school",
        text: "Pre-K For All (6 years)"
    },
];
const OurSmarty = () => {
    return (
        <div className='pt-sm-4 pb-5 mb-lg-5 mb-md-3 mb-sm-2'>
            <div className="custom-container container">
                <h3 className="ff_Poppins fw-bold text-center fs_48 lh_151 common_clr_blue mb-3">
                    Our Smarty Program</h3>
                    <Row className="mt-lg-5 justify-content-center">
                    {preschoolData.map(item => (
                <Col lg={4} sm={6} className='mt-md-4 mt-3 mt-lg-0'>
                    <img src={item.image} alt={item.alt} className='our_smarty_img w-100  mb-lg-4 mb-md-3 mb-sm-2 mb-1' />
                    <p className='text-center ff_Poppins fw-semibold fs_24 lh_151 common_clr_blue pt-1 mb-0'>{item.text}</p>
                </Col>
            ))}
                    </Row>
            </div>
        </div>
    )
}

export default OurSmarty