import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import child_girl from "../../assets/img/kids/png/child-girl.png";
const ages = [3, 4, 5, 6, 7, 8];
const MakingKids = () => {
    return (
        <div className='py-lg-5 py-md-4 py-sm-3 py-2 bg-common_clr_blue'>
            <Container className='py-5'>
                <Row className=' align-items-center'>
                    <Col lg={6}>
                        <h2 className=' ff_Poppins fw-bold fs_64 text-white lh_140 mb-0 max_w_596'>Making Kids Fall in Love with Math!
                        </h2>
                        <p className=' ff_Poppins fw-semibold mt-2 fs_16 lh_151 text-white mb-0'>Book your FREE class with age group
                        </p>
                        <div className=' d-flex align-items-center flex-wrap gap-md-4 gap-3 mt-4'>
                            {ages.map(age => (
                                <button
                                    key={age} // Unique key for each button
                                    className='d-flex align-items-center justify-content-center p-3 making_kids_btn ff_Poppins fw-medium fs_20 lh_140 mb-0 text-white w-100 h-100 bg-transparent'
                                >
                                    age - {age}
                                </button>
                            ))}
                        </div>
                        <button className='book_free_btn w-100 ff_Poppins fw-semibold fs_18 lh_151 text-white d-flex justify-content-center text-center mt-5'>Book a free live class</button>
                    </Col>
                    <Col lg={6} className='mt-4 mt-lg-0'>
                        <img src={child_girl} alt="child girl" className='w-100 child_girl' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MakingKids