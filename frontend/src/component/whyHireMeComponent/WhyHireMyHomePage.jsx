import {Col, Container, Row} from "reactstrap";
import image from "../../assests/hire_me.png";
import React from "react";
import "../../css/HireMe.css";

export function WhyHireMyHomePage() {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center align-content-center"
                 style={{marginTop: "150px"}}>
                <Col className="hide-on-mobile">
                    <img
                        src={image}
                        alt="title here"
                        className="card-image"
                    />
                </Col>
                <Col className="py-5 right-col">
                    <h1 className="mt-2 heading-txt">
                        Why <span style={{color: '#ff6600'}}>Hire me</span>?
                    </h1>
                    <p className="txt pt-3">As a highly skilled React and Node.js developer with over three years of
                        experience, I bring a
                        strong background in building scalable web applications using the MERN stack. My expertise
                        extends to designing seamless user experiences, having a good grasp of UI/UX design principles,
                        and translating them effectively using tools like Figma. I am committed to clean coding
                        practices and have a deep understanding of industry-standard methodologies like SCRUM and
                        KANBAN. With additional skills in Java, Spring Boot, and REST APIs, I am well-equipped to handle
                        complex projects, ensuring efficient and high-quality delivery. My dedication to continuous
                        learning, coupled with my passion for contributing to open-source projects, makes me a valuable
                        asset to any development team</p>

                    <div className="d-flex py-3">
                        <div>
                            <h1>455+</h1>
                            <p className="txt">Project Completed</p>
                        </div>
                        <div style={{paddingLeft: "100px"}}>
                            <h1>455+</h1>
                            <p className="txt">Project Completed</p>
                        </div>
                    </div>

                    <button className="button">Hire Me</button>
                </Col>
            </Row>
        </Container>
    )
}