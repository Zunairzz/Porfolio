import Base from "../component/Base";
import "../css/resume.css"
import {Col, Container, Row} from "reactstrap";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import zunair from "../image/ZunairResumeImage.jpg";
import zaman from "../image/ZamanResumeImage.jpg";
import React, {useState} from "react";
import CV from "../assests/documents/Zunair Sarwar Resume.pdf";

const ResumeCardOne = ({items}) => {
    return (
        <div className="p-0 m-0">
            <Row style={{height: '600px'}}>
                <Col
                    style={{backgroundColor: '#ffb680'}}
                    className="d-flex justify-content-center align-items-center"
                >
                    <div style={{textAlign: 'left'}}>
                        <p className="resume-title">{items[0].mainHeading}</p>
                        <p className="resume-sub-title">{items[0].subTitle}</p>

                        <div className="resume-details">
                            <p><b>Phone</b> {items[0].phone}</p>
                            <p><b>Email</b> {items[0].email}</p>
                            <p><b>Experience</b> {items[0].experience}</p>
                            <Button
                                variant="outlined"
                                endIcon={<FileDownloadIcon/>}
                                href={items[0].resumeLink}  // This will point to the resume URL
                                download           // This makes sure the file is downloaded
                                sx={{
                                    marginTop: '60px',
                                    border: "2px solid black",
                                    color: 'black',
                                    '&:hover': {
                                        border: '2px solid #AB4459',
                                        backgroundColor: '#AB4459',  // Change background to grey on hover
                                        color: 'white',           // Change text color to white on hover
                                    },
                                    borderColor: 'grey',        // Keep the border grey
                                }}
                            >
                                Download Resume
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col
                    style={{backgroundColor: "#f1f1f1"}}
                    className="imageCol"
                >
                    <div style={{
                        width: '240px',
                        height: '300px',
                        overflow: 'hidden',
                        backgroundColor: "#F8FAFC",
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                        borderRadius: '20px',
                        border: '5px solid white'
                    }}>
                        <img
                            src={zunair}
                            alt=""
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

const ResumeCardTwo = ({items}) => {
    return (
        <Row style={{height: '600px'}}>
            <Col
                style={{backgroundColor: '#f1f1f1'}}
                className="d-flex justify-content-center align-items-center"
            >
                <div style={{textAlign: 'left'}}>
                    <p className="resume-title">{items[1].mainHeading}</p>
                    <p className="resume-sub-title"> {items[1].subTitle}</p>

                    <div className="resume-details">
                        <p><b>Phone</b> {items[1].phone}</p>
                        <p><b>Email</b> {items[1].email}</p>
                        <p><b>Experience</b> {items[1].experience}</p>
                        <Button
                            variant="outlined"
                            endIcon={<FileDownloadIcon/>}
                            href={items[1].resumeLink}  // This will point to the resume URL
                            download           // This makes sure the file is downloaded
                            sx={{
                                marginTop: '60px',
                                border: "2px solid black",
                                color: 'black',
                                '&:hover': {
                                    border: '2px solid #AB4459',
                                    backgroundColor: '#AB4459',  // Change background to grey on hover
                                    color: 'white',           // Change text color to white on hover
                                },
                                borderColor: 'grey',        // Keep the border grey
                            }}
                        >
                            Download Resume
                        </Button>
                    </div>
                </div>
            </Col>
            <Col
                style={{backgroundColor: '#ffb680'}}
                className="imageCol"
            >
                <div style={{
                    width: '240px', height: '300px', overflow: 'hidden', backgroundColor: "#F8FAFC",
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                    borderRadius: '20px',
                    border: '5px solid white'
                }}>
                    <img
                        src={zaman}
                        alt=""
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </div>

            </Col>
        </Row>
    )
}

export const Resume = () => {

    // Initialize state for subtitles with values from localStorage, or default to initial values
    const [zunairSubTitle] = useState(localStorage.getItem("zunairSubTitle"));
    const [zamanSubTitle] = useState(localStorage.getItem("zamanSubTitle"));

    const items = [
        {
            id: 1,
            mainHeading: localStorage.getItem("zunairTitle"),
            subTitle: localStorage.getItem("zunairSubTitle"),
            imageSrc: zunair,
            phone: localStorage.getItem("zunairMobile"),
            email: localStorage.getItem("zunairEmail"),
            experience: "3 years",
            resumeLink: CV,
            coloOneBackgroundColor: "#ffb680",
            colTwoBackgroundColor: "#f1f1f1"
        },
        {
            id: 2,
            mainHeading: localStorage.getItem("zamanTitle"),
            subTitle: localStorage.getItem("zamanSubTitle"),
            imageSrc: zaman,
            phone: localStorage.getItem("zamanMobile"),
            email: localStorage.getItem("zamanEmail"),
            experience: "2 years",
            resumeLink: CV,
            coloOneBackgroundColor: "#f1f1f1",
            colTwoBackgroundColor: "#ffb680"
        }
    ];

    return (
        <Base>
            <Container className="resume-parent">
                <h1 className="resume-title">Resume</h1>
                <ResumeCardOne items={items}/>
                <ResumeCardTwo items={items}/>
            </Container>
        </Base>
    )
}