import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import video_one from "../assets/img/video/0621 2MC Tail Wagging the Dog.mp4";

const Jason = () => {
  return (
    <>
    <Container className='space_jason'>
        <Row>
            <Col md={7}>
            <div>
                <h2 className='ff_Poppins fw-semibold fs_64 lh_118 common_clr_blue mb-0'>Jason’s <span className='d-block common_clr_black'>2 Minute Convictions</span></h2>
                <p className='ff_Poppins fw-medium fs_32 lh_140 common_clr_black mb-0 mt-2'>If you have a minute or two to spare each week, subscribe to Jason’s leadership insights: #2MinuteConvictions.</p>
                <button className='common_bttn ff_Jakarta fw-semibold fs_20 lh_175 text-white mt-md-4'>Full Playlist</button>
            </div>
            </Col>
            <Col md={5}>
            <div>
            <video autoPlay loop muted className='video h-100' src={video_one} controls></video>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Jason