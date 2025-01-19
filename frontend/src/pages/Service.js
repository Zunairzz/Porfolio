import React from 'react';
import Base from "../component/Base";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';





const services = [
    { title: 'Development', icon: '💻', description: 'Build robust web and mobile applications.' },
    { title: 'Design', icon: '🎨', description: 'Create visually stunning designs.' },
    { title: 'UX Design', icon: '🌿', description: 'Enhance user experiences with intuitive designs.' },
    { title: 'Graphic Design', icon: '🖌️', description: 'Design impactful graphics and visuals.' },
    { title: 'B2B Analysis', icon: '💰', description: 'Analyze and optimize business processes.' },
    { title: 'SEO', icon: '📈', description: 'Improve search engine rankings.' },
    { title: 'Copy Writing', icon: '✍️', description: 'Craft compelling and effective content.' },
    { title: 'Support', icon: '💬', description: 'Provide reliable and efficient support.' },
];
const styles = {
    title: {
        textAlign: 'center',
        marginBottom: '40px',
        fontWeight: 'bold'
    },
    cardStyle :{
        backgroundColor: 'rgb(243,243,243)',
        borderWidth: 2, // Border thickness
        borderColor: '#ff6600', // Gray color for the border
        borderRadius: 8, //

    }
};


const Service = () => {
    return (
        <Base>
            <Container className="text-center py-5" style={{backgroundColor: '#ffffff'}}>
                <h1 style={styles.title}>
                    My <span style={{color: '#ff6600'}}>SERVICES</span>
                </h1>
                <Row>
                    {services.map((service, index) => (
                        <Col lg="3" md="4" sm="6" xs="12" key={index} className="mb-4">
                            <Card style={styles.cardStyle}>
                                <CardBody>
                                    <div className="mb-3" style={{fontSize: '2rem'}}>{service.icon}</div>
                                    <CardTitle tag="h5"
                                               style={{color: '#000000', fontWeight: '600'}}>{service.title}</CardTitle>
                                    <CardText style={{color: '#000000'}}>{service.description}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Base>
    )
}
export default Service;