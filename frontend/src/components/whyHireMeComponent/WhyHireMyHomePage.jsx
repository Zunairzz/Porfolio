import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import image from "../../assests/hire_me.png";
import "../../css/HireMe.css";

const fadeScaleVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (customDelay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            delay: customDelay,
            ease: "easeOut",
        },
    }),
};

export function WhyHireMyHomePage() {
    return (
        <Container style={{ marginTop: 150 }}>
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="hide-on-mobile">
                    <motion.img
                        src={image}
                        alt="Hire me illustration"
                        className="card-image"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeScaleVariant}
                        loading="lazy"
                    />
                </Col>
                <Col className="py-5 right-col">
                    <motion.h1
                        className="mt-2 heading-txt"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        variants={fadeScaleVariant}
                        style={{ marginBottom: "1rem" }}
                    >
                        Why <span className="highlight-text">Hire me</span>?
                    </motion.h1>

                    <motion.p
                        className="txt pt-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.4}
                        variants={fadeScaleVariant}
                        style={{ marginBottom: "2rem" }}
                    >
                        Experienced MERN stack developer with 3+ years building scalable web apps.
                        Skilled in React, Node.js, and UI/UX design with tools like Figma.
                        Strong in clean code, Agile (SCRUM/KANBAN), and RESTful APIs.
                        Also proficient in Java and Spring Boot.
                        Passionate about continuous learning and open-source contributions.
                        Committed to delivering high-quality, efficient solutions.
                    </motion.p>

                    <motion.div
                        className="d-flex py-3 stats-container"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.6}
                        variants={fadeScaleVariant}
                        style={{ gap: "6rem" }}
                    >
                        <div className="stat-item">
                            <h1>100+</h1>
                            <p className="txt">Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h1>455+</h1>
                            <p className="txt">Happy Clients</p>
                        </div>
                    </motion.div>

                    <motion.button
                        className="button"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.8}
                        variants={fadeScaleVariant}
                        type="button"
                    >
                        Hire Me
                    </motion.button>
                </Col>
            </Row>
        </Container>
    );
}
