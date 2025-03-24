import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {motion} from "framer-motion";
import {Col, Container, Row} from "reactstrap";
import zunair from "../image/zuni_png.png";
import zaman from "../image/zaman_png.png";
import umairBhai from "../image/umair_bhai_png.png";
import "../css/Profile.css";

export const ProfileSlider = () => {
    const responsive = {
        superLargeDesktop: {breakpoint: {max: 4000, min: 3000}, items: 1},
        desktop: {breakpoint: {max: 3000, min: 1024}, items: 1},
        tablet: {breakpoint: {max: 1024, min: 464}, items: 1},
        mobile: {breakpoint: {max: 464, min: 0}, items: 1}
    };

    const items = [
        {id: 1, name: "Zunair", jobDescription: "Full Stack Developer", src: zunair, experience: "3 Years"},
        {id: 2, name: "Zaman", jobDescription: "Full Stack Developer", src: zaman, experience: "2 Years"},
        {id: 3, name: "Umair Sarwar", jobDescription: "Graphic Designer", src: umairBhai, experience: "10 Years"}
    ];

    const slides = items.map((item) => {
        return (
            <Container className="profile-container">
                <Row className="d-flex justify-content-center align-items-center profile-first-row">
                    <Col className="d-flex justify-content-center align-items-center">
                        <motion.div
                            className="text-center p-3"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <motion.div
                                className="profile-hello-button"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse"}}
                            >
                                Hello!
                            </motion.div>
                            <motion.h1
                                className="profile-name mt-2"
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5}}
                            >
                                I'm <span style={{color: '#ff6600'}}>{item.name}</span>,<br/>
                                {item.jobDescription}
                            </motion.h1>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-between profile-second-row">
                    <Col xl={4} lg={4} md={6} sm={12}>
                        <motion.div
                            className="profile-quote left-text"
                            style={{fontWeight: 500}}
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                        >
                            <blockquote>
                                I break down complex user experience problems to create integrity-focused solutions
                                that connect billions of people.
                            </blockquote>
                        </motion.div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} style={{textAlign: "right"}}>
                        <motion.div
                            className="right-text"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            <div style={{fontSize: '2rem', color: '#ff6600', marginBottom: '-1rem'}}>
                                ★★★★★
                            </div>
                            <motion.div
                                style={{fontSize: '3rem', fontWeight: "500", color: '#333', marginBottom: '-1rem'}}
                                initial={{scale: 0.8}}
                                animate={{scale: 1}}
                                transition={{duration: 0.5}}
                            >
                                {item.experience}
                            </motion.div>
                            <div style={{fontSize: '1rem', paddingLeft: "60px"}}>Experience</div>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center align-items-center profile-pic">
                    <Col xl={6} lg={8} md={10} sm={12} xs={10} className="text-center" style={{marginTop: "-350px"}}>
                        <motion.img
                            className="img-fluid"
                            alt="Sample"
                            src={item.src}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, ease: "easeOut"}}
                            whileHover={{scale: 1.1}}
                        />
                    </Col>
                </Row>
            </Container>
        )
    });

    return (
        <Carousel
            draggable={false}
            infinite={true}
            autoPlay={true}
            responsive={responsive}
            centerMode={false}
            focusOnSelect={true}
            arrows={false}
        >
            {slides}
        </Carousel>
    )
}
