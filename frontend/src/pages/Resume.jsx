import Base from "../component/Base";
import "../css/resume.css";
import Button from '@mui/material/Button';
import zunair from "../image/zuni_png.png";
import zaman from "../image/zaman_png.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Col, Row} from "reactstrap";
import {useState} from "react";


export function Resume() {

    // Initialize state for subtitles with values from localStorage, or default to initial values
    const [zunairSubTitle, setZunairSubTitle] = useState(() => {
        const saved = localStorage.getItem('zunairSubTitle');
        return saved ? saved : "Java Software Engineer";
    });

    const [zamanSubTitle, setZamanSubTitle] = useState(() => {
        const saved = localStorage.getItem('zamanSubTitle');
        return saved ? saved : "Java Software Engineer";
    });

    const items = [
        {
            id: 1,
            title: "Zunair Sarwar",
            subTitle: zunairSubTitle,
            src: zunair,
            phone: "0324 4165642",
            email: "zunairsarwar1@gmail.com",
            experience: "3 years",
            resumeLink: "",
        }, {
            id: 2,
            title: "Zaman Tariq",
            subTitle: "Java Software Engineer",
            src: zaman,
            phone: "0324 4165642",
            email: "zmantariq1@gmail.com",
            experience: "2 years",
            resumeLink: "",
        }
    ]

    return (
        <Base>
            <div className="resume-parent">
                <h1 className="text-center">Hello!</h1>
                <Row style={{height: '600px', marginTop: '50px'}}>
                    <Col
                        style={{backgroundColor: '#b1b6a9'}}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div style={{textAlign: 'left'}}>
                            <p className="resume-title">{items[0].title}</p>
                            <p className="resume-sub-title">{zunairSubTitle}</p>

                            <div className="resume-details">
                                <p>Phone: {items[0].phone}</p>
                                <p>Email: {items[0].email}</p>
                                <p>Experience: {items[0].experience}</p>
                                <Button
                                    variant="outlined"
                                    endIcon={<FileDownloadIcon/>}
                                    href={items[0].resumeLink}  // This will point to the resume URL
                                    download           // This makes sure the file is downloaded
                                    sx={{
                                        border: "2px solid black",
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: 'grey',  // Change background to grey on hover
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
                        style={{backgroundColor: "#EFF3EA"}}
                        className="imageCol"
                    >
                        <div style={{width: '240px', height: '300px', overflow: 'hidden', backgroundColor: "#F8FAFC"}}>
                            <img
                                src={zunair}
                                alt=""
                                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                            />
                        </div>
                    </Col>

                </Row>
                <Row style={{height: '600px'}}>
                    <Col
                        style={{backgroundColor: "#EFF3EA"}}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div style={{textAlign: 'left'}}>
                            <p className="resume-title">{items[1].title}</p>
                            <p className="resume-sub-title"> {zamanSubTitle}</p>

                            <div className="resume-details">
                                <p>Phone: {items[1].phone}</p>
                                <p>Email: {items[1].email}</p>
                                <p>Experience: {items[1].experience}</p>
                                <Button
                                    variant="outlined"
                                    endIcon={<FileDownloadIcon/>}
                                    href={items[1].resumeLink}  // This will point to the resume URL
                                    download           // This makes sure the file is downloaded
                                    sx={{
                                        border: "2px solid black",
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: 'grey',  // Change background to grey on hover
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
                        style={{backgroundColor: '#b1b6a9'}}
                        className="imageCol"
                    >
                        <div style={{width: '240px', height: '300px', overflow: 'hidden', backgroundColor: "#F8FAFC"}}>
                            <img
                                src={zaman}
                                alt=""
                                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                            />
                        </div>

                    </Col>
                </Row>

            </div>
        </Base>
    )
}