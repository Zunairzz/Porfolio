import React from 'react';
import Base from "../component/Base";
import {Card, CardBody, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import {motion} from "framer-motion";


const services = [
    {
        title: 'Development',
        icon: require('../assests/development.png'),
        description: 'Build robust web and mobile applications.'
    },
    {title: 'Design', icon: require('../assests/web_design.png'), description: 'Create visually stunning designs.'},
    {
        title: 'UX Design',
        icon: require('../assests/ui_ux.png'),
        description: 'Enhance user experiences with intuitive designs.'
    },
    {
        title: 'Graphic Design',
        icon: require('../assests/graphic-design.png'),
        description: 'Design impactful graphics and visuals.'
    },
    {
        title: 'B2B Analysis',
        icon: require('../assests/analytics.png'),
        description: 'Analyze and optimize business processes.'
    },
    {title: 'SEO', icon: require('../assests/seo.png'), description: 'Improve search engine rankings.'},
    {
        title: 'Copy Writing',
        icon: require('../assests/copy-writting.png'),
        description: 'Craft compelling and effective content.'
    },
    {title: 'Support', icon: require('../assests/support.png'), description: 'Provide reliable and efficient support.'},
];
const styles = {
    title: {
        textAlign: 'center',
        marginBottom: '40px',
        fontWeight: 'bold'
    },
    cardStyle: {
        backgroundColor: 'rgb(243,243,243)',
        borderWidth: 2, // Border thickness
        borderColor: '#ff6600', // Gray color for the border
        borderRadius: 8, //

    }
};


const Service = () => {
    return (
        <Base>
            <Container className="text-center py-5" style={{backgroundColor: '#ffffff', marginTop: '6rem'}}>
                <h1 style={styles.title}>
                    My <span style={{color: '#ff6600'}}>SERVICES</span>
                </h1>
                <Row>
                    {services.map((service, index) => (
                        <Col lg="3" md="4" sm="6" xs="12" key={index} className="mb-4">
                            <Card style={styles.cardStyle}>
                                <CardBody>
                                    {/*<div className="mb-3" style={{fontSize: '2rem'}}>{service.icon}</div>*/}
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <motion.img
                                            src={service.icon}
                                            alt=""
                                            width={60}
                                            className="mb-3 mt-3"
                                            initial={{opacity: 0, scale: 0.8}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{duration: 0.5}}
                                        />
                                    </div>
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