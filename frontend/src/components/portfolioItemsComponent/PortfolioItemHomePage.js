import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import service_img_1 from "../../assests/s1.png";
import service_img_2 from "../../assests/s2.png";
import "../../css/PortfolioItemHomePage.css"; // New CSS file for better organization

const PortfolioItemHomePage = () => {
    const portfolioItems = [
        {
            id: 1,
            image: service_img_1,
            title: "Lirante",
            tags: ["Landing Page", "Product Design"],
        },
        {
            id: 2,
            image: service_img_2,
            title: "Project X",
            tags: ["Animation", "Glassmorphism"],
        },
    ];

    const allTags = [
        "Landing Page",
        "Product Design",
        "Animation",
        "Glassmorphism",
        "Cards",
    ];

    return (
        <section className="portfolio-section py-5">
            <Container>
                {/* Header */}
                <Row className="align-items-center mb-5">
                    <Col md={8}>
                        <h1 className="portfolio-title">
                            My <span className="highlight">Portfolio</span> Showcase
                        </h1>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <Button className="see-all-btn">See All Projects</Button>
                    </Col>
                </Row>

                {/* Portfolio Items */}
                <Row className="g-4 mb-5">
                    {portfolioItems.map((item) => (
                        <Col md={6} key={item.id}>
                            <div className="portfolio-card">
                                <div className="image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={`${item.title} preview`}
                                        className="portfolio-image"
                                    />
                                    <div className="image-overlay">
                                        <h3 className="overlay-title">{item.title}</h3>
                                    </div>
                                </div>
                                <div className="tags-container">
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className="tag-badge">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Tags Filter */}
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <div className="tags-filter">
                            {allTags.map((tag, index) => (
                                <Button key={index} className="filter-btn">
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Featured Project */}
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <div className="featured-project">
                            <h2 className="featured-title">
                                Lirante - Food Delivery Solution
                                <Button className="launch-btn">↗</Button>
                            </h2>
                            <p className="featured-description">
                                A comprehensive food delivery solution featuring intuitive UI/UX design and seamless
                                functionality. Built with modern technologies to enhance user experience and operational
                                efficiency.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PortfolioItemHomePage;