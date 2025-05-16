import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {FaCircle} from "react-icons/fa";
import '../css/WorkExperience.css';

const WorkExperience = () => {
    const experiences = [
        {
            company: "Upgenics International",
            duration: "May 2023 - Present",
            position: "Java Software Engineer",
            description: "Developed a JavaFX desktop app for diagnosing iPhones, Android devices, and iPads, utilizing multithreading to manage multiple MacBook device connections. Integrated APIs for accurate diagnostics and data exchange. Collaborated with Git for version control and provided remote technical support to troubleshoot client system issues and optimize performance.",
        },
        {
            company: "Allied Bank Limited",
            duration: "Sep 2022 - Apr 2023",
            position: "Java Software Engineer",
            description: "Worked with Java frameworks like Spring Boot, JSF, and JavaFX for application development. Utilized Oracle PL/SQL for backend data management. Managed projects like ABL-SOFT (JSF-based reporting and user rights management) and developed AmsEmailSender for scheduled email delivery. Collaborated on version control using Git Server.",
        },
        {
            company: "XStak",
            duration: "Sep 2021 - Aug 2022",
            position: "Java Software Engineer",
            description: "Worked as a Back-End Software Engineer on an omnichannel ERP middleware, integrating order management and inventory systems with platforms like Magento and Shopify. Contributed to Pakistan’s leading cloud-based POS software. Designed and optimized backend solutions for seamless order processing and inventory synchronization. Collaborated on version control using Git.",
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
            top: '40px',
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
                            <Col xl={5} lg={5} md={5} className="text-end">
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
                            <Col xl={4} lg={4} md={4}>
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
