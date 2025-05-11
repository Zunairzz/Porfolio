import Base from "../components/Base";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../css/contactus.css";
import emailjs from "@emailjs/browser";

const styles = {
    iconColor: {
        color: 'black',
    },
};

export function ContactUs() {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        time: 'zero',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                'service_md9i43i', // Replace with your Service ID
                'template_1kbxn06', // Replace with your Template ID
                formData
            )
            .then(
                (result) => {
                    setStatus('Your message has been sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                },
                (error) => {
                    console.error('EmailJS Error:', error.text);
                    setStatus('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <Base>
            <Container fluid className="py-5 px-3 px-md-5" style={{ marginTop: '120px' }}>
                <Row className="justify-content-center">
                    <h1 className="contact-us-title">
                        Contact <span style={{ color: "#ff6200" }}>Us</span>
                    </h1>
                    <Col xs="12" md="6" className="animate-left mb-4 mb-md-0">
                        <h3 className="mb-4" style={{ color: '#ff6600', fontWeight: 'bold' }}>
                            Get in touch
                        </h3>
                        <p>
                            Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec. In
                            cursus massa tincidunt ut ornare the butter leo integer.
                        </p>
                        <div className="d-flex align-items-start mb-3">
                            <i className="fas fa-map-marker-alt fa-2x me-3" style={{ color: '#ff6600' }}></i>
                            <div>
                                <p className="mb-0">4080 Berkshire Circle Knoxville,</p>
                                <p>TN 37917, New York</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                            <i className="fas fa-envelope fa-2x me-3" style={{ color: '#ff6600' }}></i>
                            <div>
                                <p className="mb-0">FrancisMBriscoe@jourrapide.com</p>
                                <p>info@jourrapide.com</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                            <i className="fas fa-phone fa-2x me-3" style={{ color: '#ff6600' }}></i>
                            <div>
                                <p className="mb-0">865-564-9052</p>
                                <p>865-884-9658</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start flex-wrap">
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="#" className="me-3 text-dark">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="fab fa-slack fa-2x"></i>
                            </a>
                        </div>
                    </Col>

                    <Col xs="12" md="6" className="animate-right">
                        <Form onSubmit={handleSubmit} className="contact-us-form">
                            <FormGroup row>
                                <Label for="name">Name:</Label>
                                <Col>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email">Email:</Label>
                                <Col>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="subject">Subject:</Label>
                                <Col>
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Enter Your Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="message">Message:</Label>
                                <Col>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        id="message"
                                        placeholder="Enter Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                    />
                                </Col>
                            </FormGroup>
                            <Button
                                className="mb-3 w-100"
                                type="submit"
                                style={{ backgroundColor: '#ff6600', borderColor: '#ff6600' }}
                            >
                                Send Message
                            </Button>
                            {status && <p className="mt-2 text-center">{status}</p>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
}