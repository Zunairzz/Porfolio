import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import image from "../../assests/hire_me.png";
import React from "react";
import "../../css/HireMe.css";

export function WhyHireMyHomePage() {
    return (
        <Container>
            <Row
                className="d-flex justify-content-center align-items-center align-content-center"
                style={{ marginTop: "150px" }}
            >
                <Col className="hide-on-mobile">
                    <motion.img
                        src={image}
                        alt="title here"
                        className="card-image"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    />
                </Col>
                <Col className="py-5 right-col">
                    <motion.h1
                        className="mt-2 heading-txt"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        Why <span style={{ color: "#ff6600" }}>Hire me</span>?
                    </motion.h1>
                    <motion.p
                        className="txt pt-3"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        As a highly skilled React and Node.js developer with over three years of
                        experience, I bring a strong background in building scalable web applications
                        using the MERN stack. My expertise extends to designing seamless user experiences,
                        having a good grasp of UI/UX design principles, and translating them effectively
                        using tools like Figma. I am committed to clean coding practices and have a deep
                        understanding of industry-standard methodologies like SCRUM and KANBAN. With
                        additional skills in Java, Spring Boot, and REST APIs, I am well-equipped to handle
                        complex projects, ensuring efficient and high-quality delivery. My dedication to
                        continuous learning, coupled with my passion for contributing to open-source projects,
                        makes me a valuable asset to any development team.
                    </motion.p>

                    <motion.div
                        className="d-flex py-3"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h1>100+</h1>
                            <p className="txt">Project Completed</p>
                        </div>
                        <div style={{ paddingLeft: "100px" }}>
                            <h1>455+</h1>
                            <p className="txt">Project Completed</p>
                        </div>
                    </motion.div>

                    <motion.button
                        className="button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Hire Me
                    </motion.button>
                </Col>
            </Row>
        </Container>
    );
}
