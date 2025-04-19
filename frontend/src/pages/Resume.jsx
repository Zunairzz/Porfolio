import React from "react";
import Base from "../components/Base";
import "../css/resume.css";
import { Col, Container, Row } from "reactstrap";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import zunair from "../image/ZunairResumeImage.jpg";
import zaman from "../image/ZamanResumeImage.jpg";
import umair from "../image/UmairResumeImage.jpg";
import CV from "../assests/documents/Zunair Sarwar Resume.pdf";

const ResumeCard = ({ item, reverse }) => {
    return (
        <Row style={{ height: "600px" }}>
            <Col
                style={{ backgroundColor: reverse ? "#f1f1f1" : "#ffb680" }}
                className="d-flex justify-content-center align-items-center"
            >
                <div style={{ textAlign: "left" }}>
                    <p className="resume-title">{item.mainHeading}</p>
                    <p className="resume-sub-title">{item.subTitle}</p>
                    <div className="resume-details">
                        <p><b>Phone:</b> {item.phone}</p>
                        <p><b>Email:</b> {item.email}</p>
                        <p><b>Experience:</b> {item.experience}</p>
                        <Button
                            variant="outlined"
                            endIcon={<FileDownloadIcon />}
                            href={item.resumeLink}
                            download
                            sx={{
                                marginTop: "60px",
                                border: "2px solid black",
                                color: "black",
                                "&:hover": {
                                    border: "2px solid #AB4459",
                                    backgroundColor: "#AB4459",
                                    color: "white",
                                },
                            }}
                        >
                            Download Resume
                        </Button>
                    </div>
                </div>
            </Col>
            <Col
                style={{ backgroundColor: reverse ? "#ffb680" : "#f1f1f1" }}
                className="imageCol"
            >
                <div
                    style={{
                        width: "240px",
                        height: "300px",
                        overflow: "hidden",
                        backgroundColor: "#F8FAFC",
                        boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                        borderRadius: "20px",
                        border: "5px solid white",
                    }}
                >
                    <img
                        src={item.imageSrc}
                        alt="Resume"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </Col>
        </Row>
    );
};

export const Resume = () => {
    const [showScroll, setShowScroll] = React.useState(false);

    const getLocalStorageItem = (key, defaultValue) =>
        localStorage.getItem(key) || defaultValue;

    const items = [
        {
            id: 1,
            mainHeading: getLocalStorageItem("zunairTitle", "Zunair Sarwar"),
            subTitle: getLocalStorageItem("zunairSubTitle", "Java Software Engineer"),
            imageSrc: zunair,
            phone: getLocalStorageItem("zunairMobile", "+92 324 4165642"),
            email: getLocalStorageItem("zunairEmail", "zunairsarwar1@gmail.com"),
            experience: "3 years",
            resumeLink: CV,
        },
        {
            id: 2,
            mainHeading: getLocalStorageItem("zamanTitle", "Zaman Tariq"),
            subTitle: getLocalStorageItem("zamanSubTitle", "Java Software Engineer"),
            imageSrc: zaman,
            phone: getLocalStorageItem("zamanMobile", "+92 309 4499048"),
            email: getLocalStorageItem("zamanEmail", "zamantariq09900@gmail.com"),
            experience: "2 years",
            resumeLink: CV,
        },
        {
            id: 3,
            mainHeading: getLocalStorageItem("umairTitle", "Umair Sarwar"),
            subTitle: getLocalStorageItem("umairSubTitle", "Graphic Designer"),
            imageSrc: umair,
            phone: getLocalStorageItem("umairMobile", "+92 309 4499048"),
            email: getLocalStorageItem("umairEmail", "umairsarwar@gmail.com"),
            experience: "2 years",
            resumeLink: CV,
        },
    ];

    React.useEffect(() => {
        const checkScrollTop = () => {
            setShowScroll(window.scrollY > 200);
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Base>
            <Container className="resume-parent">
                <h1 className="resume-heading">
                    My <span style={{ color: "#ff6600" }}>Resume</span>
                </h1>
                <ResumeCard item={items[0]} reverse={false} />
                <ResumeCard item={items[1]} reverse={true} />
                <ResumeCard item={items[2]} reverse={false} />
            </Container>
            {showScroll && (
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
                        "&:hover": { backgroundColor: "#e65c00" },
                    }}
                >
                    <ArrowUpwardIcon sx={{ color: "white" }} />
                </Button>
            )}
        </Base>
    );
};