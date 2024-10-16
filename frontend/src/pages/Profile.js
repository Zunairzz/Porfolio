import React from 'react';
import '../css/Profile.css'
import zuni from '../image/zuni_png.png'
import {Card, CardBody, CardImg, Col, Row} from "reactstrap";

const Profile = () => {
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center">
                    <div className="text-center p-3">
                        <div className="hello-badge">Hello!</div>
                        <h1 className="profile-name mt-2">
                            I'm <span className="highlight-name">Zunair</span>,<br/>
                            Full Stack Developer
                        </h1>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:"5rem"}}>
                <Col xl={4} lg={4} md={4} className="d-flex" style={{backgroundColor: "pink"}}>
                    <div className="profile-quote">
                        <blockquote>
                            I break down complex user experience problems to create integrity-focused
                            solutions that connect billions of people.
                        </blockquote>
                    </div>
                </Col>
                <Col xl={4} lg={4} md={4} className="profile-background">
                    <Card className="d-flex justify-content-center align-items-center bg-transparent border-0">
                        <CardBody>
                            <img
                                className="profile-pic"
                                alt="Sample"
                                src={zuni}
                            />
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="portfolio-button">Portfolio ↗</button>
                                <button className="hireme-button">Hire me</button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={4} lg={4} md={4} style={{backgroundColor: "yellow"}}>
                    <div className="profile-experience">
                        <div className="stars">★★★★★</div>
                        <div className="experience-years">3 Years Experience</div>
                    </div>
                </Col>

            </Row>
        </>
        // <div className="profile-card">
        //     <div className="profile-header">
        //         <div className="hello-badge">Hello!</div>
        //         <h1 className="profile-name">
        //         I'm <span className="highlight-name">Zunair</span>,<br/>
        //             Full Stack Developer
        //         </h1>
        //     </div>
        //
        //     <div className="profile-body">
        //         <div className="profile-quote">
        //             <blockquote>
        //                 I break down complex user experience problems to create integrity-focused
        //                 solutions that connect billions of people.
        //                 </blockquote>
        //             </div>
        //
        //             <div className="profile-experience">
        //                 <div className="stars">★★★★★</div>
        //                 <div className="experience-years">3 Years Experience</div>
        //             </div>
        //         </div>
        //         <div className="profile-container">
        //             <div className="profile-background">
        //
        //                     <img
        //                         src= {zuni}// Replace with actual path to the image
        //                         alt="Profile"
        //                         className="profile-pic"
        //                     />
        //
        //             </div>
        //             <div className="profile-buttons">
        //                 <button className="portfolio-button">Portfolio ↗</button>
        //                 <button className="hireme-button">Hire me</button>
        //             </div>
        //         </div>
        //     </div>
    );
};
export default Profile;