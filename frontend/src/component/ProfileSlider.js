import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Testimonials.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Avatar, Box, Rating} from "@mui/material";
import React, {useState} from "react";
import {Card, Col, Container, Row} from "reactstrap";
import doubleQuotationMark from "../assests/quote-right.png";
import zunair from "../image/zuni_png.png";
import zaman from "../image/zaman_png.png";


export const ProfileSlider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };


    const items = [
        {
            id: 1,
            name: "Zunair",
            src: zunair,
            experience: 3
        }, {
            id: 2,
            name: "Zaman",
            src: zaman,
            experience: 2
        }
    ];

    const slides = items.map((item) => {

        return (
            <Container className="profile-container">
                <Row className="d-flex justify-content-center align-items-center profile-first-row">
                    <Col className="d-flex justify-content-center align-items-center">
                        <div className="text-center p-3">
                            <div className="profile-hello-button">
                                Hello!
                            </div>
                            <h1 className="profile-name mt-2">
                                I'm <span style={{color: '#ff6600'}}>{item.name}</span>,<br/>
                                Full Stack Developer
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between profile-second-row">
                    <Col xl={4} lg={4} md={6} sm={12}>
                        <div className="profile-quote left-text" style={{fontWeight: 500}}>
                            <blockquote>
                                I break down complex user experience problems to create integrity-focused solutions
                                that connect billions of people.
                            </blockquote>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} style={{textAlign: "right"}}>
                        <div className="right-text">
                            <div style={{fontSize: '2rem', color: '#ff6600', marginBottom: '-1rem'}}>★★★★★</div>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '500',
                                color: '#333',
                                marginBottom: '-1rem'
                            }}>{item.experience} Years
                            </div>
                            <div style={{fontSize: '1rem', paddingLeft: "60px"}}>Experience</div>
                        </div>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center align-items-center profile-pic">
                    <Col xl={6} lg={8} md={10} sm={12} xs={10} className="text-center" style={{marginTop: "-350px"}}>
                        <img className="img-fluid" alt="Sample" src={item.src}/>
                    </Col>
                </Row>
            </Container>
        )
    });


    return (
        <Carousel
            draggable={false}
            infinite={true}
            autoPlay={true}
            // autoPlaySpeed={3000}
            responsive={responsive}
            centerMode={false}
            focusOnSelect={true}
            arrows={false}

            // showDots={true}
            // swipeable={false}
            // ssr={true}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            // customRightArrow={<CustomRightArrow/>}
            // customButtonGroup={<ButtonGroup/>}
        >
            {slides}
        </Carousel>
    )
}