import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCircle } from 'react-icons/fa';

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
        },
        title: {
            textAlign: 'center',
            marginBottom: '40px',
        },
        timelineItem: {
            display: 'flex',
            marginBottom: '40px',
            position: 'relative',
            maxHeight:'350px'
        },
        iconContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
            display:'flex',
            justifyContent: 'center',
            borderLeft: '2px dashed #333',
            height: '100%',
            position: 'absolute',
            left: '20%',
            top: '50px',
            zIndex: -1,
        },
        verticalLineMobile: {
            borderLeft: '2px dashed #333',
            height: '50px',
            margin: '0 auto', // Align line in the center on mobile
        },
    };

    return (
        <Container style={styles.timeline}>
            <h1 style={styles.title}>
                My <span style={{color: '#ff6600'}}>Work Experience</span>
            </h1>
            {experiences.map((exp, index) => {
                const isLastItem = index === experiences.length - 1;

                return (
                    <Row key={index} style={styles.timelineItem}>
                        <Col xl={5} lg={5} md={5} >
                            <h5>{exp.company}</h5>
                            <p>{exp.duration}</p>
                        </Col>
                        <Col xl={2} lg={2} md={2}  className="position-relative mb-3 mb-md-0">
                            <div style={styles.iconContainer}>
                                <FaCircle style={index % 2 === 0 ? styles.iconOrange : styles.iconDark} />
                            </div>
                            {!isLastItem && (
                                <div
                                    style={
                                        window.innerWidth < 768
                                            ? styles.verticalLineMobile
                                            : styles.verticalLine
                                    }
                                ></div>
                            )}
                        </Col>
                        <Col xl={5} lg={5} md={5} >
                            <h5>{exp.position}</h5>
                            <p>{exp.description}</p>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
};

export default WorkExperience;
