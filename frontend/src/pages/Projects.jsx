import Base from "../component/Base";
import "../css/Project.css";
import {
    Container,
    Row,
    Col, Card, CardImg, CardTitle
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import project1 from "../image/project.png"
import project2 from "../image/project 2.png"

const projectData = [
    { img: project1, title1: "Ecommerce", title2: "Website" },
    { img: project2, title1: "Web Development", title2: "Software" },
    { img: project1, title1: "Mobile App", title2: "Design" },
    { img: project2, title1: "Graphic Design", title2: "Creative" }
];

const styles = {
    title: {
        textAlign: 'center',
        marginTop: '20px',
        fontWeight: 'bold'
    },
    contactStyle: {
        backgroundColor: 'rgb(243,243,243)',
        minHeight: '100vh',
        padding: '100px 0',
    },
};

const Projects = () => {

    return (
        <Base>
            <div style={styles.contactStyle}>
                <Container>
                    <h1 style={styles.title}>
                        PORTFOLIO <span style={{ color: '#ff6600' }}>ITEMS</span>
                    </h1>
                    <Row>
                        {projectData.map((project, index) => (
                            <Col md="6" key={index}>
                                <div className="portfolio-item">
                                    <Card className="hover-card">
                                        <div className="image-container">
                                            <CardImg
                                                src={project.img}
                                                alt="Portfolio Item"
                                                className="card-image"
                                            />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <Row>
                                                        <Col md="6">
                                                            <CardTitle tag="h5">{project.title1}</CardTitle>
                                                        </Col>
                                                        <Col md="6">
                                                            <CardTitle tag="h5">{project.title2}</CardTitle>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Base>
    );
}

export default Projects;