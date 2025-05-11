import React, { useMemo } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import service_img_1 from "../../assests/s1.png";
import service_img_2 from "../../assests/s2.png";
import "../../css/PortfolioItemHomePage.css";

const PortfolioItemHomePage = () => {
    const portfolioItems = useMemo(
        () => [
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
        ],
        []
    );

    const allTags = useMemo(
        () => [
            "Landing Page",
            "Product Design",
            "Animation",
            "Glassmorphism",
            "Cards",
        ],
        []
    );

    return (
        <section className="portfolio-section py-5" aria-labelledby="portfolio-title">
            <Container className="px-5 my-5">
                {/* Header */}
                <Row className="align-items-center mb-5">
                    <Col xs={12} md={8} className="text-center text-md-start">
                        <h1 id="portfolio-title" className="portfolio-title mb-0">
                            My <span className="highlight">Portfolio</span> Showcase
                        </h1>
                    </Col>
                    <Col xs={12} md={4} className="text-center text-md-end mt-3 mt-md-0">
                        <Button
                            className="see-all-btn"
                            color="primary"
                            aria-label="View all projects"
                        >
                            See All Projects
                        </Button>
                    </Col>
                </Row>

                {/* Portfolio Items */}
                <Row className="g-4 mb-5">
                    {portfolioItems.map((item) => (
                        <Col xs={12} md={6} key={item.id}>
                            <article className="portfolio-card" aria-labelledby={`card-title-${item.id}`}>
                                <div className="image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={`${item.title} project preview`}
                                        className="portfolio-image"
                                        loading="lazy"
                                    />
                                    <div className="image-overlay">
                                        <h3 id={`card-title-${item.id}`} className="overlay-title">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="tags-container">
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className="tag-badge">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </article>
                        </Col>
                    ))}
                </Row>

                {/* Tags Filter */}
                <Row className="justify-content-center mb-5">
                    <Col xs={12} md={8} className="text-center">
                        <div className="tags-filter" role="group" aria-label="Filter projects by tag">
                            {allTags.map((tag, index) => (
                                <Button
                                    key={index}
                                    className="filter-btn"
                                    color="secondary"
                                    aria-pressed="false"
                                >
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Featured Project */}
                <Row className="justify-content-center text-center">
                    <Col xs={12} md={8}>
                        <article className="featured-project" aria-labelledby="featured-title">
                            <h2 id="featured-title" className="featured-title">
                                Lirante - Food Delivery Solution
                                <Button
                                    className="launch-btn"
                                    color="primary"
                                    aria-label="Visit Lirante project"
                                >
                                    ↗
                                </Button>
                            </h2>
                            <p className="featured-description">
                                A comprehensive food delivery solution featuring intuitive UI/UX
                                design and seamless functionality. Built with modern technologies
                                to enhance user experience and operational efficiency.
                            </p>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PortfolioItemHomePage;