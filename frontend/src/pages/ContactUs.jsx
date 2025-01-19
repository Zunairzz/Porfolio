import Base from "../component/Base";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const styles = {
    title: {
        textAlign: 'center',
        marginBottom: '40px',
        fontWeight: 'bold'
    },
    iconColor :{
        color:'black'
    },
    contactStyle :{
        backgroundColor: 'rgb(243,243,243)',
        minHeight: '100vh',
        padding: '50px 0',
    },
};

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert('Your message has been sent successfully!');
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };
    return (
        <Base>
            <div style={styles.contactStyle}>
                <Container>
                    <Row>
                        <h1 style={styles.title}>
                            CONTACT <span style={{color: '#ff6600'}}>US</span>
                        </h1>
                        <Col md="6" className='mt-5'>
                            <h3 className="mb-4" style={{color: '#ff6600', fontWeight: 'bold'}}>
                                Get in touch
                            </h3>
                            <p>
                                Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec. In
                                cursus massa tincidunt ut ornare the butter leo integer.
                            </p>
                            <div className="d-flex align-items-start mb-3">
                                <i className="fas fa-map-marker-alt fa-2x me-3" style={{color: '#ff6600'}}></i>
                                <div>
                                    <p className="mb-0">4080 Berkshire Circle Knoxville,</p>
                                    <p>TN 37917, New York</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start mb-3">
                                <i className="fas fa-envelope fa-2x me-3" style={{color: '#ff6600'}}></i>
                                <div>
                                    <p className="mb-0">FrancisMBriscoe@jourrapide.com</p>
                                    <p>info@jourrapide.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start mb-3">
                                <i className="fas fa-phone fa-2x me-3 " style={{color: '#ff6600'}}></i>
                                <div>
                                    <p className="mb-0">865-564-9052</p>
                                    <p>865-884-9658</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-start">
                                    <a href="#" className="me-3 text-dark"><i className="fab fa-facebook fa-2x"></i></a>
                                    <a href="#" className="me-3 text-dark"><i className="fab fa-twitter fa-2x"></i></a>
                                    <a href="#" className="me-3 text-dark"><i className="fab fa-linkedin fa-2x"></i></a>
                                    <a href="#" className="me-3 text-dark"><i className="fab fa-github fa-2x"></i></a>
                                    <a href="#" className="text-dark"><i className="fab fa-slack fa-2x"></i></a>
                                </div>
                            </div>
                        </Col>

                        <Col md="6" >
                            <Form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <FormGroup row>
                                    <Label for="name" >Name:</Label>
                                    <Col >
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
                                    <Label for="email" >Email:</Label>
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
                                    <Col >
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
                                <Button className="mb-3" type="submit" style={{backgroundColor: '#ff6600', borderColor: '#ff6600'}} >
                                    Send Message
                                </Button>
                            </Form>
                            {/*<Form >*/}
                            {/*    <FormGroup>*/}
                            {/*        <Label for="name">Name:</Label>*/}
                            {/*        <Input type="text" id="name" placeholder="Enter Your Name ..."/>*/}
                            {/*    </FormGroup>*/}
                            {/*    <FormGroup>*/}
                            {/*        <Label for="email">Email:</Label>*/}
                            {/*        <Input type="email" id="email" placeholder="Enter Your Email ..."/>*/}
                            {/*    </FormGroup>*/}
                            {/*    <FormGroup>*/}
                            {/*        <Label for="subject">Subject:</Label>*/}
                            {/*        <Input type="text" id="subject" placeholder="Enter Your Subject ..."/>*/}
                            {/*    </FormGroup>*/}
                            {/*    <FormGroup>*/}
                            {/*        <Label for="message">Message:</Label>*/}
                            {/*        <Input type="textarea" id="message" placeholder="Enter Your Message ..."/>*/}
                            {/*    </FormGroup>*/}
                            {/*    <Button className="mb-3" style={{backgroundColor: '#ff6600', borderColor: '#ff6600'}}>Send*/}
                            {/*        Message</Button>*/}
                            {/*</Form>*/}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Base>
    )
}


{/*<Row className="justify-content-center">*/}
{/*    <Col md="8" className="text-center mb-4">*/}
{/*        <h1 className="mb-3" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>*/}
{/*            CONTACT <span style={{color: '#00c96d'}}>US</span>*/}
{/*        </h1>*/}
{/*    </Col>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*    <Col md="12">*/}
{/*        <h3 className="mb-4" style={{ color: '#00c96d', fontWeight: 'bold' }}>*/}
{/*            Get in touch*/}
{/*        </h3>*/}
{/*        <p>*/}
{/*            Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec. In cursus massa tincidunt ut ornare the butter leo integer.*/}
{/*        </p>*/}
{/*    </Col>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*    <Col md="12" className="mb-4">*/}
{/*        <div className="d-flex align-items-start mb-3">*/}
{/*            <i className="fas fa-map-marker-alt fa-2x me-3 text-success"></i>*/}
{/*            <div>*/}
{/*                <p className="mb-0">4080 Berkshire Circle Knoxville,</p>*/}
{/*                <p>TN 37917, New York</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*        <div className="d-flex align-items-start mb-3">*/}
{/*            <i className="fas fa-envelope fa-2x me-3 text-success"></i>*/}
{/*            <div>*/}
{/*                <p className="mb-0">FrancisMBriscoe@jourrapide.com</p>*/}
{/*                <p>info@jourrapide.com</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*        <div className="d-flex align-items-start mb-3">*/}
{/*            <i className="fas fa-phone fa-2x me-3 text-success"></i>*/}
{/*            <div>*/}
{/*                <p className="mb-0">865-564-9052</p>*/}
{/*                <p>865-884-9658</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </Col>*/}
{/*</Row>*/}
{/*<Row>*/}
{/*    <Col md="12">*/}
{/*        <div className="d-flex justify-content-start">*/}
{/*            <a href="#" className="me-3 text-light"><i className="fab fa-facebook fa-2x"></i></a>*/}
{/*            <a href="#" className="me-3 text-light"><i className="fab fa-twitter fa-2x"></i></a>*/}
{/*            <a href="#" className="me-3 text-light"><i className="fab fa-linkedin fa-2x"></i></a>*/}
{/*            <a href="#" className="me-3 text-light"><i className="fab fa-github fa-2x"></i></a>*/}
{/*            <a href="#" className="text-light"><i className="fab fa-slack fa-2x"></i></a>*/}
{/*        </div>*/}
{/*    </Col>*/}
{/*</Row>*/}