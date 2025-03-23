import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {FaCircle} from "react-icons/fa";
import '../css/WorkExperience.css';

const WorkExperience = () => {
    const experiences = [
        {
            company: "Cognizant",
            duration: "Sep 2016 - July 2020",
            position: "Experience Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
        },
        {
            company: "Sugee Pvt Limited",
            duration: "Sep 2020 - July 2023",
            position: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
        },
        {
            company: "Cineststox",
            duration: "Sep 2023 - Present",
            position: "Lead UX Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
        },
    ];

    const styles = {
        timeline: {
            marginTop: "150px"
        },
        title: {
            textAlign: 'center',
            marginBottom: '40px',

        },
        timelineItem: {
            display: 'flex',
            marginBottom: '40px',
            position: 'relative',
            maxHeight: '350px'
        },
        iconContainer: {
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: '50px',
            height: '50px',
            border: '2px dashed #333',
            borderRadius: '50%',
        },
        iconOrange: {
            color: '#f57c00',
            fontSize: '1.5rem',
        },
        iconDark: {
            color: '#333',
            fontSize: '1.5rem',
        },
        verticalLine: {
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)', // Center-aligns the line horizontally
            borderLeft: '2px dashed #333',
            height: '100%',
            zIndex: -1,
        },
    };

    return (
        <Container style={styles.timeline}>
            <h1 className="work-exp-title">
                My <span style={{color: '#ff6600'}}>Work Experience</span>
            </h1>
            <div className="desktop-view">
                {experiences.map((exp, index) => {
                    const isLastItem = index === experiences.length - 1;

                    return (
                        <Row key={index} style={styles.timelineItem}>
                            <Col xl={5} lg={5} md={5}>
                                <h5>{exp.company}</h5>
                                <p>{exp.duration}</p>
                            </Col>
                            <Col xl={2} lg={2} md={2}
                                 className="position-relative mb-3 mb-md-0 d-flex justify-content-center">
                                <div style={styles.iconContainer}>
                                    <FaCircle style={index % 2 === 0 ? styles.iconOrange : styles.iconDark}/>
                                </div>
                                {!isLastItem && (
                                    <div style={styles.verticalLine}></div>
                                )}
                            </Col>
                            <Col xl={5} lg={5} md={5}>
                                <h5>{exp.position}</h5>
                                <p>{exp.description}</p>
                            </Col>
                        </Row>
                    );
                })}
            </div>

            {/* Mobile View */}
            <div className="mobile-view">
                {experiences.map((exp, index) => {
                    const isLastItem = index === experiences.length - 1;
                    return (
                        <Row key={index} className="timelineItem">
                            <Col xl={2} lg={2} md={2} sm={2} xs={4}
                                 className="position-relative d-flex justify-content-center">
                                <div className="iconContainer">
                                    <FaCircle className={index % 2 === 0 ? `iconOrange` : `iconDark`}/>
                                </div>
                                {!isLastItem && (
                                    <div style={styles.verticalLine}></div>
                                )}
                            </Col>
                            <Col xl={10} lg={10} md={10} sm={10} xs={7} className="px-0">
                                <h3 className="mb-company">{exp.company}</h3>
                                <p className="mb-duration">{exp.duration}</p>
                                <h5 className="mb-position">{exp.position}</h5>
                                <p className="mb-description">{exp.description}</p>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </Container>
    );
};

export default WorkExperience;
