import Base from "../component/Base";
import "../css/resume.css";
import Button from '@mui/material/Button';
import zunair from "../image/zuni_png.png";
import zaman from "../image/zaman_png.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Col, Row} from "reactstrap";


export function Resume() {
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
                            <p className="resume-title">Zunair Sarwar</p>
                            <p className="resume-sub-title">Java Software Engineer</p>
                            <div className="resume-details">
                                <p>Phone: 0324 4165642</p>
                                <p>Email: zunairsarwar1@gmail.com</p>
                                <p>Experience: 3 years</p>
                                <Button
                                    variant="outlined"
                                    endIcon={<FileDownloadIcon/>}
                                    href="www.google.com"  // This will point to the resume URL
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
                            <p className="resume-title">Zaman Tariq</p>
                            <p className="resume-sub-title">Java Software Engineer</p>
                            <div className="resume-details">
                                <p>Phone: 0324 4165642</p>
                                <p>Email: zamantariq277@gmail.com</p>
                                <p>Experience: 3 years</p>
                                <Button
                                    variant="outlined"
                                    endIcon={<FileDownloadIcon/>}
                                    href="www.google.com"  // This will point to the resume URL
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