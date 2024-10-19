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
                        <div style={{ border:"1px solid black", borderRadius: '20px',display: 'inline-block',padding: '5px 15px',fontWeight:'500' }}>
                            Hello!
                        </div>
                        <h1 className="profile-name mt-2">
                            I'm <span style={{color:'#ff6600'}}>Zunair</span>,<br/>
                            Full Stack Developer
                        </h1>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:"5rem"}}>
                <Col xl={4} lg={4} md={4} className="d-flex" style={{  height: "286px"}}>
                    <div className="profile-quote mt-3" style={{paddingLeft:"100px"}}>
                        <blockquote>
                            I break down complex user experience problems to create integrity-focused
                            solutions that connect billions of people.
                        </blockquote>
                    </div>
                </Col>
                <Col xl={5} lg={5} md={5} className="profile-background " style={{ height: "286px"}}>
                    <Card className="d-flex justify-content-center align-items-center bg-transparent border-0">
                        <CardBody>
                            <img
                                className="profile-pic"
                                alt="Sample"
                                src={zuni}
                            />
                            <div className="d-flex justify-content-center align-items-center position-absolute"
                                 style={{top: '55%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                                <button className="combined-button">
                                    <div className="button-content">
                                        <span className="left">Portfolio<span className="arrow"> ↗</span></span>
                                        <span className="right">Hire me<span className="arrow"> ↗</span></span>
                                    </div>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={3} lg={3} md={3} style={{ height: "286px"}}>
                    <div className=" text-center" style={{marginBottom: '-5rem'}}>
                        <div style={{fontSize: '2rem', color: '#ff6600', marginBottom: '-1rem'}}>★★★★★</div>
                        <div style={{fontSize: '3rem', fontWeight: '500', color: '#333', marginBottom: '-1rem'}}>3
                            Years
                        </div>
                        <div style={{fontSize: '1rem', paddingLeft: "60px"}}>Experience</div>
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
    //     <section className="profile">
    //         <h1>This is profile page</h1>
    //     </section>
    // )
// }
export default Profile;