import React, {useEffect, useRef, useState} from 'react';
import Base from "../components/Base";
import {Card, CardBody, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import {motion, useAnimation, useInView} from "framer-motion";
import "../css/MyService.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";

// Services data (unchanged)
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

// New Testimonials data
const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        quote: "The development work was outstanding, delivering our project ahead of schedule with exceptional quality.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Smith",
        role: "Designer, CreativeCo",
        quote: "The design sensibility and attention to detail transformed our brand identity beautifully.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Mike Johnson",
        role: "Marketing Lead, GrowEasy",
        quote: "SEO and content strategies boosted our online presence significantly. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

const styles = {
    title: {
        fontSize: '2.3rem',
        color: '#333',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px'
    },
    cardStyle: {
        backgroundColor: 'rgb(243,243,243)',
        borderWidth: 2,
        borderColor: '#ff6600',
        borderRadius: 8,
    },
    scrollButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#ff6600',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: 1000
    },
    testimonialCard: {
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        padding: '20px',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    avatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        marginRight: '15px',
        objectFit: 'cover'
    }
};

const cardVariants = {
    hidden: {opacity: 0, y: 50},
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const testimonialVariants = {
    hidden: {opacity: 0, x: -50},
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const ServiceCard = ({service, index}) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
            <motion.div ref={ref} variants={cardVariants} initial="hidden" animate={controls} custom={index}>
                <Card style={styles.cardStyle}>
                    <CardBody>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <motion.img src={service.icon} alt="" width={60} className="mb-3 mt-3"
                                        initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5}}/>
                        </div>
                        <CardTitle tag="h5" style={{color: '#000000', fontWeight: '600'}}>{service.title}</CardTitle>
                        <CardText style={{color: '#000000'}}>{service.description}</CardText>
                    </CardBody>
                </Card>
            </motion.div>
        </Col>
    );
};

const TestimonialCard = ({testimonial, index}) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <Col lg="4" md="6" xs="12" className="mb-4">
            <motion.div ref={ref} variants={testimonialVariants} initial="hidden" animate={controls} custom={index}>
                <Card style={styles.testimonialCard}>
                    <CardBody>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                            <img src={testimonial.avatar} alt={testimonial.name} style={styles.avatar}/>
                            <div>
                                <CardTitle tag="h6" style={{margin: 0, color: '#ff6600', fontWeight: '600'}}>
                                    {testimonial.name}
                                </CardTitle>
                                <small style={{color: '#666'}}>{testimonial.role}</small>
                            </div>
                        </div>
                        <CardText style={{color: '#333', fontStyle: 'italic'}}>
                            "{testimonial.quote}"
                        </CardText>
                    </CardBody>
                </Card>
            </motion.div>
        </Col>
    );
};

const Service = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Base>
            {/* Services Section */}
            <Container className="text-center" style={{backgroundColor: '#ffffff', marginTop: '10rem'}}>
                <h1 className="service-heading">
                    My <span style={{color: '#ff6600'}}>SERVICES</span>
                </h1>
                <Row>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index}/>
                    ))}
                </Row>
            </Container>

            {/* Testimonials Section */}
            <Container className="py-5" style={{backgroundColor: '#ffffff'}}>
                <h1 style={{...styles.title, marginTop: '2rem', marginBottom: '2rem'}}>
                    What <span style={{color: '#ff6600'}}>Clients Say</span>
                </h1>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index}/>
                    ))}
                </Row>
            </Container>

            {/* Scroll to Top Button */}
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        borderRadius: "50%",
                        minWidth: "50px",
                        height: "50px",
                        backgroundColor: "#ff6600",
                        "&:hover": {backgroundColor: "#e65c00"},
                    }}
                >
                    <ArrowUpwardIcon sx={{color: "white"}}/>
                </Button>
            )}
        </Base>
    );
};

export default Service;