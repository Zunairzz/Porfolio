import React from 'react';
import '../css/Profile.css'
import {Col, Container, Row} from "reactstrap";
import zuni from "../image/zuni_png.png"

const Profile = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center">
                    <div className="text-center p-3">
                        <div style={{
                            border: "1px solid black",
                            borderRadius: '20px',
                            display: 'inline-block',
                            padding: '5px 15px',
                            fontWeight: '500'
                        }}>
                            Hello!
                        </div>
                        <h1 className="profile-name mt-2">
                            I'm <span style={{color: '#ff6600'}}>Zunair</span>,<br/>
                            Full Stack Developer
                        </h1>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-between" style={{margin: "7rem 2rem"}}>
                <Col xl={4} lg={4} md={6} sm={12}>
                    <div className="profile-quote mt-3 left-text" style={{fontWeight: 500}}>
                        <blockquote>
                            I break down complex user experience problems to create integrity-focused solutions
                            that connect billions of people.
                        </blockquote>
                    </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12} style={{textAlign: "right"}}>
                    <div className="right-text">
                        <div style={{fontSize: '2rem', color: '#ff6600', marginBottom: '-1rem'}}>★★★★★</div>
                        <div style={{fontSize: '3rem', fontWeight: '500', color: '#333', marginBottom: '-1rem'}}>3
                            Years
                        </div>
                        <div style={{fontSize: '1rem', paddingLeft: "60px"}}>Experience</div>
                    </div>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center profile-pic">
                <Col xl={6} lg={8} md={10} sm={12} className="text-center" style={{marginTop: "-350px"}}>
                    <img className="img-fluid" alt="Sample" src={zuni}/>
                </Col>
            </Row>
        </Container>
    );
};
export default Profile;