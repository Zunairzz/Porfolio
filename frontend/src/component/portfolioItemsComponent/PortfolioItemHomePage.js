import React from "react";
import {Container, Row, Col, Button, CardBody, CardTitle, CardText, Card, Badge,} from "reactstrap";

import service_img_1 from "../../assests/s1.png";
import service_img_2 from "../../assests/s2.png";

const PortfolioItemHomePage = () => {

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    title: {
        fontSize: '2em',
    },
    highlight: {
        color: '#ff6f3f',
    },
    seeAllButton: {
        backgroundColor: '#ff6f3f',
        color: '#fff',
        border: 'none',
    },
    portfolioItem: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    wordStyle:{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize:'50px',
        fontWeight:'bold'
    },
    buttonStyle:{
        borderRadius: '20px',
        backgroundColor: '#f2f4f7',
        color: 'black',
        border: 'none',
        margin: '0.25rem'
    }
};

return (
    <Container className="portfolio-section">
        <Row style={styles.header}>
            <Col>
                <h1 style={styles.title}>
                    Let's have a look at my <span style={styles.highlight}>Portfolio</span>
                </h1>
            </Col>
            <Col className="text-end">
                <Button style={styles.seeAllButton}>See All</Button>
            </Col>
        </Row>
        <Row>
            <Col md={6} style={{ position: 'relative' }}>
                <img
                    src={service_img_1}
                    alt="Portfolio item 1"
                    style={{ width: '100%', borderRadius: '10px' }}
                />
                <div style={styles.wordStyle}>Lirante</div>
            </Col>

            <Col md={6} style={{position: 'relative'}}>
                <img
                    src={service_img_1}
                    alt="Portfolio item 1"
                    style={{width: '100%', borderRadius: '10px'}}
                />
                <div style={styles.wordStyle}>Lirante</div>
            </Col>
        </Row>
        <Row className="mt-4 text-center">
                <Col md="12">
                    <div className="tags">
                        <Button style={styles.buttonStyle}>
                            Landing Page
                        </Button>
                        <Button style={styles.buttonStyle}>
                            Product Design
                        </Button>
                        <Button style={styles.buttonStyle}>
                            Animation
                        </Button>
                        <Button style={styles.buttonStyle}>
                            Glassmorphism
                        </Button>
                        <Button style={styles.buttonStyle}>
                            Cards
                        </Button>
                    </div>
                </Col>
            </Row>
        {/* Progress Indicator */}
        {/*<Row className="justify-content-center mb-3">*/}
        {/*    {[...Array(4)].map((_, i) => (*/}
        {/*        <span*/}
        {/*            key={i}*/}
        {/*            className={`mx-1 rounded-circle ${i === 0 ? 'bg-orange' : 'bg-light'}`}*/}
        {/*            style={{ width: '10px', height: '10px', display: 'inline-block' }}*/}
        {/*        ></span>*/}
        {/*    ))}*/}
        {/*</Row>*/}

        {/* Title and Description */}
        <Row className="mt-3 justify-content-center text-center">
            <Col md={6}>
                <h2 className="mb-3" style={{ fontWeight: '600', color: '#1c1e21' }}>
                    Lirante - Food Delivery Solution{' '}
                    <Button
                        color="warning"
                        className="rounded-circle p-2 ms-2"
                        style={{ fontSize: '14px' }}
                    >
                        &#8599;
                    </Button>
                </h2>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
                    interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed lobortis orci elementum egestas
                    lobortis.
                </p>
            </Col>
        </Row>
    </Container>
);

            {/* Additional Content Section */}

        {/*</Container>*/}

};

export default PortfolioItemHomePage;
















// const styles = {
//     header: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '20px',
//     },
//     title: {
//         fontSize: '2em',
//     },
//     highlight: {
//         color: '#ff6f3f',
//     },
//     seeAllButton: {
//         backgroundColor: '#ff6f3f',
//         color: '#fff',
//         border: 'none',
//     },
//     portfolioItem: {
//         textAlign: 'center',
//         padding: '20px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '10px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         margin: '10px',
//     },
// };
//
// return (
//     <Container className="portfolio-section">
//         <Row style={styles.header}>
//             <Col>
//                 <h1 style={styles.title}>
//                     Let's have a look at my <span style={styles.highlight}>Portfolio</span>
//                 </h1>
//             </Col>
//             <Col className="text-end">
//                 <Button style={styles.seeAllButton}>See All</Button>
//             </Col>
//         </Row>
//         <Row>
//             <Col md={6} >
//                 <img
//                     src={service_img_1}
//                     alt="Portfolio item 1"
//                     style={{ width: '100%', borderRadius: '10px' }}
//                 />
//             </Col>
//             <Col md={6}>
//                 <img
//                     src={service_img_2}
//                     alt="Portfolio item 2"
//                     style={{ width: '100%', borderRadius: '10px' }}
//                 />
//             </Col>
//         </Row>
//     </Container>
// );
