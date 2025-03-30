import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Testimonials.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Avatar, Box, Rating} from "@mui/material";
import {useState} from "react";
import {Card} from "reactstrap";
import doubleQuotationMark from "../assests/quote-right.png";
import zunair from "../assests/zuni.jpeg";


export const Testimonials = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 3
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };


    const items = [
        {
            id: 1,
            jobTitle: "Java Developer",
            name: "Naseer Iqbal",
            caption: "Passionate Java Developer with expertise in Spring Boot and microservices.",
            src: zunair,
            rating: 4
        },
        {
            id: 2,
            jobTitle: "Full-Stack Developer",
            name: "Hamza Ali",
            caption: "Full-stack developer skilled in React.js and Node.js, delivering high-quality solutions.",
            src: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 5
        },
        {
            id: 3,
            jobTitle: "Software Engineer",
            name: "Zaman Khan",
            caption: "Experienced software engineer with a strong background in cloud computing.",
            src: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 3
        },
        {
            id: 4,
            jobTitle: "UI/UX Designer",
            name: "Ayesha Noor",
            caption: "Creative UI/UX designer passionate about crafting intuitive user experiences.",
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 5
        },
        {
            id: 5,
            jobTitle: "Data Analyst",
            name: "Bilal Ahmed",
            caption: "Data analyst with a knack for turning raw data into meaningful insights.",
            src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 2
        },
        {
            id: 6,
            jobTitle: "Cybersecurity Expert",
            name: "Sara Malik",
            caption: "Cybersecurity expert with a keen eye for vulnerability assessment and risk mitigation.",
            src: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4
        },
        {
            id: 7,
            jobTitle: "Mobile App Developer",
            name: "Usman Raza",
            caption: "Mobile app developer specializing in Android and iOS applications.",
            src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 3
        },
        {
            id: 8,
            jobTitle: "Cloud Solutions Architect",
            name: "Fatima Tariq",
            caption: "Cloud solutions architect with deep expertise in AWS and Azure.",
            src: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 5
        }
    ];

    const [value, setValue] = useState(2);
    const slides = items.map((item) => {

        return (
            <Card className="testimonials-card">
                <div className="d-flex gap-2 head">
                    <Avatar sx={{width: 60, height: 60}} src={item.src}>H</Avatar>
                    <div>
                        <h3 className="testimonials-heading">{item.name}</h3>
                        <p className="testimonials-paragraph">{item.jobTitle}</p>
                    </div>

                    <div className="quote">
                        <img src={doubleQuotationMark} className="double-quotation-mark" alt="Imahe here"/>
                    </div>
                </div>

                <div>
                    <Box sx={{'& > legend': {mt: 2}}}>
                        <Rating
                            name="simple-controlled"
                            value={item.rating}
                            readOnly={true}
                        />

                        {/*<Rating*/}
                        {/*    name="simple-controlled"*/}
                        {/*    value={item.rating}*/}
                        {/*    onChange={(event, newValue) => {*/}
                        {/*        setValue(newValue);*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Box>
                </div>
                {/* Description */}
                <p className="testimonials-caption">{item.caption}</p>
            </Card>
        )
    });


    return (
        <Carousel
            // showDots={true}
            draggable={false}
            // // swipeable={false}
            // ssr={true}
            infinite={true}
            autoPlaySpeed={500}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            // customRightArrow={<CustomRightArrow/>}
            // customButtonGroup={<ButtonGroup/>}
            centerMode={false}
            focusOnSelect={true}
        >
            {slides}
        </Carousel>
    )
}