import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image_one from "../assets/img/webp/Group-8 (1).webp";
import image_two from "../assets/img/webp/image.webp";
import image_three from "../assets/img/webp/image-4 (1).webp";

const Getyourcopy = () => {
  return (
    <>
    <Container className='mt-5'>
        <Row>
            <Col lg={4}>
            <div className='common_card'>
               <img className='card_common_img' src={image_one} alt="" />
               <h2 className='ff_Jakarta fw-semibold fs_32 text-white lh_125 mt-3 mb-0'>READ ONE OF JASON’S LATEST BOOKS</h2>
               <p className='ff_Poppins fw-medium fs_20 lh_132 text_clr_light_grey mb-1'>Jason is an accomplished author whose books have captivated readers with their depth and insight. Drawing from his own life experiences, Jason weaves stories of leadership, business, healthcare and faith into actionable learnings that resonate with most.</p>
               <button className='common_bttn ff_Jakarta fw-semibold fs_20 lh_175 text-white mt-md-2'>Get your copy ></button>
            </div>
            </Col>
            <Col lg={4}>
            <div className='common_card'>
               <img className='card_common_img' src={image_two} alt="" />
               <h2 className='ff_Jakarta fw-semibold fs_32 text-white lh_125 mt-3 mb-0'>READ ONE OF JASON’S LATEST BOOKS</h2>
               <p className='ff_Poppins fw-medium fs_20 lh_132 text_clr_light_grey mb-1'>Jason is an accomplished author whose books have captivated readers with their depth and insight. Drawing from his own life experiences, Jason weaves stories of leadership, business, healthcare and faith into actionable learnings that resonate with most.</p>
               <button className='common_bttn ff_Jakarta fw-semibold fs_20 lh_175 text-white mt-md-2'>Get your copy ></button>
            </div>
            </Col>
            <Col lg={4}>
            <div className='common_card'>
               <img className='card_common_img' src={image_three} alt="" />
               <h2 className='ff_Jakarta fw-semibold fs_32 text-white lh_125 mt-3 mb-0'>READ ONE OF JASON’S LATEST BOOKS</h2>
               <p className='ff_Poppins fw-medium fs_20 lh_132 text_clr_light_grey mb-1'>Jason is an accomplished author whose books have captivated readers with their depth and insight. Drawing from his own life experiences, Jason weaves stories of leadership, business, healthcare and faith into actionable learnings that resonate with most.</p>
               <button className='common_bttn ff_Jakarta fw-semibold fs_20 lh_175 text-white mt-md-2'>Get your copy ></button>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Getyourcopy