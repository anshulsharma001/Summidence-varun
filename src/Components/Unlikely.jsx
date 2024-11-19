import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Unlikely_img from "../assets/img/webp/image-2 (1).webp";

const Unlikely = () => {
  return (
    <>
<Container>
    <div className='space_unlikely text-center text-lg-start'>
        <h2 className='ff_Jakarta fw-bold fs_64 lh_55 common_clr_blue mb-md-5'><span className='position-relative common_underline'>UNLIKELY</span></h2>
        <p className='ff_Jakarta fw-bold fs_40 lh_132 common_clr_black mb-0 mt-4'>The surprising personal story behind the garage startup that became a $100m national health brand.</p>
    </div>
    <Row className='mt-lg-5 text-center text-lg-start align-items-center align-self-lg-start justify-content-center justify-content-lg-start'>
        <Col lg={6}>
        <div>
            <img className='w-100 h-100 img_unlikely' src={Unlikely_img} alt="" />
        </div>
        </Col>
         <Col lg={6}>
         <div >
            <p className='ff_Poppins fw-normal fs_24 common_clr_black lh_158'>“It’s hard to put this book down. It lifts from the page as you read it and takes you on a journey with a man intent on making his life count. What strikes me is Jason Smith’s honesty, drive and integrity. I love the way his faith undergirds his business decision-making, even when the pressure is enormous. A must-read if you want to make your life, your work and your business thrive with an impact that matters.”</p>
            <p className='ff_Poppins fw-normal fs_24 common_clr_black lh_158'>Rev Tim Costello AO <span className='d-block'>Director, Ethical Voice</span><span className='d-block'>Former CEO, World Vision Australia</span><span className='d-block'>Rated Top 100 in Australia’s National Living Treasures,</span><span className='d-block'>National Trust poll 2014</span><span className='d-block'>Victorian of the Year 2004</span><span className='d-block'>Australian Peace Prize 2008</span></p>
            <button className='common_bttn ff_Jakarta fw-semibold fs_20 lh_175 text-white mt-md-2'>Get your copy ></button>
         </div>
        </Col>
    </Row>
</Container>
    </>
  )
}

export default Unlikely