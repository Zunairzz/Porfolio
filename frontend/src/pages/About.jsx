import Base from "../component/Base";
import "../css/about.css";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import zaman from "../image/zaman_png.png";
import zunair from "../image/zuni_png.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Col, Container, Row} from "reactstrap";
import React from "react";

export function About() {

    const items = [
        {
            id: 1,
            name: "Zunair Sarwar",
            src: zunair,
            jobDescription: "Java Software Engineer",
            linkedIn: "https://www.linkedin.com/in/zunair-sarwar-401323221/",
            instagram: "https://www.instagram.com/zun_i333/"
        }, {
            id: 2,
            name: "Zaman Tariq",
            src: zaman,
            jobDescription: "Java Software Engineer",
            linkedIn: "https://www.linkedin.com/in/zaman-tariq-931738230/",
            instagram: "https://www.instagram.com/zamanjutt12/"
        }
    ];

    return (
        <Base>
            <Container className="parent text-center">
                <h1 className="team-heading">Meet our team</h1>
                <p>We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering
                    the best results for our clients.</p>
                <Row className="team-child d-flex justify-content-center align-content-center align-items-center">

                    {items.map(item => (
                        <Col xxl={3} xl={3} lg={4} md={6} className="mb-5">
                            <AboutUsCard index={item.id} image={item.src} name={item.name}
                                         jobDescription={item.jobDescription}
                                         linkedIn={item.linkedIn} instagram={item.instagram}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Base>
    )
}

const AboutUsCard = ({index, image, name, jobDescription, linkedIn, instagram}) => {
    return (
        <Card key={index} sx={{maxWidth: 345, boxShadow: 'none', textAlign: 'center', backgroundColor: '#f3f3f3'}}
              className="team-card justify-content-center align-content-center align-items-center">
            <CardMedia
                sx={{
                    height: 210,
                    width: 210, // Optional: set the width to match the height to make it a perfect circle
                    borderRadius: '50%', // This makes the image circular
                    margin: '0 auto',
                }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {jobDescription}
                </Typography>
            </CardContent>
            <CardActions className="d-flex justify-content-center align-content-center align-items-center">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{
                        color: 'gray',
                        transition: 'color 0.3s ease', // Smooth transition for color change
                        '&:hover': {
                            color: 'black', // Change color on hover
                            cursor: 'pointer',
                        },
                    }}/>
                </a>
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{
                        color: 'gray',
                        transition: 'color 0.3s ease', // Smooth transition for color change
                        '&:hover': {
                            color: 'black', // Change color on hover
                            cursor: 'pointer',
                        },
                    }}/>
                </a>
            </CardActions>
        </Card>
    )
}